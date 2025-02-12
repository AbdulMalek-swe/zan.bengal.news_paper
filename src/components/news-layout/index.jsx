import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "আমাদের মস্তিষ্কে রিল-শর্টসের কতটা প্রভাব ফেলেছে জানেন?",
    description:
      "বর্তমানে এমন মানুষ কি খুঁজে পাওয়া যাবে যে, সোশ্যাল মিডিয়া ফেসবুক, ইনস্টাগ্রাম বা ইউটিউবে রিল বা শর্টস দেখা ছাড়া একটি দিন কাটিয়েছেন?",
    image: "/images/img.webp",
    time: "১১ ফেব্রুয়ারি ২০২৫, ০২:৩৬ পিএম",
  },
];

const sidebarArticles = [
  { id: 2, title: "আজ ‘প্রমিস ডে’, প্রতিজ্ঞা করার দিন", image: "/images/img.webp" },
  { id: 3, title: "হেসব কারণে দেখে বাঁধে যৌনরোগ", image: "/images/img.webp" },
  { id: 4, title: "শিশুরা হেসব কারণে ক্যানসারে আক্রান্ত হয়", image: "/images/img.webp" },
  { id: 5, title: "জরায়ু ক্যানসারে আক্রান্ত কি না বুঝে নিন ৯ লক্ষণ", image: "/images/img.webp" },
];

const rightFeature = {
  id: 6,
  title: "নারী নাকি পুরুষ বেশি কথা বলেন?",
  image: "/images/img.webp",
};

export const NewsLayout = () => {
  return (
    <div className="container mx-auto my-6 border-b pb-5">
      {/* Category Header */}
      <div className="flex items-center gap-2 text-lg font-bold mb-4">
        <span className="bg-red-500 text-white px-3 py-1 rounded">লাইফস্টাইল</span>
        <FaChevronDown className="text-red-500" />
      </div>

      <div className="flex gap-2 flex-col md:flex-row">
        {/* Main News Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left - Featured Article */}
          <div className="md:col-span-2 border-r pe-4">
            {articles.map((article) => (
              <Link key={article.id} href="#" className="block">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={350}
                  className="rounded-lg w-full object-cover"
                />
                <h2 className="mt-3 text-xl font-bold hover:text-red-500">{article.title}</h2>
                <p className="text-gray-600 mt-1">{article.description}</p>
                <span className="text-sm text-gray-400">{article.time}</span>
              </Link>
            ))}
          </div>

          {/* Right - Sidebar Articles */}
          <div className="space-y-4 pe-4 border-r">
            {sidebarArticles.map((article) => (
              <Link key={article.id} href="#" className="flex items-center border-b pb-4 gap-3">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={120}
                  height={80}
                  className="rounded-lg w-[120px] h-[80px] object-cover"
                />
                <p className="text-sm font-medium hover:text-red-500">{article.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Right Feature Article */}
        <div>
          <Link href="#" className="flex flex-col gap-4 items-center">
            <Image
              src={rightFeature.image}
              alt={rightFeature.title}
              width={300}
              height={180}
              className="aspect-video object-cover"
            />
            <p className="text-lg font-semibold hover:text-red-500">{rightFeature.title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Entertainment = () => {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main News Section */}
      
      <div className="md:col-span-2 p-4 rounded-md">
      <div className="flex items-center gap-2 text-lg font-bold mb-4">
        <span className="bg-red-500 text-white px-3 py-1 rounded">লাইফস্টাইল</span>
        <FaChevronDown className="text-red-500" />
      </div>
        <div className="relative w-full h-96 mb-3">
          <Image
            src="/images/img.webp"
            alt="Main News"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold">৬ তারকার নাটকের দাম</h3>
        <p className="text-gray-700 mt-2">শাহরুখ খানসহ বড় তারকাদের নাটকের দাম নিয়ে বিস্তারিত...</p>
      </div>

      {/* Sidebar */}
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-bold mb-3">Trending</h2>
        <div className="space-y-4">
          <div className="flex space-x-3">
            <Image src="/images/img.webp" width={80} height={80} className="rounded-md" alt="News" />
            <div>
              <h4 className="font-medium">কারিয়ের আনন্দের দিন</h4>
            </div>
          </div>
          <div className="flex space-x-3">
            <Image src="/side-2.jpg" width={80} height={80} className="rounded-md" alt="News" />
            <div>
              <h4 className="font-medium">ভ্রম ধ্বিজের দিনশেষে</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom News Cards */}
      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-3 rounded-md">
          <Image src="/small-1.jpg" width={150} height={100} className="rounded-md" alt="News" />
          <h4 className="text-sm mt-2">'হেয়ারার যদি আদনান তারিখের সন্ধান'</h4>
        </div>
        <div className="bg-white shadow p-3 rounded-md">
          <Image src="/small-2.jpg" width={150} height={100} className="rounded-md" alt="News" />
          <h4 className="text-sm mt-2">গানে কিমারন সাবিনা ইয়াসমিন</h4>
        </div>
        <div className="bg-white shadow p-3 rounded-md">
          <Image src="/small-3.jpg" width={150} height={100} className="rounded-md" alt="News" />
          <h4 className="text-sm mt-2">এক নতুন, জিরাপিক ঐতিহাসিক...</h4>
        </div>
        <div className="bg-white shadow p-3 rounded-md">
          <Image src="/small-4.jpg" width={150} height={100} className="rounded-md" alt="News" />
          <h4 className="text-sm mt-2">ট্রেন্ডিং টপিকস</h4>
        </div>
      </div>
    </div>
  );
};
