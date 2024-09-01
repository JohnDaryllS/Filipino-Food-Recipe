document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
        const targetId = event.currentTarget.getAttribute('data-target');
        const cardContainer = document.getElementById(targetId);
        
        if (cardContainer.classList.contains('hidden')) {
            cardContainer.classList.remove('hidden');
        } else {
            cardContainer.classList.add('hidden');
        }
    });
});
