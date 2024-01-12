let value = 5;
console.log("hello Ninjas");
function incre() {
    console.log(value);
    value--;
    if (value == 0) {
        clearInterval(output);
    }



}

let output = setInterval(incre, 1000);
