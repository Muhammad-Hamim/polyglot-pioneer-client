import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have been successfully logged out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  const navItem = (
    <>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}>
          <button>Home</button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "text-primary" : "")}>
          <button>Instructors</button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "text-primary" : "")}>
          <button>Classes</button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-primary" : "")}>
          <button>Contact Us</button>
        </NavLink>
      </li>
    </>
  );
  const theme = (
    <>
      <button className="text-3xl text-indigo-500" onClick={toggleTheme}>
        {isDarkTheme ? <LuSunMoon /> : <BsMoonStarsFill />}
      </button>
    </>
  );
  const navIcon = (
    <div className="lg:hidden">
      <label htmlFor="my-drawer" className="dark:text-primary-content text-3xl">
        <GiHamburgerMenu />
      </label>
    </div>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <>
            <div className="py-3 px-8 bg-neutral-200 dark:bg-slate-800">
              <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div>
                  <NavLink>
                    <button>
                      <img className="w-28 h-fit" src={logo} alt="" />
                    </button>
                  </NavLink>
                </div>
                <div>
                  <ul className="hidden lg:flex text-lg space-x-4 dark:text-primary-content font-bold">
                    {navItem}
                  </ul>
                </div>
                <div>
                  {user ? (
                    <div className=" space-x-6 flex items-center">
                      {theme}
                      <div className="dropdown dropdown-end">
                        <label className="avatar" tabIndex={0}>
                          <div className="w-12 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                          </div>
                        </label>
                        <ul
                          tabIndex={0}
                          className="menu menu-md dropdown-content mt-3 dark:bg-slate-700 dark:text-slate-200 p-2 shadow bg-base-100 rounded-box w-52">
                          <li>
                            <button>{user?.displayName}</button>
                          </li>
                          <li>
                            <button>{user?.email}</button>
                          </li>
                          <li>
                            <NavLink to="/profile">
                              <button>Profile</button>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/dashboard">
                              <button>Dashboard</button>
                            </NavLink>
                          </li>
                          <li>
                            <button onClick={handleLogout}>Logout</button>
                          </li>
                        </ul>
                      </div>
                      {navIcon}
                    </div>
                  ) : (
                    <div className=" space-x-6 flex items-center">
                      {theme}
                      <NavLink to="/login">
                        <button className="flex items-center gap-2 bg-indigo-600 px-6 py-3 text-white rounded-md">
                          <FaUser></FaUser> Login
                        </button>
                      </NavLink>
                      {navIcon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
          {/* Page content here */}
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 font-bold dark:bg-slate-900 dark:text-primary-content">
            {/* Sidebar content here */}
            {navItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
