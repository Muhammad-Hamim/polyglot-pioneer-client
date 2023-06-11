import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const imgHostingToken = import.meta.env.VITE_imgHostingToken;
const Register = () => {
  const { googleSignIn, createUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const imgHostingurl = `https://api.imgbb.com/1/upload?&key=${imgHostingToken}`;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
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
          const { name, email, password } = data;
          createUser(email, password)
            .then((result) => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserProfile(name, imgURL).then(() => {
                const userInfo = {
                  name,
                  email,
                  image: imgURL,
                };
                fetch("http://localhost:3000/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userInfo),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      reset();
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User created successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate("/");
                    }
                  });
              });
            })
            .catch((error) => console.log(error));
        }
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const userInfo = {
          name: displayName,
          email,
          image: photoURL,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId || data.message) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Helmet>
        <title>PPA | Register</title>
      </Helmet>
      <div className="flex place-content-center place-items-center w-full min-h-screen">
        <div className="p-8 w-full lg:w-2/6 lg:p-20 border-indigo-500 md:border-[1px] md:shadow-xl rounded-lg">
          <h2 className="text-indigo-500 text-3xl text-center font-bold">
            Please Register
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your name"
                className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  Name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
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
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="px-5 py-3 focus:border-indigo-500 border-[1px] rounded-md outline-none"
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-400 mt-3">
                  password is required
                </p>
              )}
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span className="link link-hover link-primary">
                    Login here
                  </span>
                </Link>
              </p>
            </div>
            <div className=" w-2/3 mx-auto ">
              <button className="flex gap-1 mt-8 items-center w-full justify-center bg-indigo-600 rounded-md px-5 py-3 text-gray-100">
                <FaLock></FaLock> Register
              </button>
            </div>
          </form>
          <div className="flex flex-col w-full mt-8 border-opacity-50">
            <div className="divider">OR</div>
            <div className="grid rounded-box place-items-center">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-circle text-3xl">
                <FcGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
