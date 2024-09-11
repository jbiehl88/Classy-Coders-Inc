const { Employees } = require("./Employees")

class Manager extends Employees {
	#employeesManaged
	constructor(name, title, salary, department) {
		super(name, title, salary)
		this.department = department
		this.#employeesManaged = []
	}

	getEmployeesManaged() {
		return this.#employeesManaged
	}

	setEmployeesManaged(employee) {
		this.#employeesManaged.push(employee)
	}
}

module.exports = {
	Manager,
}
