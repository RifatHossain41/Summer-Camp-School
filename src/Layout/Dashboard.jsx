import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";



const Dashboard = () => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col ">
      
      <Outlet></Outlet>

      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 h-full bg-violet-700 font-bold">

       {isAdmin ? 
        <>
         <li><NavLink to="/dashboard/manageuser">Manage User</NavLink></li>
        </>
       : isInstructor ? 
       <>
         <li><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
         <li><NavLink to="/dashboard/myclass">My Classes</NavLink></li>
       </>
       : 
      <>
        <li><NavLink to="/dashboard/Myselectedclasses">My Selected Classes</NavLink></li>
        <li><NavLink to="/dashboard/payment">Payment</NavLink></li>
      </>
      }
       

       <div className="divider">OR</div>
      <li>
        <NavLink to="/"><FaHome />Home</NavLink>
      </li>
      </ul>
    
    </div>
  </div>

  );
};

export default Dashboard;