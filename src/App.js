import React, { Component } from 'react';
import BookShelf from './BookShelf.js'
import Shelf from './Shelf.js'
import logo from './logo.svg';
import './App.css';

const bookClass = ["Reading", "Want to Read", "Read"]
const books = [
  {title: "Book1", type: bookClass[0]},
  {title: "Book2", type: bookClass[1]},
  {title: "Book3", type: bookClass[2]}
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <BookShelf/>
          <Shelf heading={bookClass[0]} books={books} bookClass={bookClass[0]}/>
          <Shelf heading={bookClass[1]} books={books} bookClass={bookClass[1]}/>
          <Shelf heading={bookClass[2]} books={books} bookClass={bookClass[2]}/>
      </div>
    );
  }
}

export default App;
