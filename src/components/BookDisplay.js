import { useSelector } from 'react-redux';
import Book from './Book';
import InputBooks from './InputForm';
/* eslint-disable */ 
const BookDisplay = () => {
  const Books = useSelector((state) => state.Books)
  return (
    <div>
      {Books.map((book) => (
        <div key={book.id} className="bookCard">
          <Book book={ book } title={book.Book} author={book.author} id={book.id} />
        </div>
      ))}
      <InputBooks />
    </div>
  );
};
export default BookDisplay;
