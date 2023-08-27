import React from "react";
import "./style.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo">
      <Image
        src="/assets/logo.png"
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
