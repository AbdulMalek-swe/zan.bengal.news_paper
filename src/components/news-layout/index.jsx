import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "শিশুর ডায়াপারের খরচ কমানোর উপায়",
    description:
      "বাড়ির নবীনতম সদস্যটির বয়স যতই কম হোক না কেন, তার জন্যও থাকে আলাদা খরচ। শহুরে মা-বাবার একটা বড় খরচ হয় ডায়াপার কিনতে। আধুনিক জীবনধারায় শিশুর জন্য প্রয়োজনীয় এক অনুষঙ্গ ডায়াপার।",
    image: "/images/baby.GIF",
    time: "১১ ফেব্রুয়ারি ২০২৫, ০২:৩৬ পিএম",
  },
];

const sidebarArticles = [
  { id: 2, title: "আজ ‘প্রমিস ডে’, প্রতিজ্ঞা করার দিন", image: "/images/promise.GIF" },
  { id: 3, title: "হেসব কারণে দেখে বাঁধে যৌনরোগ", image: "/images/rog.GIF" },
  { id: 4, title: "শিশুরা হেসব কারণে ক্যানসারে আক্রান্ত হয়", image: "/images/babyy.GIF" },
  { id: 5, title: "নারী নাকি পুরুষ বেশি কথা বলেন?", image: "/images/kotha.GIF" },
];

const rightFeature = {
  id: 6,
  title: "আমাদের মস্তিষ্কে রিল-শর্টসের কতটা প্রভাব ফেলে জানেন?",
  image: "/images/rells.GIF",
};

export const NewsLayout = () => {
  return (
    <div className="container mx-auto my-6 border-b pb-5">
      {/* Category Header */}
      <div className="flex items-center gap-2 text-lg font-bold mb-4">
        <span className="bg-red-500 text-white px-3 py-1 rounded">লাইফস্টাইল</span>
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
                <h2 className="mt-3 text-xl font-bold hover:text-red-500">{article.title}</h2>
                <p className="text-gray-600 mt-1">{article.description}</p>
                <span className="text-sm text-gray-400">{article.time}</span>
              </Link>
            ))}
          </div>

          {/* Right - Sidebar Articles */}
          <div className="space-y-4 pe-4 border-r">
            {sidebarArticles.map((article) => (
              <Link key={article.id} href="#" className="flex items-center border-b pb-4 gap-3">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={120}
                  height={80}
                  className="rounded-lg w-[120px] h-[80px] object-cover"
                />
                <p className="text-sm font-medium hover:text-red-500">{article.title}</p>
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
            <p className="text-lg font-semibold hover:text-red-500">{rightFeature.title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Entertainment = () => {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main News Section */}
      
      <div className="md:col-span-2 p-4 rounded-md">
      <div className="flex items-center gap-2 text-lg font-bold mb-4">
        <span className="bg-red-500 text-white px-3 py-1 rounded">বিনোদন</span>
        <FaChevronDown className="text-red-500" />
      </div>
        <div className="relative w-full h-96 mb-3">
          <Image
            src="/images/sakib.GIF"
            alt="Main News"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold">৬ তারকার নাটকের দাম</h3>
        <p className="text-gray-700 mt-2">শাহরুখ খানসহ বড় তারকাদের নাটকের দাম নিয়ে বিস্তারিত...</p>
      </div>

      {/* Sidebar */}
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-bold mb-3">Trending</h2>
        <div className="space-y-4">
          <div className="flex space-x-3">
            <Image src="/images/asif.GIF" width={80} height={80} className="rounded-md" alt="News" />
            <div>
              <h4 className="font-medium">অনেকদিন পর বেক্কল হয়ে গেলাম: আসিফ</h4>
            </div>
          </div>
          <div className="flex space-x-3">
            <Image src="/images/bubli.GIF" width={80} height={80} className="rounded-md" alt="News" />
            <div>
              <h4 className="font-medium">অহংকার করা মোটেই ঠিক নয়: বুবলী</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom News Cards */}
      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-3 rounded-md">
          <Image src="/images/card1.GIF" width={150} height={100} className="rounded-md" alt="News" />
          <h4 className="text-sm mt-2">'৬ তারকার নাচের দাম'</h4>
        </div>
        <div className="bg-white shadow p-3 rounded-md">
          <Image src="/images/shirt.GIF" width={150} height={100} className="rounded-md" alt="News" />
          <h4 className="text-sm mt-2">গানে কিমারন সাবিনা ইয়াসমিন</h4>
        </div>
        <div className="bg-white shadow p-3 rounded-md">
          <Image src="/images/konok.GIF" width={150} height={100} className="rounded-md" alt="News" />
          <h4 className="text-sm mt-2">ভুল ধরিয়ে দিলেন কনকচাঁপা</h4>
        </div>
        <div className="bg-white shadow p-3 rounded-md">
          <Image src="/images/black.GIF" width={150} height={100} className="rounded-md" alt="News" />
          <h4 className="text-sm mt-2">দুর্বল প্যারেন্টিংয়ের ফাঁদে আগামী প্রজন্ম</h4>
        </div>
      </div>
    </div>
  );
};
