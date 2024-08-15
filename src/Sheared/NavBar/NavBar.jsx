import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";

const NavBar = () => {

  const {logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

    const navItems = <>
        <NavLink to='/'  className={({isActive}) => (isActive ? 'border-b-2 border-purple-600 font-bold px-3' : 'font-bold px-3')}> <li>Home</li></NavLink>

        <NavLink to='/login'  className={({isActive}) => (isActive ? 'border-b-2 border-purple-600 font-bold px-3' : 'font-bold px-3')}> <li>Login</li></NavLink>
        
        <NavLink to='/register'  className={({isActive}) => (isActive ? 'border-b-2 border-purple-600 font-bold px-3' : 'font-bold px-3')}> <li>Sign Up</li></NavLink>
        </>
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
              {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={handleLogout} type="button" className="px-8 py-3  border-2 rounded border-purple-600 text-gray-800 font-bold">Border</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
