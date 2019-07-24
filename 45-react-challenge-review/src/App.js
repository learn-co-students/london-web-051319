import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import API from "./adapters/API";

class App extends Component {

  state = {
    books: [],
    shelf: []
  }

  componentDidMount() {
    API.getBooks()
      .then(books => this.setState({ books }))
  }

  addBookToShelf = book => {
    if (this.state.shelf.includes(book.id)) return;
    // if (this.state.shelf.map(book => book.id).includes(book.id)) return;
    this.setState({
      shelf: [...this.state.shelf, book.id]
    })
  }

  removeBookFromShelf = book => this.setState({
    shelf: this.state.shelf.filter(bookId => bookId !== book.id)
  })

  findBook = bookId => this.state.books.find(book => book.id === bookId)

  getShelfBooks = () => this.state.shelf.map(this.findBook)

  addBook = newBook => {
    API.postBook(newBook)
      .then(book => this.setState({
        books: [...this.state.books, book]
      }))

  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBookToShelf={this.addBookToShelf} addBook={this.addBook} />
        <Bookshelf books={this.getShelfBooks()} removeBookFromShelf={this.removeBookFromShelf} />
      </div>
    );
  }
}

export default App;
