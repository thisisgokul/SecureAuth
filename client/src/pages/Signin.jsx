import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInFail, signInStart, signInSuccess } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const displayError = (error) =>
    (error.response &&
      {
        401: "Invalid credentials",
        404: "User not found",
      }[error.response.status]) ||
    (error.message && `Network Error: ${error.message}`) ||
    `Error: ${error}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const { data } = await axios.post("/api/signin", formdata);
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFail(error));
    }
  };

  return (
    <div className="my-12 max-w-lg mx-auto px-8">
      <h1 className="text-4xl font-bold text-center my-5">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 rounded-lg bg-slate-100"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 rounded-lg bg-slate-100"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:bg-opacity-80"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Signin"}
        </button>
      </form>
      {error && <div className="text-red-500">{displayError(error)}</div>}
      <div className="flex gap-2 mt-3 text-lg">
        <p>Don't have an Account?</p>
        <Link to={"/sign-up"} className="text-blue-500">
          sign up
        </Link>
      </div>
    </div>
  );
};
