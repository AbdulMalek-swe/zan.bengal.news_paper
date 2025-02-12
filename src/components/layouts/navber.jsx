"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaChevronDown,
  FaFacebookF,
  FaSearch,
  FaTimes,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/logo/mmmm.png";
import Logo1 from "../../assets/logo/manobjomoin.jpg";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return; // Avoid SSR issues

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData = [
    { name: "সর্বশেষ", url: "/online" },
    { name: "বাংলাদেশ", url: "/todays-newspaper" },
    { name: "রাজনীতি", url: "/print-version" },
    { name: "সারাদেশ", url: "/sports" },
    { name: "আন্তর্জাতিক", url: "/world" },
    { name: "অর্থ-বাণিজ্য", url: "/business" },
    { name: "খেলাধুলা", url: "/sports" },
    { name: "বিনোদন", url: "/entertainment" },
    { name: "স্বাস্থ্য", url: "/health" },
    { name: "শিক্ষা", url: "/education" },
  ];

  const CategoryData = [
    { name: "অনলাইন", url: "/online" },
    { name: "আজকের পত্রিকা", url: "/todays-newspaper" },
    { name: "প্রিন্ট সংস্করণ", url: "/print-version" },
    { name: "খেলা", url: "/sports" },
    { name: "বিশ্ব", url: "/world" },
    { name: "বিনোদন", url: "/entertainment" },
    { name: "দেশ", url: "/national" },
    { name: "বিদেশ", url: "/international" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const visibleItems = menuData.slice(0, 10);
  const hiddenItems = menuData.slice(5);

  return (
    <main>
      {/* 🔹 Top Navbar (Mobile) */}
      <div className=" flex  items-center justify-between p-2 md:hidden">
        <Image
          className="w-14 h-12 rounded-sm"
          src={Logo1}
          alt="Profile Picture"
          width={30}
          height={30}
        />

        <div className="relative w-36">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 pr-4 rounded-md text-white border border-gray-600 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      <div className="lg:hidden mt-1 flex items-center justify-between p-3 gap-4">
        <button onClick={toggleSidebar} className="text-gray-700 text-3xl">
          <FaBars />
        </button>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {CategoryData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="whitespace-nowrap border-e-2 lg:border-none px-3 py-1 text-sm transition pb-3"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* 🔹 Header (Logo & Date) */}
      <div className="flex items-center container-custom justify-between px-4 pb-2 mt-3">
        <div className="text-center flex-1 hidden md:block">
          <Image
            className="mx-auto "
            src={logo}
            alt="Profile Picture"
            width={400}
            height={200}
          />
          <p className="mt-2 text-sm">
            ঢাকা, ১১ ফেব্রুয়ারি ২০২৫, মঙ্গলবার, ২৮ মাঘ ১৪৩১ বঙ্গাব্দ, ১১ শাবান
            ১৪৪৬ হিঃ
          </p>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav
        className={` transition-all  duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white z-50 shadow-md"
            : "md:bg-base-200 p-2"
        }`}
      >
        <div
          className={`hidden  lg:flex justify-start gap-4  items-center container-custom py-2 border-t border-t-slate-300    ${
            isScrolled
              ? "border-none "
              : "border-b-2  border-red-400 container-custom"
          } `}
        >
          {isScrolled && (
            <Image height={50} width={120} src={logo} alt="Logo" />
          )}
          <ul className="flex space-x-3">
            {visibleItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="text-gray-700 px-3 py-2 font-medium rounded-md"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* 🔹 Dropdown Menu */}
            {hiddenItems.length > 0 && (
              <li className="relative">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-gray-700 px-3 rounded-md flex items-center space-x-1"
                >
                  <span>আরও..</span>
                  <FaChevronDown
                    className={`transition ${showMore ? "rotate-180" : ""}`}
                  />
                </button>

                {showMore && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                    {hiddenItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.url}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowMore(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* 🔹 Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-gray-800 p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div>
          <Image
            className="w-20 h-14 rounded-sm"
            src={Logo1}
            alt="Profile Picture"
            width={80}
            height={30}
          />
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-6 text-xl text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-4 grid grid-cols-2 gap-4 text-center">
          {menuData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="block border-b text-xl font-semibold hover:bg-blue-500 px-4 py-3 rounded-md transition"
              onClick={toggleSidebar}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* 🔹 Social Icons (Middle Right Side) */}
      {isScrolled && (
        <div
          className={`fixed top-1/2 transform -translate-y-1/2 hidden lg:flex transition-all duration-700 ease-in-out z-50 ${
            isScrolled ? "right-5 opacity-100" : "right-[-50px] opacity-0"
          }`}
        >
          <div className="space-y-3 bg-white p-3 rounded-lg shadow-lg">
            <SocialIcon
              Icon={FaFacebookF}
              hoverColor="hover:bg-blue-600"
              bgColor="bg-blue-500"
              url={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
            />
            <SocialIcon
              Icon={FaLinkedinIn}
              hoverColor="hover:bg-blue-700"
              bgColor="bg-blue-600"
              url={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                window.location.href
              )}`}
            />
            <SocialIcon
              Icon={FaYoutube}
              hoverColor="hover:bg-red-600"
              bgColor="bg-red-500"
              url={`https://www.youtube.com/`}
            />
          </div>
        </div>
      )}
    </main>
  );
};

const SocialIcon = ({ Icon, hoverColor, bgColor, url }) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 flex items-center justify-center ${bgColor} text-white rounded-full ${hoverColor} transition cursor-pointer`}
  >
    <Icon size={18} />
  </Link>
);

export default Navber;
