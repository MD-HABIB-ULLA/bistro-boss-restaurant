import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Authcontext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const { signInUser } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const capthaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const onSubmit = (data, e) => {
    console.log(data.captha);
    if (validateCaptcha(data.captha)) {
      signInUser(data.email, data.password)
        .then(() => {
          toast.success("Log in successfull");

          navigate(location?.state ? location.state : "/");
          e.target.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Wrong Capcha");
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/MDrFjMh/Rectangle-75.png)",
        }}
        className=" bg-base-200 bg-cover bg-center min-h-screen flex items-center justify-center p-10"
      >
        <div className="hero-content  flex-col lg:flex-row inter">
          <div className="card shrink-0  w-full max-w-md m-auto  ">
            <p className="text-center text-3xl font-bold">Login</p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="p-4 flex items-center gap-2 bg-red-600 text-white font-bold rounded-lg">
                    <MdErrorOutline className="text-2xl" /> Name is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="p-4 flex items-center gap-2 bg-red-600 text-white font-bold rounded-lg">
                    <MdErrorOutline className="text-2xl" /> password is required
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <LoadCanvasTemplate />
              <div className="form-control">
                <input
                  type="text"
                  name="captha"
                  {...register("captha", { required: true })}
                  placeholder="type the text given above"
                  className="input input-bordered mt-2"
                />
                {errors.captha && (
                  <span className="p-4 flex items-center gap-2 bg-red-600 text-white font-bold rounded-lg">
                    <MdErrorOutline className="text-2xl" /> Captha is required
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn w-full bg-[#dab783] text-white text-xl font-bold">
                  Login
                </button>
              </div>
            </form>

            <span className="text-[#dab783] text-center">
              New here?
              <Link to="/register" className="font-bold">
                {" "}
                Create a New Account
              </Link>
            </span>
          </div>

          <div className="text-center lg:w-1/2 w-full lg:text-left object-cover ">
            <img
              src="https://i.ibb.co/KKWDjTj/authentication2.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
