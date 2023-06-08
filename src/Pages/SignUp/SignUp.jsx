import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = data => {

    createUser(data.email, data.password)
     .then(result => {

      const loggedUser = result.user;
      console.log(loggedUser);
     })
  };
  return (
  
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered input-secondary w-full max-w-xs" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered input-secondary w-full max-w-xs" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:/(?!(?=.*[A-Z]))(?!(?=.*[!#$%&?]))/,
                  })}
                  name="password" placeholder="password" className="input input-bordered input-secondary w-full max-w-xs" />
                  {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                 )}
                 {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password have do not Capital Latter and do not special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" {...register("confirm", { required: true })} name="confirm" placeholder="Confirm Password" className="input input-bordered input-secondary w-full max-w-xs" />
              </div>
              <div className="mt-3">
               <input type="file" name="image" accept="image/*" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-secondary" type="submit" value="Sign Up"/>
              </div>
              <div className="flex justify-center items-center space-x-2 border m-3 p-2 bg-gray-400">
                <FaGoogle size={32} />
                <p>Continue With Google</p>
              </div>
      </form>
       <p className="ml-2"><small>Already have an account <Link to="/login">Login</Link></small></p>
    </div>
  </div>
</div>
    
  );
};

export default SignUp;