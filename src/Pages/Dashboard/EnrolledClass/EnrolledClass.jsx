import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const EnrolledClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolled class"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolledclass?email=${user?.email}`);
      return res.data;
    },
    enabled: !loading && !!user?.email,
  });
  console.log(enrolledClass);
  return (
    <div>
      <Helmet>
        <title>PPA | Enrolled Class</title>
      </Helmet>
    </div>
  );
};

export default EnrolledClass;
