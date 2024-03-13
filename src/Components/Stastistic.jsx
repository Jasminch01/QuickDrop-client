import Container from "./Container";

const Stastistic = () => {
  return (
    <div className="h-[40vh] bg-gray-800 flex  justify-center items-center">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className=" rounded bg-slate-50/5 text-white p-5 shadow-lg space-y-2 text-center">
            <p className="font-bold text-3xl">10</p>
            <p className=""> Parcel Booked</p>
          </div>
          <div className=" rounded bg-slate-50/5 text-white p-5 shadow-lg space-y-2 text-center">
            <p className="font-bold text-3xl">100</p>
            <p className="">Parcel Delivered</p>
          </div>
          <div className=" rounded bg-slate-50/5 text-white p-5 shadow-lg space-y-2 text-center">
            <p className="font-bold text-3xl">500</p>
            <p className="">Brances</p>
          </div>
          <div className=" rounded bg-slate-50/5 text-white p-5 shadow-lg space-y-2 text-center">
            <p className="font-bold text-3xl">500</p>
            <p className="">Users</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stastistic;
