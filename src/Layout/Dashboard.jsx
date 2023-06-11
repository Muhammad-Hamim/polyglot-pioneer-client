import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdFactCheck, MdPayments } from "react-icons/md";
import { FaUser, FaBookReader } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiPlus, BiEdit } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi2";
import { IoMdMail, IoMdSchool } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  // const isInstructor = false;

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const adminItem = (
    <>
      <li>
        <NavLink to="manageclasses">
          <BiEdit /> Manage classes
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageusers">
          <FaUser /> Manage users
        </NavLink>
      </li>
    </>
  );
  const instructorItem = (
    <>
      <li>
        <NavLink to="addclass">
          <BiPlus /> Add class
        </NavLink>
      </li>
      <li>
        <NavLink to="myclasses">
          <IoMdSchool /> My class
        </NavLink>{" "}
      </li>
    </>
  );
  const studentItem = (
    <>
      <li>
        <NavLink to="selectedclass">
          <MdFactCheck /> Selected class
        </NavLink>
      </li>
      <li>
        <NavLink to="enrolledclass">
          <HiAcademicCap /> Enrolled class
        </NavLink>
      </li>
      <li>
        <NavLink to="paymenthistory">
          <MdPayments /> Payment history
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer drawer-mobile lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="py-4">
              <div className="w-36 h-36 mx-auto cursor-pointer rounded-full ring ring-indigo-600 ring-offset-base-100 ring-offset-2">
                <img
                  className="w-full h-full rounded-full ring-2"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div className="text-center mt-10 text-xl font-semibold">
                <h2>Name: {user?.displayName}</h2>
                <h2>Email: {user?.email}</h2>
              </div>
            </div>
            <div className="divider"></div>
            {!isAdmin && !isInstructor && studentItem}
            {isInstructor && instructorItem}
            {isAdmin && adminItem}
            <div className="divider"></div>
            <li className="hover:text-primary duration-150">
              <NavLink to="/">
                <AiFillHome />
                Home
              </NavLink>
            </li>
            <li className="hover:text-primary duration-150">
              <NavLink to="/instructors">
                <FaUser />
                Instructors
              </NavLink>
            </li>
            <li className="hover:text-primary duration-150">
              <NavLink to="/classes">
                <FaBookReader />
                Classes
              </NavLink>
            </li>
            <li className="hover:text-primary duration-150">
              <NavLink to="/contact">
                <IoMdMail />
                Contact Us
              </NavLink>
            </li>
            <li
              onClick={handleLogout}
              className="hover:text-primary duration-150">
              <button>
                {" "}
                <FiLogOut />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
