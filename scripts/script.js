//палитра сайта - стандартная
function changeStandart() {
    $('#btn-forn-small').toggleClass('active');
}

//палитра сайта- инверсия
function changeInverse() {
    $('body').toggleClass('invert');
    $('button').not('#btn-blue').toggleClass('invert-element');
    $('.block-name').toggleClass('invert-title');
    $('#btn-inverse').toggleClass('invert-active');
    $('.block-regularversion__link').toggleClass('invert-title')
}

//палитра сайта - синяя
//палитра сайта- инверсия
function changeBlue() {
    $('body').toggleClass('invert-blue');
    $('.block__element').not('.palette').not('#btn-standart').toggleClass('invert-blue-element');
    $('.block-name').toggleClass('invert-blue-title');
    $('#btn-blue').toggleClass('invert-blue-active');
    $('.block-regularversion__link').toggleClass('invert-blue-title')
}