import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Auth_Context_Provider/AuthContext";
import { IoLogOutOutline } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";

const Navbar = () => {
  const { user, userLogOut } = use(AuthContext);
  const Navigate = useNavigate();
  const handleLogOut = () => {
    userLogOut().then(() => {
      Navigate("/");
    });
  };

  return (
    <div className="navbar border-b-1 border-[#c09e61]">
      {/* Navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-bold text-[#c09e61] underline underline-offset-1"
                    : "text-xl font-bold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-artifacts"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-bold text-[#c09e61] underline underline-offset-1"
                    : "text-xl font-bold"
                }
              >
                All Artifacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-artifacts"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-bold text-[#c09e61] underline underline-offset-1"
                    : "text-xl font-bold"
                }
              >
                Add Artifacts
              </NavLink>
            </li>
          </ul>
          {/* website logo and name */}
        </div>
        <NavLink
          to="/"
          className="hidden md:block md:flex items-center space-x-2"
        >
          <img
            src="https://i.ibb.co.com/SD6Sc4Wk/logo-without-bg.png"
            alt="Logo"
            className="h-15"
          />
          <span className="lg:text-3xl md:text-2xl font-bold text-[#c09e61] asimovian-regular">
            Artifacts Gallery
          </span>
        </NavLink>
      </div>
      {/* Navbar center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-bold text-[#c09e61] underline underline-offset-1"
                  : "text-xl font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-artifacts"
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-bold text-[#c09e61] underline underline-offset-1"
                  : "text-xl font-bold"
              }
            >
              All Artifacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-artifacts"
              className={({ isActive }) =>
                isActive
                  ? "text-xl font-bold text-[#c09e61] underline underline-offset-1"
                  : "text-xl font-bold"
              }
            >
              Add Artifacts
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Navbar end */}
      <div className="navbar-end">
        {/* Navbar Search and Profile options */}
        <div className="navbar-end">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile Photo"
                    src={
                      user
                        ? user.photoURL
                        : "https://i.ibb.co/jZDk7XVG/user-icon.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <h1 className="pl-2">
                  <span className="justify-between">
                    {user ? user.displayName : "User Name"}
                  </span>
                </h1>
                <li>
                  <NavLink
                    to="/my-artifacts"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm text-[#c09e61] underline underline-offset-1"
                        : "text-sm"
                    }
                  >
                    My Artifacts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/liked-artifacts"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm text-[#c09e61] underline underline-offset-1"
                        : "text-sm"
                    }
                  >
                    Liked Artifacts
                  </NavLink>
                </li>
                <li>
                  {user ? (
                    <Link onClick={handleLogOut}>
                      Logout <IoLogOutOutline />
                    </Link>
                  ) : (
                    <Link to="/auth/login">
                      Login <HiOutlineLogin />
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* LogOut Button */}
        <div className="mx-2">
          {user ? (
            <Link
              // to="/"
              onClick={handleLogOut}
              className="btn btn-soft btn-info md:text-lg md:font-bold rounded-4xl"
            >
              Logout <IoLogOutOutline size={20} />{" "}
            </Link>
          ) : (
            <NavLink
              to="/auth/login"
              className="btn btn-soft btn-info md:text-lg md:font-bold rounded-4xl"
            >
              Login <HiOutlineLogin size={20} />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
