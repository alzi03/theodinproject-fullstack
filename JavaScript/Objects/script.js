function Player(name, number){
  this.name = name
  this.number = number
  // this.sayName = function() {console.log(name)}
}

const Lebron = new Player('Lebron', 6)

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = 
    `${title} by ${author}, ${pages} pages, ${read}`
}

Book.prototype.print = function(){
  // console.log(this.info)
}

const nameOfTheWind = new Book('Name of the Wind', 'Patrick Rothfuss', 662, 'read')

nameOfTheWind.print()


let userAccount = new Object()

userAccount.push = 'ok'
// console.log(userAccount.push)



function Fruit(){
  this.country = 'USA'
  this.sold = 'many'
}

Fruit.prototype.saleName = function(){
  // console.log(this.name)
}

function Banana (name) { 
  this.name = name
}

Banana.prototype = new Fruit()

const Green = new Banana('green')
Green.saleName()


// this

const Item = {
  id: 'item',
  nameChange(name) {
    this.id = name
  }
}

// console.log(Item.id)
Item.nameChange('')

const numbers = {
  number1: 5,
  number2: 10,
  sum:function() {
    const calculate = () => {
      return this.number1 + this.number2
    }

    return calculate()
  }
}

class Planet {
  constructor(name){
    this.name = name
  }

  getName() { 
    return this.name
  }
}

function Pet(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(`The ${this.type} has ${this.legs} legs`);
  }
}

myCat = new Pet('cat',4)

// Bind lets you reassign the value of 'this' manually
const boundLogInfo = myCat.logInfo.bind(myCat)
// boundLogInfo()

// .call and .apply

const rabbit = { name: 'Rabbit'}

function concatString(string) {
  return string + this.name
}

// console.log(concatString.call(rabbit, 'Hello '))

// call utilizes the left variable as "this" and applies the variable on the right to whatever is being done





