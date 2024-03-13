const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-20 -top-20">
      <div className="card bg-base-100 p-5 shadow-lg space-y-5">
        <figure>
          <img src="/shield.png" alt="" className="w-14" />
        </figure>
        <div className="text-center px-5">
          <h2 className="font-bold text-xl">Secure Parcel Handling</h2>
          <p>
          ensures your parcels are handled with utmost care, prioritizing their safety throughout the delivery proces
          </p>
        </div>
      </div>
      <div className="card bg-base-100 p-5 shadow-lg space-y-5">
        <figure>
          <img src="/stopwatch.png" alt="" className="w-14" />
        </figure>
        <div className="text-center px-5">
          <h2 className="font-bold text-xl">Real-time Parcel Tracking</h2>
          <p className="text-center">
          Stay informed with real-time updates on your parcel's whereabouts, empowering you to monitor its journey from pickup to delivery seamlessly.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 p-5 shadow-lg space-y-5">
        <figure>
          <img src="/live-tracking.png" alt="" className="w-14" />
        </figure>
        <div className="text-center px-5">
          <h2 className="font-bold text-xl"> Lightning Fast Delivery</h2>
          <p>
          Benefit from swift parcel deliveries facilitated by our efficient logistics network, ensuring your packages reach their destination in record time
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
