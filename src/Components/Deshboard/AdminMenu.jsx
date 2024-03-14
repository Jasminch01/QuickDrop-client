import MenuItem from "./MenuItems";
import { FaUsers } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem icon={FaUsers} label="Users" address="all-users" />
      <MenuItem icon={SiGoogledocs} label="Percels" address="all-parcels" />
      <MenuItem
        icon={FaUsers}
        label="Delivery mans"
        address="all-delivery-man"
      />
    </div>
  );
};

export default AdminMenu;
