//Creo array e inserisco immagini in ordine come Template
const slides = [
  `img/01.jpg`,
  `img/05.jpg`,
  `img/04.jpg`,
  `img/03.jpg`,
  `img/02.jpg`,
];

//Creo costanti
const btnDown = document.getElementById(`down`);
const btnUp = document.getElementById(`up`);
const slideContainer = document.getElementById(`slide-container`);
let counterSlide = 0;

//Creo ciclo for per cambiare le immagini
for (let i = 0; i < slides.length; i++) {
  slideContainer.innerHTML += `
      <img class="slide d-none" src="${slides[i]}">
    `;
}

const slideSet = document.getElementsByClassName(`slide`);
slideSet[counterSlide].classList.remove(`d-none`);

// BOTTONE UP Attivo la funzione usando addEventListener cosi’ da poter attivare il ciclo infinito
btnUp.addEventListener(`click`, function () {
  slideSet[counterSlide].classList.add(`d-none`);
  counterSlide++;
  if (counterSlide === slides.length) {
    counterSlide = 0;
  }
  slideSet[counterSlide].classList.remove(`d-none`);
});

// BOTTONE DOWN Attivo la funzione usando addEventListener cosi’ da poter attivare il ciclo infinito
btnDown.addEventListener(`click`, function () {
  slideSet[counterSlide].classList.add(`d-none`);
  if (counterSlide === 0) {
    counterSlide = slides.length;
  }
  counterSlide--;
  slideSet[counterSlide].classList.remove(`d-none`);
});
