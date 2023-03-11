import {useDispatch} from 'react-redux';
import {fetchCategoryById} from '../store/actions/action-category';

export const ModalCategoryButton = ({type, getId}) => {
  const dispatch = useDispatch();
  const handleGetById = e => {
    if (e.target.id) {
      dispatch(fetchCategoryById(e.target.id));
    }
  };

  return (
    <label
      id={getId}
      onClick={e => handleGetById(e)}
      htmlFor="my-modal"
      className="btn btn-primary modal-button btn-sm"
      type="submit"
    >
      {type === 'edit' ? 'edit' : 'add category'}
    </label>
  );
};
