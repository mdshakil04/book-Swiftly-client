import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState:  {errors} }
       = useForm();
      const onSubmit = (data) => console.log(data)
    
    //   console.log(watch("example")) 
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
                {errors.name && <span className=" text-red-500">Name is required</span>}
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
                {errors.email && <span className=" text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register("password", { required: true, minLength: 6 })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                //   required
                />
                {errors.password && <span className=" text-red-500">Password is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className=" ml-8 mb-4 text-yellow-500">Already Register? <Link to= "/login">Got to Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
