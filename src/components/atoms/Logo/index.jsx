import React from "react";
import "./style.css";
import Image from "next/image";
import logo from "../../../../public/assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Image
        src={logo}
        width={44}
        height={44}
        alt="Brand logo"
        loading="lazy"
      />
      <h1>Brand</h1>
    </div>
  );
};

export default Logo;
