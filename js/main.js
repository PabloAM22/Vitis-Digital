// main.js

document.getElementById('year').textContent = new Date().getFullYear();



const saludoBtn = document.getElementById('saludoBtn');

saludoBtn.addEventListener('click', () => {

  alert('¡Hola! Creaste tu primera interacción con JavaScript.');

});
