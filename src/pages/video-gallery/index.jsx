import SingelCart from "@/components/video-gallary/singelCart";
import VideoSmallCart from "@/components/video-gallary/smallCart";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
 
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
      <section className="space-y-4 py-5">
        <div>
          <Link
            className="hover:text-[#FF8C00] flex items-center gap-1 font-medium text-3xl  border-b my-5"
            href={"/"}
          >
            {" "}
            <div className="flex items-center gap-2 pb-1 border-b-4 border-[#FF8C00]">
              <span className="  font-medium text-2xl">Video</span>
              <MdKeyboardDoubleArrowRight className="text-[#FF8C00] text-3xl" />
            </div>
            {/* <div className="border-b  p-2"></div> */}
          </Link>

          <div className="grid grid-cols-12 gap-4 ">
            {/* First card - Spanning 2 columns */}
            <div className="col-span-6 border-b  ">
              <div>
              <SingelCart />
              </div>
              
            </div>

            {/* Second and Third cards - Normal size */}
            <div className="col-span-3 border-b">
              <VideoSmallCart />
            </div>
            <div className="col-span-3 border-b">
            <VideoSmallCart />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoGallery;
