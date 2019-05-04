'use strict'

class RegistroController {
    async signuppage({ view }) {
        return view.render('registro_usuario')
    }

    async deletepage({ view }) {
        return view.render('eliminar_usuario')
    }
}

module.exports = RegistroController
