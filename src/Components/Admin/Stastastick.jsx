import { MdArrowRightAlt } from "react-icons/md";
import BookingChart from "./BookingChart";
import Comparision from "./Comparision";

const Stastastick = () => {
  return (
    <div>
      <p className="font-medium text-lg flex items-center gap-5">
        <MdArrowRightAlt size={25} />
        Statistics
      </p>
      <hr className="my-5" />
      <div className="flex gap-5">
        <div className="h-60 bg-green-300 w-full">
        </div>
        <div className="h-60 rounded bg-blue-300 w-full">
        </div>
        <div className="h-60 rounded bg-gray-800 w-full">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-10 flex gap-5">
          <div className="shadow-md">
            <BookingChart />
          </div>
          <div className="shadow-md">
            <Comparision />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stastastick;
