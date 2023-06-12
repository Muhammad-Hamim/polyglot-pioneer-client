import {
  FaComments,
  FaLanguage,
  FaBook,
  FaFlag,
  FaGlobe,
  FaUsers,
  FaMicrophone,
  FaPen,
  FaHeadset,
} from "react-icons/fa";

const TopCategory = () => {
  const categories = [
    { name: "Spoken English", icon: <FaComments />, color: "#FFC107" },
    { name: "Language Mastery", icon: <FaLanguage />, color: "#9C27B0" },
    { name: "Literature Studies", icon: <FaBook />, color: "#E91E63" },
    { name: "Cultural Immersion", icon: <FaFlag />, color: "#2196F3" },
    { name: "Global Communication", icon: <FaGlobe />, color: "#4CAF50" },
    { name: "Group Conversations", icon: <FaUsers />, color: "#FF5722" },
    { name: "Oral Presentations", icon: <FaMicrophone />, color: "#795548" },
    { name: "Writing Skills", icon: <FaPen />, color: "#607D8B" },
    { name: "Listening Practice", icon: <FaHeadset />, color: "#FF9800" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="space-y-6 mb-6 text-center">
        <h2 className="text-4xl font-semibold text-black dark:text-slate-200">
          Top Categories
        </h2>
        <p className="dark:text-slate-400">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et dolore
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 py-7">
        {categories.map((category, index) => (
          <div
            key={index}
            style={{ backgroundColor: category.color }}
            className="flex items-center space-x-12 py-3 ps-6 text-white dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-700 cursor-pointer transition-all duration-300 transform hover:scale-105">
            <h2 className="text-6xl">{category.icon}</h2>
            <h2 className="text-xl capitalize font-bold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
