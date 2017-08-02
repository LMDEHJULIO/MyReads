import React, {Component} from 'react'

class Book extends Component {
    
    render(){
        
        const book = this.props.book;
        
        return (
            
            <li className="book" key={book.id}>
                <div className="book-top">
                  
  
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`, backgroundRepeat: 'no-repeat'}}></div>
  
                      <div className="book-shelf-changer">
                        <select value = {book.shelf} onChange={(event) => this.props.changeShelf(book, event.target.value)}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">Remove</option>
                        </select>
                      </div>
                      
                  </div>
            </li>  
            
            
        )
    }
}

export default Book