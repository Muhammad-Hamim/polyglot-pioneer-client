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
      const res = await axios.get("http://localhost:3000/instructors");
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="dark:bg-gray-900">
      <div>
        <Banner
          title="Meet Our Expert Instructors"
          description="Learn from industry-leading professionals who are passionate about sharing their expertise with you."></Banner>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid lg:grid-cols-3 gap-8">
        {data.map((item) => {
          return <InstCard key={item._id} inst={item}></InstCard>;
        })}
      </div>
    </div>
  );
};

export default Instructors;
