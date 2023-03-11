export const PhotoGrid: React.FC = () => (
  <>
    <div className="flex flex-col gap-10">
      <section className="grid grid-cols-2 w-3/4 mx-auto gap-x-6">
        <div id="left">
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/new_arrivals_720x.jpg?v=1664611407"
            alt=""
          />
        </div>

        <div id="right" className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-5">
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/Cotu_Classic_1_360x.jpg?v=1666263648"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/241869462_285008503075565_3243283298288800422_n_360x.jpg?v=1665572215"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/241379058_269308535034303_4507591349555288286_n_360x.jpg?v=1666263295"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0421/7887/1458/collections/MINI_BANNER_SUPERGA_HARU_3_360x.jpg?v=1663574792"
            alt=""
          />
        </div>
      </section>

      {/* <div style={{ height: '50rem' }} className="w-full">
        <iframe
          //to autoplay
          //ini video

          // src="https://www.youtube.com/embed/dF0Ki9OGWjI?autoplay=1"
          className="w-full h-full"
          src="https://www.youtube.com/embed/dF0Ki9OGWjI?autoplay=1&mute=1&loop=1"
          type="text/html"
          id="ytplayer"
          width="560"
          height="315"
          allow="autoplay;loop"
          title="YouTube video player"
        ></iframe>
      </div> */}
    </div>
  </>
)
