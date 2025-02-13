import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "আমাদের মস্তিষ্কে রিল-শর্টসের কতটা প্রভাব ফেলেছে জানেন?",
    description:
      "বর্তমানে এমন মানুষ কি খুঁজে পাওয়া যাবে যে, সোশ্যাল মিডিয়া ফেসবুক, ইনস্টাগ্রাম বা ইউটিউবে রিল বা শর্টস দেখা ছাড়া একটি দিন কাটিয়েছেন?",
    image: "/lifestyle/1.webp",
    time: "১১ ফেব্রুয়ারি ২০২৫, ০২:৩৬ পিএম",
  },
];

const sidebarArticles = [
  {
    id: 2,
    title: "আজ ‘প্রমিস ডে’, প্রতিজ্ঞা করার দিন",
    image: "/lifestyle/3.webp",
  },
  { id: 3, title: "হেসব কারণে দেখে বাঁধে যৌনরোগ", image: "/lifestyle/4.jpeg", },
  {
    id: 4,
    title: "শিশুরা হেসব কারণে ক্যানসারে আক্রান্ত হয়",
    image: "/lifestyle/5.jpeg",
  },
  {
    id: 5,
    title: "জরায়ু ক্যানসারে আক্রান্ত কি না বুঝে নিন ৯ লক্ষণ",
    image: "/lifestyle/6.jpeg",
  },
];

const rightFeature = {
  id: 6,
  title: "নারী নাকি পুরুষ বেশি কথা বলেন?",
  image: "/lifestyle/2.jpg",
};

export const NewsLayout = () => {
  return (
    <div className="container mx-auto my-6 border-b pb-5">
      {/* Category Header */}
      <div className="flex items-center gap-2 text-lg font-bold mb-4">
        <span className="bg-red-500 text-white px-3 py-1 rounded">
          লাইফস্টাইল
        </span>
        <FaChevronDown className="text-red-500" />
      </div>

      <div className="flex gap-2 flex-col md:flex-row">
        {/* Main News Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left - Featured Article */}
          <div className="md:col-span-2 border-r pe-4">
            {articles.map((article) => (
              <Link key={article.id} href="#" className="block">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={350}
                  className="rounded-lg w-full object-cover"
                />
                <h2 className="mt-3 text-xl font-bold hover:text-red-500">
                  {article.title}
                </h2>
                <p className="text-gray-600 mt-1">{article.description}</p>
                <span className="text-sm text-gray-400">{article.time}</span>
              </Link>
            ))}
          </div>

          {/* Right - Sidebar Articles */}
          <div className="space-y-4 pe-4 border-r">
            {sidebarArticles.map((article) => (
              <Link
                key={article.id}
                href="#"
                className="flex items-center border-b pb-4 gap-3"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={120}
                  height={80}
                  className="rounded-lg w-[120px] h-[80px] object-cover"
                />
                <p className="text-sm font-medium hover:text-red-500">
                  {article.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Right Feature Article */}
        <div>
          <Link href="#" className="flex flex-col gap-4 items-center">
            <Image
              src={rightFeature.image}
              alt={rightFeature.title}
              width={300}
              height={180}
              className="aspect-video object-cover"
            />
            <p className="text-lg font-semibold hover:text-red-500">
              {rightFeature.title}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Entertainment = () => {
  const eterTainmentData = [
    {
      id: 1,
      image:"/entertainment/3.webp",
      title: "রামচরণের দাম্পত্য জীবন নিয়ে বাবা চিরঞ্জীবীর মন্তব্য, বিতর্কের ঝড়",
      description:""
    },
    {
      id: 1,
      image:"/entertainment/4.jpg",
      title: "হামলার পর প্রথমবার সাংবাদিকদের যা জানালেন সাইফ",
      description:""
    },
    
  ]
  const secondData = [
    {
      id: 1,
      image:"/entertainment/5.webp",
      title: "আমি বাংলায় গান গাই’ গানের শিল্পীর শারীরিক অবস্থার অবনতি",
      description:""
    },
    {
      id: 2,
      image:"/entertainment/6.png",
      title: "গল্প এখন হয়ে গেছে কনটেন্ট: আবুল হায়াত",
      description:""
    },
    {
      id: 3,
      image:"/entertainment/7.jpg",
      title: "বিমান থেকে স্টান্ট করতে গিয়ে ‘অবচেতন’ দশা টম ক্রুজের",
      description:""
    } 
   
  ]
  return (
    <div className="bg-green-100 p-2">
      <div className="flex items-center gap-2 text-lg font-bold  ">
        <span className="bg-red-500 text-white px-3 py-1 rounded">বিনোদন </span>
        <FaChevronDown className="text-red-500" />
      </div>
      <div className=" py-4 grid grid-cols-1 md:grid-cols-3 gap-4 border-b-">
        {/* Main News Section */}

        <div className="md:col-span-2 border-e pe-2  ">
        <div className="relative  mb-3  ">
            <Image height={450} width={800}
              src="/entertainment/1.jpeg"
              alt="Main News"
            
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="border-b py-2">
          <h3 className="text-lg font-semibold">৬ তারকার নাটকের দাম</h3>
          <p className="text-gray-700 mt-2">
            শাহরুখ খানসহ বড় তারকাদের নাটকের দাম নিয়ে বিস্তারিত বড় তারকাদের
            নাটকের দাম নিয়ে বিস্তারিত বড় তারকাদের নাটকের দাম নিয়ে বিস্তারিতবড়
            তারকাদের নাটকের দাম নিয়ে বিস্তারিতবড় তারকাদের নাটকের দাম নিয়ে
            বিস্তারিতবড় তারকাদের নাটকের দাম নিয়ে বিস্তারিতবড় তারকাদের নাটকের দাম
            নিয়ে বিস্তারিতবড় তারকাদের নাটকের দাম নিয়ে বিস্তারিতবড় তারকাদের
            নাটকের দাম নিয়ে বিস্তারিত...
          </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className=" rounded-md">
          <div className="space-y-4">
            {eterTainmentData.map((data, index) => (
              <div key={index} className="grid grid-cols-1 gap-2 border-b pb-2 ">
                <Image
                  src= {data?.image}
                  width={800}
                  height={450}
                  className="w-full"
                  alt="News"
                />
                <div>
                  <h4 className="font-medium">{data?.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom News Cards */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondData.map((item, index) => (
            <div key={index} className=" p-3 flex gap-2 border-e aspect-video ">
              <Image
                src= {item?.image}
                width={800}
                height={450}
                className="aspect-video w-1/2 h-[250px]"
                alt="News"
              />
              <h4 className="text-base mt-2 w-1/2">
                 {item?.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
