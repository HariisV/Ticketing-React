import React, { useState } from "react";
import { Link } from "react-router-dom";
const ConfirmEmail = (props) => {
  return (
    <>
      <div className="text-center">
        <img src="/assets/icon/email.png" alt="" className="register__email--logo" />
      </div>
      <p className="h5 fw-bold">Halo {props.data.firstName},</p>
      <p>Pendaftaran Berhasil, Silahkan Verifikasi Email Sebelum Login</p>
      <Link to="/login" className="btn btn-primary mt-4 mb-3 p-3 btn__login">
        Login Page
      </Link>
    </>
  );
};
export default ConfirmEmail;
