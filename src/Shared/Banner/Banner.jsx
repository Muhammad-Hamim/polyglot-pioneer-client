// import { useQuery } from "@tanstack/react-query";
import bannerBg from "../../assets/banner01.svg";

const Banner = ({ title, description }) => {
  return (
    <div
      className="w-full py-16 text-center space-y-3"
      style={{ backgroundImage: `url(${bannerBg})` }}>
      <h2 className="text-2xl md:text-5xl font-bold text-white">{title}</h2>
      <p className=" text-xs md:text-lg text-slate-200">{description}</p>
    </div>
  );
};

export default Banner;
