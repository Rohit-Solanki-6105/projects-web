window.addEventListener('DOMContentLoaded', (event) => {
  const searchBar = document.getElementById('searchbar');
  searchBar.addEventListener('input', searchPaintings);
});

function searchPaintings(event) {
  const searchValue = event.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
      const desc = card.querySelector('.desc');
      const descText = desc.textContent.toLowerCase();

      if (descText.includes(searchValue)) {
          card.style.display = 'flex';
      } else {
          card.style.display = 'none';
      }
  });
}