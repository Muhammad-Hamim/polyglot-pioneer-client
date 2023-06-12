import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const SelectedClassRow = ({ course, index, refetch }) => {
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
  const handleClassDelete = (id) => {
    console.log(id);
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
          .delete(`http://localhost:3000/selectedclass/${id}`)
          .then((result) => {
            console.log(result);
            refetch();
            Swal.fire("Deleted!", "This class has been deleted", "success");
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
          <button onClick={() => handleClassDelete(_id)} className="btn">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SelectedClassRow;
