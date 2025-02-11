import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const VideoGallery = () => {
  const [categoryName, setCategroyName] = useState("স্বাস্থ্য");
  const subCategorydata = [
    {
      categoyr_id: 1,
      category_name: "শিক্ষা",
    },
    {
      categoyr_id: 1,
      category_name: "আইন ও বিচার",
    },
    {
      categoyr_id: 1,
      category_name: "স্বাস্থ্য",
    },
    {
      categoyr_id: 1,
      category_name: "কৃষি",
    },
    {
      categoyr_id: 1,
      category_name: "সংসদ",
    },
    {
      categoyr_id: 1,
      category_name: "লড়াইয়ের মঞ্চ",
    },
    {
      categoyr_id: 1,
      category_name: "পরিবেশ",
    },
  ];
  return (
    <div className="container-custom">
      <section>
        <h1 className="text-[#FF8C00] text-xl py-5 ">{categoryName}</h1>
        <div className="flex gap-4 pb-6 flex-wrap">
          {subCategorydata.map((sub_cat, index) => (
            <div
              className="flex gap-2 items-center hover:text-[#FF8C00] cursor-pointer "
              key={sub_cat?.categoyr_id}
              onClick={() => setCategroyName(sub_cat?.category_name)}
            >
              <span className="p-0.5 bg-[#FF8C00] rounded-full block "></span>
              <span>{sub_cat?.category_name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Add your video  gallery*/}
      <section className="grid grid-cols-2 gap-4 ">
        <Link
          href={"/welcome"}
          className="w-full  group aspect-video"
        >
          <Image
            src="/category_image/category.webp"
            width={800}
            height={450}
            className="w-full h-full aspect-video"
          />
          <p className="group-hover:text-[#FF8C00] pt-2 px-2">
            জুলাই শহীদ পরিবারের চাকরি নতুন কোটা হিসেবে যুক্ত হবে না: উপদেষ্টা
            নাহিদ
          </p>
        </Link>
        <div className="w-1/2">
          {[1, 2].map((news, ind) => (
            <Link href={"/welcome"} className="w-1/2 bg-gray-50 group aspect-video">
              <Image
                src="/category_image/category.webp"
                width={800}
                height={450}
                className="w-full  aspect-video"
              />
              <p className="group-hover:text-[#FF8C00] pt-2 px-2">
                জুলাই শহীদ পরিবারের চাকরি ন 
              </p>
             
            </Link>
          ))}
        </div>
      </section>
      {/* Add your video  gallery*/}
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/QyRRrKQP7fo?si=4uFRV9ynIw1xYJ5u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
  );
};

export default VideoGallery;
