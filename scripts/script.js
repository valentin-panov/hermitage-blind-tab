//палитра сайта - стандартная
function changeStandart() {
    $('#btn-forn-small').toggleClass('active');
}

//палитра сайта- инверсия
function changeInverse() {
    $('body').toggleClass('invert');
    $('.block__element').not('.palette').not('#btn-blue').toggleClass('invert-element');
    $('.block-name').toggleClass('invert-title');
    $('#btn-inverse').toggleClass('invert-active');
    $('.block-regularversion__link').toggleClass('invert-title');
    let btnArray = document.querySelectorAll('button');
    newBtnArray = [...btnArray];
    newBtnArray.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove("active");
            element.classList.add("invert-active");
        } else if (element.classList.contains('invert-active')) {
            element.classList.remove("invert-active");
            element.classList.add("active");
        }
    });


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

//Размер шрифта
function changeFontInSmall() {
    $('html').attr('data-font-size', 'small');
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-standart', 'Стандартная');
    $('#btn-font-small').addClass('active');
    $('#btn-font-medium').removeClass('active');
    $('#btn-font-large').removeClass('active');
}
function changeFontInMedium() {
    $('html').attr('data-font-size', 'medium');
    $('#btn-standart').attr('data-text-palette-standart', 'Стандартная');
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-standart', 'Стандарт.');
    $('#btn-lh-single').attr('data-text-lh-single', 'Одинарный');
    $('#btn-font-small').removeClass('active');
    $('#btn-font-medium').addClass('active');
    $('#btn-font-large').removeClass('active');
}
function changeFontInLarge() {
    $('html').attr('data-font-size', 'large');
    $('#btn-standart').attr('data-text-palette-standart', 'Станд.');
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-standart', 'Станд.');
    $('#btn-lh-single').attr('data-text-lh-single', 'Одинар.');
    $('#btn-font-small').removeClass('active');
    $('#btn-font-medium').removeClass('active');
    $('#btn-font-large').addClass('active');
}

