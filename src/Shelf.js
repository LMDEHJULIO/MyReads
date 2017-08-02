import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {

  render(){
    const shelfType = this.props.shelfType
    const heading = this.props.heading
    const books = this.props.books
  

    return(
      <div className="bookshelf">

        <h3 className="bookshelf-title">{heading}</h3>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter(book => ( book.shelf === shelfType)).map(book => (
                <li key={book.id}>
                <Book book={book} changeShelf = {this.props.changeShelf}/>
                </li>
              ))}
            </ol>
          </div>
      </div>
    )
  }

}

export default Shelf
