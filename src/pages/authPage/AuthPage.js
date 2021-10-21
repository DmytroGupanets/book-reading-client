import React from "react";
import Auth from "../../components/auth/auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.minimal.css";

const AuthPage = () => {
  return (
    <>
      <Auth />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default AuthPage;
