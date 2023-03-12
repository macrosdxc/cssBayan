
const button = document.querySelector('.accordion__button')
const arrow = document.querySelector('.accordion__arrow');
const content = document.querySelector('.accordion__content')

button.addEventListener ('click', () => {
    arrow.classList.toggle('accordion__arrow-transformed');
    content.classList.toggle('accordion__content-visible');
});
