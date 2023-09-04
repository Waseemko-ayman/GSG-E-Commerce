"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import MobileHeader from "../MobileHeader";
import FloatingButton from "@/components/molecules/FloatingButton";

const MainLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Add an event listener to detect screen size changes
    function handleResize() {
      setIsMobile(window.innerWidth >= 768); // Adjust the screen size threshold as needed
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <Header /> : <MobileHeader />}
      <Navigation />
      <FloatingButton />
      {children}
      <Footer />
      <CopyRight />
    </div>
  );
};

export default MainLayout;
