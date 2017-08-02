import React, {Component} from 'react'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'

class Search extends Component {


  state = {
    books: [],
    query: ''
  }

  updateQuery = (query) => {
    BooksAPI.search(query).then(books=> this.setState({books}));
    this.setState({query})
  }

  render(){

    let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.state.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.state.books
    }

    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search"> Close </Link>
          <div className="searc-books-input-wrapper">
            <input
              type="text"
              placeholder="Search Books"
              value = {this.state.query}
              onChange= {(event)=> this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book => (
              <Book/>
            ))}
          </ol>
        </div>
      </div>

    )
  }



}

export default Search
