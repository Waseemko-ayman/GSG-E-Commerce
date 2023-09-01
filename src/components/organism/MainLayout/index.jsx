import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import CopyRight from "../CopyRight";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
      <Footer />
      <CopyRight />
    </div>
  );
};

export default MainLayout;
