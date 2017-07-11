import React, {Component} from 'react'
import * as BooksAPI from './utils/BooksAPI'

class Shelf extends Component {

  render(){
    const shelfType = this.props.shelfType
    const heading = this.props.heading
    const books = this.props.books

    return(
      <div>

        <h3>{heading}</h3>
          <div className="bookshelf-books">
            <ul className="books-grid">
              {books.filter(book => ( book.shelf === shelfType)).map(book => (
                <li key={book.title} style={{backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}>
                {book.title}
                  <select className="type-changer" value = {book.shelf} onChange={(event) => this.props.changeShelf(book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                  </select>
                </li>
              ))}
            </ul>
          </div>
      </div>
    )
  }

}

export default Shelf
