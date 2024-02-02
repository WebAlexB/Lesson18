const BUTTON_VALUE = 4;
const btns = [];
const promises = [];
const selectedIndexes = [];
const selectedEvenIndexes = [];

for (let i = 1; i <= BUTTON_VALUE; i++) {
    const btnEl = document.createElement('button');
    btnEl.textContent = i;
    btnEl.className = 'btn';
    document.body.append(btnEl);
    btns.push(btnEl);

    const btnPromise = new Promise(resolve => {
        btnEl.addEventListener('click', function () {
            addShadow(i);
            resolve(i);
        });
    });

    promises.push(btnPromise);
}

Promise.all(promises).then(indexes => {
    selectedIndexes.push(...indexes);
    const evenSelectedIndexes = selectedIndexes.filter(index => index % 2 === 0);
    selectedEvenIndexes.push(...evenSelectedIndexes);
    if (evenSelectedIndexes.length === BUTTON_VALUE / 2) {
        alert("Всі четні кнопки були натиснуті!");
    }
    if (evenSelectedIndexes.length !== BUTTON_VALUE / 2) {
        alert("Не всі четні кнопки були натиснуті.");
    }
    if (selectedIndexes.length === BUTTON_VALUE) {
        alert("Всі кнопки були натиснуті!");
    }
});

function addShadow(index) {
    btns[index - 1].classList.add('button-shadow');
}
