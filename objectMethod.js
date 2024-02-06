const person = {
    name:'Abdur Rhaman Babu',
    age:20,
    city:'Khulna'
}

const person2 = person;
person.name = 'Hero Alom'
// console.log(person2)

const arrayOfObjects = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 22 },
    { id: 4, name: 'Eve', age: 28 }
  ];

//   console.log(arrayOfObjects[0].age=35)
//   console.log(arrayOfObjects)

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  // for(let c in myObj.cars){
  //   const obj = myObj.cars[c];
  //   console.log(`Company Name ${obj.name}`) 
  //   for(let o in obj.models){
  //       console.log(obj.models[o])
  //   }
  // }

  // getter and setter --------------------------->>>>
  
  // const person1 = {
  //   fname:'Abdullah',
  //   lname:'Mibin',
  //   age:16,
  //   language:'English',
  //   get lang(){
  //     return this.language
  //   },
  //   set city(city){
  //     this.homeTown = city
  //   }
  // }
  // person1.city = 'Khulna'
  // console.log(person1.lang)
  // console.log(person1)

  function Persons (name,age,city){
    this.name = name,
    this.age = age,
    this.city = city,
    this.identity = function (){
      return this.name + ' ' + 'is' + ' ' +  this.age + " " + 'year old'
    }
  }
  
  Persons.prototype.country = 'Bangladesh'
  const mubin = new Persons ('Abdullah Mubin',35,'khulna')
  const nahid = new Persons ('Nahiduzzaman',30,'Dhaka')
  const Jahid = new Persons ('Jahid Hosen',25,'Kummilla')

  console.dir(Persons)
  console.log(mubin.country)

