import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestNews = () => {
  const newsData = [
     
    {
      title: "মহামারি শেষ, অর্থনীতি পুনরুদ্ধারে পদক্ষেপ",
      category: "জাতীয়",
      image: "/images/img.webp",
      description:
        "বিশ্ব স্বাস্থ্য সংস্থা জানিয়েছে যে, মহামারি থেকে বাংলাদেশের অর্থনীতি পুনরুদ্ধার হচ্ছে। সরকারের নানান উদ্যোগের ফলে পরিস্থিতি স্থিতিশীল হচ্ছে।",
      time: "10:15 AM, 12 February 2025",
    },
    {
      title: "জাতীয় সংসদে নতুন আইন পাশ",
      category: "জাতীয়",
      image: "/images/jamat.gif",
      description:
        "জাতীয় সংসদে সম্প্রতি একটি নতুন আইন পাশ হয়েছে যা দেশের আইনি কাঠামোতে গুরুত্বপূর্ণ পরিবর্তন আনবে।",
      time: "02:00 PM, 12 February 2025",
    },
    {
      title: "সারাদেশে শীতকালীন সহায়তা কার্যক্রম শুরু",
      category: "জাতীয়",
      image: "/images/man.gif",
      description:
        "সরকার সারাদেশে শীতকালীন সহায়তা প্রদান শুরু করেছে, বিশেষ করে দরিদ্র এলাকাগুলোর জন্য।",
      time: "11:00 AM, 12 February 2025",
    },
    {
      title: "বাংলাদেশে মহাসড়কে নতুন প্রকল্পের উদ্বোধন",
      category: "জাতীয়",
      image: "/images/jakir.gif",
      description:
        "বাংলাদেশ সরকার নতুন মহাসড়ক নির্মাণ প্রকল্পের উদ্বোধন করেছে, যা দেশের যোগাযোগ ব্যবস্থায় বৈপ্লবিক পরিবর্তন আনবে।",
      time: "09:00 AM, 12 February 2025",
    },
  
    // Economy
    {
      title: "বাংলাদেশের অর্থনীতি: প্রবৃদ্ধি অব্যাহত",
      category: "অর্থনীতি",
      image: "/images/julai1.gif",
      description:
        "বাংলাদেশের অর্থনীতি গত বছরে ৭% প্রবৃদ্ধি অর্জন করেছে এবং সরকার আগামী বছরে আরও উন্নতি আশা করছে।",
      time: "03:00 PM, 12 February 2025",
    },
    {
      title: "প্রধানমন্ত্রীর বক্তব্য: দেশ উন্নতির পথে",
      category: "জাতীয়",
      image: "/images/ronju.gif",
      description:
        "প্রধানমন্ত্রী শেখ হাসিনা বলেছেন, বাংলাদেশ দ্রুত উন্নতি করছে এবং এর উন্নতি বিশ্বের জন্য উদাহরণ হতে পারে।",
      time: "12:30 PM, 12 February 2025",
    },
    {
      title: "রপ্তানি আয়ে রেকর্ড সৃষ্টি",
      category: "অর্থনীতি",
      image: "/images/sirajul.gif",
      description:
        "বাংলাদেশের রপ্তানি আয়ে এবার নতুন রেকর্ড সৃষ্টি হয়েছে, যা দেশের অর্থনীতির জন্য অত্যন্ত গুরুত্বপূর্ণ সাফল্য।",
      time: "12:30 PM, 12 February 2025",
    },
    {
      title: "শিল্পমহল: নতুন কারখানার উদ্বোধন",
      category: "অর্থনীতি",
      image: "/images/man.gif",
      description:
        "দেশের শীর্ষ শিল্প প্রতিষ্ঠানগুলোর মধ্যে একটি নতুন কারখানার উদ্বোধন হয়েছে, যা বেকারত্ব কমাতে সহায়ক হবে।",
      time: "10:45 AM, 12 February 2025",
    },

    {
      title: "ডলার সংকটে ব্যবসায়ীদের দুর্দিন",
      category: "অর্থনীতি",
      image: "/images/muslime.gif",
      description:
        "বাংলাদেশের ডলার সংকটের কারণে ব্যবসায়ীরা আর্থিকভাবে বিপর্যস্ত, বিশেষত রপ্তানিকারকরা।",
      time: "07:15 AM, 12 February 2025",
    },
  
    // Education
    {
      title: "শিক্ষাব্যবস্থায় ডিজিটাল শিক্ষার নতুন দিগন্ত",
      category: "শিক্ষা",
      image: "/images/sosi.gif",
      description:
        "বাংলাদেশের শিক্ষাব্যবস্থায় ডিজিটাল শিক্ষার মাধ্যমে নতুন দিগন্ত উন্মোচিত হয়েছে, যা ছাত্রদের জন্য উন্নতি সাধন করবে।",
      time: "02:30 PM, 12 February 2025",
    },
    {
      title: "জাতীয় বিশ্ববিদ্যালয়ের ফলাফল প্রকাশিত",
      category: "শিক্ষা",
      image: "/images/img2.webpg",
      description:
        "জাতীয় বিশ্ববিদ্যালয়ের প্রথম বর্ষের ফলাফল প্রকাশিত হয়েছে, যেখানে সারা দেশ থেকে লক্ষাধিক ছাত্র অংশগ্রহণ করেছে।",
      time: "11:00 AM, 12 February 2025",
    },
    {
      title: "শিক্ষক নিয়োগের বিজ্ঞপ্তি প্রকাশ",
      category: "শিক্ষা",
      image: "/images/img3webpg",
      description:
        "বাংলাদেশ সরকার নতুন শিক্ষক নিয়োগের বিজ্ঞপ্তি প্রকাশ করেছে, যেখানে কয়েক হাজার শিক্ষক নিয়োগ দেওয়া হবে।",
      time: "09:30 AM, 12 February 2025",
    },
    {
      title: "মাধ্যমিকের নতুন সিলেবাস ঘোষণা",
      category: "শিক্ষা",
      image: "/images/img4webpg",
      description:
        "বাংলাদেশের মাধ্যমিক বিদ্যালয়ের জন্য নতুন সিলেবাস ঘোষণা করা হয়েছে, যা আগামী বছর থেকে কার্যকর হবে।",
      time: "08:15 AM, 12 February 2025",
    },
    {
      title: "বাংলাদেশের বিনিয়োগ পরিবেশ উন্নত হচ্ছে",
      category: "অর্থনীতি",
      image: "/images/man.gif",
      description:
        "বিশ্বব্যাংক জানিয়েছে যে, বাংলাদেশের বিনিয়োগ পরিবেশ আরও উন্নত হচ্ছে এবং আন্তর্জাতিক ব্যবসায়ীরা বাংলাদেশে বিনিয়োগে আগ্রহী।",
      time: "08:30 AM, 12 February 2025",
    },
    {
      title: "শিক্ষা খাতে নতুন বিনিয়োগের পরিকল্পনা",
      category: "শিক্ষা",
      image: "/images/img5webpg",
      description:
        "শিক্ষা খাতে নতুন বিনিয়োগের পরিকল্পনা হাতে নিয়েছে বাংলাদেশ সরকার, যাতে দেশের শিক্ষার মান উন্নত হয়।",
      time: "07:00 AM, 12 February 2025",
    },
  
    // Social
    {
      title: "দেশে নারী নির্যাতন বৃদ্ধির আশঙ্কা",
      category: "সামাজিক",
      image: "/images/img6webpg",
      description:
        "বাংলাদেশে নারী নির্যাতন ও সহিংসতা বৃদ্ধির আশঙ্কা প্রকাশ করেছে মানবাধিকার সংগঠনগুলি।",
      time: "03:45 PM, 12 February 2025",
    },
   
    {
      title: "বয়সভিত্তিক সহিংসতা বৃদ্ধি পেয়ে যাচ্ছে",
      category: "সামাজিক",
      image: "/images/img8webpg",
      description:
        "কিশোরদের মধ্যে সহিংসতা বৃদ্ধি পেয়েছে, এবং তা সামাজিক শান্তির জন্য একটি বড় সংকট সৃষ্টি করছে।",
      time: "10:00 AM, 12 February 2025",
    },
    {
      title: "বাংলাদেশে সড়ক দুর্ঘটনা নিয়ে উদ্বেগ",
      category: "সামাজিক",
      image: "/images/img9webpg",
      description:
        "বাংলাদেশে সড়ক দুর্ঘটনা রোধে নতুন ব্যবস্থা নেওয়ার জন্য সরকার চিন্তা করছে।",
      time: "09:45 AM, 12 February 2025",
    },
    {
      title: "অসহায় শিশুদের জন্য সরকারি সহায়তা বাড়ানো হবে",
      category: "সামাজিক",
      image: "/images/img0webpg",
      description:
        "বাংলাদেশ সরকার আগামী বছর থেকে অসহায় শিশুদের জন্য সরকারি সহায়তা বাড়ানোর ঘোষণা দিয়েছে।",
      time: "08:00 AM, 12 February 2025",
    },
  
    // Sports
    {
      title: "বাংলাদেশের প্রথম টেস্ট ম্যাচ জয়",
      category: "খেলা",
      image: "/images/sosi.gif",
      description:
        "বাংলাদেশ ক্রিকেট দল তাদের প্রথম টেস্ট ম্যাচে জয়লাভ করেছে, যা দেশের ইতিহাসে একটি গুরুত্বপূর্ণ মাইলফলক।",
      time: "03:30 PM, 12 February 2025",
    },
    {
      title: "দারিদ্র্য বিমোচনে নতুন সরকারী প্রকল্প",
      category: "সামাজিক",
      image: "/images/mahamudul.gif",
      description:
        "বাংলাদেশ সরকার নতুন দারিদ্র্য বিমোচন প্রকল্প চালু করেছে, যা দেশের দরিদ্র জনগণের জন্য সহায়ক হবে।",
      time: "12:00 PM, 12 February 2025",
    },
    {
      title: "বিশ্বকাপে বাংলাদেশ দুর্দান্ত জয় পেয়েছে",
      category: "খেলা",
      image: "/images/pahartoli.gif",
      description:
        "বিশ্বকাপে বাংলাদেশ দুর্দান্ত জয় পেয়েছে এবং ক্রিকেট বিশ্বে তাদের শক্তিশালী অবস্থান তৈরি করেছে।",
      time: "12:45 PM, 12 February 2025",
    },
    {
      title: "সালাহর নতুন রেকর্ড",
      category: "খেলা",
      image: "/images/younus.gif",
      description:
        "মোহাম্মদ সালাহ নতুন একটি রেকর্ড তৈরি করেছেন, যা ফুটবল জগতের জন্য একটি বড় অর্জন।",
      time: "11:30 AM, 12 February 2025",
    },
    {
      title: "বিশ্ব ফুটবল চ্যাম্পিয়নশিপে বাংলাদেশ",
      category: "খেলা",
      image: "/images/img4webpg",
      description:
        "বাংলাদেশ ফুটবল দল বিশ্ব ফুটবল চ্যাম্পিয়নশিপে অংশগ্রহণ করবে এবং আন্তর্জাতিক স্তরে তাদের জায়গা করে নেবে।",
      time: "10:00 AM, 12 February 2025",
    },
    {
      title: "টেনিস: ফেডারার অবসর নিলেন",
      category: "খেলা",
      image: "/images/img5webpg",
      description:
        "বিশ্বখ্যাত টেনিস খেলোয়াড় রজার ফেডারার অবসর নিলেন এবং তার ক্যারিয়ারের শেষ ম্যাচটি অত্যন্ত আবেগপূর্ণ ছিল।",
      time: "09:15 AM, 12 February 2025",
    },
  ];
  return (
    <div className="container-custom">
      <h1 className="text-[#FF8C00] text-xl py-5 ">  সর্বশেষ খবর</h1>
      <section className="grid grid-cols-2 gap-4 ">
        {newsData.map((news, i) => (
          <Link
            href="/detail/1"
            className="p-2 pb-5 group flex gap-4 border-b items-center"
            key={i}
          >
             <div className="aspect-video w-full">
              <Image
                src={news?.image}
                alt="loading"
                width={800}
                height={450}
                className="rounded-lg w-full"
              />
            </div>
            <div className="w-full">
              <span className="text-[#FF8C00] block pb-3 text-sm"> {news?.category}</span>
              <h2 className="text-gray-600 group-hover:text-[#FF8C00]   pb-4 text-base md:text-xl">
                {news?.title}
              </h2>
              <span className="text-gray-500 pb-3 hidden md:block">
                {news?.description}
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
