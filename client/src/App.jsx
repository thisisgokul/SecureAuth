import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Signup from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import axios from "axios";
axios.defaults.baseURL='http://localhost:5000';
axios.defaults.withCredentials=true;

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
