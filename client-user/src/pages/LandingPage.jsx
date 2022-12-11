import { useSelector } from "react-redux";
import { Banner } from "../components/Banner";
import Carousel from "../components/Carousel";
import PhotoGrid from "../components/PhotoGrid";

const LandingPage = () => {
  const state = useSelector(state => state.user);
  console.log(state);
  return (
    <>
      <Banner />
      <Carousel belongsto="products" />
      <PhotoGrid />
      <Carousel belongsto="instagram" />
    </>
  );
};

export default LandingPage;
