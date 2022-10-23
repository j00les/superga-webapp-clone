const PhotoGrid = () => (
  <>
    <div className="flex flex-col gap-10">
      <section className="grid grid-cols-2 w-3/4 mx-auto gap-x-6">
        <div id="left">
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/new_arrivals_720x.jpg?v=1664611407"
            alt=""
          />
        </div>

        <div
          id="right"
          className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-5"
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/Cotu_Classic_1_360x.jpg?v=1665571458"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/Cotu_Classic_1_360x.jpg?v=1665571458"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/Cotu_Classic_1_360x.jpg?v=1665571458"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/Cotu_Classic_1_360x.jpg?v=1665571458"
            alt=""
          />
        </div>
      </section>

      <div style={{ height: '50rem' }} className="w-full">
        {/* <iframe
          //to autoplay
          // src="https://www.youtube.com/embed/dF0Ki9OGWjI?autoplay=1&mute=1&loop=1"
          className="w-full h-full"
          src="https://www.youtube.com/embed/dF0Ki9OGWjI?autoplay=1"
          type="text/html"
          id="ytplayer"
          width="560"
          height="315"
          allow="autoplay;loop"
          title="YouTube video player"
        ></iframe> */}
      </div>
    </div>
  </>
);
export default PhotoGrid;
