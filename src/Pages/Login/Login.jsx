import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

const Login = () => {
   const eye = <FaEye />
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        title: "User Login Successful",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

 

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div className="form-control pass-wrapper">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                 type={passwordShown ? "text" : "password"}
                {...register("password", { required: true })}
                name="password"
                placeholder="password"
                className="input input-bordered input-info w-full max-w-xs"
                />
                 <i onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-info" type="submit" value="Login" />
            </div>
            <div>
               <SocialLogin></SocialLogin> 
            </div>
          </form>
          <p>
            <small>
              New Here? <Link to="/signup">Create an account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
