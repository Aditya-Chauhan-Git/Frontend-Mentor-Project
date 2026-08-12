const header = document.querySelector('.header')
const navToggle = document.querySelector('.nav--toggle');
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    nav.classList.toggle('hide');
    
    if (nav.classList.contains('hide')) {
        navToggle.setAttribute('src', 'images/icon-hamburger.svg')
    }
    else {
        navToggle.setAttribute('src', 'images/icon-close.svg')
    }
    header.toggleAttribute('data-overlay'); 
});

const slider = new A11YSlider(document.querySelector(".slider"), {
    arrows: false,
    centerMode: true,
    responsive: {
        700: {
            slidesToShow: 2,
        },
        900: {
            slidesToShow: 3,
            dots: false,
            arrows: true
        }
    }
});
