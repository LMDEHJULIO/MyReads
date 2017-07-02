import React, { Component } from 'react';
import BookShelf from './BookShelf.js'
import Shelf from './Shelf.js'
import logo from './logo.svg';
import './App.css';

const bookClass = ["Reading", "Want to Read", "Read"]
const selectBox = document.getElementById('typeChanger');



class App extends Component {
  state = {
    books : [
      {title: "Book1", type: bookClass[0]},
      {title: "Book2", type: bookClass[1]},
      {title: "Book3", type: bookClass[2]}
    ]
  }

  changeType = (book) => {
    this.setState(
      book.type = selectBox.value
    )
  }

  render() {
    return (
      <div className="App">
        <BookShelf/>
          <Shelf heading={bookClass[0]} books={this.state.books} bookClass={bookClass}/>
          <Shelf heading={bookClass[1]} books={this.state.books} bookClass={bookClass}/>
          <Shelf heading={bookClass[2]} books={this.state.books} bookClass={bookClass}/>
      </div>
    );
  }
}

export default App;
