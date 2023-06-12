import Swal from "sweetalert2";

const ClassRow = ({ course, refetch, index, feedbackModal }) => {
  // Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback)
  const {
    _id,
    image,
    title,
    status,
    price,
    instructor,
    instructor_email,
    available_seats,
  } = course;
  const handleApprove = (id) => {
    fetch(
      `https://polyglot-pioneers-academy-server.vercel.app/classes/approve/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class approved!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "The class won't show on ui!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://polyglot-pioneers-academy-server.vercel.app/classes/deny/${id}`,
          {
            method: "PATCH",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Class denied!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50 text-center">
        <td className="w-4 p-4">
          <h2 className="text-lg">{index + 1}</h2>
        </td>
        <td className="px-6 py-4">
          <img className="w-10 h-10 mx-auto rounded-full" src={image} />
        </td>
        <th scope="row" className=" px-6 py-4 text-gray-900">
          <div className="text-gray-800 font-semibold">
            <div className="text-gray-800 font-semibold">{title}</div>
            <div className="font-normal text-gray-500">Price: ${price}</div>
            <div className="font-normal text-gray-500">
              Available seats: {available_seats}
            </div>
          </div>
        </th>
        <td className="px-6 py-4 font-bold">
          <h2>{instructor}</h2>
          <h2>{instructor_email}</h2>
        </td>
        <td className="px-6 py-4">
          <h2 className="font-medium text-blue-600 hover:underline">
            {status}
          </h2>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-2 flex-col">
            <button
              disabled={
                status === "approve" || status === "deny" ? true : false
              }
              onClick={() => handleApprove(_id)}
              className="btn">
              Approve
            </button>
            <button
              disabled={
                status === "approve" || status === "deny" ? true : false
              }
              onClick={() => handleDeny(_id)}
              className="btn">
              Deny
            </button>
            <button
              onClick={() => {
                feedbackModal(_id);
                // handlePending(_id);
              }}
              className="btn">
              Send feedback
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ClassRow;
