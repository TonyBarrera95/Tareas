const Tarea = require('./tarea')
require('colors')

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

    borrarTareas(id = ''){
        if(this._listado[id]){
            delete(this._listado[id])
        }
    }

    cargarTareasFromArray( tareasDB = []){

        tareasDB.forEach( tarea => {
           this._listado[tarea.id] = tarea;
        })
        
    }

    crearTareas(desc = '') {
        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log()
        this.listadoArr.forEach( (llave, i) => {
            // el segundo parametro de el forEach corresponde al indice- 
            let impre = "Pendiente".red
            if (llave.completadoEn){
                impre = "Completado".green
            } 
            console.log(`${(i+1).toString().green}${'.'.green} ${llave.desc}  ${'::'.cyan}  ${impre}`)
        })
    }

    tareasPendientesCompletadas(completadas){
        console.log()
        let i = 1
        this.listadoArr.forEach( llave => {

            if (llave.completadoEn && completadas){
                console.log(`${(i + '.').green} ${llave.desc} :: ${llave.completadoEn.toString().green}`)
                i++
            } else if (llave.completadoEn == null && completadas == false){
            console.log(`${(i + '.').green} ${llave.desc} :: ${'Pendientes'.red} `)
            i++ 
        }
        })  
    }

    toggleCompletadas( ids = []) {
        
        ids.forEach( id => {
            const tarea = this._listado[id]
            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( tarea => {
            if (!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
            }
        })
    }

}




module.exports = Tareas;
