
const getMultiplication = (a,b)=>{
    const innerFun = ()=>{
        return a*b
    }
    return innerFun
}

const result = getMultiplication(10,20)
// console.dir(result)
// console.log(result())



// const person = {
//     name:'hello',
//     age:25,
//     greet(){
//         console.log(this.name);
//     }
// }

// console.log(person.greet())

const myFunction = (x,y) =>{
    return x * y
}

let m = 10;
let n = 20;
// console.log(myFunction(m,n))
// console.log(m)


const myFunction2 = (x) =>{
    x.m = 20;
    return x.m * x.n
}

const obj = {
    m:10,
    n:20
}

// console.log(myFunction2(obj))
// console.log(obj)

const counterFun = () =>{
    let count = 0;
    const innerFun = () =>{
        return count+=1;
    }
    return innerFun
}

const result1 = counterFun()
// console.log(result1())


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");

  console.log(myCar.show())