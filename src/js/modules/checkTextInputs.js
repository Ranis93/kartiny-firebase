const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {             // символы а-яё 0-9 во всей строке(i), и вне зависимости от регистра(g)
                e.preventDefault();
            }
        });
    });
};

export {checkTextInputs};