import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const { data: allInstructor = [], isLoading } = useQuery({
    queryKey: ["popular instructor"],
    queryFn: async () => {
      const res = await axios.get(
        "https://polyglot-pioneers-academy-server.vercel.app/instructors"
      );
      return res.data;
    },
  });

  const sortedData = [...allInstructor].sort(
    (a, b) => b.classes_taken - a.classes_taken
  );
  const popularInstructor = sortedData.slice(0, 6);
  console.log(popularInstructor);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="space-y-6 mb-6 text-center">
        <h2 className="text-4xl font-semibold text-black dark:text-slate-200">
          Popular Instructors
        </h2>
        <p className="dark:text-slate-400">
          Here is our most experienced and popular instructors
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid lg:grid-cols-3 gap-8">
        {popularInstructor.map((item) => {
          return (
            <PopularInstructorCard
              key={item._id}
              inst={item}></PopularInstructorCard>
          );
        })}
      </div>
    </div>
  );
};

export default PopularInstructor;
