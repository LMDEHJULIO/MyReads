import React, {Component} from 'react'



class Shelf extends Component {
  // BooksAPI.getAll().then()

  // BooksAPI.update

  //lifecycle events for rendering of books
  //and change of type value possibly "will recieve props"
  // componentDidMount -> getAll
  //BooksAPI.getAll.then(books)

  //{ <select className="type-changer">
  //   <option value="none" disabled>Move to...</option>
  //   <option value={`${bookClass[0]}`}>{bookClass[0]}</option>
  //   <option value={`${bookClass[1]}`}>{bookClass[1]}</option>
  //   <option value={`${bookClass[2]}`}>{bookClass[2]}</option>
  // </select>}

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
                <li key={book.title}>{book.title}</li>
              ))}
            </ul>
          </div>


      </div>
    )
  }

}

export default Shelf
