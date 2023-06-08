import Container from "../Container/Container";
// import Avatar from "./Avatar";


const Navbar = () => {
  const navOptions = (
    <>
        <li><a>Home</a></li>    
        <li><a>Item 3</a></li>
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
          <a className="btn">Button</a>
          {/* <Avatar></Avatar> */}
        </div>
      </div>
      </Container>
      
    </div>
  );
};

export default Navbar;