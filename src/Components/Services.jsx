import Container from "./Container";

const Services = () => {
  return (
    <div className="bg-gray-800  p-5">
      <p className="text-2xl md:text-3xl font-bold text-center my-5 text-white">
        Our Services
      </p>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="card bg-base-100 p-5 shadow-lg space-y-5">
            <figure>
              <img src="/shield.png" alt="" className="w-14" />
            </figure>
            <div className="text-center px-5">
              <h2 className="font-bold text-xl">Standard Courier</h2>
              <p>
                Our Standard Courier Service offers reliable and cost-effective
                delivery solutions for parcels of all sizes. With standard
                delivery times, your parcels are handled with care and delivered
                safely to their destination. Whether it's for personal or
                business needs, our standard courier service ensures timely
                delivery at an affordable price.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 p-5 shadow-lg space-y-5">
            <figure>
              <img src="/stopwatch.png" alt="" className="w-14" />
            </figure>
            <div className="text-center px-5">
              <h2 className="font-bold text-xl">Express Courier</h2>
              <p className="text-center">
                Need your parcels delivered urgently? Our Express Courier
                Service is the perfect solution. With expedited delivery
                options, your parcels are prioritized for quick dispatch and
                delivered swiftly to their destination. Enjoy peace of mind
                knowing that your urgent shipments will reach their recipients
                in the shortest possible time.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 p-5 shadow-lg space-y-5">
            <figure>
              <img src="/live-tracking.png" alt="" className="w-14" />
            </figure>
            <div className="text-center px-5">
              <h2 className="font-bold text-xl"> Over Night Courier</h2>
              <p>
                When time is of the essence, our Overnight Courier Service
                delivers. With overnight delivery options, your parcels are
                picked up and delivered within the next business day, ensuring
                prompt delivery when it matters most. Whether it's important
                documents or time-sensitive packages, trust our overnight
                courier service for reliable and efficient delivery overnight.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
