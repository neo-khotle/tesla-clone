function createCarousel(slideshow, nextBtn, prevBtn, slides) {
    
    let currentSlide = 0;

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
}



const hero = document.querySelector(".hero-carousel");

createCarousel(
    hero.querySelector(".slideshow"),
    hero.querySelector(".next"),
    hero.querySelector(".prev"),
    [
        "resources/banner1.avif", 
        "resources/banner2.avif", 
        "resources/banner3.avif"
    ]
);

const models = document.querySelector(".models-carousel");

createCarousel(
    models.querySelector(".slideshow"),
    models.querySelector(".next"),
    models.querySelector(".prev"),
    [
        "resources/model-yl.avif", 
        "resources/model-3.avif", 
        "resources/model-y.avif",
        "resources/truck.avif",
        "resources/preowned-cars.avif"
    ]
);

const products = document.querySelector(".products-carousel");

createCarousel(
    products.querySelector(".slideshow"),
    products.querySelector(".next"),
    products.querySelector(".prev"),
    [
        "resources/solar-panels.avif", 
        "resources/powerwall.avif", 
        "resources/megapack.avif",
        "resources/solar-roof.avif"
    ]
);


// const slideshow = document.querySelector(".slideshow");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");



// const slides = [
//     "resources/banner1.avif", 
//     "resources/banner2.avif", 
//     "resources/banner3.avif"
// ];

