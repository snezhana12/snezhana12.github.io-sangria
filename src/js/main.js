$('.language').click(function () {
    $(this).toggleClass('open');
});

$('.language li').click(function () {
    var setLang = $('.language').data('location'),
        dataLangSelect = $(this).data('lang');
    $('.language').data('location', dataLangSelect);
    $('.language li').removeClass('active');
    $(this).toggleClass('active');
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})