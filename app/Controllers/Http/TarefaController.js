'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tarefa = use("App/Models/Tarefa")

/**
 * Resourceful controller for interacting with tarefas
 */
class TarefaController {
  /**
   * Show a list of all tarefas.
   * GET tarefas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const tarefas = await Tarefa.all();
    return tarefas;
  }

  /**
   * Create/save a new tarefa.
   * POST tarefas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({request}) {
    const data = request.only(["enunciado", "tarefa"]);
    const tarefa = await Tarefa.create(data);
    return tarefa;
  }

  /**
   * Display a single tarefa.
   * GET tarefas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({params}) {
    const tarefa = await Tarefa.findOrFail(params.id)
    return tarefa;
  }

  /**
   * Update tarefa details.
   * PUT or PATCH tarefas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({params, request}) {
    const Xtarefa = await Tarefa.findOrFail(params.id) //Coloquei Xtarefa para não dar conflito entre ele e tarefa ali embaixo
    const {enunciado, tarefa} = request.only(["enunciado", "tarefa"])
    Xtarefa.enunciado = enunciado;
    Xtarefa.tarefa = tarefa;
    await Xtarefa.save()
    return Xtarefa;
  }

  /**
   * Delete a tarefa with id.
   * DELETE tarefas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({params}) {
    const tarefa = await Tarefa.findOrFail(params.id)
    await tarefa.delete();
    return tarefa;
  }
}

module.exports = TarefaController
