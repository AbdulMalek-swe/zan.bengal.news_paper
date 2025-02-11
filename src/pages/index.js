import Image from "next/image";

export default function Home() {
  const newsItems = [
    {
      author: "মাহবুব আজিজ",
      title: "উচ্চারণের বিপরীতে",
      description: "বুলডোজার শোভাযাত্রা, আইনের শাসন ও নির্বিকার সরকার",
      image: "/images/img.webp",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "সাক্ষাৎকার : খন্দকার মোশাররফ হোসেন",
      description: "কোনো অনুজ্জ্বল নির্বাচন বিচ্ছিন্ন...",
      image: "/images/img.webp",
    },
    {
      author: "সাক্ষাৎকার রহমান মানিক",
      title: "শিক্ষাপ্রণ | ছাত্র সংসদ",
      description: "নির্বাচনফলে ছাত্র রাজনীতি বরাবর সুপ্রাসঙ্গিক!",
      image: "/images/img.webp",
    },
  ];

  const text =
    "সারাদেশে চলমান অপারেশন ডেভিল হান্টের কথা উল্লেখ করে স্বরাষ্ট্র উপদেষ্টা লেফটেন্যান্ট জেনারেল (অব.) মো. জাহাঙ্গীর আলম চৌধুরী বলেন, কোনো";

  return (
    <main className="container-custom">
      <div className="flex gap-4 md:flex-row flex-col items-stretch">
        {/* Main News Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Headline News */}
          <div className="flex border-b pb-4 flex-col md:flex-row gap-4 items-stretch">
            {/* Text Container */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <h1 className="text-xl font-bold text-yellow-600">
                দুর্নীতি সূচকে দুই ধাপ পেছাল বাংলাদেশ
              </h1>
              <p className="mt-2 text-gray-700">
                {text.length > 145 ? text.slice(0, 145) + "..." : text}
              </p>
            </div>

            {/* Image Container */}
            <div className="w-[350px] h-[200px] flex-shrink-0">
              <Image
                src="/images/img.webp"
                alt="Main News"
                width={350}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Grid News */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="border p-3 flex gap-2 items-stretch">
                <Image
                  src="/images/img.webp"
                  alt="News 1"
                  width={120}
                  height={75}
                  className="w-[120px] h-[75px] rounded-lg object-cover"
                />
                <h3 className="font-bold mt-2 flex-1">
                  গাজীপুরে অপারেশন ডেল্টা হ্যান্ড অভিযানে আটক আরও ৮১
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Middle News Section */}
        <div className="flex flex-col space-y-2 w-[300px]">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="border p-3 rounded-lg flex items-stretch gap-2">
              <h3 className="font-bold mt-2 flex-1">
                ধর্মসভায় অতিথি করা নিয়ে বিরোধে বিএনপি কর্মীকে কুপিয়ে হত্যা
              </h3>
              <div className="w-[115px] h-[75px] flex-shrink-0">
                <Image
                  src="/images/img.webp"
                  alt="News Middle 1"
                  width={115}
                  height={75}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-[350px] border-t-2 border-yellow-500 py-3">
          <h2 className="text-xl font-bold border-b pb-2">
            সম্পাদকীয় ও মতামত
          </h2>
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="flex gap-4 border-b pb-4 items-stretch">
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-gray-500">{item.author}</p>
                  <h3 className="font-bold text-red-600">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                <div className="w-[90px] h-[90px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={90}
                    height={90}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
