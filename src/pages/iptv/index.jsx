import React, { useEffect, useState } from "react";
import axios from "axios";

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
        `https://www.googleapis.com/youtube/v3/search`, {
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
        `https://www.googleapis.com/youtube/v3/videos`, {
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
        `https://www.googleapis.com/youtube/v3/videoCategories`, {
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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === "latest" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("latest")}
        >
          Latest Videos
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === "popular" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("popular")}
        >
          Popular Videos
        </button>

        {/* Category Dropdown */}
        <select
          className="px-4 py-2 rounded-lg bg-gray-200"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.snippet.title}
            </option>
          ))}
        </select>
      </div>

      {/* Video List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getFilteredVideos().map((video) => (
          <div key={video.id.videoId} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">{video.snippet.title}</h3>
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            ></iframe>
            <p className="text-sm text-gray-500 mt-2">Views: {video.views}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iptv;
