import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaLock } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const imgHostingToken = import.meta.env.VITE_imgHostingToken;

const AddClass = () => {
  const { user } = useAuth();
  const imgHostingurl = `https://api.imgbb.com/1/upload?&key=${imgHostingToken}`;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleAddClass = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imgHostingurl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const classInfo = {
            title: data.title,
            image: imgURL,
            instructor: user.displayName,
            instructor_email: user.email,
            price: data.price,
            available_seats: data.seats,
            enrolled_students: 0,
            rating: 0,
            description: data.description,
            status: "pending",
          };
          console.log(classInfo);
          fetch("http://localhost:3000/classes", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(classInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Class added. status pending",
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
      <Helmet>
        <title>PPA | Add class</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto py-24">
        <div className="p-8 w-full lg:p-20 border-indigo-500 md:border-[1px] md:shadow-xl rounded-lg">
          <h2 className="text-indigo-500 text-3xl text-center font-bold">
            Enter Information to add clas
          </h2>
          <form className="mt-10 grid grid-cols-2 gap-8 items-center">
            <div className="form-control">
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Class title"
                className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"
              />
              {errors.title?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  title is required
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                {...register("image", { required: true })}
                type="file"
                placeholder="Your photo"
                className="file-input file-input-bordered focus:file-input-primary w-full"
              />
              {errors.image?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  Photo is required
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                {...register("instructorName", { required: true })}
                type="text"
                value={user?.displayName}
                placeholder="Instructor name"
                readOnly
                className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"
              />
              {errors.instructorName?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  instructor name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                {...register("instructorEmail", { required: true })}
                type="email"
                readOnly
                placeholder="Instructor email"
                value={user?.email}
                className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"
              />
              {errors.instructorEmail?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  instructor email is required
                </p>
              )}
            </div>

            <div className="form-control">
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Course price"
                className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"
              />
              {errors.price?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  price is required
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                {...register("seats", { required: true })}
                type="number"
                placeholder="available seats"
                className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"
              />
              {errors.seats?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  available seat number is required
                </p>
              )}
            </div>
            <div className="form-control col-span-2">
              <textarea
                {...register("description", { required: true })}
                placeholder="Class Description"
                className="px-5 py-3 resize-none h-44 focus:border-indigo-500 border-[1px] rounded-md outline-none"></textarea>
              {errors.description?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  Description name is required
                </p>
              )}
            </div>
            <div className=" w-2/3 mx-auto col-span-2">
              <button
                onClick={handleSubmit(handleAddClass)}
                className="flex gap-1 mt-8 items-center w-full justify-center bg-indigo-600 rounded-md px-5 py-3 text-gray-100">
                <FaLock></FaLock> Add class
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddClass;
