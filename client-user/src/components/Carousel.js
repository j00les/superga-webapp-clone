import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/category";
import { fetchProducts } from "../store/actions/product";
import Card from "./Card";

const Carousel = props => {
  const { product } = useSelector(state => state);
  const { category } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (props.belongsto === "products") {
    return (
      <div className="mt-10">
        <h1 className="uppercase text-center text-2xl font-semibold">SHOP NOW</h1>
        <div style={{ width: "75%" }} className=" mx-auto">
          <div className="text-center my-4">
            {category.categories.map(el => {
              return <button className="mr-2 rounded-md  btn btn-sm btn-primary">{el.name}</button>;
            })}
          </div>
          <div className="mx-auto w-full mb-10 carousel carousel-center  p-4 space-x-4 bg-white rounded-box">
            <Card isLandingPage={true} products={product.products} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex flex-col my-10 gap-4 ">
          <h1 className="text-center font-semibold text-3xl">follow us on instagram</h1>
          <div className="w-full carousel carousel-center p-4 space-x-4 rounded-box bg-white">
            {/* 1 */}
            <div className="carousel-item  w-1/6">
              <img
                alt=""
                src="https://scontent.cdninstagram.com/v/t51.2885-15/312276405_141539538355726_6764524680350280641_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ePlvmsLAzBIAX-EYDfb&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9DDCGqWnslypAPGkOQMbLizIL1y_kCLyV7tyZ5uOYtnw&oe=63575739"
                className="rounded-box"
              />
            </div>
            {/* 2 */}
            <div className="carousel-item  w-1/6">
              <img
                alt=""
                src="https://scontent.cdninstagram.com/v/t51.2885-15/311682348_1458259707988796_4805877917737685612_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vRkN4ihRno8AX84s9C5&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_d0joqUWE6dAe6IZALhH2npGICTe48Y8hA8BwMwusOsw&oe=6356D695"
                className="rounded-box"
              />
            </div>
            {/* 3 */}
            <div className="carousel-item  w-1/6">
              <img
                alt=""
                src="https://scontent.cdninstagram.com/v/t51.2885-15/311934112_815645696320754_1731811903646356833_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=J7AIeEqMXQ8AX-E2uTF&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_8rLWXcrsJVF4TnZAzBXqI4Y4hDVA6BeLATkQfDtiYkg&oe=6357938B"
                className="rounded-box"
              />
            </div>
            {/* 4 */}
            <div className="carousel-item  w-1/6">
              <img
                alt=""
                src="https://scontent.cdninstagram.com/v/t51.2885-15/311684658_794412698496219_8174009375696689672_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uNnd5T1OnSsAX8wx7H3&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-Um36yFapJ6H3SaWHB2yrBnGdWaNeJacg_jna7fbmPaA&oe=6356F91C"
                className="rounded-box"
              />
            </div>
            {/* 5 */}
            <div className="carousel-item  w-1/6">
              <img
                alt=""
                src="https://scontent.cdninstagram.com/v/t51.2885-15/312276405_141539538355726_6764524680350280641_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ePlvmsLAzBIAX-EYDfb&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9DDCGqWnslypAPGkOQMbLizIL1y_kCLyV7tyZ5uOYtnw&oe=63575739"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item  w-1/6">
              <img
                alt=""
                src="https://scontent.cdninstagram.com/v/t51.2885-15/311833441_506971881295918_3020265032218938767_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=DTM9nVChTJAAX8pghni&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_EYK_tSJhOQ73i-wz3_GxJw2AvDdyMxVgirI-eiYTv_Q&oe=63573ABA"
                className="rounded-box"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Carousel;
