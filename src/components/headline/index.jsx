import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function HeadlineSlider() {
  const headlines = [
    "জনগণ চূড়ান্তভাবে বিরক্ত হওয়ার আগেই দায়িত্বশীলতার প্রমাণ দিন",
    "বাজার পরিস্থিতি উন্নত না হলে মূল্যস্ফীতি আরও বাড়তে পারে",
    "নির্বাচন কমিশন নতুন বিধি প্রণয়ন করতে যাচ্ছে",
    "আইনশৃঙ্খলা পরিস্থিতির উন্নতির জন্য বিশেষ অভিযান ঘোষণা",
  ];
  
  const swiperRef = useRef(null); // Ref to store Swiper instance

  return (
    <div className="flex items-center border  border-gray-300 rounded-lg mb-3 overflow-hidden w-full">
      {/* Title Box */}
      <div className="bg-green-600 text-white px-4 py-2 font-bold">শিরোনাম</div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign swiper instance
        className="w-full"
      >
        {headlines.map((headline, index) => (
          <SwiperSlide key={index}>
            <p className="text-black text-sm md:text-base px-4 py-2">{headline}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons (Right Side) */}
      <div className="items-center space-x-1 hidden md:flex bg-white px-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <RiArrowLeftSLine size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </div>
  );
}
