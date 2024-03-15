import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import useAuth from "../Hooks/UseAuth";
import axiosSecure from "../api";

const BookModal = ({ isOpen, setIsOpen }) => {
  const { handleSubmit, register, reset } = useForm();
  const { user } = useAuth({});
  const navigate = useNavigate();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const submit = async ({
    name,
    email,
    phone,
    reciver_name,
    reciver_email,
    reciver_phone,
    parcel_weight,
    parcel_address,
  }) => {
    const perKg = 50;
    const overTwoKg = 150;
    let price;
    if (parcel_weight > 2) {
      price = overTwoKg * parcel_weight;
    } else {
      price = perKg * parcel_weight;
    }
    const bookingDate = new Date()

    const data = {
      name,
      email,
      phone,
      reciver_email,
      reciver_name,
      reciver_phone,
      parcel_weight,
      price,
      parcel_address,
      bookingDate,
      status: "pending",
    };

    const res = await axiosSecure.post(`/bookings`, data);
    if (res.data.acknowledged && res.data.insertedId) {
      // navigate("/my-percels");
    }
    console.log(res);
    onCancel();
    reset();
  };

  if (!user) {
    navigate("/login");
  }
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Name
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="name"
              value={user?.displayName}
              {...register("name")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2">
              Email Adress
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="email"
              value={user?.email}
              {...register("email")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="phone" className="mb-2">
              Phone Number
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="tel"
              id="phone"
              {...register("phone")}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Reciver Name
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="reciver_name"
              {...register("reciver_name")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2">
              Reciver Email Address
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="reciver_email"
              {...register("reciver_email")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2">
              Reciver Phone Number
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="tel"
              id="reciver_phone"
              {...register("reciver_phone")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="parcel-with" className="mb-2">
              Parcel Weight
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="number"
              id="parcel-weight"
              {...register("parcel_weight")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2">
              Parcel Delivery Address
            </label>
            <input
              className="w-full rounded-md border-2 py-2"
              type="text"
              id="parcel-address"
              {...register("parcel_address")}
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button
              onClick={() => onCancel()}
              type="button"
              className="btn bg-red-400 text-white rounded-full border-2 py-2 uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-1 px-5 bg-blue-500 rounded-full text-white uppercase"
            >
              Book
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

BookModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default BookModal;
