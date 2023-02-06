$('.header-burger').click(function(event) {
    $('.header-burger,.header-nav,.header-first').toggleClass('active');
    $('body').toggleClass('lock');
});



$('.header-item').click(function(event) {
    $('.header-burger,.header-nav,.header-first').toggleClass('active');
    $('body').toggleClass('lock');
});



document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.header-nav') & e.target !== document.querySelector('.hedaer-top') & e.target !== document.querySelector('.header-burger')) {
        document.querySelector('.header-nav').classList.remove('active')
        document.querySelector('.header-burger').classList.remove('active')
        document.querySelector('body').classList.remove('lock')
    }
})