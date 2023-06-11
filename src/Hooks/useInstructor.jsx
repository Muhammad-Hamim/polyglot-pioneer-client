import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("jwt-access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
      return res.data.instructor;
    },
  });
  console.log(isInstructor)
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;