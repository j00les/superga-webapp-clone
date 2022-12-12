import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "../store/actions/product";

import { Product } from "models";
import { Card } from "./Card";

export const Carousel: React.FC<{ products?: Boolean }> = ({ products }) => {
  // console.log(products, "yeye");
  // const { product }: { product: Product[] } = useSelector(state => state);
  // const { category } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchProducts());
    // dispatch(fetchCategories());
  }, [dispatch]);

  if (products) {
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
            {/* <Card isLandingPage={true} products={product.products} /> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <p>ig</p>;
  }
};
