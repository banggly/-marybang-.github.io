const images = ["고민.png", "낭살낭죽.png", "눈동자의 치얼스.png", "니잘났다.png", "독서.png", "빼꼼.png", "오싯.png", "으악.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// Set the width and height of the image
bgImage.style.width = "50%"; // Set the width to 100% of its container
bgImage.style.height = "50%"; // Automatically adjust the height while maintaining aspect ratio

document.body.appendChild(bgImage);
