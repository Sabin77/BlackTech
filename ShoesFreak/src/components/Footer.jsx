import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div className=" flex flex-col items-center border-2 bg-[#458D69] font-josefin mt-2">
      <div className=" flex flex-col  items-center font-playfair mt-4 text-sm text-white">
        <Link smooth to="#">
          <MdKeyboardDoubleArrowUp className=" text-3xl animate-bounce" />
        </Link>

        <p>Go To Top</p>
      </div>
      <div className=" space-y-4 mt-5 text-white">
        <p className=" text-center"> FAQ</p>
        <p>Shipping and Returns</p>
        <p>Terms and Conditions</p>
        <div className=" flex text-3xl space-x-3 justify-center">
          <TiSocialFacebook />
          <TiSocialInstagram />
          <SlSocialYoutube />
        </div>
      </div>
      <p className=" text-[#b8cdc2] mt-6">
        &#169; 2025 by{" "}
        <a
          href="https://www.facebook.com/sabin.lamichhane.908/"
          target="_blank"
          className=" underline my-6 text-[#c2cec8]"
        >
          Sabin Lamichhane
        </a>
        . All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
