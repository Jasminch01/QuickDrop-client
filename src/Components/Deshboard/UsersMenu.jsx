import MenuItem from "./MenuItems";
import { SiGoogledocs } from "react-icons/si";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const UsersMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="My Profile" address="my-profile" />
      <MenuItem icon={SiGoogledocs} label="My Parcels" address="my-parcels" />
      <MenuItem
        icon={AiTwotoneFolderAdd}
        label="add Parcel"
        address="add parcel"
      />
    </>
  );
};

export default UsersMenu;
