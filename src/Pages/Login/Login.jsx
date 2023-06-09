import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { Login, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    Login(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have been successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
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
            console.log(data);
            if (data.insertedId || data.message) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "You have been logged in successfully.",
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
        <title>PPA | Login</title>
      </Helmet>
      <div className="flex place-content-center place-items-center w-full min-h-screen">
        <div className=" p-8 w-full lg:w-2/6 lg:p-20 border-indigo-500 md:border-[1px] md:shadow-xl rounded-lg">
          <h2 className="text-indigo-500 text-3xl text-center font-bold">
            Please Login
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
                Don&#39;t have an account?{" "}
                <Link to="/register">
                  <span className="link link-hover link-primary">
                    Register here
                  </span>
                </Link>
              </p>
            </div>
            <div className=" w-2/3 mx-auto ">
              <button className="flex gap-1 mt-8 items-center w-full justify-center bg-indigo-600 rounded-md px-5 py-3 text-gray-100">
                <FaLock></FaLock> Login
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

export default Login;
