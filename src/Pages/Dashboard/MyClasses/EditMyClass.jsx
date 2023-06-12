import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaLock } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const imgHostingToken = import.meta.env.VITE_imgHostingToken;

const EditMyClass = () => {
  const { user } = useAuth();
  // const editClassData = useLoaderData();
  const [axiosSecure] = useAxiosSecure();
  const { id } = useParams();
  const { data: editClassData = [], refetch } = useQuery({
    queryKey: ["edited class"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${id}`);
      return res.data;
    },
  });
  const { _id, title, price, available_seats, description } = editClassData;
  console.log(editClassData);
  const imgHostingurl = `https://api.imgbb.com/1/upload?&key=${imgHostingToken}`;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleEditClass = (data) => {
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
            price: parseInt(data.price),
            available_seats: parseInt(data.seats),
            description: data.description,
            status: "pending",
          };
          console.log(classInfo);
          axiosSecure
            .patch(
              `https://polyglot-pioneers-academy-server.vercel.app/classes/${_id}`,
              classInfo
            )
            .then((res) => {
              console.log(res.data);
              if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Class updated. status pending!",
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
        <title>PPA | Edit class</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto py-24">
        <div className="p-8 w-full lg:p-20 border-indigo-500 md:border-[1px] md:shadow-xl rounded-lg">
          <h2 className="text-indigo-500 text-3xl text-center font-bold">
            Enter Information to add class
          </h2>
          <p className="text-red-400 text-center">
            To update your class info, you must add a photo. Otherwise you can
            not update class info!
          </p>
          <form className="mt-10 grid grid-cols-2 gap-8 items-center">
            <div className="form-control">
              <input
                {...register("title", { required: true })}
                type="text"
                defaultValue={title}
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
                {...register("image", { required: false })}
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
                defaultValue={price}
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
                defaultValue={available_seats}
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
                defaultValue={description}
                className="px-5 py-3 resize-none h-44 focus:border-indigo-500 border-[1px] rounded-md outline-none"></textarea>
              {errors.description?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  Description name is required
                </p>
              )}
            </div>
            <div className=" w-2/3 mx-auto col-span-2">
              <button
                onClick={handleSubmit(handleEditClass)}
                className="flex gap-1 mt-8 items-center w-full justify-center bg-indigo-600 rounded-md px-5 py-3 text-gray-100">
                <FaLock></FaLock> Update class
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditMyClass;
