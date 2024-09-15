import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const removeBook = (book) => {
    setBooks((prevBooks) => prevBooks.filter(b => b !== book));
  };

  const updateBook = (oldBook, newBook) => {
    setBooks((prevBooks) => {
      const index = prevBooks.indexOf(oldBook);
      if (index !== -1) {
        const updatedBooks = [...prevBooks];
        updatedBooks[index] = newBook;
        return updatedBooks;
      }
      return prevBooks;
    });
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
};