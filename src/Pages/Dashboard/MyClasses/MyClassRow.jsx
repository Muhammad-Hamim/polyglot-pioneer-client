// import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyClassRow = ({ course, index, feedbackModal }) => {
  // Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback)
  const {
    _id,
    image,
    title,
    status,
    rating,
    price,
    enrolled_students,
    feedback,
    instructor,
    instructor_email,
    available_seats,
  } = course;

  // const handleApprove = (id) => {
  //   fetch(`http://localhost:3000/classes/approve/${id}`, {
  //     method: "PATCH",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount) {
  //         refetch();
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "Class approved!",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  // };
  // const handlePending = (id) => {
  //   fetch(`http://localhost:3000/classes/pending/${id}`, {
  //     method: "PATCH",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount) {
  //         refetch();
  //       }
  //     });
  // };

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
            <div className="font-normal text-gray-500">Price: ${price}</div>
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
          <h2>{instructor_email}</h2>
        </td>
        <td className="px-6 py-4">
          <h2
            className={`font-medium ${
              status === "deny" ? "text-red-500" : "text-blue-600"
            } hover:underline`}>
            {status}
          </h2>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-2 flex-col">
            <Link to={`editmyclass/${_id}`}>
              <button className="btn w-full">Edit</button>
            </Link>
            <button
              onClick={() => {
                feedbackModal(feedback);
                // handlePending(_id);
              }}
              className="btn">
              See feedback
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyClassRow;
