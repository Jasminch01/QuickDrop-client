import MenuItem from "./MenuItems";
import { SiGoogledocs } from "react-icons/si";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { useState } from "react";
import BookModal from "../BookModal";

const UsersMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MenuItem icon={SiGoogledocs} label="My Parcels" address="my-parcels" />
      <div
        onClick={modalHandler}
        className="flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700"
      >
        <AiTwotoneFolderAdd className="w-5 h-5" />
        <button className="mx-4 font-medium">Book A parcel</button>
      </div>
      <BookModal isOpen={isOpen} setIsOpen={setIsOpen}></BookModal>
    </>
  );
};

export default UsersMenu;
