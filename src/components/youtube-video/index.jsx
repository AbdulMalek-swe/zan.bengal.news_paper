"use client"; // Ensure it's client-side

import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const videos = [
  { id: 1, title: "ব্যাংকে ইমরুল-মোদি বৈঠক?", thumbnail: "/images/modi.jpg" },
  { id: 2, title: "বেনজীরকে নিয়ে নতুন করে...", thumbnail: "/entertainment/4.jpg" },
  {
    id: 3,
    title: "যেভাবে তৈরি হয় মানিকগঞ্জের...",
    thumbnail: "/images/manik.jpg",
  },
  {
    id: 4,
    title: "ভিডিও পরিচালকের দুর্ঘটনার ডাকাতি...",
    thumbnail: "/entertainment/2.jpeg",
  },
  {
    id: 5,
    title: "তারেক-কন্যা জাইমা রাজনীতিতে আসছেন?",
    thumbnail: "/images/ronju.gif",
  },
  { id: 6, title: "ব্যাংকে ইমরুল-মোদি বৈঠক?", thumbnail: "/images/modi.jpg" },
  { id: 7, title: "মনে তো কত মানুষই থাকে...", thumbnail: "/images/younus.gif" },
];

const VideoSection = () => {
  const swiperRef = useRef(null); // Reference for Swiper instance

  return (
    <div className="bg-black text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-red-500 pb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">ভিডিও</h2>
          <span className="text-red-500">▶</span>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {/* Main Video */}
        {videos.slice(0, 3).map((data, index) => (
          <Link href={""} key={index}>
            <div className="relative">
            <img
              src={data?.thumbnail}
              alt={data?.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="border-2 border-white hover:bg-red-500 p-3 rounded-full flex justify-center items-center">
                <FaPlay className="text-white text-2xl" />
              </div>
            </div>
            </div>

            <p className="mt-2 text-sm font-semibold">{data?.title}</p>
          </Link>
        ))}
      </div>

      {/* Video Slider with Custom Buttons */}
      <div className="relative mt-6">
        {/* Previous Button (Left) */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 border-red-500 border-2 p-3 rounded-full shadow-md hover:bg-gray-600"
        >
          <RiArrowLeftSLine size={16} />
        </button>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
          className="w-full"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <Link href={""} className="">
                <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-44 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="border-2 border-white hover:bg-red-500 p-3 rounded-full flex justify-center items-center">
                    <FaPlay className="text-white text-2xl" />
                  </div>
                </div>
                </div>
                <p className="mt-2 text-xs font-semibold">{video.title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button (Right) */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 border-2 border-red-500 z-10 p-3 rounded-full shadow-md hover:bg-gray-600"
        >
          <RiArrowRightSLine size={16} />
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
