'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post("/register","AuthController.register")
Route.post("/authenticate","AuthController.authenticate")

Route.group(()=>{
Route.resource("tarefas", "TarefaController").apiOnly();
Route.resource("agendas", "AgendaController").apiOnly();
Route.resource("infopessoais", "InfoPessoaiController").apiOnly();
}).middleware(["auth"]);