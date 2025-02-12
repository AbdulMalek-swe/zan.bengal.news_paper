import React, { useState } from "react";
import logo from "../../assets/logo/mmmm.png";
import Logo1 from "../../assets/logo/manobjomoin.jpg";
import Image from "next/image";
import { FaBars, FaChevronDown, FaFacebookF, FaSearch, FaTimes } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const menuData = [
    { name: "সর্বশেষ", url: "/latest-news" },
    { name: "বাংলাদেশ", url: "/todays-newspaper" },
    { name: "রাজনীতি", url: "/print-version" },
    { name: "সারাদেশ", url: "/sports" },
    { name: "আন্তর্জাতিক", url: "/world" },
    { name: "অর্থ-বাণিজ্য", url: "/world" },
    { name: "খেলাধুলা", url: "/entertainment" },
    { name: "বিনোদন", url: "/national" },
    { name: "স্বাস্থ্য", url: "/international" },
    { name: "শিক্ষা", url: "/bengal" },
    { name: "আরও..", url: "/education" },
    { name: "খেলাধুলা", url: "/entertainment" },
    { name: "বিনোদন", url: "/national" },
    { name: "স্বাস্থ্য", url: "/international" },
    { name: "শিক্ষা", url: "/bengal" },
    { name: "আরও..", url: "/education" },
  ];
  const CategoryData = [
    { name: "অনলাইন", url: "/latest" },
    { name: "আজকের পত্রিকা", url: "/todays-newspaper" },
    { name: "প্রিন্ট সংস্করণ", url: "/print-version" },
    { name: "খেলা", url: "/sports" },
    { name: "বিশ্ব", url: "/world" },
    { name: "বিনোদন", url: "/entertainment" },
    { name: "দেশ", url: "/national" },
    { name: "বিদেশ", url: "/international" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const visibleItems = menuData.slice(0, 5);
  const hiddenItems = menuData.slice(5);

  return (
    <>
      <div className="bg-slate-900 flex items-center justify-between p-4 md:hidden">
        {/* Left Side - Logo */}
        <Image
          className="w-14 h-12 rounded-sm"
          src={Logo1}
          alt="Profile Picture"
          width={30}
          height={30}
        />

        {/* Right Side - Search Bar */}
        <div className="relative w-36">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 pr-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Small Screen Navbar */}
      <div className="lg:hidden mt-1 flex items-center justify-between  p-3 text-gray-700 gap-4">
        {/* Left Side - Bar Icon */}
        <button onClick={toggleSidebar} className="text-gray-700 text-3xl">
          <FaBars />
        </button>

        {/* Right Side - Category Menu */}
        <div className="flex space-x-4 overflow-x-auto  scrollbar-hide">
          {CategoryData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="whitespace-nowrap px-3 py-1 text-sm transition pb-3"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 mt-3">
        {/* Left Side - Empty Placeholder */}
        <div></div>

        {/* Center Content (Logo & Text) */}
        <div className="text-center flex-1 hidden md:block">
          <Image
            className="mx-auto"
            src={logo}
            alt="Profile Picture"
            width={400}
            height={350}
          />
          <p className="mt-2 text-sm">
            ঢাকা, ১১ ফেব্রুয়ারি ২০২৫, মঙ্গলবার, ২৮ মাঘ ১৪৩১ বঙ্গাব্দ, ১১ শাবান
            ১৪৪৬ হিঃ
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
      <nav>
        {/* Large Screen Menu */}
        <hr className="mt-1" />
        {/* <div className="md:bg-base-200 p-4 shadow-lg">
          <div className="hidden lg:flex justify-between items-center flex-nowrap">
            <ul className="flex space-x-6">
              {menuData.map((item, index) => (
                <li key={index}>
                  <Link
                    href="item.url"
                    className="text-gray-700  px-3 py-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div> */}
        <div className="md:bg-base-200 p-4 shadow-lg">
      <div className="hidden lg:flex justify-between items-center">
        <ul className="flex space-x-6">
          {visibleItems.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className="text-gray-700 px-3 py-2 rounded-md">
                {item.name}
              </Link>
            </li>
          ))}

          {/* আরও.. বাটন */}
          {hiddenItems.length > 0 && (
            <li className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-gray-700 px-3 py-2 rounded-md flex items-center space-x-1"
              >
                <span>আরও..</span>
                <FaChevronDown className={`transition ${showMore ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
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
    </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#fff] text-gray-800 p-6 transition-transform transform ${
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
            {/* Close Button  tttt */}
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-6 text-xl text-gray-700"
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Items */}
          <div className=" p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              {menuData.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="block  border-b text-xl font-semibold hover:bg-blue-500 px-4 py-3 rounded-md transition"
                  onClick={toggleSidebar} // ক্লিক করলে মেনু বন্ধ হবে
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
