const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.body;

// document.createElement("img");

bgImage.background = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
