import Button from './Button';

const RegisterPage = () => {
  return (
    <>
      <h1>Register</h1>
      <form className="">
        <div id="name-container w-full">
          <div className="flex grow flex-col w-full" id="form-input">
            Name
            <input
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
              className="textarea textarea-bordered"
              placeholder="Description.."
            ></textarea>
          </div>
          <div className="flex w-full flex-col " id="form-input">
            Image
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-s"
              name="image"
            />
          </div>
        </div>

        <div className="float float-right mt-5 mr-2">
          <Button type="submit" />
          <Button type="cancel" />
        </div>
      </form>
    </>
  );
};
export default RegisterPage;
