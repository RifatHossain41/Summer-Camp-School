import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="flex justify-center items-center space-x-2 border m-3 px-5 py-2 bg-gray-400 rounded" onClick={handleGoogleSignIn}>
      <FcGoogle size={32} />
      <p>Continue With Google</p>
    </div>
  );
};

export default SocialLogin;