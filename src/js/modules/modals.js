
// All modal windows

const modals = () => {
    let btnPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, destroy = false) {
        const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),                // установить обязательно к модальному окну.
        scroll = calcScroll();                                              // узнаем ширину полосы прокрутки .

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {                                             // обязательно, чтобы при клике на ссылку не перезагружалась страница
                    e.preventDefault();
                }
                
                btnPressed = true;

                if (destroy === true) {
                    trigger.remove();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');                   // ко всем модальным окнам добавляем анимацию из animate.css
                });
                document.body.style.marginRight = `${scroll}px`;              // устанавливаем внешний отступ справа от элемента
                modal.style.display = "block";
                document.body.style.overflow = "hidden";                      // стандартный способ обездвижить страницу при открытии модального окна
            });                                                               // можно было использовать метод bootstrap: document.body.calssList.add('modal-open');
    
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;    
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display1;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display1 = 'block';
                }
            });

            if (!display1) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
                let scroll = calcScroll(); 
                document.body.style.marginRight = `${scroll}px`;
            }            
        }, time);
    }

    function calcScroll() {                             // функция нужна чтобы при открытии мод. окон не прыгало изображение при исчезновении полосы прокрутки .
        let div = document.createElement('div');        // создаем элемент, затем удаляем .

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;  // (ширина вместе со скроллом) - (ширина без скролла)
        div.remove();

        return scrollWidth;                                 // сам элемент не нужен. узнаем только ширину полосы прокрутки
    }

    function openModalByScroll(selector) {
        window.addEventListener('scroll', () => {           //если 
            if ((btnPressed === false) && 
                (window.pageYOffset + document.documentElement.clientHeight >= 
                    document.documentElement.scrollHeight)) {
                    document.querySelector(selector).click();
                    //window.removeEventListener('scroll', openModalByScroll);
            }
        });
    }
    
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.infinite', '.popup-gift', '.popup-gift .popup-close', true, true);
    openModalByScroll('.infinite');
    //showModalByTime('.popup-consultation', 60000);
};

// const modals = () => {

//     // другой более простой способ

//     const btnModal = document.querySelector('.popup_engineer_btn'),
//         modalEngineer = document.querySelector('.popup_engineer'),
//         modalCall = document.querySelector('.popup'),
//         btnCloseModal = document.querySelectorAll('.popup_close'),
//         phoneLink = document.querySelectorAll('.phone_link');

//     btnModal.addEventListener('click', () => openModal(modalEngineer));

//     modalEngineer.addEventListener('click', (event) => {
//         if (event.target == modalEngineer) {
//             closeModal(modalEngineer);
//         }
//     });

//     modalCall.addEventListener('click', (event) => {
//         if (event.target == modalCall) {
//             closeModal(modalCall);
//         }
//     });

//     btnCloseModal.forEach(btn => {
//         btn.addEventListener('click', () => {
//             closeModal(modalEngineer);
//             closeModal(modalCall);
//         });
//     });

//     phoneLink.forEach(btn => {
//         btn.addEventListener('click', () => openModal(modalCall));
//     });

//     function openModal(item) {
//         item.style.display = 'block';
//     }
//     function closeModal(item) {
//         item.style.display = 'none';
//     }
// };

export default modals;