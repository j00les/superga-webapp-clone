import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { Dna } from "react-loader-spinner";
import { toRupiah } from "helpers/helpers";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { fetchById } from "store/actions/product";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { products } = useAppSelector((state) => state);
  const [image, setImage] = useState("");
  const [tab, setTab] = useState("description");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const size = [36, 37, 38, 39, 40, 41, 42, 43, 44];
  const shippingDesc = "";

  const loading = products.isLoading;
  const description = products.productById.description;
  const images = products.productById.Images;
  //redirect to payment loading
  const [redirectLoading, setRedirectLoading] = useState(true);

  const handlePayment = () => {
    setRedirectLoading(false);
    //  dispatch(buyProduct(products.productById)).then(() => {
    //    navigate('/invoice');
    //  });
  };

  const fetchByIdHandler = async () => {
    try {
      await dispatch(fetchById(id)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const setImageUrl = (url: string) => {
    setImage(url);
  };

  useEffect(() => {
    fetchByIdHandler();
  }, [dispatch, id]);

  return (
    <div className="flex m-8 justify-evenly h-[100]" id="detail-page">
      <>
        {loading ? (
          <div className="bg-blue w-[50%]">{<Skeleton height={800} />}</div>
        ) : (
          <>
            <div className="flex">
              <div className="gap-2">
                <div className="flex flex-col gap-2">
                  {images?.map((el, i) => {
                    return (
                      <div
                        key={i + 2}
                        onClick={() => setImageUrl(el.imgUrl)}
                        className="max-w-[7rem]"
                      >
                        <img src={el.imgUrl} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="ml-[1rem]">
                <div className="relative w-[30rem] max-h-[30rem]">
                  <img
                    alt="products"
                    src={image ? image : images[0]?.imgUrl}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </>
      <section className="w-1/2 mt-8 text-center">
        <div className="title mx-auto mb-4">
          <h1 className="text-2xl font-semibold uppercase">
            {loading ? (
              <div className="w-[270px] mx-auto">
                <Skeleton height={40} />
              </div>
            ) : (
              "Superga indonesia"
            )}
          </h1>
          <h1>
            {loading ? (
              <div className="text-center mt-1 w-[100px] mx-auto">
                <Skeleton height={25} />
              </div>
            ) : (
              products.productById.name
            )}
          </h1>
        </div>

        {loading ? (
          <div className="text-center w-[100px] mx-auto">
            <Skeleton height={25} />
          </div>
        ) : (
          <div className="price my-8 ">
            <p className="text-lg mb-4">
              {toRupiah(products.productById.price)}
            </p>

            <div className="flex flex-col">
              <p className="text-md">
                Order within 01 hours 22 minutes to receive{" "}
                <span className="text-green-400">
                  Sat 22 October - Sun 23 October
                </span>
              </p>

              <section className="flex flex-col gap-2 mt-10">
                <span className="self-start">Size:</span>
                <div className="flex gap-2">
                  {size.map((el) => (
                    <span className=" pointer p-1 border w-fit">{el}</span>
                  ))}
                </div>
              </section>
              <div id="button" className="flex my-8 gap-3 w-1/2 items-center">
                <div className="w-fit flex flex-col mb-[1.4rem]">
                  <label className="text-xs self-start mb-2">Quantity :</label>
                  <input
                    className="p-3
           w-20"
                    type="number"
                  />
                </div>

                {loading ? (
                  <Skeleton height={50} />
                ) : (
                  <button className="btn bg-[#606060] w-[400px]">
                    add to wishlist
                  </button>
                )}
                {loading ? (
                  <Skeleton height={50} />
                ) : (
                  <button
                    onClick={() => handlePayment()}
                    className="btn bg-[#606060] w-[200px]"
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto text-md">
          <div id="tab" className="flex gap-2">
            <span
              onClick={() => setTab("description")}
              className="border-b cursor-pointer"
            >
              Description
            </span>
            <p></p>

            <span
              onClick={() => setTab("shipping")}
              className="border-b cursor-pointer"
            >
              Shipping
            </span>
            <span
              onClick={() => setTab("returns")}
              className="border-b cursor-pointer"
            >
              Returns
            </span>
          </div>
          <div className="border w-full">
            {tab === "description" && description}
            {tab === "sizing" && <p>sizing</p>}
            {tab === "shipping" && (
              <p className="w-[45rem] text-left">
                We are very pleased to inform you that we ship to all across
                Indonesia.
                <br></br>
                We have five different shipping methods that you are free to
                choose. Please note that the orders generally take 1­-2 business
                days to process in the warehouse before shipping. <br></br>
                <br></br> JNE Next Day You can expect your order to arrive the
                next day after we place them for delivery (Jakarta Area) and 2
                business days (Outside Jakarta) when placed before 2 p.m
                Indonesia Western Time.
                <br />
                <br /> JNE Regular You can expect your order to arrive 1-2
                business days when placed before 2 p.m Indonesia Western Time
                Sameday Delivery Your order will be delivered on the same day as
                your order but order after 12:00 will be processed the next day.
                <br />
                <br />
                Sicepat Regular You can expect your order to arrive 1-2 business
                days when placed before 2 p.m Indonesia Western Time <br />
                <br /> Sicepat Best You can expect your order to arrive 1
                business days when placed before 2 p.m Indonesia Western Time
              </p>
            )}
            {tab === "returns" && (
              <p className="text-left">
                Please contact to the email info@superga.id or Whatsapp number
                0819-1177-7707 for confirmation
              </p>
            )}
          </div>
        </div>
        {!redirectLoading && (
          <div className="flex-col items-center  w-fit  mx-auto gap-3 ">
            <p className="text-sm text-center my-auto"> Redirecting...</p>
            <div className="text-center ml-5">
              <Dna
                visible={true}
                height="40"
                width="40"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
