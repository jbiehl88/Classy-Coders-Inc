const { Employees } = require("./Employees")

class SalesPerson extends Employees {
	#totalSales
	constructor(name, title, salary, clients) {
		super(name, title, salary)
		this.#totalSales = 0
		this.clients = clients
	}

	getSalesNumbers() {
		return this.#totalSales
	}

	makeSale(amount) {
		this.#totalSales += amount
	}
}

module.exports = {
	SalesPerson,
}
