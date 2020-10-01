//палитра сайта - стандартная
function changeStandart() {
    let btnArray = document.getElementsByClassName('spacial-panel-long-block-button__element');
    let newBtnArray = [...btnArray];
    let bodyEl = $('body');
    let bodyHasClassBlue = bodyEl.hasClass('invert-blue');
    let bodyHasClassInvert = bodyEl.hasClass('invert');

    if (bodyHasClassBlue) {
        clearClass();
        newBtnArray.forEach(element => {
            if (element.classList.contains('invert-blue-active')) {
                element.classList.remove("invert-blue-active");
                element.classList.add("active");
            }
        });
    } else if (bodyHasClassInvert) {
        clearClass();
        newBtnArray.forEach(element => {
            if (element.classList.contains('invert-active')) {
                element.classList.remove("invert-active");
                element.classList.add("active");
            }
        });
    }
}

//палитра сайта- инверсия
function changeInverse() {
    let btnArray = document.getElementsByClassName('spacial-panel-long-block-button__element');
    let newBtnArray = [...btnArray];
    let bodyEl = $('body');
    let bodyHasClass = bodyEl.hasClass('invert-blue');
    newBtnArray.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove("active");
            element.classList.add("invert-active");
        } else if (element.classList.contains('invert-active')) {
            element.classList.remove("invert-active");
            element.classList.add("active");
        }
    });
    if (bodyHasClass) {
        newBtnArray.forEach(element => {
            if (element.classList.contains('invert-blue-active')) {
                element.classList.remove("invert-blue-active");
                element.classList.add("invert-active");
            }
        });
        clearClass();
    }
    bodyEl.toggleClass('invert'); //изменяет общий цвет страницы
    $('.spacial-panel-name').toggleClass('spacial-panel-name_invert'); //изменяет заголовки на белый цвет
    $('#btn-standart').toggleClass('spacial-panel-block-button__element_inverse_invert'); //добавляет белую рамку стандартной кнопке
    $('#btn-blue').toggleClass('spacial-panel-block-button__element_blue_inverse-blue'); //добавляет голубую рамку голубой кнопке
    $('#btn-inverse').toggleClass('invert-active'); //изменяет цвет кнопки инверсии
    $('.spacial-panel-regularversion__link').toggleClass('spacial-panel-regularversion__link_invert'); //изменяет цвет шрифта на белый
    $('.spacial-panel-long-block-button').toggleClass('spacial-panel-long-block-button_invert'); //изменяет цвет полей на белый
}

//палитра сайта - синяя
function changeBlue() {
    let btnArray = document.getElementsByClassName('spacial-panel-long-block-button__element');
    let newBtnArray = [...btnArray];
    let bodyEl = $('body');
    let bodyHasClass = bodyEl.hasClass('invert');

    newBtnArray.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove("active");
            element.classList.add("invert-blue-active");
        } else if (element.classList.contains('invert-blue-active')) {
            element.classList.remove("invert-blue-active");
            element.classList.add("active");
        }
    });
    if (bodyHasClass) {
        newBtnArray.forEach(element => {
            if (element.classList.contains('invert-active')) {
                element.classList.remove('invert-active');
                element.classList.add('invert-blue-active');
            }
        })
        clearClass();
    }
    bodyEl.toggleClass('invert-blue'); //изменяет общий цвет страницы
    $('.spacial-panel-name').toggleClass('spacial-panel-name_blue'); //изменяет заголовки на голубой цвет
    $('#btn-standart').toggleClass('spacial-panel-block-button__element_inverse_invert'); //добавляет белую рамку стандартной кнопке
    $('#btn-inverse').toggleClass('spacial-panel-block-button__element_inverse_invert-blue')
    $('#btn-blue').toggleClass('spacial-panel-btn-blue'); //добавляет голубую рамку голубой кнопке
    $('.spacial-panel-long-block-button').toggleClass('spacial-panel-long-block-button_blue'); //изменяет цвет полей на голубой
    $('a').toggleClass('spacial-panel-regularversion__link_blue'); //изменяет цвет полей на белый

}

//Размер шрифта
function changeFontInSmall() {
    let bodyEl = $('body');
    $('html').attr('data-font-size', 'small');
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-standart', 'Стандартная');
    if (bodyEl.hasClass('')) {
        $('#btn-font-small').addClass('active');
        $('#btn-font-medium').removeClass('active');
        $('#btn-font-large').removeClass('active');
    }
    if (bodyEl.hasClass('invert')) {
        $('#btn-font-small').addClass('invert-active');
        $('#btn-font-medium').removeClass('invert-active');
        $('#btn-font-large').removeClass('invert-active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        $('#btn-font-small').addClass('invert-blue-active');
        $('#btn-font-medium').removeClass('invert-blue-active');
        $('#btn-font-large').removeClass('invert-blue-active');
    }
}
function changeFontInMedium() {
    let bodyEl = $('body');
    $('html').attr('data-font-size', 'medium');
    $('#btn-standart').attr('data-text-palette-standart', 'Стандартная');
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-standart', 'Стандарт.');
    $('#btn-lh-single').attr('data-text-lh-single', 'Одинарный');
    if (bodyEl.hasClass('invert')) {
        $('#btn-font-small').removeClass('invert-active');
        $('#btn-font-medium').addClass('invert-active');
        $('#btn-font-large').removeClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        $('#btn-font-small').removeClass('active');
        $('#btn-font-medium').addClass('active');
        $('#btn-font-large').removeClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        $('#btn-font-small').removeClass('invert-blue-active');
        $('#btn-font-medium').addClass('invert-blue-active');
        $('#btn-font-large').removeClass('invert-blue-active');
    }

}

function changeFontInLarge() {
    let bodyEl = $('body');
    $('html').attr('data-font-size', 'large');
    $('#btn-standart').attr('data-text-palette-standart', 'Стандарт.');
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-standart', 'Станд.');
    $('#btn-lh-mid').attr('data-text-lh-mid', 'Полуторн.');
    $('#btn-lh-single').attr('data-text-lh-single', 'Одинар.');
    $('.spacial-panel-container').css('grid-template-columns', '445px 360px 410px');
    if (bodyEl.hasClass('')) {
        $('#btn-font-small').removeClass('active');
        $('#btn-font-medium').removeClass('active');
        $('#btn-font-large').addClass('active');
    }
    if (bodyEl.hasClass('invert')) {
        $('#btn-font-small').removeClass('invert-active');
        $('#btn-font-medium').removeClass('invert-active');
        $('#btn-font-large').addClass('invert-active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        $('#btn-font-small').removeClass('invert-blue-active');
        $('#btn-font-medium').removeClass('invert-blue-active');
        $('#btn-font-large').addClass('invert-blue-active');
    }
}

function clearClass() {
        $('body').removeClass().addClass('');
        $('.spacial-panel-name').removeClass().addClass('spacial-panel-name');
        $('.spacial-panel-long-block-button').removeClass().addClass('spacial-panel-long-block-button');
        $('#btn-standart').removeClass().addClass('spacial-panel-block-button__element spacial-panel-block-button__element_standart');
        $('#btn-inverse').removeClass().addClass('spacial-panel-block-button__element spacial-panel-block-button__element_inverse');
        $('#btn-blue').removeClass().addClass('spacial-panel-block-button__element spacial-panel-block-button__element_blue');
        $('a').removeClass().addClass('spacial-panel-regularversion__link');
}

