import { useQuery } from "@tanstack/react-query";
import Banner from "../../Shared/Banner/Banner";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import InstCard from "./InstCard";

const Instructors = () => {
  const { loading } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: [],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        "https://polyglot-pioneers-academy-server.vercel.app/instructors"
      );
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div>
        <Banner
          title="Our honorable instructors."
          description="Expert Instructors. Exceptional Learning. Achieve Fluency."></Banner>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid lg:grid-cols-2 gap-8">
        {data.map((item) => {
          return <InstCard key={item._id} inst={item}></InstCard>;
        })}
      </div>
    </div>
  );
};

export default Instructors;
