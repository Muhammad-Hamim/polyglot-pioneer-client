import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars, FaUser } from "react-icons/fa";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const user = true;
  const navItem = (
    <>
      <li className="hover:text-primary duration-150">
        <NavLink>
          <button>Home</button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink>
          <button>Instructors</button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink>
          <button>Classes</button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink>
          <button>Contact Us</button>
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="py-3 px-8 bg-neutral-200">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div>
            <NavLink>
              <button>
                <img className="w-28 h-fit" src={logo} alt="" />
              </button>
            </NavLink>
          </div>
          <div>
            <ul className=" hidden lg:flex text-lg space-x-4 font-bold">
              {navItem}
            </ul>
          </div>
          <div>
            {!user ? (
              <div className=" space-x-6 flex items-center">
                <div className="dropdown dropdown-end">
                  <label className="avatar" tabIndex={0}>
                    <div className="w-12 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://i.ibb.co/5LZsmyT/Wolverine.jpg" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-md dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <button>Name</button>
                    </li>
                    <li>
                      <button>Email</button>
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
                      <button>Logout</button>
                    </li>
                  </ul>
                </div>
                <div className="lg:hidden">
                  <button
                    onClick={() => setVisible(true)}
                    className=" text-3xl">
                    <FaBars />
                  </button>
                </div>
              </div>
            ) : (
              <div className=" space-x-6 flex items-center">
                <NavLink to="/login">
                  <button className="flex items-center gap-2 bg-indigo-600 px-6 py-3 text-white rounded-md">
                    <FaUser></FaUser> Login
                  </button>
                </NavLink>
                <div className="lg:hidden">
                  <button onClick={() => setVisible(true)} className="text-3xl">
                    <FaBars />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <ul className=" space-y-3 text-lg text-indigo-600 font-semibold">
            {navItem}
          </ul>
        </Sidebar>
      </div>
    </>
  );
};

export default Navbar;
