//палитра сайта - стандартная
function changeStandart() {
    let btnArray = document.getElementsByClassName('spacial-panel-long-block-button__element');
    let newBtnArray = [...btnArray];
    let bodyHasClassBlue = $('body').hasClass('invert-blue');
    let bodyHasClassInvert = $('body').hasClass('invert');

    if (bodyHasClassBlue) {
        $('body').removeClass('invert-blue'); //убирает класс от синий инверсии
        $('.spacial-panel-name').removeClass('spacial-panel-name_blue'); //убирает заголовки голубого цвет
        $('#btn-standart').removeClass('spacial-panel-block-button__element_inverse_invert'); //убирает белую рамку стандартной кнопке
        $('#btn-blue').removeClass('spacial-panel-btn-blue'); //убирает голубую рамку голубой кнопке
        $('.spacial-panel-long-block-button').removeClass('spacial-panel-long-block-button_blue'); //убирает цвет полей на голубой
        newBtnArray.forEach(element => {
            if (element.classList.contains('invert-blue-active')) {
                element.classList.remove("invert-blue-active");
                element.classList.add("active");
            }
        });
    } else if(bodyHasClassInvert) {
        $('body').removeClass('invert'); //убирает класс от синий инверсии
        $('#btn-standart').removeClass('spacial-panel-block-button__element_inverse_invert'); //убирает белую рамку стандартной кнопке
        $('.spacial-panel-name').removeClass('spacial-panel-name_invert'); //убирает заголовки голубого цвет
        $('#btn-standart').removeClass('spacial-panel-block-button__element_blue_inverse-blue'); //убирает белую рамку стандартной кнопке
        $('.spacial-panel-long-block-button').removeClass('spacial-panel-long-block-button_invert'); //убирает цвет полей на голубой
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
    let bodyHasClass = $('body').hasClass('invert-blue');
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
        $('body').removeClass('invert-blue'); //убирает класс от синий инверсии
        $('.spacial-panel-name').removeClass('spacial-panel-name_blue'); //убирает заголовки голубого цвет
        $('#btn-standart').removeClass('spacial-panel-block-button__element_inverse_invert'); //убирает белую рамку стандартной кнопке
        $('#btn-blue').removeClass('spacial-panel-btn-blue'); //убирает голубую рамку голубой кнопке
        $('.spacial-panel-long-block-button').removeClass('spacial-panel-long-block-button_blue'); //убирает цвет полей на голубой
    }
    $('body').toggleClass('invert'); //изменяет общий цвет страницы
    $('.spacial-panel-name').toggleClass('spacial-panel-name_invert'); //изменяет заголовки на белый цвет
    $('#btn-standart').toggleClass('spacial-panel-block-button__element_inverse_invert'); //добавляет белую рамку стандартной кнопке
    $('#btn-blue').toggleClass('spacial-panel-block-button__element_blue_inverse-blue'); //добавляет голубую рамку голубой кнопке
    $('#btn-inverse').toggleClass('invert-active'); //изменяет цвет кнопки инверсии
    $('.spacial-panel-regularversion__link').toggleClass('spacial-panel-regularversion__link_invert '); //изменяет цвет шрифта на белый
    $('.spacial-panel-long-block-button').toggleClass('spacial-panel-long-block-button_invert'); //изменяет цвет полей на белый
}

//палитра сайта - синяя
function changeBlue() {
    let btnArray = document.getElementsByClassName('spacial-panel-long-block-button__element');
    let newBtnArray = [...btnArray];
    newBtnArray.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove("active");
            element.classList.add("invert-blue-active");
        } else if (element.classList.contains('invert-blue-active')) {
            element.classList.remove("invert-blue-active");
            element.classList.add("active");
        }
    });
    let bodyHasClass = $('body').hasClass('invert');
    if (bodyHasClass) {
        newBtnArray.forEach(element => {
            if (element.classList.contains('invert-active')) {
                element.classList.remove('invert-active');
                element.classList.add('invert-blue-active');
            }
        })
        $('body').removeClass('invert'); //убирает класс от синий инверсии
        $('.spacial-panel-name').removeClass('spacial-panel-name_invert'); //убирает заголовки голубого цвет
        $('#btn-standart').removeClass('spacial-panel-block-button__element_blue_inverse-blue'); //убирает белую рамку стандартной кнопке
        $('.spacial-panel-long-block-button').removeClass('spacial-panel-long-block-button_invert'); //убирает цвет полей на голубой
    }
    $('body').toggleClass('invert-blue'); //изменяет общий цвет страницы
    $('.spacial-panel-name').toggleClass('spacial-panel-name_blue'); //изменяет заголовки на голубой цвет
    $('#btn-standart').toggleClass('spacial-panel-block-button__element_inverse_invert'); //добавляет белую рамку стандартной кнопке
    $('#btn-blue').toggleClass('spacial-panel-btn-blue'); //добавляет голубую рамку голубой кнопке
    $('.spacial-panel-long-block-button').toggleClass('spacial-panel-long-block-button_blue'); //изменяет цвет полей на голубой
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

