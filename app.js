require('colors')
const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        inquirerPausa,
        inputInquirer

} = require('./helpers/inquirer');
const Tareas = require('./models/tareas')

// console.clear();

const main = async () => {
let opt = ''
const tareas = new Tareas()

do {
    opt = await inquirerMenu();


    switch(opt){
        case '1' : 

            const desc = await inputInquirer('Descripción: ')
            tareas.crearTareas(desc)

        break;

        case '2' :
            console.log(tareas.listadoArr)

        break;

    }


    guardarDB( tareas.listadoArr)

    if (opt !== '0' ) await inquirerPausa()

} while( opt !== '0');


}

main();