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

        <div className="absolute z-0 top-[50%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-[90%] lg:w-full space-y-5">
          <p
            className={`md:text-6xl text-xl ${size} font-bold text-white w-[50%] mx-auto`}
          >
            {/* {title} */}
            Experience Seamless Parcel Management with QuickDrop
          </p>
          <div className="w-[30%] mx-auto">
            <div className="space-x-5">
              <button className="md:py-3 md:px-4 bg-blue-500 rounded-full">Learn more</button>
              <button className="md:py-3 md:px-4 bg-blue-500 rounded-full">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
