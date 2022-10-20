export const ModalImage = () => {
  return (
    <>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <label htmlFor="my-modal-1" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h1 className="text-center text-3xl">title</h1>
          <div className=" outer-container flex flex-col items-center gap-4">
            <figure className="w-full">
              <img
                src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg"
                alt=""
                className="w-full h-full"
              />
            </figure>

            <div className="flex inner-container gap-2">
              <figure className="w-1/2 border border-solid border-red-50">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg"
                  alt=""
                />
              </figure>

              <figure className="w-1/2 border border-solid border-red-50">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg"
                  alt=""
                />
              </figure>
              <figure className="w-1/2 border border-solid border-red-50">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};
