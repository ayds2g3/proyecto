'use strict'

class SaldoController {
    async balancepage({ view }) {
        return view.render('saldo_usuario')
    }
}

module.exports = SaldoController
