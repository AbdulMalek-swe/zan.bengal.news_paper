import FacebookPage from "@/components/faccebook-page/facebookPage";
import HeadlineSlider from "@/components/headline";
import NewsLayout from "@/components/news-layout";
import VideoSection from "@/components/youtube-video";
import Image from "next/image";
import Link from "next/link";

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
  ];

  const text =
    "সারাদেশে চলমান অপারেশন ডেভিল হান্টের কথা উল্লেখ করে স্বরাষ্ট্র উপদেষ্টা লেফটেন্যান্ট জেনারেল (অব.) মো. জাহাঙ্গীর আলম চৌধুরী বলেন, কোনো";

  return (
    <main className="container-custom">
      <HeadlineSlider/>
      <div className="flex flex-col lg:flex-row gap-4 border-b h-full">
        {/* Main News Section */}
        <div className="flex-1 flex flex-col gap-4 h-full">
          {/* Headline News */}
          <Link href={'detail/1'} className="border-b pb-4 flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="flex-1 flex flex-col justify-between h-full">
              <h1 className="text-xl font-bold text-yellow-600">
                দুর্নীতি সূচকে দুই ধাপ পেছাল বাংলাদেশ
              </h1>
              <p className="mt-2 text-gray-700">
                {text.length > 145 ? text.slice(0, 145) + "..." : text}
              </p>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-[350px] h-[200px] flex-shrink-0">
              <Image
                src="/images/img.webp"
                alt="Main News"
                width={350}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Grid News */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            {[...Array(6)].map((_, index) => (
              <Link href={'detail/1'} key={index} className="p-3 flex gap-2 border-b">
                <Image
                  src="/images/img.webp"
                  alt="News 1"
                  width={120}
                  height={75}
                  className="w-[120px] h-[75px] object-cover"
                />
                <h3 className="font-bold mt-2 flex-1">
                  গাজীপুরে অপারেশন ডেল্টা হ্যান্ড অভিযানে আটক আরও ৮১
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Middle News Section */}
        <div className="flex flex-col lg:w-1/4 w-full self-stretch">
          {[...Array(6)].map((_, index) => (
            <Link href={'detail/1'} key={index} className="border-b p-3 flex items-stretch gap-2">
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
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        {/* facebook use here  */}
        <div >

          <FacebookPage/>
        </div>

      </div>

      {/* video section */}
      <VideoSection/>


      {/* Category section */}
      <NewsLayout/>
    </main>
  );
}
