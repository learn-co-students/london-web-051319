import React from "react";
import Book from "../components/Book";

const Bookshelf = ({ books, removeBookFromShelf }) => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{
        books.map(book => <Book key={book.id} {...book} handleClick={() => removeBookFromShelf(book)} />)
      }</ul>
    </div>
  );
};

export default Bookshelf;
