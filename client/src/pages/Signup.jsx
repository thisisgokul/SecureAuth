import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/signup', formdata);
      setLoading(false);
      navigate('/sign-in');
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return (
    <div className="my-12 max-w-lg mx-auto px-8">
      <h1 className="text-4xl font-bold text-center my-5">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          id="name"
          className="p-3 rounded-lg bg-slate-100"
          onChange={handleChange}
        />
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
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
      {error && <div className="text-red-500">Error: {error.message}</div>}
      <div className="flex gap-2 mt-3 text-lg">
        <p>Already have an Account?</p>
        <Link to={"/sign-in"} className="text-blue-500">
          sign in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
