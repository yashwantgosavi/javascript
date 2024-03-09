// async await

// Async Code
/*
Js is 
    - Synchronous
    - Single threaded
 
Blocking Code
   Block the flow of program
 

Non Blocking Code
   Does not block execution
    
 
*/

// async function asyncTask() {
//    return "resolved";
// }
// asyncTask().then(data =>console.log(data));


// function getData() {
//    return Promise.resolve('some data');
// }

// async function abc(){
//    const data = await getData();
//    console.log(data);
// } abc()


// function getData(dataId){
//    return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//          console.log('data', dataId);
//          resolve("success");
//       },2000);
//    });
// }

// // async-await
// async function getAllData(){
//  await getData(1);
//  await getData(2);
//  await getData(3);
// }

// getAllData();

// // we will not use .then, .catch().