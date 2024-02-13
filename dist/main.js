let cancelBtn = document.querySelector('.close');
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.hide');

cancelBtn.addEventListener('click', (e) => {
  nav.style.display ="none";
})
hamburger.addEventListener('click', (e) => {
  // nav.classList.add('hide');
  nav.style.display ="block";

})
