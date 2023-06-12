import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

const EnrolledClassRow = ({ course, index }) => {
  // Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback)
  const {
    image,
    title,
    rating,
    price,
    enrolled_students,
    instructor,
    instructor_email,
    available_seats,
  } = course;

  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50 text-center">
        <td className="w-4 p-4">
          <h2 className="text-lg">{index + 1}</h2>
        </td>
        <td className="px-6 py-4">
          <img className="w-10 h-10 mx-auto rounded-full" src={image} />
        </td>
        <th scope="row" className=" px-6 py-4 text-gray-900">
          <div className="text-gray-800 font-semibold space-y-1">
            <div className="text-gray-800 font-semibold">{title}</div>
            <div className="font-normal text-gray-500">
              Available seats: {available_seats}
            </div>
            <div className="font-normal text-gray-500">
              Enrolled students: {enrolled_students}
            </div>
          </div>
        </th>
        <td className="px-6 py-4 font-bold">
          <h2>{instructor}</h2>
          <h2>{instructor_email}</h2>
        </td>
        <td className="px-6 py-4">
          <h2>${price}</h2>
        </td>
        <td className="px-6 py-4">
          <h3 className="flex justify-center">
            <ReactStars
              count={5}
              value={rating ? rating : 0}
              size={20}
              isHalf={true}
              edit={false}
              emptyIcon={<FaRegStar />}
              halfIcon={<FaStarHalfAlt />}
              filledIcon={<FaStar />}
              activeColor="#4f46e5"
            />
          </h3>
        </td>
      </tr>
    </>
  );
};

export default EnrolledClassRow;
