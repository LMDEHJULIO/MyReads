import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './utils/BooksAPI';

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

      <div>
        <input
        className="search-books"
        type="text"
        placeholder="Search Books"
        value = {this.state.query}
        onChange= {(event)=> this.updateQuery(event.target.value)}
        />

        <ul>
          {showingBooks.map(book => (
            <li>{book.title}</li>
          ))}
        </ul>

      </div>

    )
  }



}

export default Search
