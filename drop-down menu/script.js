let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let body = document.querySelector('body');
let arrows = document.querySelectorAll('.arrow');

if (isMobile.any()) {
    body.classList.add('touch');
    for (let i = 0; i < arrows.length; i++) {
        let thisArrow = arrows[i];
        let thisLink = thisArrow.previousElementSibling;
        let subMenu = thisArrow.nextElementSibling;
        
        thisLink.classList.add('parent');

        arrows[i].addEventListener('click', () => {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}