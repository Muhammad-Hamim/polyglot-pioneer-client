import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import PayRow from "./PayRow";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: paymentData = [] } = useQuery({
    queryKey: ["payment history"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymenthistory?email=${user?.email}`);
      return res.data;
    },
    enabled: !loading && !!user?.email,
  });
  console.log(paymentData);
  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex p-4 text-lg font-medium items-center justify-between bg-indigo-50">
          {/* outside of header */}
          <h2>
            Total transaction:{" "}
            <span className="font-bold">{paymentData.length}</span>
          </h2>
        </div>
        <table className="w-full text-sm text-gray-500">
          <thead className="text-gray-700 uppercase text-center bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                <h2 className="text-lg">#</h2>
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction
              </th>
              <th scope="col" className="px-6 py-3">
                Class Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Class Title
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((history, index) => {
              return (
                <PayRow key={history._id} index={index} history={history} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
