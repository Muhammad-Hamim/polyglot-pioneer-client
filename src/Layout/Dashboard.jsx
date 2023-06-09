import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdFactCheck, MdPayments } from "react-icons/md";
import { FaUser, FaBookReader } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiPlus, BiEdit } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi2";
import { IoMdMail, IoMdSchool } from "react-icons/io";

const Dashboard = () => {
  const { user } = useAuth();
  const isStudent = false;
  const isInstructor = false;
  const isAdmin = true;
  const adminItem = (
    <>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/manageclass"
          className={({ isActive }) => (isActive ? "btn" : "")}>
          <button className="flex gap-1 items-center text-lg font-medium">
            <BiEdit /> Manage class
          </button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/myclass"
          className={({ isActive }) => (isActive ? "btn" : "")}>
          <button className="flex gap-1 items-center text-lg font-medium">
            <FaUser /> Manage users
          </button>
        </NavLink>
      </li>
    </>
  );
  const instructorItem = (
    <>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/addclass"
          className={({ isActive }) => (isActive ? "btn" : "")}>
          <button className="flex gap-1 items-center text-lg font-medium">
            <IoMdSchool /> Add class
          </button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/myclass"
          className={({ isActive }) => (isActive ? "btn" : "")}>
          <button className="flex gap-1 items-center text-lg font-medium">
            <BiPlus /> My class
          </button>
        </NavLink>
      </li>
    </>
  );
  const studentItem = (
    <>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/selectedclass"
          className={({ isActive }) => (isActive ? "btn" : "")}>
          <button className="flex gap-1 items-center text-lg font-medium">
            <MdFactCheck /> Selected class
          </button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/enrolledclass"
          className={({ isActive }) => (isActive ? "btn" : "")}>
          <button className="flex gap-1 items-center text-lg font-medium">
            <HiAcademicCap /> Enrolled class
          </button>
        </NavLink>
      </li>
      <li className="hover:text-primary duration-150">
        <NavLink
          to="/paymenthistory"
          className={({ isActive }) => (isActive ? "btn" : "")}>
          <button className="flex gap-1 items-center text-lg font-medium">
            <MdPayments /> Payment history
          </button>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}{" "}
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
          {/* conditional menu item */}
          {isStudent && studentItem}
          {isInstructor && instructorItem}
          {isAdmin && adminItem}
          {/* conditional menu item */}
          <div className="divider"></div>
          <li className="hover:text-primary duration-150">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "btn" : "")}>
              <button className="flex gap-1 items-center text-lg font-medium">
                <AiFillHome />
                Home
              </button>
            </NavLink>
          </li>
          <li className="hover:text-primary duration-150">
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "btn" : "")}>
              <button className="flex gap-1 items-center text-lg font-medium">
                <FaUser />
                Instructors
              </button>
            </NavLink>
          </li>
          <li className="hover:text-primary duration-150">
            <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "btn" : "")}>
              <button className="flex gap-1 items-center text-lg font-medium">
                <FaBookReader />
                Classes
              </button>
            </NavLink>
          </li>
          <li className="hover:text-primary duration-150">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "btn" : "")}>
              <button className="flex gap-1 items-center text-lg font-medium">
                <IoMdMail />
                Contact Us
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
