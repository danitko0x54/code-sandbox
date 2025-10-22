// 1. Crea una clase que reciba dos propiedades.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // 2. Añade un método a la clase que utilice las propiedades.

    greet() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`)
    }

    // 4. Añade un método estático a la primera clase.

    static welcome() {
        console.log("Hola, soy un método estático de esta clase")
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función.

let person = new Person("Brais", 37)
console.log(person.name)
console.log(person.age)
person.greet()

// 5. Haz uso del método estático.

Person.welcome()

// 6. Crea una clase que haga uso de herencia.

class Employee extends Person {
    constructor(name, age, job) {
        super(name, age)
        this.job = job
    }

    work() {
        console.log(`${this.name} trabaja como ${this.job}`)
    }
}

let employee = new Employee("Brais", 37, "Programador")
employee.greet()
employee.work()

// 7. Crea una clase que haga uso de getters y setters.

class Car {
    constructor(brand, model) {
        this._brand = brand
        this._model = model
    }

    get brand() {
        return this._brand
    }

    set brand(newBrand) {
        this._brand = newBrand
    }

    get model() {
        return this._model
    }

    set model(newModel) {
        this._model = newModel
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas.

class PrivateCar {
    #brand
    #model

    constructor(brand, model) {
        this.#brand = brand
        this.#model = model
    }

    get brand() {
        return this.#brand
    }

    set brand(newBrand) {
        this.#brand = newBrand
    }

    get model() {
        return this.#model
    }

    set model(newModel) {
        this.#model = newModel
    }
}

// 9. Utiliza los get y set y muestra sus valores.

let car = new PrivateCar("Tesla", "Model S")
console.log(car.brand)
console.log(car.model)
car.brand = "BMW"
car.model = "M5"
console.log(car.brand)
console.log(car.model)

// 10. Sobrescribe un método de una clase que utilice herencia.

class Manager extends Employee {
    constructor(name, age, job, teamSize) {
        super(name, age, job)
        this.teamSize = teamSize
    }

    work() {
        console.log(`${this.name} gestiona un equipo de ${this.teamSize} personas como ${this.job}`)
    }
}

let manager1 = new Manager("Brais", 37, "Programador", 10)
manager1.work()