import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PopularClass = () => {
  const { data: allClass = [], isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/classes/home");
      return res.data;
    },
  });
  // Sort the data based on enrolled_student in descending order
  const sortedData = [...allClass].sort(
    (a, b) => b.enrolled_students - a.enrolled_students
  );
  const popularClass = sortedData.slice(0, 6);
  console.log(popularClass);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <div></div>;
};

export default PopularClass;
