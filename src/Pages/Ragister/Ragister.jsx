import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
const Ragister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOutUser, creatNewUser, updateUserProfile, setLoading } =
    useContext(Authcontext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    signOutUser();
    creatNewUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.username, data.photoURL);
        toast.success("Registration successful!");
        console.log("register sucssesful", result.user);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        if (
          error.code === "auth/account-exists-with-different-credential" ||
          error.code === "auth/email-already-in-use"
        ) {
          toast.error("This email alreay exist");
          setLoading(false);
        }
      });
  };

  // const handleformdata = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: "url(https://i.ibb.co/MDrFjMh/Rectangle-75.png)",
          }}
          className=" bg-base-200 bg-cover bg-center min-h-screen flex items-center object-cover justify-center p-10"
        >
          <div className="hero-content  flex-col lg:flex-row-reverse inter">
            <div className="card shrink-0  w-full max-w-md m-auto  ">
              <p className="text-center text-3xl font-bold">Sing Up</p>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="p-4 flex items-center gap-2 bg-red-600 text-white font-bold rounded-lg">
                      <MdErrorOutline className="text-2xl" /> Name is required
                    </span>
                  )}
                </div>

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
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="p-4 flex items-center gap-2 bg-red-600 text-white font-bold rounded-lg">
                      <MdErrorOutline className="text-2xl" />{" "}
                      {errors.password.message}
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6 w-full">
                  <button className="btn bg-[#dab783] text-white font-bold text-xl">
                    Sign Up
                  </button>
                </div>
              </form>
              <span className="text-[#dab783] text-center">
                Already registered?{" "}
                <Link to="/login" className="font-bold">
                  Go to log in
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
    </div>
  );
};

export default Ragister;
