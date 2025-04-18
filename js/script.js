fetch('books.json')
  .then(res => res.json())
  .then(books => {
    const grid = document.getElementById('book-grid');
    books.forEach(book => {
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <img src="${book.thumbnail}" alt="${book.title}">
        <h2>${book.title}</h2>
        <h4>${book.subtitle}</h4>
        <p>⭐ ${book.rating}</p>
        <a href="viewer.html?pdf=${encodeURIComponent(book.pdf)}" class="read-btn">Read</a>
      `;
      grid.appendChild(card);
    });
  });
