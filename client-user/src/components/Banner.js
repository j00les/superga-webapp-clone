const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_SUPERGA_ICON_031022.jpg?v=1665485743"
            className="w-full"
          />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_FW22.jpg?v=1664563019"
            className="w-full"
            alt=""
          />
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_OG_010922.jpg?v=1662461059"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
