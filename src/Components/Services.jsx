import Container from "./Container";

const Services = () => {
  return (
    <div className="bg-gray-800 pt-5 pb-10">
      <p className="text-2xl md:text-3xl font-bold text-center my-5 text-white">
        Our Services
      </p>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="card bg-base-100 p-5 shadow-lg space-y-5">
            <figure>
              <img src="/delivery-truck.png" alt="" className="w-32" />
            </figure>
            <div className="text-center">
              <h2 className="font-bold text-xl">Standard Courier</h2>
              <p>
                Our Standard Courier Service offers reliable and cost-effective
                delivery solutions for parcels of all sizes. With standard
                delivery times, your parcels are handled with care and delivered
                safely to their destination.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 p-5 shadow-lg space-y-5">
            <figure>
              <img src="/express-delivery.png" alt="" className="w-32" />
            </figure>
            <div className="text-center">
              <h2 className="font-bold text-xl">Express Courier</h2>
              <p className="text-center">
                Need your parcels delivered urgently? Our Express Courier
                Service is the perfect solution. With expedited delivery
                options, your parcels are prioritized for quick dispatch and
              </p>
            </div>
          </div>
          <div className="card bg-base-100 p-5 shadow-lg space-y-5">
            <figure>
              <img src="/fast-delivery.png" alt="" className="w-32" />
            </figure>
            <div className="text-center">
              <h2 className="font-bold text-xl"> Over Night Courier</h2>
              <p>
                When time is of the essence, our Overnight Courier Service
                delivers. With overnight delivery options, your parcels are
                picked up and delivered within the next business day, ensuring
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
