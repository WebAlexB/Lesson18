const BUTTON_VALUE = 4;
const btns = [];
let oddClicked = 0;
let evenClicked = 0;
const promises = [];

for (let i = 1; i <= BUTTON_VALUE; i++) {
    const btnEl = document.createElement('button');
    btnEl.textContent = i;
    btnEl.className = 'btn';
    document.body.append(btnEl);
    btns.push(btnEl);

    const btnPromise = new Promise(resolve => {
        btnEl.addEventListener('click', function () {
            if (!btnEl.classList.contains('button-shadow')) {
                addShadow(i);
                btns.splice(btns.indexOf(btnEl), 1);
                resolve(i);
            }
        });
    });

    promises.push(btnPromise);
}

Promise.all(promises).then(() => {
    alert("Всі кнопки були натиснуті!");
});

function addShadow(index) {
    if (index % 2 === 0) {
        btns[index - 1].classList.add('button-shadow');
        evenClicked++;
    } else {
        btns[index - 1].classList.add('button-shadow');
        oddClicked++;
    }

    checkAllButtonsClicked();
}

function checkAllButtonsClicked() {
    if (oddClicked === BUTTON_VALUE / 2) {
        alert("Всі непарні кнопки були натиснуті!");
    }

    if (evenClicked === BUTTON_VALUE / 2) {
        alert("Всі парні кнопки були натиснуті!");
    }
}
