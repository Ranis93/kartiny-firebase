// реализация с помощью css
// const acconrdion = (triggerSelector, itemsSelector) => {
//     const btns = document.querySelectorAll(triggerSelector),
//           blocks = document.querySelectorAll(itemsSelector);

//     blocks.forEach(block => {
//         block.classList.add('animated', 'fadeInDown');
//     });

//     btns.forEach(btn => {
//         btn.addEventListener('mouseenter', function() {
//             if (!this.classList.contains('active')) {
//                 btns.forEach(btn => {
//                     btn.classList.remove('active', 'active-style');
//                 });
//                 this.classList.add('active', 'active-style'); // блокам не присваиваем display:block, (присваевается автоматически)
//                         // т.к. в main.css есть класс .accordion-heading.active+.accordion-block 
//             }
//         });
//     });
// };

const acconrdion = (triggerSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggerSelector),
          blocks = document.querySelectorAll(itemsSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            blocks.forEach(block => {
                block.style.display = 'none';
            });
            btns.forEach(btn => {
                btn.classList.remove('active-style');
            });
            this.classList.add('active-style');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.display = 'block'; }
        });
    });
};

export default acconrdion;