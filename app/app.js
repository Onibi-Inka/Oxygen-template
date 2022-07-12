const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        // nextEl: '.custom-next'
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
        }
        plans[j].classList.add('darkbg');
    });
}
