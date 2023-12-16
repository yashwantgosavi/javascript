// Min fruits = 10;
// Min 7 fruits rate same 

let fruitsName = prompt("Enter fruit name");

switch (fruitsName) {
    case "Apple":
        document.write("100");
        break;
    case "kiwi":
        document.write("80");
        break;
    default:
        document.write("out of stock");
        break;
}