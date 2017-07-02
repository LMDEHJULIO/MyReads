import React, {Component} from 'react'



class Shelf extends Component {

  render(){
    const bookClass = this.props.bookClass
    const heading = this.props.heading
    const books = this.props.books

    return(
      <div>
        <h3>{heading}</h3>
        <ul>
          {books.filter(book => book.type === heading).map(book => (
            <li key={book.title}>{book.title}</li>
            //can create background image for book cover
          ))}
        </ul>

        <select className="type-changer">
          <option value="none" disabled>Move to...</option>
          <option value={`${bookClass[0]}`}>{bookClass[0]}</option>
          <option value={`${bookClass[1]}`}>{bookClass[1]}</option>
          <option value={`${bookClass[2]}`}>{bookClass[2]}</option>
        </select>
      </div>
      //   <div className="shelf">
      //   <div className="currentlyReading">
      //     //iterate over objects with currently reading class
      //   </div>
      // </div>
    )
  }

}

export default Shelf
