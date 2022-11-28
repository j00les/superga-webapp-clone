import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import {
  clearProductState,
  createProduct,
  updateProduct,
} from "../store/actions/action-product";
import Button from "./Button";
import { fetchCategories } from "../store/actions/action-category";
import Skeleton from "react-loading-skeleton";

const ModalForm = () => {
  const { category } = useSelector((state) => state);
  const { product } = useSelector((state) => state);
  const loading = product.loading;

  const dispatch = useDispatch();
  const inputRef = useRef();
  const modalElement = inputRef.current;

  const [formInput, setForm] = useState({
    name: "",
    price: 0,
    mainImg: "",
    slug: "",
    category: "",
    authorId: localStorage.getItem("authorId"),
    description: "",
    image1: {
      imgUrl: "",
    },
    image2: {
      imgUrl: "",
    },
    image3: {
      imgUrl: "",
    },
  });

  const handleChange = (e) => {
    const name = e.target.name;

    if (name === "image-1" || "image-2" || "image-3") {
      setForm({
        ...formInput,
        [name]: { ...formInput[name], imgUrl: e.target.value },
      });
    }
    setForm({ ...formInput, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(product.productById).length > 0) {
      dispatch(updateProduct(product.productById.id, formInput));
      dispatch(clearProductState());
      toast.success("Product successfully updated!");
    } else {
      dispatch(createProduct(formInput));
      toast.success("Product successfully created!");
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
    const data = product.productById;
    const image = data.Images;

    if (Object.keys(data).length > 0) {
      setForm({
        name: data.name,
        price: data.price,
        slug: data.slug,
        mainImg: data.mainImg,
        category: data.categoryId,
        description: data.description,
        image1: {
          imgUrl: image[0].imgUrl,
        },
        image2: {
          imgUrl: image[1].imgUrl,
        },
        image3: {
          imgUrl: image[2].imgUrl,
        },
      });
    } else {
      setForm({
        name: "",
        price: 0,
        slug: "",
        mainImg: "",
        category: "",
        description: "",
        image1: {
          imgUrl: "",
        },
        image2: {
          imgUrl: "",
        },
        image3: {
          imgUrl: "",
        },
      });
    }
  }, [product.productById]);

  return (
    <>
      <input
        ref={inputRef}
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
      />
      <label htmlFor="my-modal-4" className={"modal cursor-pointer"}>
        <label className="modal-box w-3/4 relative" htmlFor="">
          <form onSubmit={handleSubmit} className="">
            {loading ? <Skeleton /> : "name"}
            <div id="name-container w-full">
              {loading ? (
                <Skeleton />
              ) : (
                <div className="flex grow flex-col  w-full" id="form-input">
                  <input
                    onChange={handleChange}
                    value={formInput?.name}
                    name="name"
                    type="text"
                    placeholder="Type here"
                    className="input  input-bordered w-full max-w-s"
                  />
                </div>
              )}

              {loading ? (
                <Skeleton />
              ) : (
                <div id="name-container w-full">
                  <div className="flex grow flex-col w-full" id="form-input">
                    Slug
                    <input
                      onChange={handleChange}
                      value={formInput?.slug}
                      name="slug"
                      type="text"
                      placeholder="Type here"
                      className="input  input-bordered w-full max-w-s"
                    />
                  </div>
                </div>
              )}
            </div>
            <div id="inner-container" className="flex gap-5">
              {loading ? (
                <Skeleton />
              ) : (
                <div className="flex flex-col" id="left-side">
                  <div className="flex flex-col" id="form-input">
                    Price
                    <input
                      onChange={handleChange}
                      value={formInput?.price}
                      type="number"
                      name="price"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
              )}
              {loading ? (
                <Skeleton />
              ) : (
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
              )}
            </div>
            {loading ? (
              <Skeleton />
            ) : (
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
                  {category?.categories?.map((el, i) => (
                    <option value={el.id} key={i}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div id="name-container">
              {loading ? (
                <Skeleton />
              ) : (
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
              )}
              {loading ? (
                <Skeleton />
              ) : (
                <div className="flex w-full flex-col " id="form-input">
                  Image 1
                  <input
                    value={formInput?.image1.imgUrl}
                    onChange={handleChange}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-s"
                    name="image1"
                  />
                </div>
              )}
              {loading ? (
                <Skeleton height={40} highlightColor="blue" />
              ) : (
                <div className="flex w-full flex-col " id="form-input">
                  Image 2
                  <input
                    value={formInput?.image2.imgUrl}
                    onChange={handleChange}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-s"
                    name="image2"
                  />
                </div>
              )}
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <div className="flex w-full flex-col " id="form-input">
                  Image 3
                  <input
                    value={formInput?.image3.imgUrl}
                    onChange={handleChange}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-s"
                    name="image3"
                  />
                </div>
              )}
            </div>

            {loading ? (
              <Skeleton height={40} />
            ) : (
              <div className="float float-right mt-5 mr-2">
                <Button type="submit" />
                <Button
                  itson="modal"
                  handleCancel={handleCancelButton}
                  type="button"
                />
              </div>
            )}
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
