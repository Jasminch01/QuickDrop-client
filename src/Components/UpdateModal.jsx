import { useForm } from "react-hook-form";
import Modal from "./Modal";
import PropTypes from "prop-types";
import useAuth from "../Hooks/UseAuth";
import { profileUpload, updateUser } from "../api/auth";

const UpdateModal = ({ isOpen, setIsOpen }) => {
  const { user } = useAuth();
  const { updateUserProfile, updateEmail } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const submit = async ({ name, email, photoURL }) => {
    const data = new FormData();
    data.append("image", photoURL[0]);

    try {
      const res = await profileUpload(data);
      const photoURL = res.data.display_url;
      const userId = user._id;
      const updateUserData = {
        name,
        email,
        photoURL,
      };
      const updateProfileRes = await updateUserProfile(name, photoURL);
      const updateEmailResponse = await updateEmail(email);
      const dbResponse = await updateUser(updateUserData, userId);
      console.log(dbResponse);
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <p className="text-2xl font-medium text-center uppercase">
            Update Profile
          </p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              className="w-full rounded-md border-2 py-2 px-3"
              type="text"
              id="name"
              {...register("name")}
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              className="w-full rounded-md border-2 py-2 px-3"
              type="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full py-2">
            <label htmlFor="email" className="mb-2">
              Profile Photo
            </label>
            <input
              type="file"
              {...register("photoURL")}
              className="file-input file-input-bordered w-full"
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
              Update
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
UpdateModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default UpdateModal;