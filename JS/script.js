function showPopupCard(cardNumber) {
    var popup = document.getElementById('popup-card');
    var popupText = document.getElementById('popup-text');
    popupText.textContent = 'This is the ' + cardNumber + ' recipe';
    popup.style.display = 'flex';
}

function closePopupCard() {
    var popup = document.getElementById('popup-card');
    popup.style.display = 'none';
}
