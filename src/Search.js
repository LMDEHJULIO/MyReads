import React, {Component} from 'react'
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
      showingBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
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
              <div className="book-top">
                <li className="">
                <div className="book-cover" key={book.title} style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`, backgroundRepeat: 'no-repeat'}}></div>

                  <div className="book-shelf-changer">
                    <select value = {book.shelf} onChange={(event) => this.props.changeShelf(book, event.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                    </select>
                  </div>
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>

    )
  }



}

export default Search
