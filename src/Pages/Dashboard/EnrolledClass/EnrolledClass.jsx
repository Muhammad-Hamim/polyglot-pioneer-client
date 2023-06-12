import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import EnrolledClassRow from "./EnrolledClassRow";
const EnrolledClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolled class"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolledclass?email=${user?.email}`);
      return res.data;
    },
    enabled: !loading && !!user?.email,
  });
  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <Helmet>
        <title>PPA | Enrolled Class</title>
      </Helmet>
      <div>
        <h2 className="text-center mb-6 text-3xl font-semibold">
          All your enrolled class
        </h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex p-4 text-lg font-medium items-center justify-between bg-indigo-50">
          {/* outside of table header */}
          <h2 className="text-3xl font-semibold">
            Total Enrolled Class: {enrolledClass.length}
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
                Class
              </th>
              <th scope="col" className="px-6 py-3">
                Instructor
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((course, index) => {
              return (
                <EnrolledClassRow
                  key={course._id}
                  index={index}
                  course={course}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
