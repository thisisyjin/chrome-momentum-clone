const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// js로 html을 작성하는 것
const bgImage = document.createElement('img');

// 태그의 속성 작성
bgImage.src = `img/${chosenImage}`;

// body부분에 태그 붙여넣음

const $bgImg = document.querySelector('.bg-img');
$bgImg.appendChild(bgImage);
