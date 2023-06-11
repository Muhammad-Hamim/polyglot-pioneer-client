import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import MyClassRow from "./MyClassRow";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/classes?instructorEmail=${user?.email}`
      );
      return res.data;
    },
  });
  const [feedbackText, setFeedbackText] = useState();
  const feedbackModal = (feedback) => {
    window.feedbackModal.showModal();
    setFeedbackText(feedback);
  };
  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <div>
        <h2 className="text-center mb-6 text-3xl font-semibold">
          All class added by you
        </h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex p-4 text-lg font-medium items-center justify-between bg-indigo-50">
          {/* outside of table header */}
          <dialog
            id="feedbackModal"
            className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg mb-5">
                See why your class in denied or approved
              </h3>
              <p className="text-2xl font-medium">
                {feedbackText ? (
                  feedbackText
                ) : (
                  <span className="text-red-400">There is no feedback</span>
                )}
              </p>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
        <table className="w-full text-sm text-gray-500">
          <thead className="text-gray-700 uppercase text-center bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                <h2 className="text-lg">#</h2>
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Class
              </th>
              <th scope="col" className="px-6 py-3">
                Instructor
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.map((course, index) => {
              return (
                <MyClassRow
                  key={course._id}
                  feedbackModal={feedbackModal}
                  index={index}
                  course={course}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
