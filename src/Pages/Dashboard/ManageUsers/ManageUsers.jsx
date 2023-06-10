import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserRow from "./UserRow";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        "https://polyglot-pioneers-academy-server.vercel.app/users"
      );
      return res.data;
    },
  });
  console.log(users);

  const adminUsers = users.filter((user) => user.role === "Admin");
  const instructorUsers = users.filter((user) => user.role === "Instructor");
  const studentUsers =
    users.length - adminUsers.length - instructorUsers.length;
  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex p-4 text-lg font-medium items-center justify-between bg-indigo-50">
          {/* outside of header */}
          <h2>
            Total users: <span className="font-bold">{users.length}</span>
          </h2>
          <h2>
            Total admin: <span className="font-bold">{adminUsers.length}</span>
          </h2>
          <h2>
            Total instructors:{" "}
            <span className="font-bold">{instructorUsers.length}</span>
          </h2>
          <h2>
            Total students: <span className="font-bold">{studentUsers}</span>
          </h2>
        </div>
        <table className="w-full text-sm text-gray-500">
          <thead className="text-gray-700 uppercase text-center bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                <h2 className="text-lg">#</h2>
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Active role
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <UserRow
                  key={user._id}
                  refetch={refetch}
                  index={index}
                  user={user}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
