import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCart = () => {
  return (
    <Link
      href="/some"
      className="p-2 pb-5 group flex gap-4  "
    //   key={i}
    >
      <div>
      <div className="aspect-video w-full">
        <Image
          src={"/images/img.webp"}
          alt="loading"
          width={800}
          height={450}
          className="rounded-lg w-full"
        />
      </div>
      </div>
      <div className="w-full"> 
        <span className="text-gray-600 font-medium group-hover:text-[#FF8C00]   pb-4 text-sm md:text-base">
          শহীদ পরিবার ও আহতদের কর্মসংস্থান নিয়ে যা বললেন উপদেষ্টা নাহিদ
        </span>
      </div>
    </Link>
  );
};
const NewsSingleCart = () => {
    return (
      <Link
        href="/some"
        className="p-2 pb-5 group flex gap-4  flex-col "
      //   key={i}
      >
       <div>
       <div className="aspect-video w-full">
          <Image
            src={"/images/img.webp"}
            alt="loading"
            width={800}
            height={450}
            className="rounded-lg w-full"
          />
        </div>
       </div>
        <div className="w-full"> 
          <h2 className="text-gray-600 group-hover:text-[#FF8C00]   pb-4 text-sm md:text-base">
            শহীদ পরিবার ও আহতদের কর্মসংস্থান নিয়ে যা বললেন উপদেষ্টা নাহিদ
          </h2>
        </div>
      </Link>
    );
  };
export{
    NewsCart,
    NewsSingleCart
}
