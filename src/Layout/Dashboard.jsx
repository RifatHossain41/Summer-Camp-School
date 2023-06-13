import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

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
       
       <li><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
       <li><NavLink to="/dashboard/myclasses">My Classes</NavLink></li>
       <li><NavLink to="/dashboard/payment">Payment</NavLink></li>

      </ul>
    
    </div>
  </div>

  );
};

export default Dashboard;