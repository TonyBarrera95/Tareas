const Tarea = require('./tarea')

class Tareas {

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( llave => {
            listado.push(this._listado[llave])
        })

        return listado;
    }

    constructor(){
        this._listado = {}
    }

    cargarTareasFromArray( tareasDB = []){

        tareasDB.forEach(tarea => {
           this._listado[tarea.id] = tarea;
        })
        
    }

    crearTareas(desc = '') {
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;
