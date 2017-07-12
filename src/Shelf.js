import React, {Component} from 'react'
import * as BooksAPI from './utils/BooksAPI'

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
                <div className="book-top">
                  <li>

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

export default Shelf
