let slideIndex = 0;

function showSlide(n){
    // сохранение всех слацдов в одну 
    const slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    // Переход после послежней картинки в первую 
    if (n >= slides.length){
        slideIndex = 0;
    }

    // Влево после первого отображется самый последний
    if (n <0){
        slideIndex = slides.length -1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for ( var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

}


function moveSlide(n){
    showSlide(slideIndex += n);
}


showSlide(slideIndex);



// отображение точек
function currentSlide(n) {
    showSlides(slideIndex = n);
}



// Получаем элементы
const marquee = document.getElementById('marquee');
const images = document.getElementById('images');

// Копируем изображения
const imagesClone = images.cloneNode(true);
marquee.appendChild(imagesClone);

// Анимация бегущей ленты
let scrollPosition = 0;

function scrollMarquee() {
    scrollPosition--;
    if (scrollPosition < -images.offsetWidth) {
        scrollPosition = 0;
    }
    images.style.transform = `translateX(${scrollPosition}px)`;
}

setInterval(scrollMarquee, 30);
