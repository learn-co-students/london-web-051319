function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", e => handleSubmission(e));

function handleSubmission(e) {
  e.preventDefault();
  const [titleInputNode, authorInputNode, imgInputNode] = e.target;
  const bookObj = {
    title: titleInputNode.value,
    author: authorInputNode.value,
    img: imgInputNode.value
  };

  createABook(bookObj).then(addBook);
}

function createABook(book) {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(book => book.json());
}

// globals for fetching

const BASE_URL = "http://localhost:3001/books";

// init
function getAllBooksAndPutThemInTheDOM() {
  fetch("http://localhost:3001/books")
    .then(booksData => booksData.json())
    .then(booksArray => showBooks(booksArray));
}

function init() {
  getAllBooksAndPutThemInTheDOM();
}

init();
