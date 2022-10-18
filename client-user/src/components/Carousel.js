const Carousel = props => {
  if (props.belongsto === 'products') {
    return (
      <div className="mx-auto w-1/2 my-10 carousel carousel-center min-w-3/4 p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img
            alt=""
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            alt=""
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            alt=""
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            alt=""
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            alt=""
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            alt=""
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            alt=""
            src="https://placeimg.com/250/180/arch"
            className="rounded-box"
          />
        </div>
      </div>
    );
  } else {
    // instagram
    return (
      <>
        <div className="flex flex-col my-10 gap-4">
          <h1 className="text-center">follow us on instagram</h1>

          <div className="mx-auto  w-full carousel carousel-center min-w-1/2 p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img
                alt=""
                src="https://placeimg.com/250/180/arch"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                alt=""
                src="https://placeimg.com/250/180/arch"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                alt=""
                src="https://placeimg.com/250/180/arch"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                alt=""
                src="https://placeimg.com/250/180/arch"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                alt=""
                src="https://placeimg.com/250/180/arch"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                alt=""
                src="https://placeimg.com/250/180/arch"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                alt=""
                src="https://placeimg.com/250/180/arch"
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
