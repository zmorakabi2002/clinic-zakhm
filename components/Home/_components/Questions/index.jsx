"use client";
import Image from "next/image";

import QuestionBox from "@/components/common/questionBox";

export default function Questions() {
  return (
    <section className="w-full h-full flex gap-[22px] md:pt-[72px] pt-[42px] lg:bg-[url('/images/elements.png')] bg-none bg-cover lg:bg-no-repeat pb-[100px]">
      <div className="flex flex-col gap-[22px] ">
        <div className="font-samim font-bold md:text-[32px] text-[24px] md:leading-11 leading-10 tracking-[0.01em] text-right pt-[102px] pr-[65px] ">
          <p>سوالات پرتکرار بیماران</p>
        </div>
        <div className="flex flex-col gap-[22px] md:pr-[65px] pr-7 ">
          <QuestionBox
            lable={"درمان زخم در کلینیک نیک چگونه انجام می‌شود؟"}
            explain={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            }
          />
          <QuestionBox
            lable={"مدت زمان بهبودی زخم چقدر است؟"}
            explain={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            }
          />
          <QuestionBox
            lable={"هزینه درمان زخم چقدر است؟"}
            explain={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            }
          />
          <QuestionBox
            lable={"آیا کلینیک با بیمه‌ها همکاری دارد؟"}
            explain={
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
            }
          />
        </div>
      </div>
      <div>
        <Image
          src={"/images/ques.png"}
          alt="doctor-ques"
          width={900}
          height={700}
          className="hidden lg:flex pt-[100px]"
        />
      </div>
    </section>
  );
}
