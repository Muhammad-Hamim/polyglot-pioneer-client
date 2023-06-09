import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
const InstCard = ({ inst }) => {
  const { name, email, classes_taken, rating, image } = inst;
  console.log(inst);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h3 className="badge">
          <span className="font-semibold">Email: </span>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </h3>
        <h3 className="text-lg font-medium">
          Classes Taken:{" "}
          <span className="badge badge-primary text-white">
            {classes_taken}
          </span>
        </h3>
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

export default InstCard;
