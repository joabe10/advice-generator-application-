const botao = document.querySelector('.botao');
const frase = document.querySelector('.frase');
const titulo = document.querySelector('.titulo');

botao.addEventListener('click', async (evento) => {
    evento.preventDefault()

    try {
    const response = await fetch('https://api.adviceslip.com/advice'); 

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    const data = await response.json();
    
    titulo.textContent= 'ADVICE #' + data.slip.id;
    frase.textContent = '"'+ data.slip.advice +'"';

  } catch (error) {
    frase.textContent = 'Error: ' + error.message;
  }
});

const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});