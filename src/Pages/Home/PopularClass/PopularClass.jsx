import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
  const { data: allClass = [], isLoading } = useQuery({
    queryKey: ["popular class"],
    queryFn: async () => {
      const res = await axios.get(
        "https://polyglot-pioneers-academy-server.vercel.app/classes/home"
      );
      return res.data;
    },
  });
  // Sort the data based on enrolled_student in descending order
  const sortedData = [...allClass].sort(
    (a, b) => b.enrolled_students - a.enrolled_students
  );
  const popularClass = sortedData.slice(0, 6);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="space-y-6 mb-6 text-center">
        <h2 className="text-4xl font-semibold text-black dark:text-slate-200">
          Popular Classes
        </h2>
        <p className="dark:text-slate-400">
          Popular Language Classes at Polyglot Pioneers Academy
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid lg:grid-cols-3 gap-8">
        {popularClass.map((item) => {
          return (
            <PopularClassCard key={item._id} item={item}></PopularClassCard>
          );
        })}
      </div>
    </>
  );
};

export default PopularClass;
