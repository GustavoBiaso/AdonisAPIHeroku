'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InfoPessoaiSchema extends Schema {
  up () {
    this.create('info_pessoais', (table) => {
      table.increments()
      table.string('pais').notNullable()
      table.string('escola').notNullable()
      table.string('genero').notNullable()
      table.string('cpf').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('info_pessoais')
  }
}

module.exports = InfoPessoaiSchema
