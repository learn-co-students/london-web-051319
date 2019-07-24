import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook} />
        <ul>{
          this.props.books.map(book => <Book key={book.id} {...book} handleClick={() => this.props.addBookToShelf(book)} />)
        }</ul>
      </div>
    );
  }
}

export default BookList;
