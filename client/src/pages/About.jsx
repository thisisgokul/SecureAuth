import React from 'react'

export const About = () => {
  return (
    <div className="max-w-full mx-auto p-6 space-y-6">
    <h1 className="text-3xl font-bold mb-4">About SecureAuth</h1>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-800 mb-4">
        SecureAuth is a project dedicated to providing a secure and user-friendly authentication experience. Our mission is to ensure that users can access their accounts with confidence, knowing that their information is protected.
      </p>

      <p className="text-gray-800 mb-4">
        We believe in the power of modern web technologies and have leveraged the MERN stack to create a robust authentication system. With Google OAuth 2.0, standard login, and user registration, users have the flexibility to choose the authentication method that suits them best.
      </p>

      <p className="text-gray-800 mb-4">
        Redux Toolkit is at the heart of our state management, ensuring a smooth and efficient user experience. With Redux Toolkit, we maintain a consistent and responsive application state, guaranteeing a seamless journey for our users.
      </p>

      <p className="text-gray-800">
        Thank you for choosing SecureAuth. Your security is our top priority.
      </p>
    </div>
  </div>
  )
}
