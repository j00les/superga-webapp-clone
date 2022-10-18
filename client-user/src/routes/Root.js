import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import PhotoGrid from '../components/PhotoGrid';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Carousel belongsto="products" />
      <PhotoGrid />

      <Carousel belongsto="instagram" />
      <Footer />
    </>
  );
};

export default Root;
