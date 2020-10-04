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
    let btnFontSmall = $('#btn-font-small');
    let btnFontMedium = $('#btn-font-medium');
    let btnFontLarge = $('#btn-font-large');
    let btnLtrSpacingBig = $('#btn-ltr-spacing-big');
    let btnLtrSpacingMiddle = $('#btn-ltr-spacing-middle');
    let btnLtrSpacingNormal = $('#btn-ltr-spacing-normal');
    $('html').attr('data-font-size', 'small');
    btnLtrSpacingNormal.attr('data-text-ltr-spacing-normal', 'Стандартный');
    btnLtrSpacingMiddle.attr('data-text-ltr-spacing-middle', 'Увеличенный');
    if (bodyEl.hasClass('')) {
        btnFontSmall.addClass('active');
        btnFontMedium.removeClass('active');
        btnFontLarge.removeClass('active');
    }
    if (bodyEl.hasClass('invert')) {
        btnFontSmall.addClass('invert-active');
        btnFontMedium.removeClass('invert-active');
        btnFontLarge.removeClass('invert-active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnFontSmall.addClass('invert-blue-active');
        btnFontMedium.removeClass('invert-blue-active');
        btnFontLarge.removeClass('invert-blue-active');
    }
}

function changeFontInMedium() {
    let bodyEl = $('body');
    let btnStandart = $('#btn-standart');
    let btnInverse = $('#btn-inverse');
    let btnFontSmall = $('#btn-font-small');
    let btnFontMedium = $('#btn-font-medium');
    let btnFontLarge = $('#btn-font-large');
    let btnLtrSpacingBig = $('#btn-ltr-spacing-big');
    let btnLtrSpacingMiddle = $('#btn-ltr-spacing-middle');
    let btnLtrSpacingNormal = $('#btn-ltr-spacing-normal');
    let btnLHSingle = $('#btn-lh-single');
    $('html').attr('data-font-size', 'medium');
    btnStandart.attr('data-text-palette-standart', 'Стандартная');
    btnLtrSpacingNormal.attr('data-text-ltr-spacing-normal', 'Стандарт.');
    btnLtrSpacingMiddle.attr('data-text-ltr-spacing-middle', 'Увеличен.');
    btnLHSingle.attr('data-text-lh-single', 'Одинарный');
    btnInverse.attr('data-text-palette-inverse', 'Инверсия')
    if (btnLtrSpacingBig.hasClass('active') ||
        btnLtrSpacingBig.hasClass('invert-active') ||
        btnLtrSpacingBig.hasClass('invert-blue-active')) {
        btnStandart.attr('data-text-palette-standart', 'Стандарт.');
        btnLtrSpacingNormal.attr('data-text-ltr-spacing-normal', 'Стандарт.');
        btnLtrSpacingMiddle.attr('data-text-ltr-spacing-middle', 'Увелич.');
    }
    if (bodyEl.hasClass('invert')) {
        btnFontSmall.removeClass('invert-active');
        btnFontMedium.addClass('invert-active');
        btnFontLarge.removeClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnFontSmall.removeClass('active');
        btnFontMedium.addClass('active');
        btnFontLarge.removeClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnFontSmall.removeClass('invert-blue-active');
        btnFontMedium.addClass('invert-blue-active');
        btnFontLarge.removeClass('invert-blue-active');
    }
}

function changeFontInLarge() {
    let bodyEl = $('body');
    let btnLtrSpacingBig = $('#btn-ltr-spacing-big');
    let btnLtrSpacingMiddle = $('#btn-ltr-spacing-middle');
    let btnLtrSpacingNormal = $('#btn-ltr-spacing-normal');
    let btnStandart = $('#btn-standart');
    let btnInverse = $('#btn-inverse');
    let btnFontSmall = $('#btn-font-small');
    let btnFontMedium = $('#btn-font-medium');
    let btnFontLarge = $('#btn-font-large');
    let btnLHSingle = $('#btn-lh-single');
    let btnLHMid = $('#btn-lh-mid');
    let elementContainer = $('.spacial-panel-container');
    $('html').attr('data-font-size', 'large');
    btnStandart.attr('data-text-palette-standart', 'Стандарт.');
    btnLtrSpacingNormal.attr('data-text-ltr-spacing-normal', 'Станд.');
    btnLtrSpacingMiddle.attr('data-text-ltr-spacing-middle', 'Увелич.');
    btnLHMid.attr('data-text-lh-mid', 'Полуторн.');
    btnLHSingle.attr('data-text-lh-single', 'Одинар.');
    elementContainer.css('grid-template-columns', '446px 360px 410px');

    if (btnLtrSpacingBig.hasClass('active') ||
        btnLtrSpacingBig.hasClass('invert-active') ||
        btnLtrSpacingBig.hasClass('invert-blue-active')) {
        btnStandart.attr('data-text-palette-standart', 'Станд.');
        btnLtrSpacingBig.attr('data-text-ltr-spacing-big', 'Большой');
        elementContainer.css('grid-template-columns', '466px 406px 410px');
        btnLHMid.attr('data-text-lh-mid', 'Полутор.');
        btnLHSingle.attr('data-text-lh-single', 'Один.');
        btnInverse.attr('data-text-palette-inverse', 'Инверс.')
    } else if (btnLtrSpacingMiddle.hasClass('active') ||
        btnLtrSpacingMiddle.hasClass('invert-active') ||
        btnLtrSpacingMiddle.hasClass('invert-blue-active')) {
        $('.spacial-panel-container').css('grid-template-columns', '466px 408px 410px');
    }
    if (bodyEl.hasClass('')) {
        btnFontSmall.removeClass('active');
        btnFontMedium.removeClass('active');
        btnFontLarge.addClass('active');
    }
    if (bodyEl.hasClass('invert')) {
        btnFontSmall.removeClass('invert-active');
        btnFontMedium.removeClass('invert-active');
        btnFontLarge.addClass('invert-active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnFontSmall.removeClass('invert-blue-active');
        btnFontMedium.removeClass('invert-blue-active');
        btnFontLarge.addClass('invert-blue-active');
    }
}

//Межбуквенный интервал
function changeLtrSpcNormal() {
    let bodyEl = $('body');
    let btnStandart = $('#btn-standart');
    let btnLtrSpacingBig = $('#btn-ltr-spacing-big');
    let btnLtrSpacingMiddle = $('#btn-ltr-spacing-middle');
    let btnLtrSpacingNormal = $('#btn-ltr-spacing-normal');
    let btnFontLarge = $('#btn-font-large');
    let elementContainer = $('.spacial-panel-container');
    bodyEl.css('letter-spacing', 'normal');
    btnStandart.attr('data-text-palette-standart', 'Стандартная');
    btnLtrSpacingMiddle.attr('data-text-ltr-spacing-big', 'Большой');
    if (btnFontLarge.hasClass('active') ||
        btnFontLarge.hasClass('invert-active') ||
        btnFontLarge.hasClass('invert-blue-active')) {
        elementContainer.css('grid-template-columns', '473px 406px 410px');

    }
    if (bodyEl.hasClass('')) {
        btnLtrSpacingNormal.addClass('active');
        btnLtrSpacingMiddle.removeClass('active');
        btnLtrSpacingBig.removeClass('active');
    }
    if (bodyEl.hasClass('invert')) {
        btnLtrSpacingNormal.addClass('invert-active');
        btnLtrSpacingMiddle.removeClass('invert-active');
        btnLtrSpacingBig.removeClass('invert-active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnLtrSpacingNormal.addClass('invert-blue-active');
        btnLtrSpacingMiddle.removeClass('invert-blue-active');
        btnLtrSpacingBig.removeClass('invert-blue-active');
    }
}

function changeLtrSpcMiddle() {
    let bodyEl = $('body');
    let btnStandart = $('#btn-standart');
    let btnFontSmall = $('#btn-font-small');
    let btnFontMid = $('#btn-lh-mid');
    let btnFontLarge = $('#btn-font-large');
    let btnLtrSpacingNormal = $('#btn-ltr-spacing-normal');
    let btnLtrSpacingMiddle = $('#btn-ltr-spacing-middle');
    let btnLtrSpacingBig =$('#btn-ltr-spacing-big');
    let elementContainer = $('.spacial-panel-container');
    bodyEl.css('letter-spacing', '0.05em');
    btnStandart.attr('data-text-palette-standart', 'Стандартная');
    btnLtrSpacingBig.attr('data-text-ltr-spacing-big', 'Большой');
    btnFontMid.attr('data-text-lh-mid', 'Полуторн.');
    elementContainer.css('grid-template-columns', '445px 370px 410px');
    if (btnFontSmall.hasClass('active') ||
        btnFontSmall.hasClass('invert-active') ||
        btnFontSmall.hasClass('invert-blue-active')) {
        btnLtrSpacingNormal.attr('data-text-ltr-spacing-normal', 'Стандартный');
        btnLtrSpacingMiddle.attr('data-text-ltr-spacing-middle', 'Увеличенный');
        btnLtrSpacingBig.attr('data-text-ltr-spacing-big', 'Большой');
    } else if (btnFontLarge.hasClass('active') ||
        btnFontLarge.hasClass('invert-active') ||
        btnFontLarge.hasClass('invert-blue-active')) {
        btnStandart.attr('data-text-palette-standart', 'Стандарт.');
        elementContainer.css('grid-template-columns', '468px 406px 410px');
    }
    if (bodyEl.hasClass('invert')) {
        btnLtrSpacingNormal.removeClass('invert-active');
        btnLtrSpacingMiddle.addClass('invert-active');
        btnLtrSpacingBig.removeClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnLtrSpacingNormal.removeClass('active');
        btnLtrSpacingMiddle.addClass('active');
        btnLtrSpacingBig.removeClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnLtrSpacingNormal.removeClass('invert-blue-active');
        btnLtrSpacingMiddle.addClass('invert-blue-active');
        btnLtrSpacingBig.removeClass('invert-blue-active');
    }
}

function changeLtrSpcBig() {
    let bodyEl = $('body');
    let btnStandart = $('#btn-standart');
    let btnLHSingle = $('#btn-lh-single');
    let btnLHMid = $('#btn-lh-mid');
    let btnFontSmall = $('#btn-font-small');
    let btnLtrSpacingNormal = $('#btn-ltr-spacing-normal');
    let btnLtrSpacingMiddle = $('#btn-ltr-spacing-middle');
    let btnLtrSpacingBig =$('#btn-ltr-spacing-big');
    let elementContainer = $('.spacial-panel-container');
    let btnFontMedium = $('#btn-font-medium');
    let btnFontLarge = $('#btn-font-large');
    let btnInverse = $('#btn-inverse');
    bodyEl.css('letter-spacing', '0.12em');
    btnStandart.attr('data-text-palette-standart', 'Стандарт.');
    btnLHSingle.attr('data-text-lh-single', 'Одинарн.');
    elementContainer.css('grid-template-columns', '464px 406px 410px');
    if (btnFontSmall.hasClass('active') ||
        btnFontSmall.hasClass('invert-active') ||
        btnFontSmall.hasClass('invert-blue-active')) {
        btnLtrSpacingNormal.attr('data-text-ltr-spacing-normal', 'Стандартный');
        btnLtrSpacingMiddle.attr('data-text-ltr-spacing-middle', 'Увеличенный');
        btnLtrSpacingBig.attr('data-text-ltr-spacing-big', 'Большой');
        btnStandart.attr('data-text-palette-standart', 'Стандартная');

    } else if (btnFontMedium.hasClass('active') ||
        btnFontMedium.hasClass('invert-active') ||
        btnFontMedium.hasClass('invert-blue-active')) {
        btnLtrSpacingNormal.attr('data-text-ltr-spacing-normal', 'Стандарт.');
        btnLtrSpacingMiddle.attr('data-text-ltr-spacing-middle', 'Увелич.');
        btnLtrSpacingBig.attr('data-text-ltr-spacing-big', 'Большой');
    } else if (btnFontLarge.hasClass('active') ||
        btnFontLarge.hasClass('invert-active') ||
        btnFontLarge.hasClass('invert-blue-active')) {
        btnLtrSpacingNormal.attr('data-text-ltr-spacing-normal', 'Станд.');
        btnLtrSpacingMiddle.attr('data-text-ltr-spacing-middle', 'Увелич.');
        btnLtrSpacingBig.attr('data-text-ltr-spacing-big', 'Большой');
        elementContainer.css('grid-template-columns', '466px 406px 410px');
        btnInverse.attr('data-text-palette-inverse', 'Инверс.')
    }
    if (btnFontLarge.hasClass('active') ||
        btnFontLarge.hasClass('invert-active') ||
        btnFontLarge.hasClass('invert-blue-active')) {
        btnStandart.attr('data-text-palette-standart', 'Станд.');
    }
    if (btnFontLarge.hasClass('active') ||
        btnFontLarge.hasClass('invert-active') ||
        btnFontLarge.hasClass('invert-blue-active')) {
        btnLHMid.attr('data-text-lh-mid', 'Полутор.');
    }
    if (btnFontLarge.hasClass('active') ||
        btnFontLarge.hasClass('invert-active') ||
        btnFontLarge.hasClass('invert-blue-active')) {
        btnLHSingle.attr('data-text-lh-single', 'Один.');
    }

    if (bodyEl.hasClass('invert')) {
        btnLtrSpacingNormal.removeClass('invert-active');
        btnLtrSpacingMiddle.removeClass('invert-active');
        btnLtrSpacingBig.addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnLtrSpacingNormal.removeClass('active');
        btnLtrSpacingMiddle.removeClass('active');
        btnLtrSpacingBig.addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnLtrSpacingNormal.removeClass('invert-blue-active');
        btnLtrSpacingMiddle.removeClass('invert-blue-active');
        btnLtrSpacingBig.addClass('invert-blue-active');
    }

}

//Изображения
function showImg() {
    let bodyEl = $('body');
    let btnShowImg = $('#btn-img-show');
    let btnHideImg = $('#btn-img-hide');
    if (bodyEl.hasClass('invert')) {
        btnHideImg.removeClass('invert-active');
        btnShowImg.addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnHideImg.removeClass('active');
        btnShowImg.addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnHideImg.removeClass('invert-blue-active');
        btnShowImg.addClass('invert-blue-active');
    }
}
function hideImg() {
    let bodyEl = $('body');
    let btnShowImg = $('#btn-img-show');
    let btnHideImg = $('#btn-img-hide');
    if (bodyEl.hasClass('invert')) {
        btnShowImg.removeClass('invert-active');
        btnHideImg.addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnShowImg.removeClass('active');
        btnHideImg.addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnShowImg.removeClass('invert-blue-active');
        btnHideImg.addClass('invert-blue-active');
    }
}

//Шрифт
function switchFontOnSansserif() {
    let bodyEl = $('body');
    let allButton = $('button');
    let btnFontSansserif = $('#btn-fnt-sansserif');
    let btnFontSerif = $('#btn-fnt-serif');
    bodyEl.css('font-family', 'Arial, Helvetica, sans-serif')
    let arrButton= [...allButton].map(element => element.style.fontFamily = 'Arial');
    btnFontSerif[0].style.fontFamily = 'Times New Roman';
    if (bodyEl.hasClass('invert')) {
        btnFontSerif.removeClass('invert-active');
        btnFontSansserif.addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnFontSerif.removeClass('active');
        btnFontSansserif.addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnFontSerif.removeClass('invert-blue-active');
        btnFontSansserif.addClass('invert-blue-active');
    }
}
function switchFontOnSerif() {
    let bodyEl = $('body');
    let allButton = $('button');
    let btnFontSansserif = $('#btn-fnt-sansserif');
    let btnFontSerif = $('#btn-fnt-serif');
    bodyEl.css('font-family', 'Times New Roman, serif');
    let newArray = [...allButton].map(element => element.style.fontFamily = 'Times New Roman');
    btnFontSansserif[0].style.fontFamily = 'Arial';
    if (bodyEl.hasClass('invert')) {
        btnFontSansserif.removeClass('invert-active');
        btnFontSerif.addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnFontSansserif.removeClass('active');
        btnFontSerif.addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnFontSansserif.removeClass('invert-blue-active');
        btnFontSerif.addClass('invert-blue-active');
    }
}

//Межстрочный интервал
function changeLHSingle() {
    let bodyEl = $('body');
    let btnLHSingle = $('#btn-lh-single');
    let btnLHMid = $('#btn-lh-mid');
    let btnLHDouble = $('#btn-lh-double');
    $('.spacial-panel-long-block-button__element').css('line-height', '1');
    $('.spacial-panel-block-button__element').css('line-height', '1');

    if (bodyEl.hasClass('invert')) {
        btnLHDouble.removeClass('invert-active');
        btnLHMid.removeClass('invert-active');
        btnLHSingle.addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnLHDouble.removeClass('active');
        btnLHMid.removeClass('active');
        btnLHSingle.addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnLHDouble.removeClass('invert-blue-active');
        btnLHMid.removeClass('invert-blue-active');
        btnLHSingle.addClass('invert-blue-active');
    }
}
function changeLHMid() {
    let bodyEl = $('body');
    let btnLHSingle = $('#btn-lh-single');
    let btnLHMid = $('#btn-lh-mid');
    let btnLHDouble = $('#btn-lh-double');
    $('.spacial-panel-long-block-button__element').css('line-height', '1.5');
    $('.spacial-panel-block-button__element').css('line-height', '1.5');

    if (bodyEl.hasClass('invert')) {
        btnLHDouble.removeClass('invert-active');
        btnLHSingle.removeClass('invert-active');
        btnLHMid.addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnLHDouble.removeClass('active');
        btnLHSingle.removeClass('active');
        btnLHMid.addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnLHDouble.removeClass('invert-blue-active');
        btnLHSingle.removeClass('invert-blue-active');
        btnLHMid.addClass('invert-blue-active');
    }
}
function changeLHDouble() {
    let bodyEl = $('body');
    let btnLHSingle = $('#btn-lh-single');
    let btnLHMid = $('#btn-lh-mid');
    let btnLHDouble = $('#btn-lh-double');
    $('.spacial-panel-long-block-button__element').css('line-height', '2');
    $('.spacial-panel-block-button__element').css('line-height', '2');

    if (bodyEl.hasClass('invert')) {
        btnLHSingle.removeClass('invert-active');
        btnLHMid.removeClass('invert-active');
        btnLHDouble.addClass('invert-active');
    }
    if (bodyEl.hasClass('')) {
        btnLHSingle.removeClass('active');
        btnLHMid.removeClass('active');
        btnLHDouble.addClass('active');
    }
    if (bodyEl.hasClass('invert-blue')) {
        btnLHSingle.removeClass('invert-blue-active');
        btnLHMid.removeClass('invert-blue-active');
        btnLHDouble.addClass('invert-blue-active');
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

