import Link from "next/link";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LiaTwitter } from "react-icons/lia";
import { MdOutlineMarkunread } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";

export default function Home() {
  return (
    
    // {right side}
    
    <div className="w-[1366px] h-[641px] bg-[#2E0249] pl-10 pt-14 relative">
     <div className="w-[350px] h-[200px] font-extrabold">
  <h1 className="text-4xl font-bold text-[#EEEEEE] leading-[1.5] mb-4">
    Lets discuss <br /> on something <span className="text-[#A91079]">cool</span> together
  </h1>
</div>


<div className="text-white mt-9">
  <div className="flex font-medium cursor-pointer hover:border-[3px] w-80 hover:bg-[#570A57] hover:border-[#A91079] hover:rounded-xl py-4">
    <MdOutlineMarkunread size={20} className="text-[#A91079] ml-3" /> 
    <p className="ml-3">summ@ishahgmail.com</p>
  </div>

  <div className="flex font-medium cursor-pointer hover:border-[3px] w-80 hover:bg-[#570A57] hover:border-[#A91079] hover:rounded-xl py-4">
    <FaPhone size={20} className="text-[#A91079] rotate-90 ml-3" />
    <Link href="tel:+1234567890" className="ml-3">+1 (234) 567-890</Link>
  </div>

  <div className="flex font-medium cursor-pointer hover:border-[3px]  w-80 hover:bg-[#570A57] hover:border-[#A91079] hover:rounded-xl py-4">
    <FaLocationDot size={20} className="text-[#A91079] ml-3"/>
    <p className="ml-3">123 Street 456 House</p>
  </div>
</div>

  <div className="flex items-center mt-24 ml-5 space-x-5">
    <TiSocialFacebook size={30} className="text-white  hover:scale-110 transition-all duration-300" />
    <FaInstagram size={40} className="text-white bg-[#A91079] p-[10px] rounded-full  hover:scale-110 transition-all duration-300" />
    <LiaTwitter size={30} className="text-white  hover:scale-110 transition-all duration-300" />
  </div>
    </div>
  );
}
