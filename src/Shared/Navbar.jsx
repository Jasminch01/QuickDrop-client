import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { user, logOut } = useAuth();

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const links = (
    <>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Book a Parcel</Link>
      </li>
      <li>
        <Link>My Parcels</Link>
      </li>
      <li>
        <Link>All Parcels</Link>
      </li>
    </>
  );

  return (
    <div
      className={
        scrolling
          ? "flex items-center py-10 shadow-xl md:py-10 z-30 text-black bg-white fixed top-0  w-full mx-auto"
          : `fixed top-0 w-full mx-auto flex items-center py-10 z-20 transition duration-300 ease-in-out `
      }
    >
      <div className="lg:mx-auto md:max-w-6xl w-full">
        <div
          className={
            "flex items-center fixed z-20 top-0 md:max-w-6xl mx-auto w-full mt-5 md:mt-0"
          }
        >
          <div className="md:navbar-start w-full lg:pt-5 lg:pb-5 lg:pe-5 md:p-5 flex items-center">
            {/* menu icon form small devices */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiMenu></HiMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu flex menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box"
              >
                {links}
              </ul>
            </div>
            <Link>
              <span
                className={
                  scrolling
                    ? "text-black md:font-bold text-3xl "
                    : " text-white md:font-bold text-3xl"
                }
              >
                QuickDrop
              </span>
            </Link>
          </div>
          {/* for large devices */}
          <div
            className={`navbar-center flex${
              scrolling ? `text-black` : ` text-white`
            }`}
          >
            <ul className="menu-horizontal hidden md:flex space-x-5 text-lg">
              {links}
            </ul>
          </div>
          <div className="md:navbar-end flex">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL
                        ? `${user?.photoURL}`
                        : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    User name
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link to={'/deshboard'}>Deshboard</Link>
                </li>
                <li>
                  {user ? (
                    <Link onClick={logOut}>Logout</Link>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
