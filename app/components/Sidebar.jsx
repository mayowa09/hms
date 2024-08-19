import React from "react";

export default function Sidebar({ activeItem }) {
  
  return (
    <>
      <nav className="flex flex-col sticky top-0 h-screen">
        <p className="px-1 py-1 text-[#878787]">ADDING A NEW PATIENT</p>
        <p className="py-2 text-[#232323]">Patient Details</p>
        <p
          className={`py-2 text-[#424242] ${
            activeItem === "Patient Basic Information" ? "font-semibold" : ""
          }`}
        >
          Patient Basic Information
        </p>
        <p
          className={`py-2 text-[#424242] ${
            activeItem === "Contact Information" ? "font-semibold" : ""
          }`}
        >
          Contact Information
        </p>
        <p
          className={`py-2 text-[#424242] ${
            activeItem === "Visiting Information" ? "font-semibold" : ""
          }`}
        >
          Visiting Information
        </p>
        <p
          className={`py-2 text-[#424242] ${
            activeItem === "Capture Photo" ? "font-semibold" : ""
          }`}
        >
          Capture Photo
        </p>
      </nav>
    </>
  );
}
