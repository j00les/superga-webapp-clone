import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchCategories, fetchProducts } from "../store/actions/product";

import { Product } from "models";
import { Card } from "./Card";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { fetchProducts } from "store/actions/product";

export const Carousel: React.FC<{ productCarousel?: Boolean }> = ({ productCarousel }) => {
  // console.log(products, "yeye");
  const { products } = useAppSelector(state => state);
  // const { category } = useSelector(state => state);
  const dispatch = useAppDispatch();
  // console.log(products.products);

  useEffect(() => {
    dispatch(fetchProducts());

    // dispatch(fetchCategories());
  }, [dispatch]);

  if (productCarousel) {
    return (
      <div className="mt-10">
        <h1 className="uppercase text-center text-2xl font-semibold">SHOP NOW</h1>
        <div style={{ width: "75%" }} className=" mx-auto">
          {/* <div className="text-center my-4">
            {category.categories.map((el, i) => {
              return (
                <button key={`${el}=id-${i}`} className="mr-2 rounded-md  btn btn-sm btn-primary">
                  {el.name}
                </button>
              );
            })}
          </div> */}
          <div className="mx-auto w-full mb-10 carousel carousel-center  p-4 space-x-4 bg-white rounded-box">
            <Card isLandingPage={true} products={products.products} />
          </div>
        </div>
      </div>
    );
  } else {
    return <p>ig</p>;
  }
};
