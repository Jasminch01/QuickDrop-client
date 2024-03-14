import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItems";

const DelivaryMansMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="My Reviews"
        address="my-reviews"
      />
      <MenuItem
        icon={MdHomeWork}
        label="My Delivary list"
        address="delivary list"
      />
    </>
  );
};

export default DelivaryMansMenu;
