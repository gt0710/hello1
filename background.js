const images = ["baseball1.jpg", "baseball2.jpg", "baseball3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);