function handleNavOpen() {
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.remove("left-[-100%]");
    navMenu.classList.add("left-[0]");
}

function handleNavClose() {
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.remove("left-[0]");
    navMenu.classList.add("left-[-100%]");
}

let currentIndex = 0;

function moveCarousel(direction) {
  const carouselContainer = document.querySelector("#carousel .flex"); // Target the flex container
  const totalImages = carouselContainer.children.length;

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % totalImages;
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  }

  const offset = -currentIndex * 100; // Move the carousel
  carouselContainer.style.transform = `translateX(${offset}%)`;
}
