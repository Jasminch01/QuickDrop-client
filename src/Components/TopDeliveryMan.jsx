import TopDeliveryManData from "../../public/data.json";

const TopDeliveryMan = () => {
  return (
    <div className="py-5">
      <p className="text-center font-bold md:text-3xl text-2xl">
        Top Delivery Man
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {TopDeliveryManData.map((data, idx) => (
          <div key={idx} className="card bg-base-100 p-5 shadow-lg space-y-5">
            <figure>
              <img src={data.image} alt="" className="" />
            </figure>
            <div>
                <p className="text-center font-bold">{data.name}</p>
                <p className="text-center"> Parcels Delivered : {data.name}</p>
                <p className="text-center">Ratings : {data.average_ratings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;