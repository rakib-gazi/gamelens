import {  useContext, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../components/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
const Login = () => {
  const { LogInUser, LogInWIthGoogle, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    LogInUser(email, password)
      .then((result) => {
        Swal.fire({ 
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500
        });
        setUser(result.user);
        e.target.reset();
        navigate(location?.state? location.state : '/');
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message?  "Invalid Email or Password" : error.message ,
          showConfirmButton: false,
          timer: 1500
        });
      });
    
  };
  const handleGoogleLogIn = () => {
    LogInWIthGoogle()
      .then((result) => {
        Swal.fire({ 
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500
        });
        setUser(result.user);
        navigate(location?.state? location.state : '/');
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          position: "center",
          icon: "error",
          title: {errorCode},
          showConfirmButton: false,
          timer: 1500
        });
      });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div className="px-3">
        <h1 className="text-center text-logo font-bold text-2xl pt-12">
          <Typewriter words={['Login Here']}/>
          
        </h1>
      <div className=" pb-8">
        <div className="card w-full max-w-lg shrink-0 mx-auto ">
          <form onSubmit={handleLogIn} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your  email"
                className="input input-bordered"
                value={email} 
                onChange={handleEmail} 
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <div
                onClick={handleShowPassword}
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <LuEyeOff className="text-2xl" />
                ) : (
                  <LuEye className="text-2xl" />
                )}
              </div>
            </div>
            <div className="form-control mt-1">
              <button
                type="submit"
                className="rounded-md py-3 bg-logo hover:bg-green-logo text-white"
              >
                Login
              </button>
            </div>
          </form>
          <div className="divider card-body py-0">OR</div>
          <div className="card-body pt-3 pb-0">
            <button
              onClick={handleGoogleLogIn}
              type="submit"
              className=" outline outline-1 outline-green-logo rounded-md py-3 bg-white  "
            >
              <div className="flex flex-row gap-4 items-center justify-center">
                <FcGoogle className="text-3xl" />
                <span className="font-semibold">Login with Google</span>
              </div>
            </button>
          </div>
          <div className="card-body">
            <p className="font-semibold text-base ">
              Don't have an account?
              {"   "}
              <Link
                to="/register"
                className="text-logo text-base md:text-xl underline hover:text-blue-600"
              >
                Signup Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
