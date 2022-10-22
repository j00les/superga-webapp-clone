import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import PhotoGrid from '../components/PhotoGrid';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Root;
