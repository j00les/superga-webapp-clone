// import { useMemo } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Card } from "../components/Card";
// import { filterProduct } from "../helpers/helpers";
// import { fetchProducts } from "../store/actions/product";

// export default function CategoryPage() {
//   const dispatch = useDispatch();
//   const { category } = useParams();
//   const { products } = useSelector(state => state.product);

//   //--basically caching the data, so the function wont be calculated (called) again if there's no changes
//   const menProduct = useMemo(() => filterProduct(products, 1), [products]);
//   const womenProduct = useMemo(() => filterProduct(products, 2), [products]);
//   const kidsProduct = useMemo(() => filterProduct(products, 3), [products]);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <section className="border  h-full flex justify-evenly bg-blue-400">
//       <div>sidebar</div>
//       <div className="grid grid-cols-2 gap-4">
//         {category === "women" ? (
//           <Card isCategoryPage={true} womenProduct={womenProduct} />
//         ) : category === "men" ? (
//           <Card isCategoryPage={true} menProduct={menProduct} />
//         ) : (
//           <Card isCategoryPage={true} kidsProduct={kidsProduct} />
//         )}
//       </div>
//     </section>
//   );
// }
