import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/UseAuth";
import { getUser } from "../api/auth";
import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UpdateModal from "./UpdateModal";

const Profile = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { email: userEmail, photoURL, displayName } = user;
  const [userImage, setUserImage] = useState(photoURL);
  const [isOpen, setIsOpen] = useState(false);
  console.log(userImage);

  const { data: currentUser, refetch } = useQuery({
    queryFn: async () => await getUser(userEmail),
    queryKey: ["user"],
  });
  refetch();

  return (
    <div>
      <p className="font-medium text-lg flex items-center gap-5">
        <MdArrowRightAlt size={25} />
        My Profile
      </p>

      <hr className="my-10" />

      <div className="flex justify-center my-20">
        <form className="relative">
          <img
            src={
              currentUser?.photoURL ||
              userImage ||
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
            alt=""
            className="w-60 rounded"
          />
          <input
            {...register("photoURL")}
            id="photoURL"
            type="file"
            className="hidden"
          />
        </form>
      </div>
      <div className="text-center">
        <p className="font-medium">Name : {displayName}</p>
        <p className="font-medium">Role : {currentUser?.role}</p>
        <p className="font-medium">Status : {currentUser?.status}</p>
        <p className="font-medium">Email Adress : {currentUser?.email}</p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white rounded p-2 my-3 uppercase font-medium"
        >
          Update profile
        </button>
      </div>
      <UpdateModal refetch={refetch} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Profile;
