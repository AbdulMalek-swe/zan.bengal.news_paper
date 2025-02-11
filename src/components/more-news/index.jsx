import Image from "next/image";
import { FaRegClock } from "react-icons/fa";

export default function MoreNews() {
  const newsItems = [
    {
      id: 1,
      title: "মোহাম্মদপুরে বিশেষ অভিযানে ৪৮ জন গ্রেপ্তার",
      image: "/images/img.webp",
      time: "আপডেট: ১১ ফেব্রুয়ারি ২০২৫ | ১৬:১৬",
    },
    {
      id: 2,
      title: "আধুনিক বিদ্যুতের পুরাতন চিহ্ন দিতে বলছে বাংলাদেশ",
      image: "/images/img.webp",
      time: "আপডেট: ১১ ফেব্রুয়ারি ২০২৫ | ১৬:১২",
    },
    {
      id: 3,
      title: "ডিসেম্বর মাস ধরে জাতীয় নির্বাচনের প্রস্তুতি নেওয়া হচ্ছে: ইসি সানজান",
      image: "/images/img.webp",
      time: "আপডেট: ১১ ফেব্রুয়ারি ২০২৫ | ১৪:৪৮",
    },
    {
      id: 4,
      title: "আজও শাহবাগে প্রাথমিকের নিয়োগ বাতিল হওয়া প্রার্থীরা",
      image: "/images/img.webp",
      time: "আপডেট: ১১ ফেব্রুয়ারি ২০২৫ | ১৪:৩৮",
    },
  ];

  return (
    <div className="my-6">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2 flex items-center">
        আরও পড়ুন <span className="text-orange-500 ml-2">●</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((news) => (
          <div key={news.id} className="flex items-start gap-3 border-b pb-2">
            <Image
              src={news.image}
              alt={news.title}
              width={140}
              height={80}
              className="rounded-lg object-cover"
            />
           <div className="flex flex-col justify-between h-full">
  <p className="text-sm font-medium">{news.title}</p>
  <p className="text-xs hidden  text-gray-500 md:flex items-center gap-1 mt-auto">
    <FaRegClock /> {news.time}
  </p>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}
