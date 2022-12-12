export const Banner: React.FC = () => {
  const slides = [
    "https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_SUPERGA_ICON_031022.jpg?v=1665485743",
    "https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_FW22.jpg?v=1664563019",
    "https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_OG_010922.jpg?v=1662461059",
  ];

  return (
    <>
      <div className="carousel w-full">
        {slides.map((img, i) => (
          <div id="slide1" className="carousel-item relative w-full" key={`${img}-99-${i}`}>
            <img alt="" src={img} className="w-full" />
          </div>
        ))}
      </div>
    </>
  );
};
