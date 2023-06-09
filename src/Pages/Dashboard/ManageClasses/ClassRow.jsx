import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
const ClassRow = ({ course, refetch, index }) => {
  // Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback)
  const {
    image,
    title,
    price,
    instructor,
    instructor_email,
    available_seats,
  } = course;
  console.log(course);
  return (
    <tr className="bg-white border-b hover:bg-gray-50 text-center">
      <td className="w-4 p-4">
        <h2 className="text-lg">{index + 1}</h2>
      </td>
      <td className="px-6 py-4">
        <img className="w-10 h-10 mx-auto rounded-full" src={image} />
      </td>
      <th scope="row" className=" px-6 py-4 text-gray-900">
        <div className="text-gray-800 font-semibold">
          <div className="text-gray-800 font-semibold">{title}</div>
          <div className="font-normal text-gray-500">Price: ${price}</div>
          <div className="font-normal text-gray-500">
            Available seats: {available_seats}
          </div>
        </div>
      </th>
      <td className="px-6 py-4 font-bold">
        <h2>{instructor}</h2>
        <h2>{instructor_email}</h2>
      </td>
      <td className="px-6 py-4">
        <h2 className="font-medium text-blue-600 hover:underline">Pending</h2>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2 flex-col">
          <button className="btn">Approve</button>
          <button className="btn">Deny</button>
          <button className="btn">Send feedback</button>
        </div>
      </td>
    </tr>
  );
};

export default ClassRow;
