import FacebookPage from "@/components/faccebook-page/facebookPage";
import HeadlineSlider from "@/components/headline";
import { Entertainment, NewsLayout } from "@/components/news-layout";
import VideoSection from "@/components/youtube-video";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const newsItems = [
    {
      author: "সিরাজুল ইসলাম চৌধুরী",
      title: "রাষ্ট্রভাষা, রাষ্ট্রের ভাষা ও গণতন্ত্র",
      description: "বুলডোজার শোভাযাত্রা, আইনের শাসন ও নির্বিকার সরকার",
      image: "/images/sirajul.GIF",
    },
    {
      author: "হাসান জাকির",
      title: "‘নিখোঁজ’ সুবা, টিকটক প্রেম এবং শিশুর সুরক্ষা",
      description: "কোনো অনুজ্জ্বল নির্বাচন বিচ্ছিন্ন...",
      image: "/images/jakir.GIF",
    },
  ];
  const mainnews = [
    {
      author: "মাহবুব আজিজ",
      title: "জুলাই গণহত্যার মূল হোতারা চিহ্নিত",
      description: "জাতিসংঘের ফ্যাক্ট ফাইন্ডিং মিশনের চূড়ান্ত প্রতিবেদনে জুলাই গণহত্যায় জড়িত মূল হোতাদের চিহ্নিত করা হয়েছে। এই রিপোর্টটি আজ বাংলাদেশ সময় বেলা আড়াইটায় জেনেভায় অবস্থিত জাতিসংঘ কার্যালয় থেকে প্রকাশ করা হবে।",
      image: "/images/julai1.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "জুলাই গণহত্যা তদন্ত রিপোর্ট চূড়ান্ত পর্যায়ে",
      description: "জুলাই গণহত্যা এবং ২০১৩ সালের হেফাজত গণহত্যার ঘটনায় পতিত প্রধানমন্ত্রী শেখ হাসিনাসহ কয়েক ডজন ব্যক্তিকে অভিযুক্ত করে তদন্ত প্রতিবেদন চূড়ান্ত পর্যায়ে রয়েছে । মামলাগুলোর প্রায় সব আলামত ও ডকুমেন্ট ইতোমধ্যে আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের তদন্ত সংস্থার হাতে এসেছে।",
      image: "/images/julaihotta.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "গিরগিটি সাংবাদিকতা বিতর্ক",
      description: "গত বুধবার ‘গিরগিটি সাংবাদিকতা’ শিরোনামে লেখা মন্তব্য-প্রতিবেদনে বাংলাদেশের কজন ঘোরতর ভারত ও আওয়ামীপন্থি সাংবাদিক ও সম্পাদকের রং বদলানো এবং বিএনপির পক্ষপুটে আশ্রয় নেওয়ার প্রচেষ্টার কথা উল্লেখ করেছিলাম।",
      image: "/images/mahmudul.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "আজ আয়নাঘর পরিদর্শনে যাবেন ড. ইউনূস",
      description: "অন্তর্বর্তী সরকারের প্রধান উপদেষ্টা ড. মুহাম্মদ ইউনূস আজ বুধবার গুমের আয়নাঘর পরিদর্শনে যাচ্ছেন। তার সঙ্গে থাকবেন বিবিসি, আলজাজিরাসহ আন্তর্জাতিক সংবাদমাধ্যমের সাংবাদিকরা।",
      image: "/images/younus.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "হাসিনার বিবৃতি নিয়ে আমরা ফাটা বাঁশে আছি : শশী থারুর",
      description: "শেখ হাসিনার সাম্প্রতিক মন্তব্য দ্বিপক্ষীয় বিষয়গুলোকে জটিল করে তুলেছে বলে স্বীকার করেছেন ভারতের বিরোধী কংগ্রেসদলীয় আইনপ্রণেতা শশী থারুর।",
      image: "/images/man.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "ভারতে মুসলিমবিদ্বেষ বেড়েছে ৭৪ শতাংশ",
      description: "২০২৪ সালে ভারতে মুসলিমবিদ্বেষ বেড়েছে। বছরটিতে ভারতের সংখ্যালঘুদের প্রতি, বিশেষ করে মুসলমানদের বিরুদ্ধে বিদ্বেষমূলক বক্তব্যের (হেট স্পিস) ঘটনা ৭৪ শতাংশ বেড়েছে।",
      image: "/images/muslime.GIF",
    },
  ];
  const leadnews = [
    {
      author: "মাহবুব আজিজ",
      title: "শেয়ারবাজারে ঋণসুবিধা কাঠামোতে বড় পরিবর্তনের সুপারিশ",
      description: "শেয়ারবাজারে মার্জিন ঋণসুবিধার নিয়মকানুন সংস্কারের সুপারিশ করেছে পুঁজিবাজার সংস্কারসংক্রান্ত টাস্কফোর্স। সুপারিশ অনুযায়ী, যেসব বিনিয়োগকারীর মোট বিনিয়োগ ১০ লাখ টাকার কম",
      image: "/images/logo.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "গাজায় আবারও যুদ্ধ শুরুর হুমকি নেতানিয়াহুর",
      description: "গাজায় আবারও যুদ্ধ শুরুর হুমকি দিয়েছেন ইসরায়েলের প্রধানমন্ত্রী বেঞ্জামিন নেতানিয়াহু। ফিলিস্তিনের স্বাধীনতাকামী সশস্ত্র গোষ্ঠী হামাস বন্দিদের মুক্তি ‘অনির্দিষ্টকালের’ জন্য স্থগিত",
      image: "/images/netaniahu.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "‘তৌহিদী জনতাকে’ হুমকি দিইনি, সতর্ক করেছি",
      description: "অন্তর্বর্তী সরকারের উপদেষ্টা মাহফুজ আলম বলেছেন, তৌহিদী জনতা নামে আপনারা যারা নিজেদের পরিচয় দেন, তাদের আমি হুমকি দিইনি, সতর্ক করেছি।",
      image: "/images/mahfuz.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "ওসি-এসআইসহ ৮ জনের বিরুদ্ধে চাঁদাবাজির মামলা",
      description: "চট্টগ্রামের পাহাড়তলী থানার ওসি ও পুলিশের তিন এসআইসহ মোট ৮ জনের বিরুদ্ধে চাঁদাবাজির অভিযোগে মামলা করা হয়েছে।",
      image: "/images/pahartoli.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "হাসিনা আবারও মানুষ হত্যার নির্দেশ দিচ্ছে: ইশরাক",
      description: "গণহত্যা করে আওয়ামী লীগের নেতাকর্মীদের মধ্যে কোনো ধরনের অনুশোচনা নেই, উল্টো বিদেশে বসে খুনি ফ্যাসিস্ট শেখ হাসিনা দেশকে অস্থিতিশীল করতে আবারো মানুষ হত্যার নির্দেশ দিচ্ছে বলে মন্তব্য করেছেন বিএনপির আন্তর্জাতিক বিষয়ক কমিটির সদস্য ইঞ্জিনিয়ার ইশরাক হোসেন।",
      image: "/images/sosi.GIF",
    },
    {
      author: "সাক্ষাৎকার নেয়েছেন",
      title: "সব আসনেই নির্বাচনের প্রস্তুতি জামায়াতের",
      description: "ছাত্র-জনতার গণঅভ্যুত্থানে ফ্যাসিস্ট আওয়ামী লীগ সরকারের পতনের পর ৬ মাস ধরে দেশ চালাচ্ছে অন্তর্বর্তী সরকার। জুলাই বিপ্লবে গণহত্যার পাশাপাশি বিগত সাড়ে ১৫ বছরের দুঃশাসনে জড়িতদের বিচার এবং রাষ্ট্রের বিভিন্ন ক্ষেত্রে প্রয়োজনীয় সংস্কার শেষে দ্রুত নির্বাচন প্রত্যাশা করছে দেশের রাজনৈতিক দলগুলো।",
      image: "/images/jamat.GIF",
    },
  ];

  const text = `
  সংশ্লিষ্ট সূত্রে জানা গেছে, পূর্বাচল প্রকল্পে ক্ষমতাচ্যুত প্রধানমন্ত্রী শেখ হাসিনা পরিবারের ৬০ কাঠা প্লট বরাদ্দে অনিয়ম ও দুর্নীতির ঘটনা তদন্ত করছে দুদক। ক্ষমতার অপব্যবহার এবং অনিয়ম করে ১০ কাঠার ছয়টি প্লট হাসিনার পরিবারের জন্য বরাদ্দ করা হয়। বরাদ্দপ্রাপ্ত অন্যরা হলেনÑ শেখ হাসিনার বোন শেখ রেহানা, ছেলে সজিব ওয়াজেদ জয়, মেয়ে সায়মা ওয়াজেদ পুতুল, ভাগনে রাদওয়ান মুজিব সিদ্দিক ও ভাগনি আজমিনা সিদ্দিক।
  `;
  

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
              দুদকে পাঠানো রাজউক চেয়ারম্যানের চিঠি নিয়ে তোলপাড়
              </h1>
              <p className="mt-2 text-gray-700">
                {text.length > 145 ? text.slice(0, 145) + "..." : text}
              </p>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-[350px] h-[200px] flex-shrink-0">
              <Image
                src="/images/dudok.GIF"
                alt="Main News"
                width={350}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Grid News */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            {mainnews.map((item, index) => (
              <Link href={"/detail/1"} key={index} className="p-3 flex gap-2 border-b">
                <Image
                  src={item?.image}
                  alt="News 1"
                  width={120}
                  height={75}
                  className="w-[120px] h-[75px] object-cover"
                />
                <h3 className="font-bold mt-2 flex-1">
                {item?.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Middle News Section */}
        <div className="flex flex-col lg:w-1/4 w-full self-stretch">
          {leadnews.map((item, index) => (
            <Link href={"/detail/1"} key={index} className="border-b p-3 flex items-stretch gap-2">
              <h3 className="font-bold mt-2 flex-1">
                {item?.title}
              </h3>
              <div className="w-[115px] h-[75px] flex-shrink-0">
                <Image
                  src={item?.image}
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
      <Entertainment/>
    </main>
  );
}
