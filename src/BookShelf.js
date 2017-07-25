import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'

class BookShelf extends Component {

  render(){
    return(
      <div className="book-shelf">
        <div className="list-books-title"><h1>MyReads</h1></div>
          <div className="list-books-content">
        </div>
        
        <div className="open-search">
          <Link to="/search" className="search">Search Books</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf
