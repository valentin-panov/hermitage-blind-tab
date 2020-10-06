const elementsStorage = {
  htmlEl: document.querySelector('html'),
  bodyEl: document.querySelector('body'),
  btnStandart: document.querySelector('#btn-standart'),
  btnBlue: document.querySelector('#btn-blue'),
  btnInverse: document.querySelector('#btn-inverse'),
  btnLHSingle: document.querySelector('#btn-lh-single'),
  btnLHMid: document.querySelector('#btn-lh-mid'),
  btnLHDouble: document.querySelector('#btn-lh-double'),
  btnFontSmall: document.querySelector('#btn-font-small'),
  btnFontMedium: document.querySelector('#btn-font-medium'),
  btnFontLarge: document.querySelector('#btn-font-large'),
  btnLtrSpacingNormal: document.querySelector('#btn-ltr-spacing-normal'),
  btnLtrSpacingMiddle: document.querySelector('#btn-ltr-spacing-middle'),
  btnLtrSpacingBig: document.querySelector('#btn-ltr-spacing-big'),
  btnShowImg: document.querySelector('#btn-img-show'),
  btnHideImg: document.querySelector('#btn-img-hide'),
  btnFontSansserif: document.querySelector('#btn-fnt-sansserif'),
  btnFontSerif: document.querySelector('#btn-fnt-serif'),
  elementContainer: document.querySelector('.spacial-panel-container'),
  elementLink: document.querySelector('.spacial-panel-regularversion__link'),
  elementLongBlock: document.querySelectorAll('.spacial-panel-long-block-button'),
  elementBlockElement: document.querySelectorAll('.spacial-panel-block-button__element'),
  elementLongBlockElement: document.querySelectorAll('.spacial-panel-long-block-button__element'),
  elementPanelName: document.querySelectorAll('.spacial-panel-name'),
  allButton: document.querySelectorAll('button')
}


//палитра сайта - стандартная
function changeStandart() {
  let btnArray = document.querySelectorAll('.spacial-panel-long-block-button__element');
  let bodyHasClassBlue = elementsStorage.bodyEl.classList.contains('invert-blue');
  let bodyHasClassInvert = elementsStorage.bodyEl.classList.contains('invert');

  if (bodyHasClassBlue) {
    clearClass();
    btnArray.forEach(element => {
      if (element.classList.contains('invert-blue-active')) {
        element.classList.remove("invert-blue-active");
        element.classList.add("active");
      }
    });
  } else if (bodyHasClassInvert) {
    clearClass();
    btnArray.forEach(element => {
      if (element.classList.contains('invert-active')) {
        element.classList.remove("invert-active");
        element.classList.add("active");
      }
    });
  }
}

//палитра сайта- инверсия
function changeInverse() {
  let btnArray = document.querySelectorAll('.spacial-panel-long-block-button__element');
  let bodyHasClass = elementsStorage.bodyEl.classList.contains('invert-blue');
  btnArray.forEach(element => {
    if (element.classList.contains('active')) {
      element.classList.remove("active");
      element.classList.add("invert-active");
    } else if (element.classList.contains('invert-active')) {
      element.classList.remove("invert-active");
      element.classList.add("active");
    }
  });
  if (bodyHasClass) {
    btnArray.forEach(element => {
      if (element.classList.contains('invert-blue-active')) {
        element.classList.remove("invert-blue-active");
        element.classList.add("invert-active");
      }
    });
    clearClass();
  }
  elementsStorage.bodyEl.classList.toggle('invert');//изменяет общий цвет страницы
  elementsStorage.elementPanelName.forEach(item => item.classList.toggle('spacial-panel-name_invert'))
  elementsStorage.btnStandart.classList.toggle('spacial-panel-block-button__element_inverse_invert')//добавляет белую рамку стандартной кнопке
  elementsStorage.btnBlue.classList.toggle('spacial-panel-block-button__element_blue_inverse-blue'); //добавляет голубую рамку голубой кнопке
  elementsStorage.btnInverse.classList.toggle('invert-active'); //изменяет цвет кнопки инверсии
  elementsStorage.elementLink.classList.toggle('spacial-panel-regularversion__link_invert'); //изменяет цвет шрифта на белый
  elementsStorage.elementLongBlock.forEach(item => item.classList.toggle('spacial-panel-long-block-button_invert'))
}

//палитра сайта - синяя
function changeBlue() {
  let btnArray = document.querySelectorAll('.spacial-panel-long-block-button__element');
  let bodyHasClassInvert = elementsStorage.bodyEl.classList.contains('invert');

  btnArray.forEach(element => {
    if (element.classList.contains('active')) {
      element.classList.remove("active");
      element.classList.add("invert-blue-active");
    } else if (element.classList.contains('invert-blue-active')) {
      element.classList.remove("invert-blue-active");
      element.classList.add("active");
    }
  });
  if (bodyHasClassInvert) {
    btnArray.forEach(element => {
      if (element.classList.contains('invert-active')) {
        element.classList.remove('invert-active');
        element.classList.add('invert-blue-active');
      }
    })
    clearClass();
  }
  elementsStorage.bodyEl.classList.toggle('invert-blue');//изменяет общий цвет страницы
  elementsStorage.elementPanelName.forEach(item => item.classList.toggle('spacial-panel-name_blue'))
  elementsStorage.btnStandart.classList.toggle('spacial-panel-block-button__element_inverse_invert'); //добавляет белую рамку стандартной кнопке
  elementsStorage.btnInverse.classList.toggle('spacial-panel-block-button__element_inverse_invert-blue')
  elementsStorage.btnBlue.classList.toggle('spacial-panel-btn-blue'); //добавляет голубую рамку голубой кнопке
  elementsStorage.elementLongBlock.forEach(item => item.classList.toggle('spacial-panel-long-block-button_blue'))
  elementsStorage.elementLink.classList.toggle('spacial-panel-regularversion__link_blue'); //изменяет цвет шрифта на белый
}

//Размер шрифта
function changeFontInSmall() {
  elementsStorage.htmlEl.setAttribute('data-font-size', 'small')
  elementsStorage.btnLtrSpacingNormal.setAttribute('data-text-ltr-spacing-normal', 'Стандартный');
  elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-middle', 'Увеличенный');
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnFontSmall.classList.add('active');
    elementsStorage.btnFontMedium.classList.remove('active');
    elementsStorage.btnFontLarge.classList.remove('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnFontSmall.classList.add('invert-active');
    elementsStorage.btnFontMedium.classList.remove('invert-active');
    elementsStorage.btnFontLarge.classList.remove('invert-active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnFontSmall.classList.add('invert-blue-active');
    elementsStorage.btnFontMedium.classList.remove('invert-blue-active');
    elementsStorage.btnFontLarge.classList.remove('invert-blue-active');
  }
}

function changeFontInMedium() {
  elementsStorage.htmlEl.setAttribute('data-font-size', 'medium')
  elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Стандартная')
  elementsStorage.btnLtrSpacingNormal.setAttribute('data-text-ltr-spacing-normal', 'Стандарт.');
  elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-middle', 'Увеличен.');
  elementsStorage.btnInverse.setAttribute('data-text-lh-single', 'Одинарный');
  elementsStorage.btnInverse.setAttribute('data-text-palette-inverse', 'Инверсия');

  if (elementsStorage.btnLtrSpacingBig.classList.contains('active') ||
    elementsStorage.btnLtrSpacingBig.classList.contains('invert-active') ||
    elementsStorage.btnLtrSpacingBig.classList.contains('invert-blue-active')) {
    elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Стандарт.');
    elementsStorage.btnLtrSpacingNormal.setAttribute('data-text-ltr-spacing-normal', 'Стандарт.');
    elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-middle', 'Увелич.');
  }
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnFontSmall.classList.remove('invert-active');
    elementsStorage.btnFontMedium.classList.add('invert-active');
    elementsStorage.btnFontLarge.classList.remove('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnFontSmall.classList.remove('active');
    elementsStorage.btnFontMedium.classList.add('active');
    elementsStorage.btnFontLarge.classList.remove('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnFontSmall.classList.remove('invert-blue-active');
    elementsStorage.btnFontMedium.classList.add('invert-blue-active');
    elementsStorage.btnFontLarge.classList.remove('invert-blue-active');
  }
}

function changeFontInLarge() {
  elementsStorage.htmlEl.setAttribute('data-font-size', 'large')
  elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Стандарт.')
  elementsStorage.btnLtrSpacingNormal.setAttribute('data-text-ltr-spacing-normal', 'Станд.');
  elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-middle', 'Увелич.');
  elementsStorage.btnLHMid.setAttribute('data-text-lh-mid', 'Полуторн.');
  elementsStorage.btnLHSingle.setAttribute('data-text-lh-single', 'Одинар.');
  elementsStorage.elementContainer.style.gridTemplateColumns = '446px 360px 410px';

  if (elementsStorage.btnLtrSpacingBig.classList.contains('active') ||
    elementsStorage.btnLtrSpacingBig.classList.contains('invert-active') ||
    elementsStorage.btnLtrSpacingBig.classList.contains('invert-blue-active')) {
    elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Станд.');
    elementsStorage.btnLtrSpacingBig.setAttribute('data-text-ltr-spacing-big', 'Большой');
    elementsStorage.elementContainer.style.gridTemplateColumns = '466px 408px 410px';
    elementsStorage.btnLHMid.setAttribute('data-text-lh-mid', 'Полутор.');
    elementsStorage.btnLHSingle.setAttribute('data-text-lh-single', 'Один.');
    elementsStorage.btnInverse.setAttribute('data-text-palette-inverse', 'Инверс.');
  } else if (elementsStorage.btnLtrSpacingMiddle.classList.contains('active') ||
    elementsStorage.btnLtrSpacingMiddle.classList.contains('invert-active') ||
    elementsStorage.btnLtrSpacingMiddle.classList.contains('invert-blue-active')) {
    elementsStorage.elementContainer.style.gridTemplateColumns = '466px 406px 410px';
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnFontSmall.classList.remove('active');
    elementsStorage.btnFontMedium.classList.remove('active');
    elementsStorage.btnFontLarge.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnFontSmall.classList.remove('invert-active');
    elementsStorage.btnFontMedium.classList.remove('invert-active');
    elementsStorage.btnFontLarge.classList.add('invert-active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnFontSmall.classList.remove('invert-blue-active');
    elementsStorage.btnFontMedium.classList.remove('invert-blue-active');
    elementsStorage.btnFontLarge.classList.add('invert-blue-active');
  }
}

//Межбуквенный интервал
function changeLtrSpcNormal() {
  elementsStorage.bodyEl.style.letterSpacing = 'normal'
  elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Стандартная');
  elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-big', 'Большой');
  if (elementsStorage.btnFontLarge.classList.contains('active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-blue-active')) {
    elementsStorage.elementContainer.style.gridTemplateColumns = '473px 406px 410px';

  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnLtrSpacingNormal.classList.add('active');
    elementsStorage.btnLtrSpacingMiddle.classList.remove('active');
    elementsStorage.btnLtrSpacingBig.classList.remove('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnLtrSpacingNormal.classList.add('invert-active');
    elementsStorage.btnLtrSpacingMiddle.classList.remove('invert-active');
    elementsStorage.btnLtrSpacingBig.classList.remove('invert-active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnLtrSpacingNormal.classList.add('invert-blue-active');
    elementsStorage.btnLtrSpacingMiddle.classList.remove('invert-blue-active');
    elementsStorage.btnLtrSpacingBig.classList.remove('invert-blue-active');
  }
}

function changeLtrSpcMiddle() {
  elementsStorage.bodyEl.style.letterSpacing = '0.05em'
  elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Стандартная');
  elementsStorage.btnLtrSpacingBig.setAttribute('data-text-ltr-spacing-big', 'Большой');
  elementsStorage.btnLHMid.setAttribute('data-text-lh-mid', 'Полуторн.');
  elementsStorage.elementContainer.style.gridTemplateColumns = '445px 370px 410px';
  if (elementsStorage.btnFontSmall.classList.contains('active') ||
    elementsStorage.btnFontSmall.classList.contains('invert-active') ||
    elementsStorage.btnFontSmall.classList.contains('invert-blue-active')) {
    elementsStorage.btnLtrSpacingNormal.setAttribute('data-text-ltr-spacing-normal', 'Стандартный');
    elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-middle', 'Увеличенный');
    elementsStorage.btnLtrSpacingBig.setAttribute('data-text-ltr-spacing-big', 'Большой');
  } else if (elementsStorage.btnFontLarge.classList.contains('active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-blue-active')) {
    elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Стандарт.');
    elementsStorage.elementContainer.style.gridTemplateColumns = '468px 406px 410px';
  }
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnLtrSpacingNormal.classList.remove('invert-active');
    elementsStorage.btnLtrSpacingMiddle.classList.add('invert-active');
    elementsStorage.btnLtrSpacingBig.classList.remove('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnLtrSpacingNormal.classList.remove('active');
    elementsStorage.btnLtrSpacingMiddle.classList.add('active');
    elementsStorage.btnLtrSpacingBig.classList.remove('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnLtrSpacingNormal.classList.remove('invert-blue-active');
    elementsStorage.btnLtrSpacingMiddle.classList.add('invert-blue-active');
    elementsStorage.btnLtrSpacingBig.classList.remove('invert-blue-active');
  }
}

function changeLtrSpcBig() {
  elementsStorage.bodyEl.style.letterSpacing = '0.12em';
  elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Стандарт.');
  elementsStorage.btnLHSingle.setAttribute('data-text-lh-single', 'Одинарн.');
  elementsStorage.elementContainer.style.gridTemplateColumns = '464px 406px 410px';
  if (elementsStorage.btnFontSmall.classList.contains('active') ||
    elementsStorage.btnFontSmall.classList.contains('invert-active') ||
    elementsStorage.btnFontSmall.classList.contains('invert-blue-active')) {
    elementsStorage.btnLtrSpacingNormal.setAttribute('data-text-ltr-spacing-normal', 'Стандартный');
    elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-middle', 'Увеличенный');
    elementsStorage.btnLtrSpacingBig.setAttribute('data-text-ltr-spacing-big', 'Большой');
    elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Стандартная');

  } else if (elementsStorage.btnFontMedium.classList.contains('active') ||
    elementsStorage.btnFontMedium.classList.contains('invert-active') ||
    elementsStorage.btnFontMedium.classList.contains('invert-blue-active')) {
    elementsStorage.btnLtrSpacingNormal.setAttribute('data-text-ltr-spacing-normal', 'Стандарт.');
    elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-middle', 'Увелич.');
    elementsStorage.btnLtrSpacingBig.setAttribute('data-text-ltr-spacing-big', 'Большой');
  } else if (elementsStorage.btnFontLarge.classList.contains('active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-blue-active')) {
    elementsStorage.btnLtrSpacingNormal.setAttribute('data-text-ltr-spacing-normal', 'Станд.');
    elementsStorage.btnLtrSpacingMiddle.setAttribute('data-text-ltr-spacing-middle', 'Увелич.');
    elementsStorage.btnLtrSpacingBig.setAttribute('data-text-ltr-spacing-big', 'Большой');
    elementsStorage.elementContainer.style.gridTemplateColumns = '466px 406px 410px';
    elementsStorage.btnInverse.setAttribute('data-text-palette-inverse', 'Инверс.')
  }
  if (elementsStorage.btnFontLarge.classList.contains('active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-blue-active')) {
    elementsStorage.btnStandart.setAttribute('data-text-palette-standart', 'Станд.');
  }
  if (elementsStorage.btnFontLarge.classList.contains('active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-blue-active')) {
    elementsStorage.btnLHMid.setAttribute('data-text-lh-mid', 'Полутор.');
  }
  if (elementsStorage.btnFontLarge.classList.contains('active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-active') ||
    elementsStorage.btnFontLarge.classList.contains('invert-blue-active')) {
    elementsStorage.btnLHSingle.setAttribute('data-text-lh-single', 'Один.');
  }

  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnLtrSpacingNormal.classList.remove('invert-active');
    elementsStorage.btnLtrSpacingMiddle.classList.remove('invert-active');
    elementsStorage.btnLtrSpacingBig.classList.add('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnLtrSpacingNormal.classList.remove('active');
    elementsStorage.btnLtrSpacingMiddle.classList.remove('active');
    elementsStorage.btnLtrSpacingBig.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnLtrSpacingNormal.classList.remove('invert-blue-active');
    elementsStorage.btnLtrSpacingMiddle.classList.remove('invert-blue-active');
    elementsStorage.btnLtrSpacingBig.classList.add('invert-blue-active');
  }

}

//Изображения
function showImg() {
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnHideImg.classList.remove('invert-active');
    elementsStorage.btnShowImg.classList.add('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnHideImg.classList.remove('active');
    elementsStorage.btnShowImg.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnHideImg.classList.remove('invert-blue-active');
    elementsStorage.btnShowImg.classList.add('invert-blue-active');
  }
}

function hideImg() {
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnShowImg.classList.remove('invert-active');
    elementsStorage.btnHideImg.classList.add('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnShowImg.classList.remove('active');
    elementsStorage.btnHideImg.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnShowImg.classList.remove('invert-blue-active');
    elementsStorage.btnHideImg.classList.add('invert-blue-active');
  }
}

//Шрифт
function switchFontOnSansserif() {
  elementsStorage.bodyEl.style.fontFamily = 'Arial, Helvetica, sans-serif';
  let arr = [...elementsStorage.allButton].map(element => element.style.fontFamily = 'Arial');
  elementsStorage.btnFontSerif.style.fontFamily = 'Times New Roman';
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnFontSerif.classList.remove('invert-active');
    elementsStorage.btnFontSansserif.classList.add('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnFontSerif.classList.remove('active');
    elementsStorage.btnFontSansserif.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnFontSerif.classList.remove('invert-blue-active');
    elementsStorage.btnFontSansserif.classList.add('invert-blue-active');
  }
}

function switchFontOnSerif() {
  elementsStorage.bodyEl.style.fontFamily = 'Times New Roman, serif';
  let arr = [...elementsStorage.allButton].map(element => element.style.fontFamily = 'Times New Roman');
  elementsStorage.btnFontSansserif.style.fontFamily = 'Arial';
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnFontSansserif.classList.remove('invert-active');
    elementsStorage.btnFontSerif.classList.add('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnFontSansserif.classList.remove('active');
    elementsStorage.btnFontSerif.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnFontSansserif.classList.remove('invert-blue-active');
    elementsStorage.btnFontSerif.classList.add('invert-blue-active');
  }
}

//Межстрочный интервал
function changeLHSingle() {
  elementsStorage.elementLongBlockElement.forEach(item => {
    item.style.lineHeight = '1'
  })
  elementsStorage.elementBlockElement.forEach(item => {
    item.style.lineHeight = '1'
  })

  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnLHDouble.classList.remove('invert-active');
    elementsStorage.btnLHMid.classList.remove('invert-active');
    elementsStorage.btnLHSingle.classList.add('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnLHDouble.classList.remove('active');
    elementsStorage.btnLHMid.classList.remove('active');
    elementsStorage.btnLHSingle.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnLHDouble.classList.remove('invert-blue-active');
    elementsStorage.btnLHMid.classList.remove('invert-blue-active');
    elementsStorage.btnLHSingle.classList.add('invert-blue-active');
  }
}

function changeLHMid() {
  elementsStorage.elementLongBlockElement.forEach(item => {
    item.style.lineHeight = '1.5'
  })
  elementsStorage.elementBlockElement.forEach(item => {
    item.style.lineHeight = '1.5'
  })
  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnLHDouble.classList.remove('invert-active');
    elementsStorage.btnLHSingle.classList.remove('invert-active');
    elementsStorage.btnLHMid.classList.add('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnLHDouble.classList.remove('active');
    elementsStorage.btnLHSingle.classList.remove('active');
    elementsStorage.btnLHMid.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnLHDouble.classList.remove('invert-blue-active');
    elementsStorage.btnLHSingle.classList.remove('invert-blue-active');
    elementsStorage.btnLHMid.classList.add('invert-blue-active');
  }
}

function changeLHDouble() {
  elementsStorage.elementLongBlockElement.forEach(item => {
    item.style.lineHeight = '2'
  })
  elementsStorage.elementBlockElement.forEach(item => {
    item.style.lineHeight = '2'
  })

  if (elementsStorage.bodyEl.classList.contains('invert')) {
    elementsStorage.btnLHSingle.classList.remove('invert-active');
    elementsStorage.btnLHMid.classList.remove('invert-active');
    elementsStorage.btnLHDouble.classList.add('invert-active');
  }
  if (!elementsStorage.bodyEl.classList.contains('')) {
    elementsStorage.btnLHSingle.classList.remove('active');
    elementsStorage.btnLHMid.classList.remove('active');
    elementsStorage.btnLHDouble.classList.add('active');
  }
  if (elementsStorage.bodyEl.classList.contains('invert-blue')) {
    elementsStorage.btnLHSingle.classList.remove('invert-blue-active');
    elementsStorage.btnLHMid.classList.remove('invert-blue-active');
    elementsStorage.btnLHDouble.classList.add('invert-blue-active');
  }
}

function clearClass() {
  elementsStorage.bodyEl.classList.value = '';
  elementsStorage.elementPanelName.forEach(item => {
    item.classList.value = '';
    item.classList.add('spacial-panel-name');
  })
  elementsStorage.elementLongBlock.forEach(item => {
    item.classList.value = '';
    item.classList.add('spacial-panel-long-block-button');
  })
  elementsStorage.btnStandart.classList.value = '';
  elementsStorage.btnStandart.classList.value = 'spacial-panel-block-button__element spacial-panel-block-button__element_standart';
  elementsStorage.btnInverse.classList.value = '';
  elementsStorage.btnInverse.classList.value = 'spacial-panel-block-button__element spacial-panel-block-button__element_inverse';
  elementsStorage.btnBlue.classList.value = '';
  elementsStorage.btnBlue.classList.value = 'spacial-panel-block-button__element spacial-panel-block-button__element_blue';
  elementsStorage.elementLink.classList.value = '';
  elementsStorage.elementLink.classList.add('spacial-panel-regularversion__link');
}