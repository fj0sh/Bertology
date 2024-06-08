import React from "react";
import Footer from "@/components/footer/Footer";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";

const Test = () => {
  return (
    <div className="h-100vh">
      <LoginModal></LoginModal>
      <RegisterModal></RegisterModal>
      <Footer></Footer>
    </div>
  );
};

export default Test;
