import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Shelf from './Shelf'
import logo from './logo.svg';
import * as BooksAPI from './utils/BooksAPI'
import './App.css';

const bookClass = ["Reading", "Want to Read", "Read"]
const selectBox = document.getElementById('typeChanger');
// changeType = (e,book) => {
//   this.setState(
//     book.type = e.target.value
//   )
// }

class App extends Component {

  state = {
    books : []
  }

  getBooks = () => {
  BooksAPI.getAll().then( books => { this.setState({books} )});
  };

  componentDidMount(){
    this.getBooks();
  }

  render() {
    return (
      <div className="App">
        <BookShelf/>
          <Shelf heading="Reading" shelfType="currentlyReading" books={this.state.books} bookClass={bookClass} />
          <Shelf heading="Want to Read" shelfType="wantToRead" books={this.state.books} bookClass={bookClass} />
          <Shelf heading="Read" shelfType="read" books={this.state.books} bookClass={bookClass} />
      </div>
    );
  }
}

export default App;
