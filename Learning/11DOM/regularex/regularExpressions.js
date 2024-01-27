// https://regexr.com/

/*
/pattern/modifiers;

In JavaScript, regular expressions are often used with the two string methods: search() and replace().





*/


let search = document.getElementById('search');
let searchInput = document.getElementById('searchInput');
let resultParagraph = document.getElementById('result');

search.addEventListener('click', contentSearching);
function contentSearching() {
    let filter =
    /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm;

    let text = searchInput.value;
    
    
    if (filter.test(text) == filter.test(text)) {
        resultParagraph.textContent = "Alert: " + text;

    } 
    
    
    
    
    
    
    
    
    
    
    else {
        resultParagraph.textContent = "No match found.";
    }
}