import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchById } from '../store/actions/action-product';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state);
  const loading = product.isLoading;
  const description = product.productById.description;
  const images = product.productById.Images;

  function toRupiah(price) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch]);

  return (
    <div className="flex  justify-evenly m-8">
      <div className="carousel w-1/2">
        {images?.map((el, i) => (
          <div key={`${i}-cccarou`} id={`slide${i + 1}`} className="carousel-item relative w-full">
            <img src={el.imgUrl} className="w-full" />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <span className="btn btn-circle">❮</span>
              <span className="btn btn-circle">❯</span>
            </div>
          </div>
        ))}
      </div>
      <section className=" w-3/4 mt-8  text-center">
        <div className="title mb-4">
          <h1 className="text-2xl font-semibold uppercase">
            {loading ? <Skeleton /> : 'Superga indonesia'}
          </h1>
          <h1>{loading ? <Skeleton /> : product.productById.name}</h1>
        </div>


        {loading ? (
          <Skeleton count={2} />
        ) : (
          <div className="price my-8">
            <p className="text-lg mb-4">{toRupiah(product.productById.price)}</p>

            <p className="text-xl">
              Order within 01 hours 22 minutes to receive Sat 22 October - Sun 23 October
            </p>
          </div>
        )}

        <div className="desc w-1/2 mx-auto text-xl">
          <p>{loading ? <Skeleton count={5} /> : description}</p>


        <div className="price my-8">
          <p className="text-lg mb-4">{toRupiah(product.productById.price)}</p>
          <p className="text-xl">
            Order within 01 hours 22 minutes to receive Sat 22 October - Sun 23 October
          </p>
        </div>

        <div className="desc w-1/2 mx-auto text-xl">
          <p>
            The success of the now iconic 2630 silhouette gets a height update, now on a 4cm
            platform. A modern twist on the classic, these sneakers present a upper with padded
            collar reinforcement and toe cap. A unique construction that adds an effortlessly cool
            addition to your daily edit that
          </p>

          <div id="button" className="flex my-8 flex-col justify-evenly gap-3">
            {loading ? <Skeleton height={50} /> : <button className="btn"> add to cart</button>}

            {loading ? <Skeleton height={50} /> : <button className="btn">add to wishlist</button>}
          </div>
        </div>
      </section>
    </div>
  );
};
