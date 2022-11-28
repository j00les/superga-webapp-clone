import { Link } from "react-router-dom";
import { toRupiah } from "../helpers/helpers";

export default function Card({
  products,
  isLandingPage,
  isCategoryPage,
  womenProduct,
  menProduct,
  kidsProduct,
}) {
  const landingPageCard = (
    <>
      {products?.map((el, i) => (
        <Link
          key={i}
          to={`detail/${el.id}`}
          className="flex flex-col carousel-item"
        >
          <img alt="" src={el.mainImg} className="rounded-box" />
          <article className="flex flex-col justify-center">
            <span className="text-center font-semibold">{el.name}</span>
            <span className="text-center">{toRupiah(el.price)}</span>
          </article>
        </Link>
      ))}
    </>
  );

  const categoryCard = (
    <>
      {womenProduct
        ? womenProduct?.map((el, i) => (
            <Link
              key={i}
              to={`/detail/${el.id}`}
              className="flex flex-col carousel-item"
            >
              <img alt="" src={el.mainImg} className="rounded-box" />
              <article className="flex flex-col justify-center">
                <span className="text-center font-semibold">{el.name}</span>
                <span className="text-center">{toRupiah(el.price)}</span>
              </article>
            </Link>
          ))
        : menProduct
        ? menProduct?.map((el, i) => (
            <Link
              key={i}
              to={`/detail/${el.id}`}
              className="flex flex-col carousel-item"
            >
              <img alt="" src={el.mainImg} className="rounded-box" />
              <article className="flex flex-col justify-center">
                <span className="text-center font-semibold">{el.name}</span>
                <span className="text-center">{toRupiah(el.price)}</span>
              </article>
            </Link>
          ))
        : kidsProduct?.map((el, i) => (
            <Link
              key={i}
              to={`/detail/${el.id}`}
              className="flex flex-col carousel-item"
            >
              <img alt="" src={el.mainImg} className="rounded-box" />
              <article className="flex flex-col justify-center">
                <span className="text-center font-semibold">{el.name}</span>
                <span className="text-center">{toRupiah(el.price)}</span>
              </article>
            </Link>
          ))}
    </>
  );

  return (
    <>
      {isLandingPage && landingPageCard}
      {isCategoryPage && categoryCard}
    </>
  );
}
