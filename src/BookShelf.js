import React, {Component} from 'react'
import Shelf from './Shelf.js'



class BookShelf extends Component {

  render(){
    return(
      <div className="book-shelf">
        <div className="heading"><h1>MyReads</h1></div>
        <div className="shelf-space"> 
        </div>
      </div>
    )
  }

}

export default BookShelf
