import { homesSlider, reviewsSlider } from '../modules/slider';

homesSlider();
reviewsSlider();

// close adv

const advert = document.querySelector('.advertisement');
const closeAdvBtn = document.querySelector('.advertisement__content-close');

const closeAdv = () => {
  closeAdvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    advert.classList.add('hide');
  });
};
closeAdv();
//  menu burger

const burgerBtn = document.querySelector('.menu__burger');
const burgerContent = document.querySelector('.menu-burger-content');

burgerBtn.addEventListener('click', () => {
  burgerContent.classList.toggle('show');
  burgerBtn.classList.toggle('active');
});
