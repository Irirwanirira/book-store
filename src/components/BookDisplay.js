import { useSelector } from 'react-redux';
import Book from './Book';
import InputBooks from './InputForm';
/* eslint-disable */
const BookDisplay = () => {
  const Booklists = useSelector((state) => state.Books)
  return (
    <div>
      {Booklists.map((item) => (
        <div className="bookCard">
          <Book key={ item.id } Book={item.Book} author={item.author} id={item.id} />
        </div>
      ))}
      <InputBooks />
    </div>
  );
};
export default BookDisplay;
