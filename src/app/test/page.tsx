import React from "react";
import Footer from "@/components/footer/Footer";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import OtpModal from "@/components/Modals/OtpModal";
import Sidebar from "@/components/sidebar/Sidebar";

const Test = () => {
  return (
    <div className="h-100vh">
      {/* <LoginModal></LoginModal> */}
      {/* <RegisterModal></RegisterModal> */}
      {/* <ForgotPasswordModal></ForgotPasswordModal>
      <OtpModal></OtpModal>
      <Footer></Footer> */}
      <Sidebar></Sidebar>
    </div>
  );
};

export default Test;
