import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
      <li>
        <Link>FAQ</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="lg:mx-auto md:max-w-6xl w-full">
        <div
          className={
            "flex items-center text-white fixed z-10 top-0 md:max-w-6xl mx-auto w-full"
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
                <li>
                  <Link>Log in</Link>
                </li>
              </ul>
            </div>
            <Link>
              <span className="md:font-bold text-3xl">QuickDrop</span>
            </Link>
          </div>
          {/* for large devices */}
          <div>
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
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
                  <a>Deshboard</a>
                </li>
                <li>
                  <a>Logout</a>
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
