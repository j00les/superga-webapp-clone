import { useDispatch } from 'react-redux';
import { getProductById } from '../store/actions/action-product';

export const ModalImageButton = ({ getId }) => {
  const dispatch = useDispatch();

  function handleClick(e) {
    const id = e.target.id;
    dispatch(getProductById(id));
  }

  return (
    <label
      id={getId}
      onClick={e => handleClick(e)}
      htmlFor="my-modal-1"
      className="btn btn-accent btn-sm modal-button"
    >
      show
    </label>
  );
};
