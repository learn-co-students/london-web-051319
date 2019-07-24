import React from "react";

const Book = ({ title, img, author, handleClick }) => {
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2>{title}</h2>
      <img src={img} alt={title} />
    </div>
  );
};

export default Book;
