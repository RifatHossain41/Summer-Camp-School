import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      
      <Outlet></Outlet>

      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 h-full bg-violet-700 font-bold">
       
       <li><NavLink to="/dashboard/myclasses">My Classes</NavLink></li>

      </ul>
    
    </div>
  </div>

/* <div className="drawer">
<input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
<div className="drawer-content flex flex-col">
  
  <div className="w-full navbar bg-base-300">
    <div className="flex-none lg:hidden">
      <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
    </div> 
    <div className="flex-1 px-2 mx-2">Navbar Title</div>
    <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal">
        
//         <li><a>Navbar Item 1</a></li>
//         <li><a>Navbar Item 2</a></li>
//       </ul>
//     </div>
//   </div>
//  
//   Content
// </div> 
// <div className="drawer-side">
//   <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
//   <ul className="menu p-4 w-80 h-full bg-base-200">
  
//     <li><a>Sidebar Item 1</a></li>
//     <li><a>Sidebar Item 2</a></li>
    
//   </ul>
  
// </div>
// </div> */
  );
};

export default Dashboard;