'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Agenda extends Model {
    tarefas(){
        return this.hasMany("App/Models/Tarefa");
    }

    user(){
        return this.belongsTo("App/Models/User")
    }
}

module.exports = Agenda
