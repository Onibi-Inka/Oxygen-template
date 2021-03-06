const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const button = document.querySelectorAll('.pricing__plan-button');
const plans = document.querySelectorAll('.pricing__plan');


for (let j = 0; j < plans.length; j++) {
    button[j].addEventListener('click', () => {
        for (let i = 0; i < plans.length; i++) {
            if ((plans[i].classList.contains('darkbg'))) {
                plans[i].classList.remove('darkbg');
            }
            if ((plans[i].classList.contains('hover-plan-selected'))) {
                plans[i].classList.remove('hover-plan-selected');
            }
        }
        plans[j].classList.add('darkbg');
        plans[j].classList.add('hover-plan-selected');
    });
    button[j].addEventListener('mouseenter', () => {
        for (let i = 0; i < plans.length; i++) {
            if ((plans[i].classList.contains('hover-plan'))) {
                plans[i].classList.remove('hover-plan');
            }
        }
        plans[j].classList.add('hover-plan');
    })
    button[j].addEventListener('mouseleave', () => {
        for (let i = 0; i < plans.length; i++) {
            if ((plans[i].classList.contains('hover-plan'))) {
                plans[i].classList.remove('hover-plan');
            }
        }
        plans[j].classList.remove('hover-plan');
    })
}

window.onscroll = function showHeader() {
    const header = document.querySelector('.header__top');
    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed');
    }
    else {
        header.classList.remove('header__fixed');
    }
}

window.onload = function showHeader() {
    const header = document.querySelector('.header__top');
    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed');
    }
    else {
        header.classList.remove('header__fixed');
    }
}

const portfolioCategories = document.querySelectorAll('.portfolio__categories-item');
for (let i = 0; i < portfolioCategories.length; i++) {
    portfolioCategories[i].addEventListener('click', () => {
        for (let j = 0; j < portfolioCategories.length; j++) {
            portfolioCategories[j].classList.remove('active');
        }

        portfolioCategories[i].classList.add('active');
    });
}

// My attempts to make a smooth scroll but no one is not working smooth



// const anchors = document.querySelectorAll('a[href*="#"]');
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href');
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//     });
// }

// function scrollBy(event) {
//     window.scrollTo({
//         left: 0,
//         top: event.offsetTop,
//         behavior: 'smooth'
//     });
// }

// const headerLink = document.querySelector('.header__menu-link');
// const contact = document.querySelector('#contact');

// for (let i = 0; i < headerLink.length; i++) {
//     const blockID = headerLink.getAttribute('href');

// }
// headerLink.addEventListener('click', () => {
//     scrollTo(contact);
// });


// document.querySelectorAll('a.anchor').forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         const href = this.getAttribute('href').substring(1);
//         const scrollTarget = document.getElementById(href);
//         const topOffset = 0;
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth',
//         });
//     });
// });

const burger = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.header__menu-links');
if (burger) {
    burger.addEventListener('click', () => {
        document.body.classList.toggle('__lock');
        menu.classList.toggle('burger-active');
        burger.classList.toggle('burger-active');
    });
}

const menuLinks = document.querySelectorAll('.anchor[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkCkick);
    });
    function onMenuLinkCkick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - (document.querySelector('.header__top').offsetHeight - 80);

            if (burger.classList.contains('burger-active')) {
                document.body.classList.remove('__lock');
                menu.classList.remove('burger-active');
                burger.classList.remove('burger-active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

const stripFill = document.querySelectorAll('.expertise__graphics-strip--fill');
const percent = document.querySelectorAll('.expertise__graphics-data');

for (let i = 0; i < 3; i++) {
    const stripWidth = getComputedStyle(stripFill[i]).width;
    console.log(stripWidth[i]);
    percent[i].style.width = stripWidth;
}