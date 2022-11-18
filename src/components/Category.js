import { useSelector, useDispatch } from 'react-redux';
import { category } from '../redux/Categories/categories';

const Categories = () => {
  const Category = useSelector((state) => state.Category);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => { dispatch(category()); }}type="button">
        CHECK status
      </button>
      <p>{ Category }</p>
    </div>
  );
};

export default Categories;
