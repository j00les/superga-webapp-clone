import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import PhotoGrid from "../components/PhotoGrid";

export const LandingPage: React.FC = () => {
  return (
    <>
      <Banner />
      <Carousel productCarousel />
      <PhotoGrid />
      <Carousel instagramCarousel />
    </>
  );
};
