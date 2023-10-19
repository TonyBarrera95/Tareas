const inquirer = require('inquirer');
require('colors')

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Seleecione una opción',
        choices: [
            {
                value: '1',
                name: '1.'.green + ' Crear tarea'
            },
            {
                value: '2',
                name: '2.'.green + ' Listar Tareas'
            },
            {
                value: '3',
                name: '3.'.green + ' Listar tareas completadas'
            },
            {
                value: '4',
                name: '4.'.green + ' Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5.'.green + ' Completar tarea(s)'
            },
            {
                value: '6',
                name: '6.'.green + ' Borrar tarea'
            },
            {
                value: '0',
                name: '0.'.green + ' Salir'
            },
        ]

    }
]

const opcion = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar`
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('=========================='.green)
    console.log('  Seleccione una opción'.white)
    console.log('==========================\n'.green)

    const { option } = await inquirer.prompt(questions)
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
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'.red
                }
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc
}

const listadoTareasBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc} `
        }

    })

    choices.unshift({
        value: '0',
        name: `${'0.'.green} Salir`
    })

    const lista = [
        {
            type: 'list',
            name: 'id',
            message: `Seleccione la tarea a ${'ELIMINAR'.red}`,
            choices
        }
    ]

    const { id } = await inquirer.prompt(lista)
    return id

}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(question)
    return ok

}

const mostrarListadoCheckList = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc} `,
            checked: (tarea.completadoEn) ? true : false
        }

    })

    const lista = [
        {
            type: 'checkbox',
            name: 'ids',
            message: `Seleccione la tarea ${'COMPLETADA'.green}`,
            choices
        }
    ]

    const { ids } = await inquirer.prompt(lista)
    return ids

}

module.exports = {
    inquirerMenu,
    inquirerPausa,
    inputInquirer,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
}
