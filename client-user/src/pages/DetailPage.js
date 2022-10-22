import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchById } from '../store/actions/action-product';

export const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state);

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
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/products/02-2750-COTUCLASSIC-WHITE_52_540x.jpg?v=1601291563"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/products/02-2750-COTUCLASSIC-WHITE_52_540x.jpg?v=1601291563"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/products/02-2750-COTUCLASSIC-WHITE_52_540x.jpg?v=1601291563"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/products/02-2750-COTUCLASSIC-WHITE_52_540x.jpg?v=1601291563"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* desc */}
      <section className=" w-3/4 mt-8  text-center">
        <div className="title mb-4">
          <h1 className="text-2xl font-semibold uppercase">
            Superga indonesia
          </h1>
          <h1>{product.productById.name}</h1>
        </div>

        <div className="price my-8">
          <p className="text-lg mb-4">{toRupiah(product.productById.price)}</p>
          <p className="text-xl">
            Order within 01 hours 22 minutes to receive Sat 22 October - Sun 23
            October
          </p>
        </div>

        <div className="desc w-1/2 mx-auto text-xl">
          <p>
            The success of the now iconic 2630 silhouette gets a height update,
            now on a 4cm platform. A modern twist on the classic, these sneakers
            present a upper with padded collar reinforcement and toe cap. A
            unique construction that adds an effortlessly cool addition to your
            daily edit that
          </p>
          <div id="button" className="flex my-8 flex-col justify-evenly gap-3">
            <button className="btn">add to cart</button>
            <button className="btn">add to wishlist</button>
          </div>
        </div>
      </section>
    </div>
  );
};
