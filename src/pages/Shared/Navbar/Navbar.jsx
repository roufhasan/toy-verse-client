import { Link } from "react-router-dom";
import { HiOutlineKey } from "react-icons/hi2";
import logo from "../../../assets/logo/toy-verse-logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out succesfully done");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <img className="w-16 mx-auto" src={logo} alt="car-verse-logo" />
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start lg:w-40">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl text-blue-500 font-bold border-b-8 hover:bg-white hover:scale-125"
          >
            <span className="text-yellow-400 mr-1">Toy</span>Verse
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 rounded-none">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold border-b-transparent border-b-2 hover:bg-white hover:border-b-yellow-500 hover:border-b-2 hover:scale-125"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-lg font-semibold border-b-transparent border-b-2 hover:bg-white hover:border-b-yellow-500 hover:border-b-2 hover:scale-125"
              >
                All Toys
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-semibold border-b-transparent border-b-2 hover:bg-white hover:border-b-yellow-500 hover:border-b-2 hover:scale-125"
                  >
                    My Toys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-semibold border-b-transparent border-b-2 hover:bg-white hover:border-b-yellow-500 hover:border-b-2 hover:scale-125"
                  >
                    Add A Toy
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                to="/"
                className="text-lg font-semibold border-b-transparent border-b-2 hover:bg-white hover:border-b-yellow-500 hover:border-b-2 hover:scale-125"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex-grow">
          {user && (
            <div
              className="avatar tooltip tooltip-bottom mr-4"
              data-tip={user?.displayName}
            >
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className="flex items-center gap-3 text-xl font-semibold rounded bg-yellow-400 px-4 py-1 hover:scale-110"
            >
              Log Out <HiOutlineKey></HiOutlineKey>
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-3 text-xl font-semibold rounded bg-yellow-400 px-4 py-1 hover:scale-110"
            >
              Log In <HiOutlineKey></HiOutlineKey>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
