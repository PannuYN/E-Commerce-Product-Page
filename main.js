//functions to handle hamburger navbar in small screens
function handleNavOpen() {
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.remove("left-[-100%]");
    navMenu.classList.add("left-[0]");
    handleBlackMask('black-mask-sm');
}
function handleNavClose() {
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.remove("left-[0]");
    navMenu.classList.add("left-[-100%]");
    handleBlackMask('black-mask-sm');
}
function handleBlackMask(maskId) {
  const blackMask = document.querySelector(`#${maskId}`);
  blackMask.classList.toggle('hidden');
}

//function to handle carousel in small screen
let currentIndex = 0;

function moveCarousel(carouselId, direction) {
  const carouselContainer = document.querySelector(`#${carouselId} .flex`); // Target the flex container
  const totalImages = carouselContainer.children.length;

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % totalImages;
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  }

  const offset = -currentIndex * 100; // Move the carousel
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

//function to handle image change in both product page and light box
function changeImage(largeImg, newImageSrc) {
  const largeImage = document.querySelector(`#${largeImg}`);
  largeImage.src = newImageSrc.replace('-thumbnail', '');
  //largeImages.forEach(largeImage => largeImage.src = newImageSrc.replace('-thumbnail', ''));
}

//function to open lightbox
function openLightBox() {
  //assign current large image src to lightbox large image
  const dkLargeImage = document.querySelector('#large-img');
  const lbLargeImage = document.querySelector('#lb-large-img');
  lbLargeImage.src = dkLargeImage.src;

  //show lightbox
  const lightbox = document.querySelector('#lightbox');
  lightbox.classList.add('md:flex'); //won't show on small screens

  //mask the background with transparent black
  handleBlackMask('black-mask-lg');
}
function closeLightBox() {
  //hide lightbox
  const lightbox = document.querySelector('#lightbox');
  lightbox.classList.remove('md:flex');

  //remove the mask
  handleBlackMask('black-mask-lg');
}

//function to handle image slide in lightbox
function slideImage(direction) {
  const lbLargeImage = document.querySelector('#lb-large-img');
  const currentSrc = lbLargeImage.src;
  
  // Extract the base URL (excluding the number and extension)
  const baseUrl = currentSrc.replace(/\d+\.jpg$/, '');  // Remove the number and the .jpg
  let num = parseInt(currentSrc.match(/(\d+)(?=\.jpg$)/)[0]);  // Extract the last number before .jpg

  if (direction === "next") {
    if (num < 4)
      lbLargeImage.src = baseUrl + (num + 1) + '.jpg';  // Increment and set new src
    else
      lbLargeImage.src = baseUrl + '1.jpg';  // Reset to 1 if num reaches 4
  }

  if (direction === "prev") {
    if (num > 1)
      lbLargeImage.src = baseUrl + (num - 1) + '.jpg';  // Decrement and set new src
    else
      lbLargeImage.src = baseUrl + '4.jpg';  // Reset to 4 if num is less than 1 
  }
}


