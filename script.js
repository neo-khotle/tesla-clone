const slideshow = document.querySelector(".slideshow");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

const slides = [
    "resources/banner1.avif", 
    "resources/banner2.avif", 
    "resources/banner3.avif"
];

// Display the current image
function showSlide() {
    slideshow.style.backgroundImage = `url("${slides[currentSlide]}")`;
}
    showSlide();


function nextSlide() {
    currentSlide = (currentSlide + 1) %slides.length;

    console.log(slides[currentSlide]);
    showSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) %slides.length;

    console.log(slides[currentSlide]);
    showSlide();

}

// Navigate using buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Automatically rotate every 5 seconds
setInterval(nextSlide, 10000);