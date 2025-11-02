import Image from "next/image";
import Header from "@/components/Home/_components/Header";
import Herosection from "@/components/Home/_components/Herosection";
import Aboutsection from "@/components/Home/_components/Aboutsection";
import ButtonRes from "@/components/common/button";
import Servicesection from "@/components/Home/_components/Servicesection";
import WhyClinic from "@/components/Home/_components/whyClinic";
import MethodsSection from "@/components/Home/_components/Methodssection";
import Commentssection from "@/components/Home/_components/Commentssection";
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
          classStyle="text-center md:mt-[2.6rem] md:mt-[1.5rem] font-Samim font-bold not-italic md:text-[1.25rem] text-[1rem] leading-[38px] tracking-[1%]"
        />
      </div>
      <Servicesection />
      <MethodsSection />
      <WhyClinic />
      <Commentssection />
    </div>
  );
}
