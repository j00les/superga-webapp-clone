import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  createProduct,
  fetchCategories,
  fetchProducts,
  updateProduct,
} from '../store/middlewares';
import Button from './Button';
import { toast, Toaster } from 'react-hot-toast';
import { clearProductState } from '../store/actions/product';

const ModalForm = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const ref = useRef();

  //get input element
  const modalElement = ref.current;
  const productById = useSelector(state => state.productById);

  const [formInput, setForm] = useState({
    name: '',
    price: 0,
    mainImg: '',
    category: '',
    description: '',
    image: '',
  });

  const handleChange = e => {
    /*  spread the current state to PRESERVE the previous state
     This way, the previous data is not lost while we update the input state.*/

    setForm({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.keys(productById).length > 0) {
      dispatch(updateProduct(productById.id, formInput));
      dispatch(clearProductState());
      toast.success('Product successfully updated!');
    } else {
      dispatch(createProduct(formInput));
      toast.success('Product successfully created!');
    }

    modalElement.checked = false;
  };

  const handleCancelButton = () => {
    modalElement.checked = false;
    dispatch(clearProductState());
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    //watch product by id dan kondisiin, lantas set form state by product by id
    if (Object.keys(productById).length > 0) {
      setForm({ ...formInput, ...productById });
    } else {
      setForm({
        name: '',
        price: 0,
        mainImg: '',
        category: '',
        description: '',
        image: '',
      });
    }
  }, [productById]);

  return (
    <>
      <input
        ref={ref}
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
      />
      <label htmlFor="my-modal-4" className={'modal cursor-pointer'}>
        <label className="modal-box w-3/4 relative" htmlFor="">
          <form onSubmit={handleSubmit} className="">
            Name
            <div id="name-container w-full">
              <div className="flex grow flex-col w-full" id="form-input">
                <input
                  onChange={handleChange}
                  value={formInput?.name}
                  name="name"
                  type="text"
                  placeholder="Type here"
                  className="input  input-bordered w-full max-w-s"
                />
              </div>
            </div>
            <div id="inner-container" className="flex gap-5">
              <div className="flex flex-col" id="left-side">
                <div className="flex flex-col" id="form-input">
                  Price
                  <input
                    onChange={handleChange}
                    value={formInput?.price}
                    type="text"
                    name="price"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="flex flex-col" id="right-side">
                <div className="flex flex-col" id="form-input">
                  Main Image
                  <input
                    onChange={handleChange}
                    value={formInput?.mainImg}
                    type="text"
                    name="mainImg"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full" id="form-input">
              Category
              <select
                name="category"
                onChange={handleChange}
                value={formInput?.category}
                className="select select-bordered uppercase w-full max-w-s"
              >
                <option hidden={true} value={true}>
                  --select category--
                </option>
                {categories?.map((el, i) => (
                  <option value={el.id} key={i}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
            <div id="name-container">
              <div className="flex w-full flex-col" id="form-input">
                Description
                <textarea
                  name="description"
                  onChange={handleChange}
                  value={formInput?.description}
                  className="textarea textarea-bordered"
                  placeholder="Description.."
                ></textarea>
              </div>
              <div className="flex w-full flex-col " id="form-input">
                Image
                <input
                  value={formInput?.image}
                  onChange={handleChange}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-s"
                  name="image"
                />
              </div>
            </div>
            <div className="float float-right mt-5 mr-2">
              <Button type="submit" />
              <Button handleCancel={handleCancelButton} type="button" />
            </div>
          </form>
        </label>
      </label>

      <Toaster
        position="top-right" // Used to adapt the animati
      />
    </>
  );
};

export default ModalForm;
