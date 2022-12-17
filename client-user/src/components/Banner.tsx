export const Banner: React.FC = () => {
  const slides = [
    'https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_SUPERGA_ICON_031022.jpg?v=1665485743',
    'https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_FW22.jpg?v=1664563019',
    'https://cdn.shopify.com/s/files/1/0421/7887/1458/files/WEB_BANNER_SUPERGA_OG_010922.jpg?v=1662461059',
  ];

  return (
    <>
      <div className="carousel max-w-full">
        {slides.map((el, i) => (
          <div id={`slide-${i + 1}`} className="carousel-item relative w-full">
            <img src={el} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide-${i === 0 ? i + 3 : i === 1 ? i + 2 : ''}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a href={`#slide-${i + 1}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
