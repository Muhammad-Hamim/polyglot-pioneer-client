import Lottie from "react-lottie";
import bg from "../../assets/Error.json";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className="max-w-screen relative h-screen">
      <div className="absolute left-1/2 -translate-x-1/2 top-[80%] z-20">
        <p className="text-center mb-2 text-2xl font-bold">Page not found</p>
        <NavLink to="/">
          <button className="btn btn-primary">
            <FaHome className="text-lg" /> Go to home page
          </button>
        </NavLink>
      </div>
      <Lottie
        options={{ animationData: bg, loop: true, autoplay: true }}></Lottie>
    </div>
  );
};

export default ErrorPage;
