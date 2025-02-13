import React, { Suspense, useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";

import Image from "next/image"; 
import dynamic from "next/dynamic"; 
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import {
  FaBars,
  FaChevronDown,
  FaFacebookF,
  FaTimes,
  FaYoutube,
  FaLinkedinIn,
  FaPlay 
} from "react-icons/fa";
import logo from "../../assets/logo/mmmm.png";
import Logo1 from "../../assets/logo/manobjomoin.jpg";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const API_KEY = "AIzaSyCJ-WjACDOpf1n3rmtWfNg4MHA_FA1dyj8"; // Replace with your API key
const CHANNEL_ID = "UCUYybxoXtaMGjLddh7IErrA"; // Replace with your YouTube channel ID
const MAX_RESULTS = 10;

const Iptv = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filter, setFilter] = useState("latest");

  useEffect(() => {
    fetchVideos();
    fetchCategories();
  }, []);

  // Fetch YouTube videos using Axios
  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: "snippet",
            order: "date",
            maxResults: MAX_RESULTS,
          },
        }
      );

      const videoIds = data.items.map((item) => item.id.videoId).join(",");
      const { data: statsData } = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            key: API_KEY,
            part: "statistics, snippet",
            id: videoIds,
          },
        }
      );

      // Merge statistics with video data
      const videosWithStats = data.items.map((item, index) => ({
        ...item,
        views: statsData.items[index]?.statistics.viewCount || 0,
        categoryId: statsData.items[index]?.snippet?.categoryId || "",
        videoUrl: `https://www.youtube.com/watch?v=${item?.id?.videoId}`,
      }));

      setVideos(videosWithStats);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Fetch video categories
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/videoCategories`,
        {
          params: {
            key: API_KEY,
            part: "snippet",
            regionCode: "US", // Change to your region if needed
          },
        }
      );

      setCategories(data.items);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Function to filter videos by latest, popular, or category
  const getFilteredVideos = () => {
    let filteredVideos = [...videos];
    console.log(filteredVideos, "welcom eot vidoadf");
    if (selectedCategory) {
      filteredVideos = filteredVideos.filter(
        (video) => video.categoryId === selectedCategory
      );
    }

    if (filter === "popular") {
      return filteredVideos.sort((a, b) => b.views - a.views);
    }

    return filteredVideos; // Default: latest uploads
  };
  const [singleVideo, setSingleVideo] = useState(
    "https://www.youtube.com/watch?v=14ibBrbsFyg"
  );
  return (
    <Suspense fallback={<>loading</>}>
      <Navber/>
     <div className="bg-black">
     <div className="container-custom  p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[425px]">
          {/* Video Player Section */}
          <div className="md:col-span-7 bg-black p-2 rounded-lg h-[250px] sm:h-[350px] md:h-full">
            <ReactPlayer
              url={singleVideo}
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>

          {/* Video List Section */}
          <div className="md:col-span-5 bg-[#131824] p-2 font-medium rounded-lg">
            {/* Filter Buttons */}
            <div className="flex gap-2 bg-[#131824] rounded-lg p-2">
              <button
                className={`px-4 py-2 rounded-lg text-white ${
                  filter === "latest" ? "bg-[#2C4B9C]" : "bg-gray-700"
                }`}
                onClick={() => setFilter("latest")}
              >
                Latest Videos
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-white ${
                  filter === "popular" ? "bg-[#2C4B9C]" : "bg-gray-700"
                }`}
                onClick={() => setFilter("popular")}
              >
                Popular Videos
              </button>
            </div>

            {/* Video List with Scroll */}
            <div className="space-y-2 py-2 h-[320px] overflow-y-auto">
              {getFilteredVideos().map((video) => (
                <div
                  className="flex bg-[#1C1C1C] rounded-md overflow-hidden gap-2 cursor-pointer p-2 hover:bg-[#2C2C2C]"
                  key={video?.id?.videoId}
                  onClick={() => setSingleVideo(video?.videoUrl)}
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-[105px] h-[60px]">
                    <Image
                      src={video?.snippet?.thumbnails?.high?.url}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover rounded-md"
                      alt={video?.snippet?.title}
                    />
                    {/* Play Icon */}
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="bg-white hover:bg-red-500 p-2 rounded-full flex justify-center items-center">
                        <FaPlay className="text-gray-500 text-sm hover:text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Video Title */}
                  <div className="text-gray-50 font-normal text-base w-full">
                    <span className="block line-clamp-2">
                      {video?.snippet?.title}
                    </span>
                    <p className="text-sm text-gray-400">
                      Views: {video.views}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     </div>
    </Suspense>
  );
};

export default Iptv;


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
    { name: "সর্বশেষ", url: "/latest-news" },
    { name: "বাংলাদেশ", url: "/news-category/todays-newspaper" },
    { name: "রাজনীতি", url: "/news-category/print-version" },
    { name: "সারাদেশ", url: "/news-category/sports" },
    { name: "আন্তর্জাতিক", url: "/news-category/world" },
    { name: "অর্থ-বাণিজ্য", url: "/news-category/business" },
    { name: "খেলাধুলা", url: "/news-category/sports" },
    { name: "বিনোদন", url: "/news-category/entertainment" },
    { name: "স্বাস্থ্য", url: "/news-category/health" },
    { name: "শিক্ষা", url: "/news-category/education" },
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

  const toggleSidebar = () => setIsOpen(!isOpen);
  const visibleItems = menuData.slice(0, 10);
  const hiddenItems = menuData.slice(5);

  return (
    <main>
    
      {/* 🔹 Mobile Menu */}
      <div className="lg:hidden  flex items-center justify-between py-3 px-3  gap-4">
        <button onClick={toggleSidebar} className="text-gray-700 text-3xl">
          <FaBars className="border p-1 text-green-500" />
        </button>
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {menuData.slice(0, 5).map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="whitespace-nowrap border-e-2 text-[17px] lg:border-none px-2  text-sm transition py-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* 🔹 Main Navbar */}
      <nav
        className={` transition-all  duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white z-50 shadow-md"
            : "md:bg-base-200 py-1 md:p-2"
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

 