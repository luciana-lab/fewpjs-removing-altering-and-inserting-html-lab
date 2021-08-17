// Write your code here!
// 1) no longer has DOM node 'main#main'
    // let element = document.getElementById("main");
    // element.remove(element);
main.remove();

// 2) has a 'newHeader' variable that points to node 'h1#victory'
// 3) has a 'newHeader' variable that points to node 'h1#victory' Make sure you create an <h1> with id 'victory'
// 4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
// Reference: https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion'

document.body.appendChild(newHeader);