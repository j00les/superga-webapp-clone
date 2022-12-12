import { useSelector } from "react-redux";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import PhotoGrid from "../components/PhotoGrid";

const LandingPage = () => {
  const state = useSelector(state => state.user);
  return (
    <>
      <Banner />
      <Carousel productCarousel />
      <PhotoGrid />
      <Carousel instagram />
    </>
  );
};

export default LandingPage;
