import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Banner from "../../Shared/Banner/Banner";
import ClassCard from "./ClassCard";

const Classes = () => {
  const { loading } = useAuth();
  const { data: classes, isLoading } = useQuery({
    queryKey: [],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        "https://polyglot-pioneers-academy-server.vercel.app/classes"
      );
      return res.data;
    },
  });
  console.log(classes);
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
      <div className="max-w-screen-xl mx-auto py-10 grid lg:grid-cols-3 gap-8">
        {classes.map((item) => {
          return <ClassCard key={item._id} item={item}></ClassCard>;
        })}
      </div>
    </div>
  );
};

export default Classes;
