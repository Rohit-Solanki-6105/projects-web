window.addEventListener('DOMContentLoaded', (event) => {
    const priceRange = document.getElementById('price');
    const displayPrice = document.getElementById('displayPrice');

    priceRange.addEventListener('input', updatePriceDisplay);
});

function updatePriceDisplay(event) {
    const selectedPrice = event.target.value;
    const formattedPrice = formatPrice(selectedPrice);
    displayPrice.textContent = formattedPrice;
    filterPaintingsByPrice(selectedPrice);
}

function formatPrice(price) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
    return formattedPrice;
}

function filterPaintingsByPrice(selectedPrice) {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const priceSpan = card.querySelector('.price span');
        const paintingPrice = priceSpan.textContent.trim().replace(/\D/g, '');

        if (parseInt(paintingPrice) <= selectedPrice) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}