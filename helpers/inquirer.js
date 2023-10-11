const inquirer = require('inquirer');
require('colors')

const questions = [
    {
        type : 'list',
        name : 'option',
        message : 'Seleecione una opción',
        choices : [
            {
                value : '1',
                name : '1.'.green + ' Crear tarea'
            },
            {
                value : '2',
                name : '2.'.green + ' Listar Tareas'
            },
            {
                value : '3',
                name : '3.'.green + ' Listar tareas completadas'
            },
            {
                value : '4',
                name : '4.'.green + ' Listar tareas pendientes'
            },
            {
                value : '5',
                name : '5.'.green + ' Completar tarea(s)'
            },
            {
                value : '6',
                name : '6.'.green + ' Borrar tarea'
            },
            {
                value : '0',
                name : '0.'.green + ' Salir'
            },
        ]

    }
]

const opcion = [
    {
        type : 'input',
        name : 'enter',
        message : `Presione ${'ENTER'.green} para continuar`
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('=========================='.green)
    console.log('  Seleccione una opción'.white)
    console.log('==========================\n'.green)

    const {option} = await inquirer.prompt(questions)
    return option
}

const inquirerPausa = async () => {
    console.log('\n')
    const enter = await inquirer.prompt(opcion)
    return enter
}

const inputInquirer = async (message) => {

    const question = [        
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0){
                    return 'Por favor ingrese un valor'.red
                }
                return true
            }
        }
    ]

    const{desc} = await inquirer.prompt(question)
    return desc
}

module.exports = {
    inquirerMenu,
    inquirerPausa,
    inputInquirer
}
