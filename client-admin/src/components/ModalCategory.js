import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory } from '../store/middlewares/category';
import Button from './Button';

export const ModalCategory = () => {
  const name = useRef();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createCategory(name.current.value));
  };

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
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
            <Button />
            <Button type={'submit'} />
          </form>
        </div>
      </div>
    </>
  );
};
