class Employees {
	#salary
	#isHired
	static #allEmployees = []
	constructor(name, title, salary) {
		this.name = name
		this.title = title
		this.#salary = salary
		this.#isHired = true

		Employees.#allEmployees.push(this)
	}

	getSalary() {
		return this.#salary
	}

	setSalary(amount) {
		this.#salary = amount
	}

	getStatus() {
		return this.#isHired
	}

	setStatus(command) {
		if (command == "hire") {
			this.#isHired = true
		} else if (command == "fire") {
			this.#isHired = false
		} else {
			throw new Error("Command needs to be either fire or hire")
		}
	}

	static getEmployees() {
		return Employees.#allEmployees
	}

	static getTotalPayroll() {
		let sum = 0
		let arr = Employees.#allEmployees
		for (let i = 0; i < arr.length; i++) {
			let indiv = arr[i].getSalary()
			sum += indiv
		}
		return sum
	}
}

module.exports = {
	Employees,
}
