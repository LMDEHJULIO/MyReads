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
          {books.filter(book => book.type === bookClass).map(book => (
            <li key={book.title}>{book.title}</li>
          ))}
        </ul>
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
