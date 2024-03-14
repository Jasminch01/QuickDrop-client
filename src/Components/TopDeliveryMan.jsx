import TopDeliveryManData from "../../public/data.json";

const TopDeliveryMan = () => {
  return (
    <div className="py-5">
      <p className="text-center font-bold md:text-3xl text-2xl my-5">
        Our Expert Team
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {TopDeliveryManData.map((data, idx) => (
          <div key={idx} className="card bg-base-100 shadow-lg space-y-5">
            <figure className="bg-gray-300">
              <img src={data.image} alt="delivary-parson" className="" />
            </figure>
            <div className="p-5">
              <p className="text-center font-bold">{data.name}</p>
              <p className="text-center"> Parcels Delivered : {data.parcels_delivered}</p>
              <p className="text-center">Ratings : {data.average_ratings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;
