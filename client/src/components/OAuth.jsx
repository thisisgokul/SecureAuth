import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (decode) => {
    const { name, email, sub } = decode;
    axios
      .post("/api/oauth", { name, email, password: sub })
      .then((response) => {
        dispatch(signInSuccess(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.error("Error registering user", error);
      });
  };
  return (
    <div className="mt-4 flex justify-center ">
      <GoogleOAuthProvider clientId="490750818881-tco452omen7tnvhk48o7371vhev4071b.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decoded = jwt_decode(credentialResponse.credential);
            handleSubmit(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default OAuth;
