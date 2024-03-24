import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Modal from "../Modal";
// import toast from "react-hot-toast";

const ManageModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const submit = async () => {
    reset();
    onCancel();
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <p className="text-2xl font-medium text-center uppercase">
            Update User Role
          </p>
        </div>
        <form onSubmit={handleSubmit(submit)} className="mt-5">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="mb-2 font-medium">
             Avilable Role
            </label>
            <select className="select select-bordered w-full">
              <option>Admin</option>
              <option>Delivery Man</option>
              <option>User</option>
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
ManageModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default ManageModal;
