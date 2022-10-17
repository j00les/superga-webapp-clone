import { useEffect, useState } from 'react';
import Button from './Button';

const RegisterForm = () => {
  const [formInput, setForm] = useState({
    name: '',
    price: 0,
    mainImg: '',
    category: '',
    description: '',
    image: '',
  });

  //ambil value
  const handleChange = e => {
    // setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    const obj = {
      ...formInput,
    };

    console.log(obj);
    console.log(e.target.name, e.target.value);
    setForm({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formInput);
  };

  useEffect(() => {}, []);

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box w-3/4 relative" htmlFor="">
          <form onSubmit={handleSubmit} className="">
            <div id="name-container w-full">
              <div className="flex grow flex-col w-full" id="form-input">
                Name
                <input
                  onChange={handleChange}
                  value={formInput.name}
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
                    value={formInput.price}
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
                    value={formInput.mainImg}
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
                value={formInput.category}
                className="select select-bordered uppercase w-full max-w-s"
              >
                <option disabled defaultValue>
                  select category
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div id="name-container">
              <div className="flex w-full flex-col" id="form-input">
                Description
                <textarea
                  name="description"
                  onChange={handleChange}
                  value={formInput.description}
                  className="textarea textarea-bordered"
                  placeholder="Description.."
                ></textarea>
              </div>
              <div className="flex w-full flex-col " id="form-input">
                Image
                <input
                  value={formInput.image}
                  onChange={handleChange}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-s"
                  name="image"
                />
              </div>
            </div>

            <div className="float float-right mt-5 mr-2">
              <Button />
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default RegisterForm;
