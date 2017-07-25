import React, { Component } from 'react';
import Shelf from './Shelf'
import Search from './Search'
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css';

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
        <Route exact path="/" render= {()=>(
        
          <div>
          <div className="list-books-title"><h1>MyReads</h1></div>
            <div class="list-books-content">
            
                <Shelf heading="Reading" shelfType="currentlyReading" books={this.state.books} changeShelf = {this.changeShelf}/>
                <Shelf heading="Want to Read" shelfType="wantToRead" books={this.state.books} changeShelf = {this.changeShelf}/>
                <Shelf heading="Read" shelfType="read" books={this.state.books} changeShelf = {this.changeShelf}/>
                
            </div>
            
          <div className="open-search">
            <Link to="/search" className="search">Search Books</Link>
          </div>
          </div>
        )}>

        </Route>

        <Route path="/search" render= {()=>(
          <Search books={this.state.books} changeShelf={this.changeShelf}/>
        )}/>

      </div>
    );
  }
}

export default App;
