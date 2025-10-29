import Image from "next/image";
import Header from "./(landing)/Home/Header";
import Herosection from "./(landing)/Home/Herosection";
import Aboutsection from "./(landing)/Home/Aboutsection";
import Servicesection from "./(landing)/Home/Servicesection";
import ButtonRes from "./(landing)/components/button/_components/buttonRes";
export default function Home() {
  return (
    <div>
      <div className=" bg-[#075379]">
        <Header />
        <Herosection />
      </div>
      <Aboutsection />
      <div className="w-full justify-items-center">
        <ButtonRes
          lable={" نمونه زخم های بهبود یافته کلینیک زخم نیک "}
          type="second"
          classStyle="text-center mt-[32px] font-Samim font-bold not-italic text-[20px] leading-[38px] tracking-[1%]"
        />
      </div>
      {/* <div>
        <p className="text-center mt-[32px] font-Samim font-bold not-italic text-[20px] leading-[38px] tracking-[1%]">
          نمونه زخم های بهبود یافته کلینیک زخم نیک
        </p>
      </div> */}
      <Servicesection />
    </div>
  );
}
