import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'



class BookShelf extends Component {

  render(){
    return(
      <div className="book-shelf">
        <div className="heading"><h1>MyReads</h1></div>
        <div className="shelf-space">
        </div>
        <Link to="/search" className="search">Search Books</Link>
      </div>
    )
  }

}

export default BookShelf
