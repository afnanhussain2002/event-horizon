import { GrMenu } from "react-icons/gr";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="drawer ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" mt-2 flex flex-col items-center justify-start">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn drawer-button ">
            <GrMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 ">
            {/* Sidebar content here */}
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/upcomming"}>Upcomming Events</NavLink>
            </li>
            <li>
              <NavLink to={"/popular"}>Popular Events</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
