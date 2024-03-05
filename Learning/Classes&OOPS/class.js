//  ********** Classes in JS **********
// class is a program-code template for creating objects.
// those objects will have some state(variables)& some behaviour(functions)inside it.


class MyClass {
    constructor() { }

    myMethod() { }
}
let myObj = new MyClass();


/*
   class car {
    constructor(brand, mileage){
        this.brand = brand;
        this.mileage = mileage;
    }
     start(){
      console.log("start");
     }
     stop(){
      console.log("stop");
     }
        setBrand(brand){
      this.brandName = brand;
    //    upcoming new object's property = arguments;
       }
  }
    let fortuner = new car("fortuner", 20);
    let lexus = new car("lexus", 12);
    fortuner.setBrand("fortuner");
*/


// constructor()
//    constructor() method is:
//    - automatically invoked by new
//    - initializes object



//  inheritance in js
/*
inheritance is passing down properties & methods from parent class to child class.

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{
    work(){
        console.log("solve problems, Build Software");
    }
}


*/