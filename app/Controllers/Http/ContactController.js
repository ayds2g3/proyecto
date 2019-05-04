'use strict'

const Contact = use('App/Models/Contact');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */ 
/** @typedef {import('@adonisjs/framework/src/Response')} Response */ 
/** @typedef {import('@adonisjs/framework/src/View')} View */ 
/** * Resourceful controller for interacting with contacts */ 
class ContactController { 

/** * Show a list of all contacts. 
* GET contacts 
* 
* @param {object} ctx 
* @param {Request} ctx.request 
* @param {Response} ctx.response 
* @param {View} ctx.view 
*/ 
async index ({ request, response, view }) { 
  return view.render('registro_usuario')
  const Contact = await contact.all();
  contact:contact.toJson()
}

/** 
* Render a form to be used for creating a new contact. 
* GET contacts/create 
* 
* @param {object} ctx 
* @param {Request} ctx.request 
* @param {Response} ctx.response 
* @param {View} ctx.view 
*/ 

async create ({ request, response, view }) {
} 
/** 
* Create/save a new contact. 
* POST contacts 
* 
* @param {object} ctx 
* @param {Request} ctx.request 
* @param {Response} ctx.response 
*/ 


async store ({ request, response }) { 
 
  const contact = new Contact() ;
  contact.name = request.input('name') 
  contact.email =  request.input('email')  
  contact.title = request.input('title')  
  contact.tel = request.input('tel')  
  contact.cuenta = request.input('cuenta')
  contact.dinero = request.input('dinero')

  await 
      contact.save() 
      
  return response.redirect('/api/contacts')
} 
/** 
* Display a single contact. 
* GET contacts/:id 
* 
* @param {object} ctx 
* @param {Request} ctx.request 
* @param {Response} ctx.response 
* @param {View} ctx.view 
*/ 
async show ({ params, request, response, view }) { 
} 
/** 
* Render a form to update an existing contact. 
* GET contacts/:id/edit * * @param {object} ctx 
* @param {Request} ctx.request 
* @param {Response} ctx.response 
* @param {View} ctx.view */ 

async edit ({ params, request, response, view }) {
}
/** 
* Update contact details. 
* PUT or PATCH contacts/:id 
* 
* @param {object} ctx 
* @param {Request} ctx.request 
* @param {Response} ctx.response 
*/
async update ({ params, request, response }) { 
  const name = request.input('name') 
  const email = request.input('email') 
  const title = request.input('title') 
  const tel = request.input('tel') 
  const cuenta = resquest.input('cuenta')
  const dinero = request.input('dinero')
  let contact = await Contact.find(params.id) 
  contact.name = name 
  contact.email = email 
  contact.title = title 
  contact.tel = tel 
  contact.cuenta = cuenta
  contact.dinero = dinero
  await 
  contact.save() 
  return response.redirect('/api/contacts')

} 
/** 
* Delete a contact with id. 
* DELETE contacts/:id 
* 
* @param {object} ctx 
* @param {Request} ctx.request 
* @param {Response} ctx.response 
*/ 

async destroy ({ params, request, response }) { 
  await 
  Contact.find(params.id).delete() 
  return response.json({message: 'Contact deleted!'}) 
} 
} 

module.exports = ContactController 