import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserFail,
  updateUserStart,
  updateUserSuccess,
  deleteUserFail,
  deleteUserStart,
  deleteUserSuccess,
  signout,
} from "../redux/userSlice";
import DeleteBox from "../components/DeleteBox";
import profileicon from "../assets/profileicon.jpg";

export const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector((state) => state.user);

  useEffect(() => {
    try {
      if (!currentUser) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const { data } = await axios.put(
        `/api/update/${currentUser._id}`,
        formData
      );
      dispatch(updateUserSuccess(data));
    } catch (error) {
      dispatch(updateUserFail(error));
    }
  };

  if (!currentUser) {
    return null;
  }

  const showDeleteDialog = () => {
    setShowDeleteConfirmation(true);
  };

  const hideDeleteDialog = () => {
    setShowDeleteConfirmation(false);
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const { data } = await axios.delete(`/api/delete/${currentUser._id}`);
      dispatch(deleteUserSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFail(error));
    }
  };

  const handleSignout = async () => {
    try {
      await axios.get("/api/logout");
      dispatch(signout());
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-20 rounded-full"
          src={profileicon}
          alt="Profile"
        />
      </div>

      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Welcome {currentUser.name}
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Full name
            </label>
            <div className="mt-2">
              <input
                defaultValue={currentUser.name}
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                defaultValue={currentUser.email}
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={loading}
            >
              {loading ? "updating.." : "update"}
            </button>
          </div>
        </form>
        <div className="my-3 flex gap-3">
          <button
            type="button"
            onClick={handleSignout}
            className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logout
          </button>
          <button
            type="button"
            onClick={showDeleteDialog}
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Delete Account
          </button>
          <DeleteBox
            isVisible={showDeleteConfirmation}
            onConfirm={handleDeleteAccount}
            onCancel={hideDeleteDialog}
          />
        </div>
      </div>
    </div>
  );
};
