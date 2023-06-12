import SelectedClassRow from "./SelectedClassRow";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import { Link } from "react-router-dom";
const SelectedClass = () => {
  const [selectedClass, refetch] = useSelectedClass();
  const total = selectedClass.reduce(
    (total, course) => total + course.price,
    0
  );
  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <div>
        <h2 className="text-center mb-6 text-3xl font-semibold">
          All your selected class
        </h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex p-4 text-lg font-medium items-center justify-between bg-indigo-50">
          {/* outside of table header */}
          <h2 className="text-2xl font-bold">
            Total Price: ${parseFloat(total.toFixed(2))}
          </h2>
          <Link to="payment">
            <button className="btn w-full btn-primary">Pay</button>
          </Link>
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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((course, index) => {
              return (
                <SelectedClassRow
                  key={course._id}
                  index={index}
                  course={course}
                  refetch={refetch}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
