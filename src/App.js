import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Shelf from './Shelf'
import logo from './logo.svg';
import * as BooksAPI from './utils/BooksAPI'
import './App.css';

const selectBox = document.getElementById('typeChanger');

class App extends Component {

  state = {
    books : []
  }


  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(()=> this.getBooks())
  }

  getBooks = () => {
  BooksAPI.getAll().then( books => { this.setState({books})});
  };


  componentDidMount(){
    this.getBooks();
  }

  render() {
    return (
      <div className="App">
        <BookShelf/>
          <Shelf heading="Reading" shelfType="currentlyReading" books={this.state.books} changeShelf = {this.changeShelf}/>
          <Shelf heading="Want to Read" shelfType="wantToRead" books={this.state.books} changeShelf = {this.changeShelf}/>
          <Shelf heading="Read" shelfType="read" books={this.state.books} changeShelf = {this.changeShelf}/>
      </div>
    );
  }
}

export default App;
