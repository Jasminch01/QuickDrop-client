import PropTypes from "prop-types";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getAllDeliveryMan } from "../../api/auth";
const AssignModal = ({ isOpen, setIsOpen }) => {
  const {
    data: deliverymans = [],
    isLoading,
    refetch,
  } = useQuery({
    queryFn: async () => await getAllDeliveryMan(),
    queryKey: ["deliverymans"],
  });
  const { register, handleSubmit, reset } = useForm();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  const submit = () => {
    console.log(submit);
  };
  refetch()
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <p className="text-2xl font-medium text-center uppercase">
            Assign A Delivery Man To Delivery
          </p>
        </div>
        <form onSubmit={handleSubmit(submit)} className="mt-5">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="mb-2 font-medium">
              Assign To 
            </label>
            <select
              className="select select-bordered w-full"
              {...register("assignTo")}
            >
             { deliverymans.map(man => <option key={man._id} value={man.name}>{man.name}</option>)}
            </select>
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
              Update
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

AssignModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default AssignModal;
