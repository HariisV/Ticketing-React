import React, { useState } from "react";
import { Link } from "react-router-dom";
const SuccessRegister = () => {
  return (
    <>
      <div className="text-center">
        <img src="/assets/icon/unlock.png" alt="" className="register__email--logo" />
      </div>
      <p className="h5 fw-bold">Halo</p>
      <small>
        Verifikasi Email Berhasil, <br /> Silahkan Login & Langsun Booking Film Pilihanmu
      </small>
      <Link to="/login" className="btn btn-primary mt-4 mb-3 p-3 btn__login">
        Login Page
      </Link>
    </>
  );
};
export default SuccessRegister;
