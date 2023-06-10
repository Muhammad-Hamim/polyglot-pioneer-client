import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassRow from "./ClassRow";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        "https://polyglot-pioneers-academy-server.vercel.app/classes"
      );
      return res.data;
    },
  });
  const { register, handleSubmit } = useForm();
  const [feedbackID, setFeedbackID] = useState();
  const feedbackModal = (id) => {
    window.feedbackModal.showModal();
    setFeedbackID(id);
  };
  const sendFeedback = (data) => {
    console.log(data.feedback);
    fetch(
      `https://polyglot-pioneers-academy-server.vercel.app/classes/feedback/${feedbackID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback: data.feedback }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Feedback send successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex p-4 text-lg font-medium items-center justify-between bg-indigo-50">
          {/* outside of table header */}

          <dialog
            id="feedbackModal"
            className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg mb-5">
                Give feedback to help instructor publish the class!
              </h3>
              <div className="form-control">
                <textarea
                  {...register("feedback", { required: true })}
                  placeholder="write feedback"
                  className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"></textarea>
              </div>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
                <button onClick={handleSubmit(sendFeedback)} className="btn ">
                  Send feedback
                </button>
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
                <ClassRow
                  key={course._id}
                  refetch={refetch}
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

export default ManageClasses;
