// 1. Agregega una función al prototipo de un objeto

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    console.log(`Hola, mi nombre es ${this.name}`)
}

Person.prototype.getAge = function() {
    console.log(`Tengo ${this.age} años`)
}

const person1 = new Person("Brais", 38)
person1.greet()
person1.getAge()

// 2. Crea un objeto que herede de otro

const developer = {
    name: "Brais",
    job: "Desarrollador",
    showInfo() {
        console.log(`${this.name} trabaja como ${this.job}`)
    }
}

const mobileDeveloper = Object.create(developer)
mobileDeveloper.specialization = "Mobile"
mobileDeveloper.showSpecialization = function() {
    console.log(`Especializado en: ${this.specialization}`)
}

console.log("Propiedades del objeto hijo:")
console.log(mobileDeveloper.name)
console.log(mobileDeveloper.job)
console.log(mobileDeveloper.specialization)

mobileDeveloper.showInfo()
mobileDeveloper.showSpecialization()

// 3. Define un método de instancia en un objeto

function Vehicle(brand, model) {
    this.brand = brand
    this.model = model
    
    this.getFullName = function() {
        return `${this.brand} ${this.model}`
    }
}

const car = new Vehicle("Volkswagen", "Jetta")
console.log(car.getFullName())

const motorcycle = new Vehicle("Honda", "CBR")
console.log(motorcycle.getFullName())

// 4. Haz uso de get y set en un objeto

const temperatureTracker = {
    _celsius: 0,
    
    get celsius() {
        return this._celsius
    },
    
    set celsius(value) {
        if (value < -273.15) {
            console.log("Error: La temperatura no puede ser menor que el cero absoluto")
            return
        }
        this._celsius = value
    },
    
    get fahrenheit() {
        return (this._celsius * 9/5) + 32
    },
    
    set fahrenheit(value) {
        this.celsius = (value - 32) * 5/9
    }
}

temperatureTracker.celsius = 25
console.log(`Temperatura en Celsius: ${temperatureTracker.celsius}°C`)
console.log(`Temperatura en Fahrenheit: ${temperatureTracker.fahrenheit}°F`)

temperatureTracker.fahrenheit = 68
console.log(`Temperatura en Celsius: ${temperatureTracker.celsius}°C`)
console.log(`Temperatura en Fahrenheit: ${temperatureTracker.fahrenheit}°F`)

temperatureTracker.celsius = -300

// 5. Utiliza la operación assign en un objeto

const personalInfo = {
    name: "Brais",
    age: 38
}

const professionalInfo = {
    job: "Desarrollador",
    experience: 15
}

const contactInfo = {
    email: "brais@gmail.com",
    phone: "123-456-789"
}

const profile = Object.assign({}, personalInfo, professionalInfo, contactInfo)
console.log("Perfil completo:", profile)

// 6. Crea una clase abstracta

class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
    }
    
    calculateArea() {
        throw new Error("Este método debe ser implementado por las subclases")
    }
    
    getDescription() {
        return "Soy una figura geométrica"
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }
    
    calculateArea() {
        return Math.PI * this.radius * this.radius
    }
    
    getDescription() {
        return `${super.getDescription()} circular con radio ${this.radius}`
    }
}

// const shape = new Shape() Error

const circle = new Circle(5)
console.log(circle.getDescription())
console.log(`Área del círculo: ${circle.calculateArea().toFixed(2)}`)

// 7. Utiliza polimorfismo en dos clases diferentes

class Animal {
    constructor(name) {
        this.name = name
    }
    
    speak() {
        console.log(`${this.name} hace un sonido`)
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} dice: ¡Guau, guau!`)
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} dice: ¡Miau!`)
    }
}

const animals = [
    new Animal("Animal desconocido"),
    new Dog("Milú"),
    new Cat("Félix")
]

animalSounds(animals)

function animalSounds(animals) {
    console.log("\nSonidos de animales:")
    animals.forEach(animal => animal.speak())
}

// 8. Implementa un Mixin

const swimmableMixin = {
    swim() {
        console.log(`${this.name} está nadando`)
    },
    
    canSwim: true
}

const flyableMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    },
    
    canFly: true
}

class Duck extends Animal {
    constructor(name) {
        super(name)
    }
    
    speak() {
        console.log(`${this.name} dice: ¡Cuac!`)
    }
}

class Eagle extends Animal {
    constructor(name) {
        super(name)
    }
    
    speak() {
        console.log(`${this.name} dice: ¡Screech!`)
    }
}

Object.assign(Duck.prototype, swimmableMixin, flyableMixin)
Object.assign(Eagle.prototype, flyableMixin)

const duck = new Duck("Donald")
duck.speak()
duck.swim()
duck.fly()
console.log(`¿Puede nadar? ${duck.canSwim}`)
console.log(`¿Puede volar? ${duck.canFly}`)

const eagle = new Eagle("Águila Real")
eagle.speak()
eagle.fly() 
console.log(`¿Puede volar? ${eagle.canFly}`)
// eagle.swim() Error

// 9. Crea un Singleton

class Database {
    constructor(host, username) {
        if (Database.instance) {
            return Database.instance
        }
        
        this.host = host
        this.username = username
        this.connected = false
        
        Database.instance = this
    }
    
    connect() {
        if (this.connected) {
            console.log("Ya estás conectado a la base de datos")
            return
        }
        
        this.connected = true
        console.log(`Conectado a ${this.host} como ${this.username}`)
    }
    
    disconnect() {
        if (!this.connected) {
            console.log("No estás conectado a ninguna base de datos")
            return
        }
        
        this.connected = false
        console.log("Desconectado de la base de datos")
    }
}

console.log("\nDemostrando Singleton:")
const db1 = new Database("localhost:3306", "admin")
db1.connect()

const db2 = new Database("otro-servidor", "otro-usuario")
console.log(`¿Son la misma instancia? ${db1 === db2}`)
console.log(`Host de db2: ${db2.host}`)

db2.disconnect()
db1.connect()

// 10. Desarrolla un Proxy

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }
    
    deposit(amount) {
        this.balance += amount
        return this.balance
    }
    
    withdraw(amount) {
        this.balance -= amount
        return this.balance
    }
}

const accountValidator = {
    get(target, property) {
        console.log(`Accediendo a la propiedad: ${property}`)
        return target[property]
    },
    
    set(target, property, value) {
        if (property === "balance") {
            if (value < 0) {
                console.log("Error: El saldo no puede ser negativo")
                return false
            }
        }
        
        target[property] = value
        return true
    },
    
    apply(target, thisArg, args) {
        if (target.name === "withdraw") {
            const [amount] = args
            if (amount > thisArg.balance) {
                console.log("Error: No puedes retirar más dinero del que tienes en la cuenta")
                return thisArg.balance
            }
        }
        
        return target.apply(thisArg, args)
    }
}

const account = new BankAccount("Brais", 1000)
const safeAccount = new Proxy(account, accountValidator)

console.log("\nDemostrando Proxy:")
console.log(`Saldo inicial: ${safeAccount.balance}`)

console.log(`Después de depositar: ${safeAccount.deposit(500)}`)

safeAccount.balance = -200
console.log(`Saldo actual: ${safeAccount.balance}`)

safeAccount.withdraw(300)
console.log(`Saldo después de retirar: ${safeAccount.balance}`)