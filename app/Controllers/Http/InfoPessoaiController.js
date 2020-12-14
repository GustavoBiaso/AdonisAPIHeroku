'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const InfoPessoai = use("App/Models/InfoPessoai")

/**
 * Resourceful controller for interacting with infopessoais
 */
class InfoPessoaiController {
  /**
   * Show a list of all infopessoais.
   * GET infopessoais
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const infopessoais = await InfoPessoai.all();
    return infopessoais;
  }

  /**
   * Create/save a new infopessoai.
   * POST infopessoais
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({request}) {
    const data = request.only(["pais", "escola", "genero", "cpf"]);
    const infopessoais = await InfoPessoai.create(data);
    return infopessoais;
  }

  /**
   * Display a single infopessoai.
   * GET infopessoais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({params}) {
    const infopessoais = await InfoPessoai.findOrFail(params.id)
    return infopessoais;
  }

  /**
   * Update infopessoai details.
   * PUT or PATCH infopessoais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({params, request}) {
    const infopessoais = await InfoPessoai.findOrFail(params.id)
    const {pais, escola, genero, cpf} = request.only(["pais", "escola", "genero", "cpf"])
    infopessoais.pais = pais;
    infopessoais.escola = escola;
    infopessoais.genero = genero;
    infopessoais.cpf = cpf;
    await infopessoais.save()
    return infopessoais;
  }

  /**
   * Delete a infopessoai with id.
   * DELETE infopessoais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({params}) {
    const infopessoais = await InfoPessoai.findOrFail(params.id)
    await infopessoais.delete();
    return infopessoais;
  }
}

module.exports = InfoPessoaiController
