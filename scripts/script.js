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
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-normal', 'Стандартный');
    $('#btn-ltr-spacing-middle').attr('data-text-ltr-spacing-middle', 'Увеличенный');
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
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-normal', 'Стандарт.');
    $('#btn-ltr-spacing-middle').attr('data-text-ltr-spacing-middle', 'Увеличен.');
    $('#btn-lh-single').attr('data-text-lh-single', 'Одинарный');
    if ($('#btn-ltr-spacing-big').hasClass('active') ||
        $('#btn-ltr-spacing-big').hasClass('invert-active') ||
        $('#btn-ltr-spacing-big').hasClass('invert-blue-active')) {
        $('#btn-standart').attr('data-text-palette-standart', 'Стандарт.');
        $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-normal', 'Стандарт.');
        $('#btn-ltr-spacing-middle').attr('data-text-ltr-spacing-middle', 'Увелич.');
    }
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
    $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-normal', 'Станд.');
    $('#btn-ltr-spacing-middle').attr('data-text-ltr-spacing-middle', 'Увелич.');
    $('#btn-lh-mid').attr('data-text-lh-mid', 'Полуторн.');
    $('#btn-lh-single').attr('data-text-lh-single', 'Одинар.');
    $('.spacial-panel-container').css('grid-template-columns', '446px 360px 410px');

    if ($('#btn-ltr-spacing-big').hasClass('active') ||
        $('#btn-ltr-spacing-big').hasClass('invert-active') ||
        $('#btn-ltr-spacing-big').hasClass('invert-blue-active')) {
        $('#btn-standart').attr('data-text-palette-standart', 'Станд.');
        $('#btn-ltr-spacing-big').attr('data-text-ltr-spacing-big', 'Большой');
        $('.spacial-panel-container').css('grid-template-columns', '466px 406px 410px');
        $('#btn-lh-mid').attr('data-text-lh-mid', 'Полутор.');
        $('#btn-lh-single').attr('data-text-lh-single', 'Один.');
    } else if ($('#btn-ltr-spacing-middle').hasClass('active') ||
        $('#btn-ltr-spacing-middle').hasClass('invert-active') ||
        $('#btn-ltr-spacing-middle').hasClass('invert-blue-active')) {
        $('.spacial-panel-container').css('grid-template-columns', '466px 406px 410px');

    }
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

//Межбуквенный интервал
function changeLtrSpcNormal() {
    let bodyEl = $('body');
    bodyEl.css('letter-spacing', 'normal');
    $('#btn-standart').attr('data-text-palette-standart', 'Стандартная');
    $('#btn-ltr-spacing-big').attr('data-text-ltr-spacing-big', 'Большой');
    if ($('#btn-font-large').hasClass('active') ||
        $('#btn-font-large').hasClass('invert-active') ||
        $('#btn-font-large').hasClass('invert-blue-active')) {
        $('.spacial-panel-container').css('grid-template-columns', '473px 406px 410px');

    }
    if (bodyEl.hasClass('')) {
        $('#btn-ltr-spacing-normal').addClass('active');
        $('#btn-ltr-spacing-middle').removeClass('active');
        $('#btn-ltr-spacing-big').removeClass('active');
    }
    if (bodyEl.hasClass('invert')) {
        $('#btn-ltr-spacing-normal').addClass('invert-active');
        $('#btn-ltr-spacing-middle').removeClass('invert-active');
        $('#btn-ltr-spacing-big').removeClass('invert-active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        $('#btn-ltr-spacing-normal').addClass('invert-blue-active');
        $('#btn-ltr-spacing-middle').removeClass('invert-blue-active');
        $('#btn-ltr-spacing-big').removeClass('invert-blue-active');
    }
}

function changeLtrSpcMiddle() {
    let bodyEl = $('body');
    bodyEl.css('letter-spacing', '0.05em');
    $('#btn-standart').attr('data-text-palette-standart', 'Стандартная');
    $('#btn-ltr-spacing-big').attr('data-text-ltr-spacing-big', 'Большой');
    $('.spacial-panel-container').css('grid-template-columns', '445px 370px 410px');
    if ($('#btn-font-small').hasClass('active') ||
        $('#btn-font-small').hasClass('invert-active') ||
        $('#btn-font-small').hasClass('invert-blue-active')) {
        $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-normal', 'Стандартный');
        $('#btn-ltr-spacing-middle').attr('data-text-ltr-spacing-middle', 'Увеличенный');
        $('#btn-ltr-spacing-big').attr('data-text-ltr-spacing-big', 'Большой');
    } else if ($('#btn-font-large').hasClass('active') ||
        $('#btn-font-large').hasClass('invert-active') ||
        $('#btn-font-large').hasClass('invert-blue-active')) {
        $('#btn-standart').attr('data-text-palette-standart', 'Стандарт.');
        $('.spacial-panel-container').css('grid-template-columns', '468px 406px 410px');
    }
    if (bodyEl.hasClass('invert')) {
        $('#btn-ltr-spacing-normal').removeClass('invert-active');
        $('#btn-ltr-spacing-middle').addClass('invert-active');
        $('#btn-ltr-spacing-big').removeClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        $('#btn-ltr-spacing-normal').removeClass('active');
        $('#btn-ltr-spacing-middle').addClass('active');
        $('#btn-ltr-spacing-big').removeClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        $('#btn-ltr-spacing-normal').removeClass('invert-blue-active');
        $('#btn-ltr-spacing-middle').addClass('invert-blue-active');
        $('#btn-ltr-spacing-big').removeClass('invert-blue-active');
    }
}

function changeLtrSpcBig() {
    let bodyEl = $('body');
    bodyEl.css('letter-spacing', '0.12em');
    $('#btn-standart').attr('data-text-palette-standart', 'Стандарт.');
    $('.spacial-panel-container').css('grid-template-columns', '464px 406px 410px');
    if ($('#btn-font-small').hasClass('active') ||
        $('#btn-font-small').hasClass('invert-active') ||
        $('#btn-font-small').hasClass('invert-blue-active')) {
        $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-normal', 'Стандартный');
        $('#btn-ltr-spacing-middle').attr('data-text-ltr-spacing-middle', 'Увеличенный');
        $('#btn-ltr-spacing-big').attr('data-text-ltr-spacing-big', 'Большой');
        $('#btn-standart').attr('data-text-palette-standart', 'Стандартная');

    } else if ($('#btn-font-medium').hasClass('active') ||
        $('#btn-font-medium').hasClass('invert-active') ||
        $('#btn-font-medium').hasClass('invert-blue-active')) {
        $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-normal', 'Стандарт.');
        $('#btn-ltr-spacing-middle').attr('data-text-ltr-spacing-middle', 'Увелич.');
        $('#btn-ltr-spacing-big').attr('data-text-ltr-spacing-big', 'Большой');
    } else if ($('#btn-font-large').hasClass('active') ||
        $('#btn-font-large').hasClass('invert-active') ||
        $('#btn-font-large').hasClass('invert-blue-active')) {
        $('#btn-ltr-spacing-normal').attr('data-text-ltr-spacing-normal', 'Станд.');
        $('#btn-ltr-spacing-middle').attr('data-text-ltr-spacing-middle', 'Увелич.');
        $('#btn-ltr-spacing-big').attr('data-text-ltr-spacing-big', 'Большой');
        $('.spacial-panel-container').css('grid-template-columns', '466px 406px 410px');
    }
    if ($('#btn-font-large').hasClass('active') ||
        $('#btn-font-large').hasClass('invert-active') ||
        $('#btn-font-large').hasClass('invert-blue-active')) {
        $('#btn-standart').attr('data-text-palette-standart', 'Станд.');
    }
    if ($('#btn-font-large').hasClass('active') ||
        $('#btn-font-large').hasClass('invert-active') ||
        $('#btn-font-large').hasClass('invert-blue-active')) {
        $('#btn-lh-mid').attr('data-text-lh-mid', 'Полутор.');
    }
    if ($('#btn-font-large').hasClass('active') ||
        $('#btn-font-large').hasClass('invert-active') ||
        $('#btn-font-large').hasClass('invert-blue-active')) {
        $('#btn-lh-single').attr('data-text-lh-single', 'Один.');
    }

    if (bodyEl.hasClass('invert')) {
        $('#btn-ltr-spacing-normal').removeClass('invert-active');
        $('#btn-ltr-spacing-middle').removeClass('invert-active');
        $('#btn-ltr-spacing-big').addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        $('#btn-ltr-spacing-normal').removeClass('active');
        $('#btn-ltr-spacing-middle').removeClass('active');
        $('#btn-ltr-spacing-big').addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        $('#btn-ltr-spacing-normal').removeClass('invert-blue-active');
        $('#btn-ltr-spacing-middle').removeClass('invert-blue-active');
        $('#btn-ltr-spacing-big').addClass('invert-blue-active');
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

