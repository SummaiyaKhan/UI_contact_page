import { Button } from "@/components/ui/button"
import { GiPlayButton } from "react-icons/gi"


export default function  Home() {
    return(
        // left side
        <div className="w-[500px] h-[100px] absolute mt-6 mx-28">

        <div className="bg-[#EEEEEE]  border border-3 rounded-xl">
          <h2 className="text-lg text-[#2E0249] font-medium mt-7 ml-10">I am intersted in...</h2>
          <Button className="  hover:border-[#A91079] ml-10 hover:bg-[#A91079] border-2 border-gray-500 text-gray-400 bg-[#EEEEEE] hover:scale-105 transition-all mt-5 duration-300">UI/UX design</Button>
          <Button className="  hover:border-[#A91079] ml-3 hover:bg-[#A91079] border-2 border-gray-500 text-gray-400 bg-[#EEEEEE] hover:scale-105 transition-all mt-5 duration-300">Web design</Button>
          <Button className="  hover:border-[#A91079] ml-3 hover:bg-[#A91079] border-2 border-gray-500 text-gray-400 bg-[#EEEEEE] hover:scale-105 transition-all mt-5 duration-300">Graphic design</Button>
          <Button className="  hover:border-[#A91079] ml-10 hover:bg-[#A91079] border-2 border-gray-500 text-gray-400 bg-[#EEEEEE] hover:scale-105 transition-all mt-5 duration-300">Design system</Button>
          <Button className="  hover:border-[#A91079] ml-3 hover:bg-[#A91079] border-2 border-gray-500 text-gray-400 bg-[#EEEEEE] hover:scale-105 transition-all mt-5 duration-300">Other</Button>
       
        <div className="mx-10">
  <p className="text-[#2E0249] font-semibold text-base pt-10">Your name</p>
  <div className="w-[420px] h-[2px] bg-[#A91079] mb-4"></div>

  <p className="text-[#2E0249] font-semibold text-base pt-10">Your email</p>
  <div className="w-[420px] h-[2px] bg-[#A91079] mb-4"></div>

  <p className="text-[#2E0249] font-semibold text-base pt-10">Your message</p>
  <div className="w-[420px] h-[2px] bg-[#A91079] mb-10"></div>

  <div className="flex items-start mb-10 pt-14">
    <button className="flex items-center bg-[#A91079] text-sm text-[#EEEEEE] font-medium py-4 px-10 rounded-lg hover:bg-[#D22F94] hover:scale-105 transition-all duration-300">
      <GiPlayButton size={20} className="-rotate-45 mr-1" />
      Send Message
    </button>
  </div>
</div>

    </div>

</div>
      )
    }