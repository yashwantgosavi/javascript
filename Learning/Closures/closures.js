let a = "global Scope";


function test() {
    let b = "in local Scope";

    function test2() {
        let c = "in a functional Scope";
    }

}

console.log