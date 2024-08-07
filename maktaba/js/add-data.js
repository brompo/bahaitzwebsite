
document.addEventListener('DOMContentLoaded', function() {
fetch('../../data.json')
  .then(response => response.json())
  .then(books => {
    const container = document.getElementById('books-container');
    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'col-md-4';
      bookCard.innerHTML = `
        <div class="card mb-4 border-0 rounded-3 position-relative">
          <div class="swiper-slide slide-categories">
            <div class="card position-relative p-4 border rounded-3">
              <a href="${book.link}" target="_blank" rel="noopener noreferrer">
                <img src="${book.image}" class="img-fluid shadow-sm" alt="${book.title}">
                <h6 class="mt-4 mb-0 fw-bold">${book.title}</h6>
              </a>
              <div class="review-content d-flex">
                <p class="my-2 me-2 fs-6 text-black-50">${book.description}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      container.appendChild(bookCard);
    });
  })
  .catch(error => console.error('Error loading books:', error));
});
  