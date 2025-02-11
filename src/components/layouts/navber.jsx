import React from "react";
import logo from "../../assets/logo/manobjomoin.jpg";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Navber = () => {
  return (
    <>
<div className="flex items-center justify-between px-4">
  {/* Left Side - Empty Placeholder */}
  <div></div>

  {/* Center Content (Logo & Text) */}
  <div className="text-center flex-1">
    <Image
      className="mx-auto"
      src={logo}
      alt="Profile Picture"
      width={150}
      height={120}
    />
    <p className="mt-2">
      ঢাকা, ১১ ফেব্রুয়ারি ২০২৫, মঙ্গলবার, ২৮ মাঘ ১৪৩১ বঙ্গাব্দ, ১১ শাবান ১৪৪৬ হিঃ
    </p>
  </div>

  {/* Right Side - Social Icons (hidden on mobile, shown on large screens) */}
  <div className="lg:flex space-x-2 hidden">
    {/* Facebook Icon */}
    <div className="w-7 h-7 flex items-center justify-center border border-gray-400 rounded-full text-gray-400 hover:bg-[#0064d1] hover:text-white cursor-pointer">
      <FaFacebookF size={15} />
    </div>

    {/* YouTube Icon */}
    <div className="w-7 h-7 flex items-center justify-center border border-gray-400 rounded-full text-gray-400 hover:bg-red-700 hover:text-white cursor-pointer">
      <FaYoutube size={15} />
    </div>

    {/* LinkedIn Icon */}
    <div className="w-7 h-7 flex items-center justify-center border border-gray-400 rounded-full text-gray-400 hover:bg-[#053059] hover:text-white cursor-pointer">
      <FaLinkedinIn size={15} />
    </div>
  </div>
</div>

    </>
  );
};

export default Navber;
