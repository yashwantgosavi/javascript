/*  
    strongly vs week type language
    function
    return 
    function hoisting
    function scope
         global vs function
    ${num1+num2}

*/


let a = 10;
let b = 20;
let c = 30;

function testing() {
    a = 40;
    let d = a+b
    function testing2() {
        c=100;
        let r2 = a + c;
        return r2;
    }
    testing2();
    return testing2();
}

let output = testing();
document.write(output);