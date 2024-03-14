import { GrLogout } from "react-icons/gr";
// import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import AdminMenu from "./AdminMenu";
import DelivaryMansMenu from "./DelivaryMansMenu";
import UsersMenu from "./UsersMenu";
import { Link } from "react-router-dom";
// import { BsGraphUp } from "react-icons/bs";
// import ToggleBtn from "../../Button/ToggleButton";
// import Hostmenu from "./Hostmenu";
// import GustMenu from "./GustMenu";
// import AdminMenu from "./AdminMenu";

const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-200">
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <p>QuickDrop</p>
          </div>
        </div>

        <button
        //   onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        // className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
        //   isActive && "-translate-x-full"
        // }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg justify-center items-center bg-blue-500 mx-auto">
              <Link to={'/'} className="font-bold text-3xl text-white">QuickDrop</Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <AdminMenu/>
            <DelivaryMansMenu/>
            <UsersMenu/>
            {/* If a user is host */}
            {/* {role === "host" && <ToggleBtn toggleHandler={toggleHandler} />}
            <nav> */}
              {/* <MenuItem
                icon={BsGraphUp}
                label="Statistics"
                address="/dashboard/statistics"
              /> */}
              {/* Menu Items */}
              {/* {role === "guest" && <GustMenu></GustMenu>}
              {role === "admin" && <AdminMenu></AdminMenu>}
              {role === "host" ? (
                toggle ? (
                  <Hostmenu> </Hostmenu>
                ) : (
                  <GustMenu />
                )
              ) : (
                ""
              )} */}
            {/* </nav> */}
          </div>
        </div>

        <div>
          <hr />

          {/* <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          /> */}
          <button
            // onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
