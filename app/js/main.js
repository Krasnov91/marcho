
$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".products-card__stars").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });
});


const anchors = document.querySelectorAll('.menu__link, .logo');

anchors.forEach((anchor) => {

  anchor.addEventListener('click', (evt) => {

    evt.preventDefault();

    const blockId = anchor.getAttribute('href');

    const block = document.querySelector(blockId);

    block.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });
});




// let a = '5';
// let b = 5;
// let c = false;

// // c = b / a;

// console.log(c);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// let a = prompt('VVedite 4islo');

// if (a > 3) {
//   console.log(a + ' больше трех');
// } else if (a >= 3) {
//   console.log(a + ' равно трем')
// } else {
//   console.log(a + ' меньше трех')
// }


// for (let i = 10; i>5; i--) {
//   console.log(i-2);
// }


// let someArray = [9, 2, 4, 'text', true, 4, 'fgg'];

// console.log(someArray.length);

// for (let i = 0; i <= someArray.length; i++) {
//   console.log(someArray[i]);
// }

// let y;

// function calc(name, age) {

//   console.log('меня зовут ' + name + ' его возраст' + age);

// }

// calc('Maga', 200)


// ['Ford', 'Mustang', 1969];

// let myCar = {
//   brand: 'Ford',
//   model: 'Mustang',
//   year: 1969
// }

// console.log(myCar.model);

// console.dir(document.body);

// let main = document.querySelector('.main');

// let titles = main.querySelectorAll('.title');

// console.log(titles);

// const logo = document.querySelector('.title');

// const onlyLogo = logo.innerHTML;
// // const onlyLogo = logo.textContent;

// logo.textContent = 'lorem nnn'
// logo.innerHTML = 'lorem nnn <span class="title__span">qqq</span>';

// console.log(logo);

// const img = document.querySelector('.logo-img');
// img.alt = '123';
// console.log(img.alt);

// const input = document.querySelector('.footer-top__input');

// let inputType = input.getAttribute('type');

// input.setAttribute('placeholder', 'vvod nomera');

// input.removeAttribute('placeholder');

// console.log(inputType);

// logo.style.color = 'red';

// console.dir(logo);

// logo.classList.add('active');
// logo.classList.toggle('active');

// console.log(logo.classList.contains('active'));

// if (logo.classList.contains('active')) {
//   logo.style.color = 'red';
// }
//   else {
//     logo.style.color = 'green';
// }


// let a = 5;

// if ( a === 5) {
//   console.log(a + ' равно 5');
//   console.log(`${a} равно 5`);
// }

// let num = 16;


// console.log(`${num} в квадрате будет ${num*num}`);

// let arr = [1, 2, 45, 45];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);


// }

// console.log(arr.length);

// for (let i = 0; i < anchors.length; i++) {

//   const elementClickHandler = (evt) => {

//     evt.preventDefault();

//     const blockId = anchors[i].getAttribute('href');

//     const block = document.querySelector(blockId);

//     block.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   }

//   anchors[i].addEventListener('click', elementClickHandler);
// }