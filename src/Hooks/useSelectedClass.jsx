import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClass = [], refetch } = useQuery({
    queryKey: ["selected class", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return []; // Return empty array if user email is not available
      }
      const res = await axiosSecure.get(
        `/selectedclass?studentEmail=${user.email}`
      );
      return res.data;
    },
    enabled: !loading && !!user?.email, // Enable query when not loading and user email is available
  });

  return [selectedClass, refetch];
};

export default useSelectedClass;
