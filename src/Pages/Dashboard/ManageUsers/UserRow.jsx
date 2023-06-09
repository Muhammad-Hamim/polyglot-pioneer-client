import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UserRow = ({ user, index, refetch }) => {
  const { name, image, email, _id, role } = user;
  const [adminDisable, setAdminDisable] = useState(false);
  const [instructorDisable, setInstructorDisable] = useState(false);
  useEffect(() => {
    if (role === "Admin") {
      setAdminDisable(true);
      setInstructorDisable(false);
    } else if (role === "Instructor") {
      setInstructorDisable(true);
      setAdminDisable(false);
    }
  }, [role]);
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:3000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (id) => {
    fetch(`http://localhost:3000/users/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is a Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/users/${id}`)
          .then((result) => {
            console.log(result);
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <tr className="bg-white border-b hover:bg-gray-50 text-center">
      <td className="w-4 p-4">
        <h2 className="text-lg">{index + 1}</h2>
      </td>
      <td className="px-6 py-4">
        <img className="w-10 h-10 mx-auto rounded-full" src={image} />
      </td>
      <th scope="row" className=" px-6 py-4 text-gray-900">
        <div className="text-gray-800 font-semibold">{name}</div>
        <div className="font-normal text-gray-500">{email}</div>
      </th>
      <td className="px-6 py-4 font-bold">{role ? role : "Student"}</td>
      <td className="px-6 py-4">
        <div className="flex gap-2 flex-col">
          <button
            disabled={adminDisable}
            onClick={() => handleMakeAdmin(_id)}
            className="btn">
            Admin
          </button>
          <button
            disabled={instructorDisable}
            onClick={() => handleMakeInstructor(_id)}
            className="btn">
            Instructor
          </button>
        </div>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleUserDelete(_id)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Delete user
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
