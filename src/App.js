import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Shelf from './Shelf'
import Search from './Search'
import {Route} from 'react-router-dom'
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
        <Route path="/" exact render= {()=>(
          <div>
          <BookShelf/>
            <Shelf heading="Reading" shelfType="currentlyReading" books={this.state.books} changeShelf = {this.changeShelf}/>
            <Shelf heading="Want to Read" shelfType="wantToRead" books={this.state.books} changeShelf = {this.changeShelf}/>
            <Shelf heading="Read" shelfType="read" books={this.state.books} changeShelf = {this.changeShelf}/>
          </div>
        )}>

        </Route>

        <Route path="/search" exact component={Search}/>

      </div>
    );
  }
}

export default App;
