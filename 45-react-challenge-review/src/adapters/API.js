const booksUrl = 'http://localhost:3005/books'

const getBooks = () => fetch(booksUrl).then(res => res.json()).then(books => books.filter(book => !!book.author && !!book.title && !!book.img))

const postBook = book => fetch(booksUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
}).then(res => res.json())

export default {
    getBooks,
    postBook
}