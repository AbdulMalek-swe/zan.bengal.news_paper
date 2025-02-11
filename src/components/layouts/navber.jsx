import React, { useState } from "react";
import logo from "../../assets/logo/manobjomoin.jpg";
import Image from "next/image";
import { FaBars, FaFacebookF, FaTimes } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuData = [
        { name: "অনলাইন", url: "/online" },
        { name: "আজকের পত্রিকা", url: "/todays-newspaper" },
        { name: "প্রিন্ট সংস্করণ", url: "/print-version" },
        { name: "খেলা", url: "/sports" },
        { name: "বিশ্ব", url: "/world" },
        { name: "বিনোদন", url: "/entertainment" },
        { name: "দেশ", url: "/national" },
        { name: "বিদেশ", url: "/international" },
        { name: "বাংলারজমিন", url: "/bengal" },
        { name: "শিক্ষাঙ্গন", url: "/education" },
        { name: "অর্থ-বাণিজ্য", url: "/economy" },
        { name: "রাজনীতি", url: "/politics" }
      ];
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
      
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
{/* navber */}
<nav className="bg-gray-800 p-4">
      {/* Large Screen Menu */}
      <div className="hidden lg:flex justify-between items-center">
        <ul className="flex space-x-6">
          {menuData.map((item, index) => (
            <li key={index}>
              <Link
                href='item.url'
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Small Screen Sidebar */}
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl"
        >
          <FaBars />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-4 transition-all ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 text-3xl text-white"
          >
            <FaTimes />
          </button>
          <ul className="space-y-6 mt-10">
            {menuData.map((item, index) => (
              <li key={index}>
                <Link
                  href='item.url'
                  className="block text-lg text-white hover:bg-blue-500 px-3 py-2 rounded-md"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

    </>
  );
};

export default Navber;
