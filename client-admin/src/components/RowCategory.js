import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCategory,
  fetchCategories,
} from '../store/actions/action-category';
import { ModalCategoryButton } from './ModalCategoryButton';

const RowCategory = () => {
  const { category } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteCategory(id));
    // fetchCategories();
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      {category.categories?.map((el, i) => (
        <tr key={i}>
          <th>{i + 1}</th>
          <td>{el.name}</td>
          <td>{el.createdAt}</td>
          <td>{el.updatedAt}</td>
          <td>
            <ModalCategoryButton getId={el.id} type="edit" />

            <button
              onClick={e => handleDelete(e.target.id)}
              id={el.id}
              className="btn btn-sm btn-error"
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
