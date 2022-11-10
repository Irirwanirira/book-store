import React from 'react'

const Book = ({book}) => {
  return (
    <div>
         <p>Title: {book.Book}</p>
          <p>Author: {book.author}</p>
    </div>
  )
}

export default Book