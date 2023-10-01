import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiSolidUserDetail } from "react-icons/bi";

export const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header>
      <div className="bg-slate-300 flex justify-between items-center  p-6">
        <Link to={"/"}>
          <h2 className="text-2xl sm:text-4xl font-bold">Auth2.0</h2>
        </Link>
        <div className="flex justify-between text-md sm:text-xl font-normal gap-4 sm:mr-12 mr-0  ">
          <Link to={"/"}>
            <ul className="hover:text-red-500">Home</ul>
          </Link>
          <Link to={"/about"}>
            <ul className="hover:text-red-500">About</ul>
          </Link>

          {currentUser ? (
            <Link to="/profile">
              <BiSolidUserDetail className="hover:text-red-500" size={38} />
            </Link>
          ) : (
            <Link to={"/sign-in"}>
              <ul className="hover:text-red-500">Sign-In</ul>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
