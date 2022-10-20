import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, fetchCategories } from '../store/middlewares';

const RowCategory = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteCategory(id));

    fetchCategories();
  };

  useEffect(() => {
    dispatch(fetchCategories());
    // categories;
  }, []);

  return (
    <>
      {categories?.map((el, i) => (
        <tr key={i}>
          <th>{i + 1}</th>
          <td>{el.name}</td>
          <td>{el.createdAt}</td>
          <td>{el.updatedAt}</td>
          <td>
            <button
              onClick={e => handleDelete(e.target.id)}
              id={el.id}
              className="btn btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RowCategory;
