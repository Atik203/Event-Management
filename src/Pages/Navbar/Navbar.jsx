import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/service"}>Service</Link>
      </li>

      <li>
        <Link to={"/venue"}>Venue</Link>
      </li>
      <li>
        <Link to={"/vendor"}>Vendors</Link>
      </li>
      <li>
        <Link to={"/e-invites"}>E-invites</Link>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-xl md:text-3xl font-bold text-red-500">
            Eternal Wed
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"/login"}
            className="btn btn-primary text-white border-none hover:text-white hover:bg-gray-400 bg-red-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
