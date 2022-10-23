import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from 'react-redux';

export const ModalImage = () => {
  const { product } = useSelector(state => state);
  const loading = product.loading;
  const images = product?.productById?.Images;
  console.log(loading);

  return (
    <>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <label htmlFor="my-modal-1" className="modal cursor-pointer ">
        <label
          className="modal-box gap-5 flex flex-col align-center justify-center w-11/12 max-w-5xl"
          htmlFor=""
        >
          <h1 className="text-center text-3xl">{product.productById?.name}</h1>
          {loading ? (
            <Skeleton count={3} height={100} />
          ) : (
            <figure className="w-full flex gap-3">
              {images?.map(el => (
                <img key={el.id} src={el.imgUrl} alt="" className="w-full h-full" />
              ))}
            </figure>
          )}
        </label>
      </label>
    </>
  );
};
