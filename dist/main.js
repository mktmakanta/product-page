//order amount
let quantity = document.querySelector('.quantity');
let minus = document.querySelector('.minus');
let add = document.querySelector('.plus');

let count = parseInt(quantity.textContent);


minus.addEventListener("click", (e) => {
  if (count === 0){
      count = 0;
  } else {
    count--;
  }
  quantity.textContent = count; 
});

add.addEventListener("click", (e) => {
  count++;
  quantity.textContent = count; 

});


//navigation
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

//images
let viewedImage = document.querySelector('.images-con img');
let previous = document.querySelector('.previous-arrow');
let next = document.querySelector('.next-arrow');

let images = ['one', 'two', 'three', 'four'];
let theOne = 0;
let present = images[theOne];

viewedImage.src = '/images/image-' + present + '.jpg';

previous.addEventListener('click', (e) => {
  theOne--;
  if (theOne < 0) {
    theOne = 0;
  }
  present = images[theOne];
  viewedImage.src = '/images/image-' + present + '.jpg';
});
next.addEventListener('click', (e) => {
  theOne++;
  if (theOne === images.length) {
    theOne = images.length -1;
  }
  present = images[theOne];
  viewedImage.src = '/images/image-' + present + '.jpg';
});
