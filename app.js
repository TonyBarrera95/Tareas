require('colors')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
    inquirerPausa,
    inputInquirer,
    listadoTareasBorrar,
    confirmar

} = require('./helpers/inquirer');
const Tareas = require('./models/tareas')

// console.clear();

const main = async () => {
    let opt = ''
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB)
    }


    do {
        opt = await inquirerMenu();


        switch (opt) {
            case '1':

                const desc = await inputInquirer('Descripción: ')
                tareas.crearTareas(desc)

                break;

            case '2':
                tareas.listadoCompleto()

                break;

            case '3':
                tareas.tareasPendientesCompletadas(true)

                break;

            case '4':
                tareas.tareasPendientesCompletadas(false)

                break;

            case '5':
                console.log('Fuera de servicio'.red)

                break;

            case '6':

                const id = await listadoTareasBorrar(tareas.listadoArr)
                if (id !== '0') {
                    const ok = await confirmar('¿Seguro desea borrar la tarea?')
                    if (ok) {
                        tareas.borrarTareas(id)
                        console.log('Su tarea se ha eliminado exitosamente')
                    }
                }

                break;
        }

        guardarDB(tareas.listadoArr)

        if (opt !== '0') await inquirerPausa()

    } while (opt !== '0');


}

main();