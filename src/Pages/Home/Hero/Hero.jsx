import { FaInfo } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineManageAccounts } from "react-icons/md";
const Hero = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="max-w-screen-xl mx-auto grid items-center min-h-[80vh] lg:grid-cols-2 gap-6">
        <div className=" space-y-6">
          <h2 className="text-5xl text-gray-900 font-bold">
            Get <span className=" text-orange-600">2500+</span> <br /> Best
            Online Courses
            <br /> From Polyglot Pioneers Academy
          </h2>
          <button className="flex items-center gap-2 bg-indigo-600 px-6 py-3 text-white rounded-md">
            <FaInfo></FaInfo> Learn More
          </button>
        </div>
        <div></div>
      </div>
      <div className=" bg-indigo-600 w-full">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex gap-3 items-center border-r-[1px] border-indigo-200 py-12">
            <div>
              <h2 className="text-4xl text-white bg-indigo-500 rounded-full p-4">
                <SiGoogleclassroom />
              </h2>
            </div>
            <div>
              <h2 className="text-white text-3xl">
                {" "}
                3020 <br /> Online Courses
              </h2>
            </div>
          </div>
          <div className="flex gap-3 items-center border-r-[1px] border-indigo-200 py-12">
            <div>
              <h2 className="text-4xl text-white bg-indigo-500 rounded-full p-4">
                <MdOutlineManageAccounts />
              </h2>
            </div>
            <div>
              <h2 className="text-white text-3xl">
                {" "}
                Top <br /> Instructors
              </h2>
            </div>
          </div>
          <div className="flex gap-3 items-center border-r-[1px] border-indigo-200 py-12">
            <div>
              <h2 className="text-4xl text-white bg-indigo-500 rounded-full p-4">
                <SiGoogleclassroom />
              </h2>
            </div>
            <div>
              <h2 className="text-white text-3xl">
                {" "}
                3020 <br /> Online Courses
              </h2>
            </div>
          </div>
          <div className="flex gap-3 items-center py-12">
            <div>
              <h2 className="text-4xl text-white bg-indigo-500 rounded-full p-4 ">
                <SiGoogleclassroom />
              </h2>
            </div>
            <div>
              <h2 className="text-white text-3xl">
                {" "}
                3020 <br /> Online Courses
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
