import { useContext } from "react";
import Container from "../Container/Container";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
// import Avatar from "./Avatar";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }
  const navOptions = (
    <>
         <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link> </li>
        {
      user?.email ? <>
           <li><Link to="/dashboard">Dashboard</Link></li>  
          
           <button className='btn btn-secondary' onClick={handleLogOut}>Log Out</button>   
      </>

      : " "
  }
    </>
  )
  return (
    <div className="fixed w-full z-10">
      <Container>
      <div className="navbar bg-slate-300 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <h2 className="text-3xl font-semibold text-purple-600">Summer Camp</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
        { 
          user?.email ?  <>
            <img className='rounded-lg  mr-4' src={user.photoURL ? user.photoURL : "https://i.ibb.co/yQmRyGC/IMG-20200918-151309-01.jpg"} alt="" width="30" height="30"/>
          </>
          :<>
           <button className='btn btn-secondary'><Link to="/login">Login</Link></button>
          </>
        }

        </div>
      </div>
      </Container>
      
    </div>
  );
};

export default Navbar;