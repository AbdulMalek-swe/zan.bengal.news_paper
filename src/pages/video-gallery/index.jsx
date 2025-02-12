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
 

  const onPlay = () => setPlaying(true);
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
        <div className="bg-gray-100 ">
          <Link
            href={"/welcome"}
            className="w-full  group aspect-video    block"
          >
            <Image
              src="/category_image/category.webp"
              width={800}
              height={450}
              className="  "
            />
            <p className="group-hover:text-[#FF8C00] pt-2 px-2">
              জুলাই শহীদ পরিবারের চাকরি নতুন কোটা হিসেবে যুক্ত হবে না: উপদেষ্টা
              নাহিদ
            </p>
          </Link>
        </div>

        <div className="w-1/2  ">
          <div className="space-y-2">
            {[1, 2].map((news, ind) => (
              <Link href={"/welcome"} className=" block bg-gray-100  group  ">
                <Image
                  src="/category_image/category.webp"
                  width={800}
                  height={450}
                  className=" "
                />
                <p className="group-hover:text-[#FF8C00]   py-2 px-2 ">
                  জুলাই শহীদ পরিবারের চাকরি ন
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="relative w-full max-w-2xl">
      {/* YouTube Video */}
       
    </div>
    </div>
  );
};

export default VideoGallery;
