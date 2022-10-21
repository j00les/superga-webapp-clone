import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../store/actions/action-category';
import Button from './Button';

export const ModalCategory = () => {
  const modalControl = useRef();
  const name = useRef();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createCategory(name.current.value));
    modalControl.current.checked = false;
  };

  return (
    <>
      <input
        ref={modalControl}
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            Name
            <div id="name-container w-full">
              <div className="flex grow flex-col w-full" id="form-input">
                <input
                  ref={name}
                  name="name"
                  type="text"
                  placeholder="Type here"
                  className="input  input-bordered w-full max-w-s"
                />
              </div>
            </div>
            <Button type={'submit'} />
            <Button />
          </form>
        </div>
      </div>
    </>
  );
};
