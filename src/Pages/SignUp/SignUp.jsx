import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";


const SignUp = () => {

  const {createUser} = useContext(AuthContext);
  const { register, handleSubmit, watch,  formState: { errors }, setError } = useForm({
    mode: 'onChange', 
  })
  

  const onSubmit = data => {

    createUser( data.email, data.password)
     .then(result => {

      const loggedUser = result.user;
      console.log(loggedUser);
      
     })
     .catch(error => console.log(error))
  };

  const handlePasswordBlur = () => {
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');


    if (password && confirmPassword && password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return
    }
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
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered input-secondary w-full max-w-xs" />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:/(?=.*[A-Z])(?=.*[!#$%&?])/,
                  })}
                  name="password" placeholder="password" className="input input-bordered input-secondary w-full max-w-xs" />
                  {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
                  {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                 )}
                 {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must one Capital Latter and must one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" {...register("confirmPassword", {
                   required: 'Confirm Password is required' })} name="confirmPassword" placeholder="Confirm Password" className="input input-bordered input-secondary w-full max-w-xs"
                   onBlur={handlePasswordBlur}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                {errors.confirmPassword && (
                  <span className="text-red-600">Password do not match</span>
                )}
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="photo url" className="input input-bordered input-secondary w-full max-w-xs" />
                {errors.photo && (
                  <span className="text-red-600">Photo is required</span>
                )}
              </div>
             
              <div className="form-control mt-6">
                <button  className="btn btn-secondary " >
                  <input type="submit" value="Sign Up" />
                </button>
              </div>
              <div className="flex justify-center items-center space-x-2 border m-3 px-5 py-2 bg-gray-400 rounded">
                <SocialLogin></SocialLogin>
              </div>
      </form>
       <p className="ml-2"><small>Already have an account <Link to="/login">Login</Link></small></p>
    </div>
  </div>
</div>
    
  );
};

export default SignUp;