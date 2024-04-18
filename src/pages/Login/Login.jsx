/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import loginImg from "../../assets/Images/Festival/login.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  // --------------After Log in--------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // -----------------------------------------
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // -----------------------------------------------
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Log In Successful!",
        icon: "success",
      });
      // --------Navigation after login----------
      navigate(from, { replace: true });
    });
    // ------------------------------------------
  };
  return (
    <>
      <Helmet>
        <title>Book Swiftly | Log In</title>
      </Helmet>
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={loginImg} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 ">
                  <button className="btn btn-primary btn-outline text-lg">Log in</button>
                  <button className="btn btn-success btn-outline mt-2 text-lg"> <FcGoogle />Log in with Google</button>
                </div>
              </form>
              <p className=" ml-8 mb-4 text-yellow-400">
                New Here? <Link to="/signUp">Create an Account</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
