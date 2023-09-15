import React from "react";
import { AcmeLogo } from "../Assets/AcmeLogo.jsx";
import "../Components/styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="md:w-11/12 md:mx-10 lg:w-9/12 text-center justify-center lg:mx-40">
        <hr />
      </div>

      <div className="justify-center mt-10">
        {" "}
        {/* GRANDPARENT */}
        <div className="md:W-10/12 xs:grid xs:grid-cols-2 xs:px-6 md:flex gap-20 justify-center">
          {" "}
          {/* Mother */}
          <div className="xs:hidden lg:block">
            <div className="flex ">
              <td>
                <div className="flex text-center">
                  <p className="font-bold text-2xl mt-2 text-[#323232]">lobe</p>
                  <AcmeLogo />
                </div>
                <p className="pb-4">A product by Microsoft.</p>
                <p className="pb-4">All rights reserved.</p>
                <p className="pb-4">© Microsoft 2021</p>
              </td>
            </div>
          </div>
          <div>
            <td className="text-start">
              <p className="text-start font-semibold text-lg text-[#323232] pb-3 mt-3">
                About
              </p>
              <p className="pb-4">Download</p>
              <p className="pb-4">Overview</p>
              <p className="pb-4">Examples</p>
              <p className="pb-4">Blog</p>
            </td>
          </div>
          <div className="">
            <td className="text-start">
              <p className="text-start font-semibold text-lg  text-[#323232] pb-3 mt-3">
                General
              </p>
              <p className="pb-4">Notice</p>
              <p className="pb-4">License</p>
              <p className="pb-4">Press Inquiry</p>
              <p className="pb-4">Press Images</p>
            </td>
          </div>
          <div>
            <td className="text-start">
              <p className="font-semibold text-lg text-[#323232] pb-3 mt-3">
                Resources
              </p>
              <p className="pb-4">Help</p>
              <p className="pb-4">Tour</p>
              <p className="pb-4">Contact</p>
              <p className="pb-4">Privacy</p>
            </td>
          </div>
          <div></div>
        </div>
        <div className="xs:block md:hidden">
            <div className="flex justify-center text-center ">
              <td className="text-center">
                <div className="flex justify-center text-center">
                  <p className="font-bold v text-2xl mt-2 text-[#323232]">lobe</p>
                  <AcmeLogo />
                </div>
                <p className="pb-4">A product by Microsoft.</p>
                <p className="pb-4">All rights reserved.</p>
                <p className="pb-4">© Microsoft 2021</p>
              </td>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
