'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Agenda = use("App/Models/Agenda")

/**
 * Resourceful controller for interacting with agenda
 */
class AgendaController {
  /**
   * Show a list of all agenda.
   * GET agenda
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const agendas = await Agenda.all();
    return agendas;
  }

  /**
   * Create/save a new agenda.
   * POST agenda
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({request}) {
    const data = request.only(["anotacoes"]);
    const agenda = await Agenda.create(data);
    return agenda;
  }

  /**
   * Display a single agenda.
   * GET agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({params}) {
    const agenda = await Agenda.findOrFail(params.id)
    return agenda;
  }

  /**
   * Update agenda details.
   * PUT or PATCH agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({params, request}) {
    const agenda = await Agenda.findOrFail(params.id)
    const {anotacoes} = request.only(["anotacoes"]);
    agenda.anotacoes = anotacoes;
    await agenda.save()
    return agenda;
  }

  /**
   * Delete a agenda with id.
   * DELETE agenda/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({params}) {
    const agenda = await Agenda.findOrFail(params.id)
    await agenda.delete();
    return agenda;
  }
}

module.exports = AgendaController
