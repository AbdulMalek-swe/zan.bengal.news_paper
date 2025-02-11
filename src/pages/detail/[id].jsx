import Image from "next/image";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaHome,
} from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import MoreNews from "@/components/more-news";

export default function NewsDetail() {
  return (
    <div className="container-custom px-4 lg:px-20 py-10">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-10">
        {/* News Article */}
        <div className="lg:col-span-2">
          <nav className="text-gray-600 text-sm flex items-center gap-2 mb-4">
            <FaHome className="text-gray-500" />
            <span className="text-blue-600">বাংলাদেশ</span>
            <span> »</span>
            <span>
              ৬ দফা দাবিতে শহীদ মিনারে চাকরিচ্যুত বিডিআর সদস্যদের অবস্থান
              কর্মসূচি
            </span>
          </nav>
          <h1 className="text-2xl font-bold mb-4">
            ৬ দফা দাবিতে শহীদ মিনারে চাকরিচ্যুত বিডিআর সদস্যদের অবস্থান কর্মসূচি
          </h1>
          <div className="my-2 flex flex-col lg:flex-row md:items-center justify-between">
            {" "}
            <p className="text-gray-600 text-sm ">
              <span className="font-bold">সমকাল প্রতিবেদক</span> <br />
              প্রকাশ: ১১ ফেব্রুয়ারি ২০২৫ | ১৯:৩১ | আপডেট: ১১ ফেব্রুয়ারি ২০২৫ |
              ১৩:০১
            </p>
            <div className="flex space-x-3 ">
              <FaFacebookF className="text-blue-600 text-xl cursor-pointer" />
              <FaWhatsapp className="text-green-500 text-xl cursor-pointer" />
              <FaTwitter className="text-blue-400 text-xl cursor-pointer" />
              <FaLinkedinIn className="text-blue-700 text-xl cursor-pointer" />
              <BsMessenger className="text-blue-500 text-xl cursor-pointer" />
            </div>
          </div>
          <Image
            src="/images/img.webp"
            alt="News Image"
            width={1200}
            height={600}
            className="rounded-lg w-full"
          />

          <p className="mt-4 text-lg text-gray-700 leading-7">
            জেলবন্দীদের মুক্তি ও চাকরিচ্যুত সদস্যদের চাকরিতে পুনর্বহালের ৬ দফা
            দাবিতে অবস্থান কর্মসূচি পালন করছেন বিডিআর সদস্যরা।
          </p>

          <div
            className="text-gray-800 mt-12 text-justify"
            dangerouslySetInnerHTML={{
              __html: `<p> পিলখানা হত্যাকাণ্ডে জেলবন্দীদের মুক্তি ও চাকরিচ্যুত সবাইকে ক্ষতিপূরণ দিয়ে চাকরিতে পুনর্বহালসহ ৬ দফা দাবিতে অবস্থান কর্মসূচি পালন করছেন বিডিআর সদস্যরা।

মঙ্গলবার সকাল সাড়ে ৯টায় দাবি আদায়ের লক্ষ্যে কর্মসূচির প্রথম দিনে শহীদ মিনারে অবস্থান নেন বিডিআর সদস্যরা।

এসময় তাদের ‘বিজিবি না বিডিআর, বিডিআর বিডিআর’, ‘দেশপ্রেমিক বিডিআর, সীমান্তে যাবে আরেকবার’, ‘বিডিআরের ঠিকানা, পিলখানা পিলখানা’সহ একাধিক স্লোগান দিতে দেখা যায়।

কর্মসূচিতে বিভিন্ন জেলা থেকে ব্যানার নিয়ে উপস্থিত হয়েছেন বিডিআর সদস্যরা। দাবি আদায় না হওয়া পর্যন্ত আন্দোলন চালিয়ে যাওয়ার ঘোষণা দিয়েছেন তারা।

তাদের ৬ দফা দাবিগুলো হলো-

১. পিলখানার ভেতরে ও বাইরে ১৮টি বিশেষ আদালত ও অধিনায়কের সামারি কোর্ট গঠন করে যেসব বিডিআর সদস্যদের চাকরিচ্যুত করা হয়েছে, তাদের সবাইকে চাকরিতে পুনর্বহাল করতে হবে এবং ক্ষতিপূরণ ও রাষ্ট্রীয় সুযোগ-সুবিধা নিশ্চিত করা।

২. ইতোমধ্যে হত্যা মামলায় খালাসপ্রাপ্ত এবং সাজা শেষ হওয়া জেলবন্দি বিডিআর সদস্যদের অনতিবিলম্বে মুক্তি দিতে হবে এবং উদ্দেশ্যপ্রণোদিত প্রহসনের বিস্ফোরক মামলা বাতিল করা।

৩. গঠিত কমিশন স্বাধীন ও নিরপেক্ষভাবে কাজ করার জন্য প্রজ্ঞাপনে উল্লেখিত ব্যতীত শব্দ এবং কার্যপরিধি ২ এর (ঙ) নং ধারা বাদ দিতে হবে। একইসঙ্গে স্বাধীন তদন্ত রিপোর্ট সাপেক্ষে অন্যায়ভাবে দণ্ডিত সর্বপ্রকার নিরপরাধ বিডিআর সদস্যদের মুক্তি দিতে হবে এবং পিলখানা হত্যাকাণ্ডের সঠিক কারণ উদঘাটন, মূল ষড়যন্ত্রকারী, হত্যাকারীদের চিহ্নিত করে দৃষ্টান্তমূলক শাস্তির আওতায় আনা।

৪. পিলখানা হত্যাকাণ্ডে শহীদ হওয়া ৫৭ সেনা কর্মকর্তা, ১০ জন বিডিআর সদস্যসহ মোট ৭৪ জনের হত্যাকারীর বিচার নিশ্চিত করতে হবে। একইসঙ্গে জেলের ভেতর মারা যাওয়া প্রত্যেক বিডিআর সদস্যের মৃত্যুর সঠিক কারণ উম্মোচন করতে হবে। অস্বাভাবিক মৃত্যু হয়ে থাকলে দায়ী সবাইকে বিচারের আওতায় আনা।</p>
    `,
            }}
          />

          <MoreNews />
        </div>

        {/* Sidebar - Related News */}
        <div className=" border  p-4 md:mt-40  ">
        <div className="flex items-center w-full">
  <div className="flex-1 border-t border-gray-300"></div>
  <div className="mx-3 flex items-center gap-2">
  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
    <span className="text-lg font-semibold text-gray-800">সর্বশেষ</span>
    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
  </div>
  <div className="flex-1 border-t border-gray-300"></div>
</div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-start gap-3 border-b pb-2">
                <Image
                  src="/images/img.webp"
                  alt={`News ${index + 1}`}
                  width={100}
                  height={60}
                  className="rounded"
                />
                <p className="text-sm">
                  ছাত্র নির্যাতনের ঘটনায় সাবেক বুয়েট ভিসিসহ ১৪ জনের বিরুদ্ধে
                  মামলা
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center px-2 mt-2 cursor-pointer text-sm font-semibold hover:text-orange-600 text-gray-800 whitespace-nowrap ">
            <span className="me-2">আরও পড়ুন</span>
            <span className="text-orange-500 text-lg">»</span>
            <div className="flex-1 border-t-2 border-orange-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
