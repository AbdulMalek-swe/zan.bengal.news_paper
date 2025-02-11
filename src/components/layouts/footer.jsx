import React from "react";
import image from "../../assets/logo/manobjomoin.jpg"; 
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8   container-custom ">
      <div className=" mx-auto flex flex-col lg:flex-row justify-between items-center lg:gap-40">
        
        {/* Left Side: Logo & Address */}
        <div className="flex flex-col md:flex-row  md:space-x-4">
          {/* Logo */}
          <div >
            <Image
              src={image}
              alt="Logo"
              width={150}
              height={150}
            />
          </div>

         
          <div className="text-sm mt-2">
            <p className="font-semibold">প্রধান সম্পাদক: মতিউর রহমান চৌধুরী</p>
            <p>
              জেনিথ টাওয়ার, ৪০ কাওরান বাজার, ঢাকা-১২১৫ এবং মিডিয়া প্রিন্টার্স ১৪৯-১৫০ তেজগাঁও শিল্প এলাকা, ঢাকা-১২০৮ থেকে মাহবুবা চৌধুরী কর্তৃক সম্পাদিত ও প্রকাশিত।
            </p>
            <p>ফোন: ৫৫০-১১৭১০-৩ | ফ্যাক্স: ৮১২৮৩১৩, ৫৫০১৩৪০০</p>
            <p>ই-মেইল: <a href="mailto:news@emanabzamin.com" className="text-blue-400 hover:underline">news@emanabzamin.com</a></p>
          </div>
        </div>

     
        <div className="mt-6 lg:mt-0 flex flex-col items-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-400 hover:bg-[#0064d1] hover:text-white cursor-pointer">
              <FaFacebookF size={18} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-400 hover:bg-red-700 hover:text-white cursor-pointer">
              <FaYoutube size={18} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-400 hover:bg-[#053059] hover:text-white cursor-pointer">
              <FaLinkedinIn size={18} />
            </div>
          </div>

          {/* Bottom Text */}
          <p className="mt-4 text-gray-400 text-sm">© ২০২৫ মানবজমিন. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
