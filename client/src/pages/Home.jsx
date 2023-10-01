import React from "react";
import axios from "axios";

const Home = () => {
  
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Project Title: SecureAuth</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Description:</h2>

        <p className="text-gray-800 mb-4">
          SecureAuth is a MERN stack authentication project designed to provide
          a secure and seamless experience for users. It offers three different
          authentication methods: Google OAuth 2.0, standard email/password
          login, and user registration. Users can choose the method that best
          suits their preferences. Redux Toolkit is used for efficient state
          management, ensuring a smooth user experience.
        </p>

        <h2 className="text-2xl font-bold mb-4">Features:</h2>

        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <span className="font-bold">Google OAuth 2.0:</span> Securely log in
            with your Google account.
          </li>
          <li>
            <span className="font-bold">Standard Login:</span> Authenticate
            using your email and password. Passwords are encrypted and stored
            securely in the database.
          </li>
          <li>
            <span className="font-bold">User Registration:</span> New users can
            create an account with their name, email, and password. Passwords
            are hashed using industry-standard techniques for maximum security.
          </li>

          <li>
            <span className="font-bold">Profile Updates:</span> Users can
            securely change their email, name, and password, requiring password
            confirmation and utilizing encryption (e.g., bcrypt) for password
            storage. Implement HTTPS and input validation for enhanced security.
          </li>

          <li>
            <span className="font-bold">Profile Deactivation:</span> Users have
            the option to deactivate their profile.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Technologies Used:</h2>
        <p className="text-gray-800">
          Frontend: React, Redux Toolkit
          <br />
          Backend: Node.js, Express.js, MongoDB, Mongoose
          <br />
          State Management: Redux Toolkit
        </p>

        <h2 className="text-2xl font-bold mb-4">Security Measures:</h2>
        <p className="text-gray-800">
          Encryption: All sensitive data is encrypted during transit and at
          rest.
          <br />
          Password Hashing: Industry-standard hashing algorithms used for
          password storage.
          <br />
          OAuth 2.0: Google OAuth for secure third-party authentication.
        </p>

        <h2 className="text-2xl font-bold mb-4">Get Started:</h2>
        <p className="text-gray-800">
          To get started, visit the SecureAuth website and choose your preferred
          authentication method.
        </p>
      </div>
    </div>
  );
};

export default Home;
