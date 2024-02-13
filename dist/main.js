let cancelBtn = document.querySelector('.close');
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.hide');
let viewedImage = document.querySelector('.images-con img');
let previous = document.querySelector('.previous-arrow');
let next = document.querySelector('.next-arrow');

let images = ['one', 'two', 'three', 'four']

cancelBtn.addEventListener('click', (e) => {
  nav.style.display ="none";
})
hamburger.addEventListener('click', (e) => {
  // nav.classList.add('hide');
  nav.style.display ="block";

})

viewedImage.src = '/images/image-'+present+'.jpg'

let present = images[theOne];
let theOne = 0;

previous.addEventListener('click',  (e) => {
  theOne--;
})
next.addEventListener('click',  (e) => {
  theOne++;
})
