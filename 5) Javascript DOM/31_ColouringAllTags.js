// Colouring All h2 elements

let heading = document.querySelectorAll('h2');

heading.forEach((element) => {
    element.style.background = 'green';
    element.style.color = 'yellow';
});