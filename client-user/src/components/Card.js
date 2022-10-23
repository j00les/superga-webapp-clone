import { Link } from 'react-router-dom';

export default function Card({ products }) {
  function toRupiah(price) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }

  return (
    <>
      {products.map((el, i) => (
        <Link key={i} to={`detail/${el.id}`} className="flex flex-col carousel-item">
          <img alt="" src={el.mainImg} className="rounded-box" />
          <article className="flex flex-col justify-center">
            <span className="font-semibold">{el.name}</span>
            <span>{toRupiah(el.price)}</span>
          </article>
        </Link>
      ))}
    </>
  );
}
