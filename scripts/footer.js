function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.add('active');
}

function hideError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.classList.remove('active');
}

document.getElementById('submitBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('emailInput');
    const inputText = emailInput.value;
    const popupMessage = document.getElementById('popupMessage');
    const overlay = document.getElementById('overlay');
    hideError();

    if (!inputText) {
        showError('Заповніть це поле');
    } else if (!inputText.includes('@')) {
        showError('Адреса електронної пошти має містити символ @');
    } else if (!inputText.includes('mail')) {
        showError('Введіть частину адреси після символу @');
    } else {
        popupMessage1.textContent = 'Успіх!';
        popupMessage2.textContent = 'Дякуємо за підписку';
        overlay.style.display = 'flex';
        document.body.style.backgroundColor = 'rgba(208, 204, 204, 0.2)';
    }
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.body.style.backgroundColor = '';
});

document.body.addEventListener('click', function(event) {
    const emailInput = document.getElementById('emailInput');
    if (!emailInput.contains(event.target)){
        hideError();
    }
});
