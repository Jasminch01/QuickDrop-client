// import { TiStarFullOutline } from "react-icons/ti";

const Banner = ({ title, size }) => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src="/banner.jpg"
          className=" h-[700px] w-full bg-banner-bg bg-cover object-cover"
        />

        <div className="absolute z-0 inset-0 bg-black opacity-70"></div>


        <div className="absolute z-0 top-[55%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] lg:w-full">
          <p
            className={`mb-5 text-4xl ${size} leading-[120px] font-bold text-white hidden md:block w-[80%] mx-auto`}
          >
            {/* Your Ultimate Home Cleaning Partner */}
            {/* {title} */}
            30+ Years Experiences in Courier Service
          </p>
          <h1 className="mb-5 text-5xl xsm:text-4xl font-bold text-white leading-[3.5rem] md:hidden w-full">
            {/* Your Ultimate Home Cleaning Partner */}
            {/* {title} */}
          </h1>
          {/* <div>
            <div className="flex space-y-5 md:space-y-0 items-center font-bold bg-slate-400/20 py-6  justify-center flex-col lg:flex-row  gap-2 lg:gap-10 mt-10 xsm:mb-32">
              <div className="flex gap-1 items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1161/1161388.png"
                  className="w-14"
                  alt=""
                />
                <p>Reliable Cleaners</p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9464/9464085.png"
                  className="w-14 mx-2"
                  alt=""
                />
                <p>Top-Rated Google Reviews</p>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10809/10809834.png"
                  className="w-14"
                  alt=""
                />
                <p>100% Guaranteed Bond Back</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
