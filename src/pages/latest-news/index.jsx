import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestNews = () => {
  return (
    <div className="container-custom">
      <h1 className="text-[#FF8C00] text-xl py-5 ">  সর্বশেষ খবর</h1>
      <section className="grid grid-cols-2 gap-4 ">
        {[1, 3, 4, 5, 4, 5, 6, 76, 5, 45, 43, 3, 4].map((news, i) => (
          <Link
            href="/detail/1"
            className="p-2 pb-5 group flex gap-4 border-b items-center"
            key={i}
          >
             <div className="aspect-video w-full">
              <Image
                src={"/images/img.webp"}
                alt="loading"
                width={800}
                height={450}
                className="rounded-lg w-full"
              />
            </div>
            <div className="w-full">
              <span className="text-[#FF8C00] block pb-3 text-sm">সারাদেশ</span>
              <h2 className="text-gray-600 group-hover:text-[#FF8C00]   pb-4 text-base md:text-xl">
                শহীদ পরিবার ও আহতদের কর্মসংস্থান নিয়ে যা বললেন উপদেষ্টা নাহিদ
              </h2>
              <span className="text-gray-500 pb-3 hidden md:block">
                জুলাই গণঅভ্যুত্থানে ছাত্র-জনতা শহীদ পরিবার ও আহতদের কর্মসংস্থান
                নিয়ে কথা বলেছেন অন্তর্বর্তী সরকারের তথ্য ও সম্প্রচার
                মন্ত্রণালয়ের উপদেষ্টা
              </span>
              <span className="text-gray-500 hidden md:block">
                আপডেটঃ ১১ ফেব্রুয়ারি ২০২৫ | ১৪:২৪
              </span>
            </div>
           
          </Link>
        ))}

        {/* <NewsCart/> */}
      </section>
      <div className="flex justify-center py-5"><button className="px-4 py-2  bg-[#FF8C00] rounded-lg">আরও</button></div>
    </div>
  );
};

export default LatestNews;
