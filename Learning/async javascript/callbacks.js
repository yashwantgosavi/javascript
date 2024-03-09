/*
Callbacks
-----------
A callback is a function passed as an argument to another function.

*/

function greet(name, c) {
    console.log(`hi :>> ${name}`);
    c();
}

function askquestion() {
    console.log('How are you?');
}

greet('yash', askquestion);



/*
Callback Hell
-----------------
Callback hell: Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)

This style of programming becomes difficult to understand & manage.
*/

// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log('data', dataId);
//         getNextData();
//     }, 2000);
// }

// getData(1, () => {
//     getData(2);
// });