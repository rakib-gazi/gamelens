import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const { user, setUser, LogOutUser, theme, toggleTheme, darkTheme } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        setUser(null);

        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          position: "center",
          icon: "error",
          title: { errorCode },
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const links = [
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? `bg-active hover:bg-active font-bold px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded ${
              darkTheme ? "text-black" : ""
            }`
          : "bg-none text-white font-medium px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded"
      }
    >
      Home
    </NavLink>,
    <NavLink
      to="/reviews"
      className={({ isActive }) =>
        isActive
          ? `bg-active font-bold hover:bg-active px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded ${
              darkTheme ? "text-black" : ""
            }`
          : "bg-none text-white font-medium px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded"
      }
    >
      All Reviews
    </NavLink>,
    user && (
      <NavLink
        to="/addReview"
        className={({ isActive }) =>
          isActive
            ? `bg-active font-bold hover:bg-active px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded ${
                darkTheme ? "text-black" : ""
              }`
            : "bg-none text-white font-medium px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded"
        }
      >
        Add Review
      </NavLink>
    ),
    user && (
      <NavLink
        to={`/myReviews/${user.email}`}
        className={({ isActive }) =>
          isActive
            ? `bg-active font-bold hover:bg-active px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded ${
                darkTheme ? "text-black" : ""
              }`
            : "bg-none text-white font-medium px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded"
        }
      >
        My Reviews
      </NavLink>
    ),
    user && (
      <NavLink
        to={`/myWatchlist/${user.email}`}
        className={({ isActive }) =>
          isActive
            ? `bg-active font-bold hover:bg-active px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded ${
                darkTheme ? "text-black" : ""
              }`
            : "bg-none text-white font-medium px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded"
        }
      >
        WatchList
      </NavLink>
    ),
    <NavLink
      to="/about-us"
      className={({ isActive }) =>
        isActive
          ? `bg-active font-bold hover:bg-active px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded ${
              darkTheme ? "text-black" : ""
            }`
          : "bg-none text-white font-medium px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded"
      }
    >
      About
    </NavLink>,
    <NavLink
      to="/contact-us"
      className={({ isActive }) =>
        isActive
          ? `bg-active font-bold hover:bg-active px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded ${
              darkTheme ? "text-black" : ""
            }`
          : "bg-none text-white font-medium px-6 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded"
      }
    >
      Contact
    </NavLink>,
  ];
  return (
    <div
      className={`bg-logo ${
        isScrolled ? "sticky top-0 left-0 right-0 z-50" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    darkTheme ? "text-white" : "text-white"
                  } `}
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
                className="menu menu-sm dropdown-content bg-logo rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
            <Link className=" text-xl bg-logo">
              <img src={logo} alt="GameLens" className="h-8 md:h-10" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex justify-center items-center gap-4 lg:gap-1 xl:gap-4 px-1 ">
              {links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
          <div className="navbar-end flex justify-end items-center gap-2">
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            {user?.email ? (
              <>
                <a href="" className="my-anchor-element">
                  <div className="avatar h-8 md:h-12 w-8 md:w-12">
                    <div className="ring-primary ring-offset-base-100 w-12 md:w-24 rounded-full ring ring-offset-2">
                      <img
                        src={
                          user?.photoURL ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                        alt={user.displayName}
                      />
                    </div>
                  </div>
                </a>

                <Tooltip
                  anchorSelect=".my-anchor-element"
                  content={user.displayName}
                  place="bottom"
                  className="bg-blue-500 text-white rounded-lg p-2"
                />

                <button
                  onClick={handleLogOut}
                  className={`bg-active font-bold hover:bg-active px-2 lg:px-2 xl:px-6 py-1 lg:py-1 xl:py-2 rounded text-sm md:text-base ${
                    darkTheme ? "text-black" : ""
                  }`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? `bg-active font-bold hover:bg-active px-1 lg:px-2 xl:px-6 py-1 lg:py-1 xl:py-2 rounded text-sm md:text-base ${
                          darkTheme ? "text-black" : ""
                        }`
                      : "bg-none text-white font-medium px-1 lg:px-2 xl:px-6 py-1 lg:py-1 xl:py-2 rounded text-sm md:text-base"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? `bg-active font-bold hover:bg-active px-2 lg:px-2 xl:px-6 py-1 lg:py-1 xl:py-2 rounded text-sm md:text-base ${
                          darkTheme ? "text-black" : ""
                        }`
                      : "bg-none text-white font-medium px-2 lg:px-2 xl:px-6 py-2 lg:py-1 xl:py-2 rounded text-sm md:text-base"
                  }
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
