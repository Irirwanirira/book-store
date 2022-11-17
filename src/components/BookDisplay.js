import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/books/books';
import Book from './Book';
import InputBooks from './InputForm';

/* eslint-disable */
const BookDisplay = () => {
  const dispatch = useDispatch();

  const Booklists = useSelector((state) => state.Books);
  useEffect(()=> {
    dispatch(getBook());
  }, [dispatch]);
  return (
    <div>
      {Booklists.map((item) => (
        <div className='bookCard'>
          <Book key={ item.item_id } title={item.title} author={item.author} id={item.item_id} category={item.category} />
        </div>
      ))}
      <InputBooks />
    </div>
  );
};
export default BookDisplay;
