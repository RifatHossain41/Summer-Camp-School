import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    signIn( data.email, data.password )
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        title: 'User Login Successful',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate(from, { replace: true });
     })
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
                  <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;