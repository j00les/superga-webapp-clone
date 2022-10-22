import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchById } from '../store/actions/action-product';

export const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch]);

  return (
    <div className="flex gap-6 m-5">
      <section className="justify-start gap-6 align-start flex flex-col w-1/5">
        <figure className="w-full">
          {/* <img className="w-full" src={product.productById.mainImg} alt="" /> */}
        </figure>
        <figure className="w-full">
          <img
            className="w-full"
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/products/8033889398113_1_1024x1024@2x.jpg?v=1649840430"
            alt=""
          />
        </figure>
        <figure className="w-full">
          <img
            className="w-full"
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/products/8033889398113_1_1024x1024@2x.jpg?v=1649840430"
            alt=""
          />
        </figure>
      </section>

      <section className="border border-red-400">
        <img src={product.productById.mainImg} alt="" />
      </section>

      <section className="border border-red-400 text-center">
        <h1 className="text-2xl font-semibold uppercase">Superga indonesia</h1>
        <h1>{product.productById.name}</h1>
        <p>{product.productById.price}</p>
        <p>
          Order within 01 hours 22 minutes to receive Sat 22 October - Sun 23
          October
        </p>
        <p>{product.productById.description}</p>
      </section>
    </div>
  );
};
