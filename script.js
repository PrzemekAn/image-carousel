const images = document.querySelectorAll('img');
let index = 0;

function changeSlide() {
    index++;

    if (index === images.length) {
        index = 0;
    }

    images.forEach(image => {
        image.style.transform = `translateX(-${index*600}px)`;
    });

    setTimeout(changeSlide, 2500);
}


setTimeout(changeSlide, 2500);