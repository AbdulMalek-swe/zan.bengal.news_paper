import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const CategoryAllNews = () => {
  //        লড়াইয়ের মঞ্চ
  const [categoryName,setCategroyName] = useState("স্বাস্থ্য")
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
    <div className="space-y-8 pb-4">
      {/* news header section  */}
      <section>
        <h1 className="text-[#FF8C00] text-xl py-5 ">{categoryName}</h1>
        <div className="flex gap-4 pb-6">
          {subCategorydata.map((sub_cat, index) => (
            <div
              className="flex gap-1 items-center hover:text-[#FF8C00] cursor-pointer "
              key={sub_cat?.categoyr_id}
              onClick={() => setCategroyName(sub_cat?.category_name)}
            >
              <span className="p-0.5 bg-[#FF8C00] rounded-full block "></span>
              <span>{sub_cat?.category_name}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4 group">
          <div className="w-4/12">
            <Image
              src="/category_image/category.webp"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
          <div className="w-4/12">
            <h1 className="text-[30px] group-hover:text-[#ff8c00b0] ">
              ডিসেম্বর মাস ধরে জাতীয় নির্বাচনের প্রস্তুতি নেওয়া হচ্ছে: ইসি
              সানাউল্লাহ
            </h1>
            <div className="flex flex-col gap-2 text-base">
              <span className="text-[#555A70]">
                চলতি বছরের ডিসেম্বর মাস ধরে জাতীয় সংসদ নির্বাচনের প্রস্তুতি
                নেওয়া হচ্ছে বলে জানিয়েছেন নির্বাচন কমিশনার আবুল ফজল মো.
                সানাউল্লাহ। মঙ্গলবার প্রধান নির্বাচন কমিশনার (সিইসি) এ এম এম
                নাসির উদ্দিনের সঙ্গে ইউএনডিপির প্রতিনিধিসহ ১৮টি উন্নয়ন সহযোগী
                দেশের রাষ্ট্রদূতের বৈঠক শেষে সাংবাদিকদের তিনি এ কথা বলেন।...
              </span>
              <span className="text-[#555a70ea]">
                আপডেটঃ ১১ ফেব্রুয়ারি ২০২৫ | ১৪:২৪
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* news cart  */}
      <section className="flex gap-4 ">
        {[1, 3, 4, 5].map((news, i) => (
          <Link
            href="/some"
            className="p-2 bg-gray-100 space-y-6 group"
            key={i}
          >
            <Image
              src={"/images/img.webp"}
              alt="loading"
              width={300}
              height={300}
              className="rounded-lg w-full"
            />
            <h2 className="text-gray-600 group-hover:text-[#FF8C00] text-xl pb-4">
              শহীদ পরিবার ও আহতদের কর্মসংস্থান নিয়ে যা বললেন উপদেষ্টা নাহিদ
            </h2>
            <span className="text-gray-500">
              আপডেটঃ ১১ ফেব্রুয়ারি ২০২৫ | ১৪:২৪
            </span>
          </Link>
        ))}
        {/* <NewsCart/> */}
      </section>
      {/* vertical news card section
       */}
      <section className="flex gap-4 flex-col items-center  ">
        {[1, 3, 4, 5].map((news, i) => (
          <Link
            href="/some"
            className="p-2 pb-5   group w-2/4 flex border-b items-center"
            key={i}
          >
            <div>
              <h2 className="text-gray-600 group-hover:text-[#FF8C00] text-xl pb-4">
                শহীদ পরিবার ও আহতদের কর্মসংস্থান নিয়ে যা বললেন উপদেষ্টা নাহিদ
              </h2>
              <span className="text-gray-500 pb-3 block">
                জুলাই গণঅভ্যুত্থানে ছাত্র-জনতা শহীদ পরিবার ও আহতদের কর্মসংস্থান
                নিয়ে কথা বলেছেন অন্তর্বর্তী সরকারের তথ্য ও সম্প্রচার
                মন্ত্রণালয়ের উপদেষ্টা
              </span>
              <span className="text-gray-500">
                আপডেটঃ ১১ ফেব্রুয়ারি ২০২৫ | ১৪:২৪
              </span>
            </div>
            <Image
              src={"/images/img.webp"}
              alt="loading"
              width={300}
              height={300}
              className="rounded-lg w-full"
            />
          </Link>
        ))}
        <button className="px-4 py-2  bg-[#FF8C00] rounded-lg">আরও</button>
        {/* <NewsCart/> */}
      </section>
    </div>
  );
};

export default CategoryAllNews;
