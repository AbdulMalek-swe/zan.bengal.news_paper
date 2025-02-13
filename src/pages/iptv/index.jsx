import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import dynamic from "next/dynamic";

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
    </Suspense>
  );
};

export default Iptv;
