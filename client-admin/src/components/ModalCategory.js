import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCategoryStateCreator,
  createCategory,
  updateCategory,
} from '../store/actions/action-category';
import Button from './Button';

export const ModalCategory = () => {
  const modalControl = useRef();
  // const name = useRef();
  const { category } = useSelector(state => state);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
  });

  const handleOnChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.keys(category.categoryById).length > 0) {
      dispatch(updateCategory(category.categoryById.id, form));
      dispatch(clearCategoryStateCreator());
      toast.success('Category successfully updated!');
    } else {
      dispatch(createCategory(form));
      toast.success('Category successfully created!');
    }

    modalControl.current.checked = false;
  };

  useEffect(() => {
    //watch product by id dan kondisiin, lantas set form state by product by id
    if (Object.keys(category.categoryById).length > 0) {
      setForm({ ...form, ...category.categoryById });
    } else {
      setForm({
        name: '',
      });
    }
  }, [category.categoryById]);

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
                  onChange={handleOnChange}
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
