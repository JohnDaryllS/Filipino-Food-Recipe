function searchCards() {
    var input = document.getElementById('search-bar').value.toLowerCase();
    var cards = document.getElementsByClassName('card');

    for (var i = 0; i < cards.length; i++) {
        var cardText = cards[i].textContent.toLowerCase();
        if (cardText.includes(input)) {
            cards[i].style.display = 'block'; // Show the matching card
        } else {
            cards[i].style.display = 'none'; // Hide the non-matching card
        }
    }
}