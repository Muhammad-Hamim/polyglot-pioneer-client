import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
const ClassCard = ({ item }) => {
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
  console.log(item);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-[285px] w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
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
        <p>{description}</p>
        <h2 className="badge badge-info text-lg font-bold text-white">${price}</h2>
        <div className="card-actions justify-between items-center">
          <h3>
            <ReactStars
              count={5}
              value={rating}
              size={24}
              isHalf={true}
              edit={false}
              emptyIcon={<FaRegStar />}
              halfIcon={<FaStarHalfAlt />}
              filledIcon={<FaStar />}
              activeColor="#4f46e5"
            />
          </h3>
          <button className="badge badge-primary hover:badge-outline">
            SEE CLASSES
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
