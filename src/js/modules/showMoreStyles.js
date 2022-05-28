import { getResource } from "../services/resquests";

const showMoreStyles = (trigger, styles) => {
    //const cards = document.querySelectorAll(styles);
    const btn = document.querySelector(trigger);
    let wrapper = document.querySelector('#styles .row');

    //  пример когда нужно просто показать скрытые элементы из страницы
    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });
    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     //btn.style.display = 'none';
    //     btn.remove();
    // });
    

    btn.addEventListener('click', function() {
        getResource('https://winmarket-1-default-rtdb.europe-west1.firebasedatabase.app/styles.json')
        .then(res => createCards(res))
        .catch(error => console.log(error));

        this.remove();
    });

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');
            let {src, title, link} = item;
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            wrapper.appendChild(card);
        });
    }
};

export default showMoreStyles;