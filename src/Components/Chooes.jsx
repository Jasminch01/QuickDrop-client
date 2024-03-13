import Lottie from "lottie-react";
import animation from "../../public/Animation .json";

const Chooes = () => {
  return (
    <div className="my-5 flex justify-center items-center">
      <div className=" flex md:flex-row items-center flex-col justify-center">
        <div className="flex-1">
          <Lottie animationData={animation} />
        </div>
        <div className="flex-1">
          <p className="md:text-3xl text-2xl font-bold">Why Chooes Us</p>
          <p>
            At our Parcel Management Website, we understand that you have
            options when it comes to parcel delivery services. Here are a few
            reasons why choosing us sets us apart
          </p>
          <ul>
            <p className="font-bold">Reliabliaty : </p>
            <li>
              We prioritize reliability in every aspect of our service. From
              seamless parcel booking to timely deliveries, you can count on us
              to get your parcels where they need to go, when they need to be
              there
            </li>
          </ul>
          <ul>
            <p className="font-bold">Convenience: </p>
            <li>
              With our user-friendly website, booking and tracking parcels is
              easier than ever. Our intuitive interface and real-time tracking
              features ensure that you're always in control of your shipments.
            </li>
          </ul>
          <ul>
            <p className="font-bold">Competitive Pricing: </p>
            <li>
              We believe that reliable parcel delivery shouldn't break the bank.
              That's why we offer competitive pricing without compromising on
              quality or service.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chooes;
