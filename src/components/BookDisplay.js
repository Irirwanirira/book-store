import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/books/books';
import Book from './Book';
import InputBooks from './InputForm';
import './BookDisplay.css'

const BookDisplay = () => {
  const dispatch = useDispatch();

  const Booklists = useSelector((state) => state.Books);
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);
  return (
    <section className='section'>
      <div className='book-part'>
        {Booklists.map((item) => (
          <div key={item.item_id} className="bookCar">
            <Book
              title={item.title}
              author={item.author}
              id={item.item_id}
              category={item.category}
            />
          </div>
        ))}
      </div>
      <div className='input'>
       <InputBooks />
      </div>
    </section>
  );
};
export default BookDisplay;
