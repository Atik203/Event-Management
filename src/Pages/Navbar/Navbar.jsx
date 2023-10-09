import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { displayName, photoURL } = user || {};

  const handleLogout = () => {
    logout()
      .then(
        toast.success("Logout Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )
      .catch();
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/venue"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Venue
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/invite-card"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Invite Card
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto rounded-xl">
      <div className="navbar p-5 bg-base-200">
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
              className="menu font-medium menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-xl md:text-3xl font-bold text-red-500">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/filled-like--v1.png"
              alt="filled-like--v1"
              className="inline"
            />{" "}
            Eternal Wed
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-medium menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="mx-auto">
                <img
                  src={photoURL}
                  className="h-12 w-12 rounded-full ml-5"
                  alt=""
                />
                <h1>{displayName}</h1>
              </div>
              <div>
                <button>
                  <Link
                    onClick={handleLogout}
                    className="btn btn-primary text-white border-none hover:text-white hover:bg-gray-400 bg-red-500"
                  >
                    Logout
                  </Link>
                </button>
              </div>
            </div>
          ) : (
            <button>
              <Link
                to={"/login"}
                className="btn btn-primary text-white border-none hover:text-white hover:bg-gray-400 bg-red-500"
              >
                Login
              </Link>
            </button>
          )}
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Navbar;
