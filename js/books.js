document.addEventListener("DOMContentLoaded", () => {
  fetch("data/book.json")
    .then(res => res.json())
    .then(books => {
      const bookGrid = document.getElementById("book-grid");

      books.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
          <img src="${book.thumbnail}" alt="${book.title}" />
          <h3>${book.title}</h3>
          <p>${book.subtitle}</p>
          <p>⭐ ${book.rating}</p>
          <a class="read-more" href="viewer.html?pdf=${encodeURIComponent(book.pdf)}" target="_blank">Read More</a>
        `;

        bookGrid.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Failed to load book list:", error);
    });
});
