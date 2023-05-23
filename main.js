
const botao = document.querySelector('.botao');
const frase = document.querySelector('.frase');

botao.addEventListener('click', async (evento) => {
    evento.preventDefault()

    try {
    const response = await fetch('https://api.adviceslip.com/advice'); 

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    const data = await response.json();

    console.log(data.slip.advice)
    frase.textContent = data.slip.advice;

  } catch (error) {
    frase.textContent = 'Error: ' + error.message;
  }
});
