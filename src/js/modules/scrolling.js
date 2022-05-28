const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        // Если часть документа которую мы уже пролистали
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    //  scrolling with raf (request Animation Frame)

    let links = document.querySelectorAll('[href^="#"]');      // все ссылки котор. начинаются с # т.е. локальные .
    let speed = 0.1;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                startTime = null;
                // .getBoundingClientRect() дает доступ получить доступ к свойствам.

            requestAnimationFrame(step);

            function step(time) {
                if (startTime === null) {
                    startTime = time;
                }

                let progress = time - startTime,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);        // анимация по коор. у .

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

//     // pure js scrolling code
//     const element = document.documentElement,
//           body = document.body;

//     const calcScroll = () => {
//         upElem.addEventListener('click', function(event) {
//             let scrollTop = Math.round(body.scrollTop || element.scrollTop);        // сколько пролистали сверху .

//             if (this.hash !== '') {
//                 event.preventDefault();
//                 let hashElement = document.querySelector(this.hash);            // хэш элемент со знаком решетка .
//                 let hashElementTop = 0;            // сколько осталось пролистать до родителя хэш элемента .

//                 // свойство hashElement.offsetParent возвращ. тот элемент относительно которого будет позиционироваться хэш элемент
//                 // т.е. возвращ. родителя
//                 while (hashElement.offsetParent) {
//                     hashElementTop += hashElement.offsetTop;
//                      // свойство hashElement.offsetTop позволяет определить сколько осталось пикселей до верхней границы родительского элемента от  хэш элемента
//                     hashElement = hashElement.offsetParent;
//                 }

//                 hashElementTop = Math.round(hashElementTop);
//                 smoothScroll(scrollTop, hashElementTop, this.hash);
//             }
//         });
//     };

//    const smoothScroll = (from, to, hash) => {
//         let timeInterval = 1,
//             prevScrollTop,
//             speed;

//         if (to > from) {
//             speed = 30;
//         } else {
//             speed = -30;
//         }
        
//         let move = setInterval(function() {
//             let scrollTop = Math.round(body.scrollTop || element.scrollTop);

//             if (
//                 prevScrollTop === scrollTop ||
//                 (to > from && scrollTop >= to) ||
//                 (to < from && scrollTop <= to)
//             ) {
//                 clearInterval(move);
//                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
//             } else {
//                 body.scrollTop += speed;
//                 element.scrollTop += speed;
//                 prevScrollTop = scrollTop;
//             }
//         }, timeInterval);
//     };

//     calcScroll(); 

};

export default scrolling;