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
import HeadlineSlider from "@/components/headline";
import FacebookPage from "@/components/faccebook-page/facebookPage";
import VideoSection from "@/components/youtube-video";
import { Entertainment, NewsLayout, ThreeCategory } from "@/components/news-layout";
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
  const newsItems = [
    {
      author: "সিরাজুল ইসলাম চৌধুরী",
      title: "রাষ্ট্রভাষা, রাষ্ট্রের ভাষা ও গণতন্ত্র",
      description: "বুলডোজার শোভাযাত্রা, আইনের শাসন ও নির্বিকার সরকার",
      image: "/images/sirajul.GIF",
    },
    {
      author: "হাসান জাকির",
      title: "‘নিখোঁজ’ সুবা, টিকটক প্রেম এবং শিশুর সুরক্ষা",
      description: "কোনো অনুজ্জ্বল নির্বাচন বিচ্ছিন্ন...",
      image: "/images/jakir.GIF",
    },
  ];
  const mainnews = [
    {
      author: "মাহবুব আজিজ",
      title: "জুলাই গণহত্যার মূল হোতারা চিহ্নিত",
      description: "জাতিসংঘের ফ্যাক্ট ফাইন্ডিং মিশনের চূড়ান্ত প্রতিবেদনে জুলাই গণহত্যায় জড়িত মূল হোতাদের চিহ্নিত করা হয়েছে। এই রিপোর্টটি আজ বাংলাদেশ সময় বেলা আড়াইটায় জেনেভায় অবস্থিত জাতিসংঘ কার্যালয় থেকে প্রকাশ করা হবে।",
      image: "/images/julai1.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "জুলাই গণহত্যা তদন্ত রিপোর্ট চূড়ান্ত পর্যায়ে",
      description: "জুলাই গণহত্যা এবং ২০১৩ সালের হেফাজত গণহত্যার ঘটনায় পতিত প্রধানমন্ত্রী শেখ হাসিনাসহ কয়েক ডজন ব্যক্তিকে অভিযুক্ত করে তদন্ত প্রতিবেদন চূড়ান্ত পর্যায়ে রয়েছে । মামলাগুলোর প্রায় সব আলামত ও ডকুমেন্ট ইতোমধ্যে আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের তদন্ত সংস্থার হাতে এসেছে।",
      image: "/images/julaihotta.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "গিরগিটি সাংবাদিকতা বিতর্ক",
      description: "গত বুধবার ‘গিরগিটি সাংবাদিকতা’ শিরোনামে লেখা মন্তব্য-প্রতিবেদনে বাংলাদেশের কজন ঘোরতর ভারত ও আওয়ামীপন্থি সাংবাদিক ও সম্পাদকের রং বদলানো এবং বিএনপির পক্ষপুটে আশ্রয় নেওয়ার প্রচেষ্টার কথা উল্লেখ করেছিলাম।",
      image: "/images/mahmudul.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "আজ আয়নাঘর পরিদর্শনে যাবেন ড. ইউনূস",
      description: "অন্তর্বর্তী সরকারের প্রধান উপদেষ্টা ড. মুহাম্মদ ইউনূস আজ বুধবার গুমের আয়নাঘর পরিদর্শনে যাচ্ছেন। তার সঙ্গে থাকবেন বিবিসি, আলজাজিরাসহ আন্তর্জাতিক সংবাদমাধ্যমের সাংবাদিকরা।",
      image: "/images/younus.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "হাসিনার বিবৃতি নিয়ে আমরা ফাটা বাঁশে আছি : শশী থারুর",
      description: "শেখ হাসিনার সাম্প্রতিক মন্তব্য দ্বিপক্ষীয় বিষয়গুলোকে জটিল করে তুলেছে বলে স্বীকার করেছেন ভারতের বিরোধী কংগ্রেসদলীয় আইনপ্রণেতা শশী থারুর।",
      image: "/images/man.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "ভারতে মুসলিমবিদ্বেষ বেড়েছে ৭৪ শতাংশ",
      description: "২০২৪ সালে ভারতে মুসলিমবিদ্বেষ বেড়েছে। বছরটিতে ভারতের সংখ্যালঘুদের প্রতি, বিশেষ করে মুসলমানদের বিরুদ্ধে বিদ্বেষমূলক বক্তব্যের (হেট স্পিস) ঘটনা ৭৪ শতাংশ বেড়েছে।",
      image: "/images/muslime.GIF",
    },
  ];
  const leadnews = [
    {
      author: "মাহবুব আজিজ",
      title: "শেয়ারবাজারে ঋণসুবিধা কাঠামোতে বড় পরিবর্তনের সুপারিশ",
      description: "শেয়ারবাজারে মার্জিন ঋণসুবিধার নিয়মকানুন সংস্কারের সুপারিশ করেছে পুঁজিবাজার সংস্কারসংক্রান্ত টাস্কফোর্স। সুপারিশ অনুযায়ী, যেসব বিনিয়োগকারীর মোট বিনিয়োগ ১০ লাখ টাকার কম",
      image: "/images/logo.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "গাজায় আবারও যুদ্ধ শুরুর হুমকি নেতানিয়াহুর",
      description: "গাজায় আবারও যুদ্ধ শুরুর হুমকি দিয়েছেন ইসরায়েলের প্রধানমন্ত্রী বেঞ্জামিন নেতানিয়াহু। ফিলিস্তিনের স্বাধীনতাকামী সশস্ত্র গোষ্ঠী হামাস বন্দিদের মুক্তি ‘অনির্দিষ্টকালের’ জন্য স্থগিত",
      image: "/images/netaniahu.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "‘তৌহিদী জনতাকে’ হুমকি দিইনি, সতর্ক করেছি",
      description: "অন্তর্বর্তী সরকারের উপদেষ্টা মাহফুজ আলম বলেছেন, তৌহিদী জনতা নামে আপনারা যারা নিজেদের পরিচয় দেন, তাদের আমি হুমকি দিইনি, সতর্ক করেছি।",
      image: "/images/mahfuz.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "ওসি-এসআইসহ ৮ জনের বিরুদ্ধে চাঁদাবাজির মামলা",
      description: "চট্টগ্রামের পাহাড়তলী থানার ওসি ও পুলিশের তিন এসআইসহ মোট ৮ জনের বিরুদ্ধে চাঁদাবাজির অভিযোগে মামলা করা হয়েছে।",
      image: "/images/pahartoli.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "হাসিনা আবারও মানুষ হত্যার নির্দেশ দিচ্ছে: ইশরাক",
      description: "গণহত্যা করে আওয়ামী লীগের নেতাকর্মীদের মধ্যে কোনো ধরনের অনুশোচনা নেই, উল্টো বিদেশে বসে খুনি ফ্যাসিস্ট শেখ হাসিনা দেশকে অস্থিতিশীল করতে আবারো মানুষ হত্যার নির্দেশ দিচ্ছে বলে মন্তব্য করেছেন বিএনপির আন্তর্জাতিক বিষয়ক কমিটির সদস্য ইঞ্জিনিয়ার ইশরাক হোসেন।",
      image: "/images/sosi.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "সব আসনেই নির্বাচনের প্রস্তুতি জামায়াতের",
      description: "ছাত্র-জনতার গণঅভ্যুত্থানে ফ্যাসিস্ট আওয়ামী লীগ সরকারের পতনের পর ৬ মাস ধরে দেশ চালাচ্ছে অন্তর্বর্তী সরকার। জুলাই বিপ্লবে গণহত্যার পাশাপাশি বিগত সাড়ে ১৫ বছরের দুঃশাসনে জড়িতদের বিচার এবং রাষ্ট্রের বিভিন্ন ক্ষেত্রে প্রয়োজনীয় সংস্কার শেষে দ্রুত নির্বাচন প্রত্যাশা করছে দেশের রাজনৈতিক দলগুলো।",
      image: "/images/jamat.GIF",
    },
  ];

  const text = `
  সংশ্লিষ্ট সূত্রে জানা গেছে, পূর্বাচল প্রকল্পে ক্ষমতাচ্যুত প্রধানমন্ত্রী শেখ হাসিনা পরিবারের ৬০ কাঠা প্লট বরাদ্দে অনিয়ম ও দুর্নীতির ঘটনা তদন্ত করছে দুদক। ক্ষমতার অপব্যবহার এবং অনিয়ম করে ১০ কাঠার ছয়টি প্লট হাসিনার পরিবারের জন্য বরাদ্দ করা হয়। বরাদ্দপ্রাপ্ত অন্যরা হলেনÑ শেখ হাসিনার বোন শেখ রেহানা, ছেলে সজিব ওয়াজেদ জয়, মেয়ে সায়মা ওয়াজেদ পুতুল, ভাগনে রাদওয়ান মুজিব সিদ্দিক ও ভাগনি আজমিনা সিদ্দিক।
  `;
  

  return (
    <Suspense fallback={<>loading</>}>
      {/* nav section  */}
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
     <main className="container-custom mt-5">
      {/* <HeadlineSlider/> */}
      <div className="flex items-center justify-between border-b-2 border-gray-700 pb-2 mb-5">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">আজকের খবর</h2>
          <span className="text-gray-700">▶</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 border-b h-full">
        {/* Main News Section */}
        <div className="flex-1 flex flex-col gap-4 h-full">
          {/* Headline News */}
          <Link href={'detail/1'} className="border-b pb-4 flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="flex-1 flex flex-col justify-between h-full">
              <h1 className="text-xl font-bold text-yellow-600">
              দুদকে পাঠানো রাজউক চেয়ারম্যানের চিঠি নিয়ে তোলপাড়
              </h1>
              <p className="mt-2 text-gray-700">
                {text.length > 145 ? text.slice(0, 145) + "..." : text}
              </p>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-[350px] h-[200px] flex-shrink-0">
              <Image
                src="/images/dudok.GIF"
                alt="Main News"
                width={350}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Grid News */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            {mainnews.map((item, index) => (
              <Link href={"/detail/1"} key={index} className="p-3 flex gap-2 border-b">
                <Image
                  src={item?.image}
                  alt="News 1"
                  width={120}
                  height={75}
                  className="w-[120px] h-[75px] object-cover"
                />
                <h3 className="font-bold mt-2 flex-1">
                {item?.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Middle News Section */}
        <div className="flex flex-col lg:w-1/4 w-full self-stretch">
          {leadnews.map((item, index) => (
            <Link href={"/detail/1"} key={index} className="border-b p-3 flex items-stretch gap-2">
              <h3 className="font-bold mt-2 flex-1">
                {item?.title}
              </h3>
              <div className="w-[115px] h-[75px] flex-shrink-0">
                <Image
                  src={item?.image}
                  alt="News Middle 1"
                  width={115}
                  height={75}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
        {/* Sidebar */}
        {/* facebook use here  */}
        <div>
          <FacebookPage/>
        </div>
      </div>
      {/* video section */}
      <VideoSection/>
      {/* sdfsdfsd */}
      {/* Category section */}
      <NewsLayout/>
      <Entertainment/>
      <ThreeCategory/>
    </main>
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

 