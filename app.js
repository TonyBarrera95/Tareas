require('colors')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        inquirerPausa,
        inputInquirer

} = require('./helpers/inquirer');
const Tareas = require('./models/tareas')

// console.clear();

const main = async () => {
let opt = ''
const tareas = new Tareas();
const tareasDB = leerDB();
if(tareasDB){
    // ""
}

await inquirerPausa()

do {
    opt = await inquirerMenu();


    switch(opt){
        case '1' : 

            const desc = await inputInquirer('Descripción: ')
            tareas.crearTareas(desc)

        break;

        case '2' :
            console.log(tareas._listado)

        break;

    }


    // guardarDB( tareas.listadoArr)

    if (opt !== '0' ) await inquirerPausa()

} while( opt !== '0');


}

main();