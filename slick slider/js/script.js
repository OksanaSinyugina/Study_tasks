$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true, // для картинок разной высоты
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,  // по умолчанию 300 милисек (1000 = 1 сек)
        easing: 'ease',
        infinite: true,
        initialSlide: 0, // по умолчанию 0

        autoplay: false,
        autoplaySpeed: 1000, // по умолчанию 3000 = 3 сек
        pauseOnFocus: true, // кликнем на любой элемент слайдера по умолчанию true
        pauseOnHover: true, // наведение на всю область слайдера по умолчанию true
        pauseOnDotsHover: true, // наведение на точки по умолчанию true

        draggable: false, // перетаскивание слайдов на пк, на мобильных будет работать
        swipe: true, // свайп для тач скринов
        touchThreshold: 10, // область перелистывания при которой срабатывайет свайп по умолчанию 5
        touchMove: false,
    });
});