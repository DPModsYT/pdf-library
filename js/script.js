// js/script.js

// Fetch book data and display in grid
document.addEventListener("DOMContentLoaded", function () {
  fetch('books.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load books.json');
      return response.json();
    })
    .then(books => {
      const grid = document.getElementById('book-grid');
      grid.innerHTML = ''; // Clear if anything was there

      books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
          <img src="${book.thumbnail}" alt="${book.title}">
          <h2>${book.title}</h2>
          <h4>${book.subtitle}</h4>
          <p>⭐ ${book.rating}</p>
          <a class="read-btn" href="viewer.html?pdf=${encodeURIComponent(book.pdf)}" target="_blank">Read</a>
        `;
        grid.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      const grid = document.getElementById('book-grid');
      grid.innerHTML = '<p style="color:red;">Failed to load books. Please check your "books.json" file or internet connection.</p>';
    });
});
