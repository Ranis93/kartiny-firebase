'use strict';
import { calc } from './modules/calc';
import { checkTextInputs } from './modules/checkTextInputs';
//import forms from './modules/formsformdata';
import forms from './modules/formsjson';
import { mask } from './modules/mask';
import modals from './modules/modals';
import showMoreStyles from './modules/showMoreStyles';
import { sliders } from './modules/sliders';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import acconrdion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import dragDrop from './modules/dragdrop';


window.addEventListener('DOMContentLoaded', () => {

    let state ={};

    modals();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    forms(state);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '.styles-2');
    calc("#size", "#material", "#options", ".promocode", ".calc-price", state);
    filter();
    pictureSize('.sizes-block');
    acconrdion('.accordion-heading', '.accordion-block');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    dragDrop();
});