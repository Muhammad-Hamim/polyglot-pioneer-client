import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

const SelectedClassRow = ({ course, index }) => {
  const {
    _id,
    image,
    title,
    rating,
    price,
    enrolled_students,
    instructor,
    available_seats,
  } = course;
  const handleDelete = (id) => {
    console.log(id);
  }
  return (
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
        </div>
      </th>
      <td className="px-6 py-4 font-bold">
        <h2>{instructor}</h2>
      </td>
      <td className="px-6 py-4">
        <h2 className="font-medium text-2xl text-blue-600 hover:underline">
          ${price}
        </h2>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2 flex-col">
          <button className="btn w-full">Pay</button>
          <button onClick={() => handleDelete(_id)} className="btn">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SelectedClassRow;
