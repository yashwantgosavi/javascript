// Prototypes in Js
//   A JS object is an entity having state and behavior(properties and method).

// js objects have speacial property called prototype
// we can set prototype using __proto__

// method.
// const student = {
//     fullName: 'yashwant gosavi',
//     marks: 80,
//     printMarks: function () {
//         console.log('marks=', this.marks);
//     }
// }

// prototype
const emp ={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const rahul ={
    salary:50000,
};

rahul.__proto__ = emp;
rahul.calcTax();










