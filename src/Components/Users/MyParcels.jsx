import { useQuery } from "@tanstack/react-query";
import { getParcels } from "../../api/auth";
import useAuth from "../../Hooks/UseAuth";
import { MdArrowRightAlt } from "react-icons/md";

const MyParcels = () => {
  const { user } = useAuth();
  const { email } = user;
  const { data = [], isLoading } = useQuery({
    queryFn: async () => await getParcels(email),
    queryKey: ["parcels"],
  });

  console.log(data);
  return (
    <div>
      <div className="flex items-center gap-5">
        <MdArrowRightAlt size={25}/>
        <p className="text-2xl font-medium">My parcels</p>
        
      </div>
      <hr className="my-10"/>
      <div>
        {data.map((parcel) => (
          <div key={parcel._id}>
            <p>{parcel?.name}</p>
            <p>{parcel?.email}</p>
            <p>Sender Phone ; {parcel?.phone}</p>
            <p>Reciver Email : {parcel?.reciver_email}</p>
            <p>Reciver Name: {parcel?.reciver_name}</p>
            <p>Status : {parcel?.status}</p>
            <p>Delivery Charge : {parcel?.price} Taka</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyParcels;
