// this file will dispaly the logo

import React from "react";
import logo from "../assets/BrandLogo.png";

const Header = () => {
  return (
    <div className=" shadow-lg shadow-zinc-400 bg-white ">
      <a href="/">
        <img className=" pt-3 pb-2 ml-5 sm:w-auto " src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Header;
