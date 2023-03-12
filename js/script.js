
const button = document.querySelectorAll('.accordion__button')
const arrow = document.querySelectorAll('.accordion__arrow');
const content = document.querySelectorAll('.accordion__content')


for (let element in button) {

button[element].addEventListener ('click', () => {
    arrow[element].classList.toggle('accordion__arrow-transformed');
    content[element].classList.toggle('accordion__content-visible');
});

}