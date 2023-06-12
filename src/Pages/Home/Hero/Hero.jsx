import {
  FaInfo,
  FaChalkboardTeacher,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import heroImg from "../../../assets/teacher.png";

const Hero = () => {
  return (
    <>
      <div className="py-8 px-8">
        <div className="max-w-screen-xl mx-auto grid items-center min-h-[80vh] lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h2 className="text-3xl mt-4 lg:mt-0 lg:text-5xl text-slate-800 dark:text-slate-300 font-bold">
              Explore a World of Language Learning
              <br /> with Polyglot Pioneers Academy
            </h2>
            <button className="flex items-center gap-2 text-white px-6 py-3 rounded-md bg-indigo-600 hover:text-white transition-all duration-300">
              <FaInfo /> Learn More
            </button>
          </div>
          <div>
            <img src={heroImg} alt="Teacher" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center text-slate-500  dark:backdrop-blur-lg dark:bg-white/10 bg-white rounded-lg p-6 hover:bg-indigo-600 hover:text-white transition-all duration-300">
            <SiGoogleclassroom className="text-6xl text-indigo-600 mb-4" />
            <h2 className="text-3xl">Online Courses</h2>
            <p>Choose from a variety of language courses</p>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-500  dark:backdrop-blur-lg dark:bg-white/10 bg-white rounded-lg p-6 hover:bg-purple-600 hover:text-white transition-all duration-300">
            <FaChalkboardTeacher className="text-6xl text-purple-600 mb-4" />
            <h2 className="text-3xl">Experienced Instructors</h2>
            <p>Learn from industry-leading language instructors</p>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-500  dark:backdrop-blur-lg dark:bg-white/10 bg-white rounded-lg p-6 hover:bg-red-600 hover:text-white transition-all duration-300">
            <FaCertificate className="text-6xl text-red-600 mb-4" />
            <h2 className="text-3xl">Online Certifications</h2>
            <p>Earn certifications for your language proficiency</p>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-500  dark:backdrop-blur-lg dark:bg-white/10 bg-white rounded-lg p-6 hover:bg-green-600 hover:text-white transition-all duration-300">
            <FaUsers className="text-6xl text-green-600 mb-4" />
            <h2 className="text-3xl">Active Community</h2>
            <p>Connect with a vibrant community of language learners</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
