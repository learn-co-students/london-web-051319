import React, { Component } from "react";
import Book from "../components/Book";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>{this.props.headerContent}</h1>
        <ul>{
          this.props.books.map(book => <Book key={book.id} {...book} handleClick={() => this.props.bookClickHandler(book)} />)
        }</ul>
      </div>
    );
  }
}

export default BookList;
