import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };
  //   console.log(watch("example"))
  return (
    // -----------This is React Hook From----------
    <>
      <Helmet>
        <title> Book Swiftly | Sign Up</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6">
                
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    //   required
                  />
                  {/* ------Name validation---------- */}
                  {errors.name && (
                    <span className=" text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    //   required
                  />
                  {/* --------Email validation-------------- */}
                  {errors.email && (
                    <span className=" text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    //   required
                  />
                  {/* ---------Password validation--------- */}
                  {errors.password?.type === "required" && (
                    <span className=" text-red-500">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className=" text-red-500">
                      Password must be 8 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className=" text-red-500">
                      Password must have 1 uppercase, 1 lowercase, 1 number and
                      1 Special Character
                    </span>
                  )}
                  {/* ---------Password validation--------- */}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-outline btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className=" ml-8 mb-4 text-yellow-600">
                Already Register? <Link to="/login">Go to Login</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
