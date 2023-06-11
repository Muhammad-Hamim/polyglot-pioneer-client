import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const ClassCard = ({ item }) => {
  const { user } = useAuth();
  const {
    image,
    title,
    price,
    instructor,
    instructor_email,
    enrolled_students,
    description,
    available_seats,
    rating,
  } = item;
  const handleSelectClass = () => {
    const selectItem = {
      image,
      title,
      price,
      instructor,
      enrolled_students,
      description,
      available_seats,
      rating,
      stuName: user.displayName,
      stuEmail: user.email,
    };
    axios
      .post("http://localhost:3000/selectedclass", selectItem)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your class has been selected",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={`card ${
        available_seats == 0 ? "bg-red-600" : "bg-base-100 "
      } shadow-xl dark:bg-slate-800`}>
      <figure>
        <img className="max-h-[285px] w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title dark:text-slate-200">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h3 className="badge">
          <span className="font-semibold">Instructor: </span>{" "}
          <a
            className="badge-primary badge"
            href={`mailto:${instructor_email}`}>
            {" "}
            {instructor}
          </a>
        </h3>
        <h3 className="text-lg font-medium badge">
          Enrolled Students:{" "}
          <span className="badge badge-primary text-white">
            {enrolled_students}
          </span>
        </h3>
        <h3 className="text-lg font-medium badge">
          Available Seats:{" "}
          <span className="badge badge-primary text-white">
            {available_seats}
          </span>
        </h3>
        <p className="dark:text-slate-300">{description}</p>
        <h2 className="badge badge-info text-lg font-bold text-white">
          ${price}
        </h2>
        <div className="card-actions justify-between items-center">
          <h3>
            <ReactStars
              count={5}
              value={rating ? rating : 0}
              size={24}
              isHalf={true}
              edit={false}
              emptyIcon={<FaRegStar />}
              halfIcon={<FaStarHalfAlt />}
              filledIcon={<FaStar />}
              activeColor="#4f46e5"
            />
          </h3>
          <button
            onClick={handleSelectClass}
            disabled={available_seats == 0 ? true : false}
            className="badge badge-primary hover:badge-outline">
            SELECT CLASS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
