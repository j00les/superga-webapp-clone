import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { toRupiah } from 'helpers/helpers';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { fetchById } from 'store/actions/product';

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { products } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loading = products.isLoading;
  const description = products.productById.description;
  const images = products.productById.Images;
  //redirect to payment loading
  const [redirectLoading, setRedirectLoading] = useState(true);

  const handlePayment = () => {
    setRedirectLoading(false);
    //  dispatch(buyProduct(products.productById)).then(() => {
    //    navigate('/invoice');
    //  });
  };

  useEffect(() => {
    //console.log(typeof id);
    dispatch(fetchById(id));
  }, [dispatch, id]);

  return (
    <div className="flex  justify-evenly m-8">
      <>
        {loading ? (
          <div className="bg-blue w-[50%]">{<Skeleton height={800} />}</div>
        ) : (
          <div className="carousel w-1/2">
            {images?.map((el, i) => (
              <div
                key={`${i}-cccarou`}
                id={`slide${i + 1}`}
                className="carousel-item relative w-full"
              >
                <img alt="products" src={el.imgUrl} className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <span className="btn btn-circle">❮</span>
                  <span className="btn btn-circle">❯</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
      <section className=" w-3/4 mt-8  text-center">
        <div className="title mx-auto mb-4">
          <h1 className="text-2xl font-semibold uppercase">
            {loading ? (
              <div className="w-[270px] mx-auto">
                <Skeleton height={40} />
              </div>
            ) : (
              'Superga indonesia'
            )}
          </h1>
          <h1>
            {loading ? (
              <div className="text-center mt-1 w-[100px] mx-auto">
                <Skeleton height={25} />
              </div>
            ) : (
              products.productById.name
            )}
          </h1>
        </div>

        {loading ? (
          <div className="text-center w-[100px] mx-auto">
            <Skeleton height={25} />
          </div>
        ) : (
          <div className="price my-8">
            <p className="text-lg mb-4">{toRupiah(products.productById.price)}</p>

            <div>
              <p className="text-xl">
                Order within 01 hours 22 minutes to receive Sat 22 October - Sun 23 October
              </p>
            </div>
          </div>
        )}

        <div className="desc w-1/2 mx-auto text-xl">
          <p>{loading ? <Skeleton count={5} /> : description}</p>
        </div>

        <div className="desc w-1/2 mx-auto text-xl">
          <div id="button" className="flex my-8 flex-col justify-evenly gap-3">
            {loading ? (
              <Skeleton height={50} />
            ) : (
              <button onClick={() => handlePayment()} className="btn">
                Buy Now
              </button>
            )}

            {loading ? <Skeleton height={50} /> : <button className="btn">add to wishlist</button>}
          </div>
        </div>

        {!redirectLoading && (
          <div className="flex-col items-center  w-fit  mx-auto gap-3 ">
            <p className="text-sm text-center my-auto"> Redirecting...</p>
            <div className="text-center ml-5">
              <Dna
                visible={true}
                height="40"
                width="40"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
