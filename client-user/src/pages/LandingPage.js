import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import PhotoGrid from '../components/PhotoGrid';

const LandingPage = () => {
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
