"use client";
import Image from "next/image";
import { useData } from "@/app/context/dataContext";
import { useParams } from "next/navigation";

import UserOpinion from "@/components/common/userOpinion";

export default function Home() {
  const params = useParams();
  const { articles } = useData();
  const item = articles.find((i) => i.id === params.id);
  if (!item) return <p> آیتم مورد نظر یافت نشد</p>;

  return (
    <div className="pt-[202px] mx-[65px] mb-[153px] flex flex-col">
      <div className="flex flex-col items-center gap-[32px] mb-[52px]">
        <Image
          src={"/images/blog1.jpg"}
          width={605}
          height={511}
          alt={"blog"}
          className="md:flex hidden rounded-[4px] "
        />
        <Image
          src={"/images/blog1.jpg"}
          width={360}
          height={304}
          alt={"blog"}
          className="md:hidden flex rounded-[4px] "
        />
        <p className="font-[samim] font-bold md:text-[32px] text-[24px] text-center text-[#202B37] ">
          {item.title}
        </p>
        <p className="font-[samim] font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] text-justify text-[#414E62] ">
          {item.Introduction}
        </p>
      </div>

      <UserOpinion />

      {/* <div className="flex flex-row justify-between items-end ">
        <div className="md:w-[515px] flex flex-col gap-[32px]">
          <p className="font-[samim] font-bold md:text-[32px] text-[24px] ">
            دیدگاه مراجعه کنندگان
          </p>
          <div className=" h-[206px] px-[22px] py-[27px] flex flex-col justify-between bg-[#F9FAFB] border-[#CED2DA] border-[1px] rounded-[26px] ">
            <p className="font-[samim] font-bold md:text-[20px] text-[16px]">
              {" "}
              فاطمه زارع
            </p>
            <p className="font-[samim] font-normal md:text-[18px] text-[14px] text-[#414E62]">
              ٢٢ مهر ١٤٠٤
            </p>
            <p className="font-[samim] font-normal md:text-[18px] text-[14px] md:leading-[30px] leading-[24px] text-justify">
              برای درمان زخم دیابت مادربزرگ م مراجعه کردم بسیار با دقت ، صبر و
              حوصله کار کردن و زخمشون کامل خوب شد
            </p>
          </div>
          <p className="font-[samim] font-bold md:text-[24px] text-[20px] ">
            دیدگاه خود را ثبت کنید
          </p>
          <div className="flex flex-col gap-[20px]">
            <div>
              <Input
                lable={"نام و نام خانوادگی "}
                placeHolder={"نام و نام خانوادگی خود را وارد کنید."}
                inputValue={inputValue}
                inputChange={(e) => oninputChange(e, setInputvalue)}
                classStyle="md:w-[515px] md:h-[66px] w-full h-[52px]"
              />
              {errorMessage.name && (
                <p className="text-red-600">{errorMessage.name}</p>
              )}
            </div>

            <div>
              <Input
                lable={"ایمیل"}
                placeHolder={"ایمیل خود را وارد کنید."}
                inputValue={inputValueEmail}
                inputChange={(e) => oninputChange(e, setInputvalueEmail)}
                classStyle="md:w-[515px] md:h-[66px] w-full h-[52px]"
              />
              {errorMessage.email && (
                <p className="text-red-600">{errorMessage.email}</p>
              )}
            </div>

            <div>
              <TextArea
                lable={"دیدگاه"}
                placeHolder={"دیدگاه خود را وارد کنید...."}
                inputValue={messageInput}
                inputChange={(e) => oninputChange(e, setMessageInput)}
                classStyle="md:w-[515px] md:h-[176px] w-full h-[176px]"
              />
              {errorMessage.text && (
                <p className="text-red-600">{errorMessage.text}</p>
              )}
            </div>

            <ButtonRes
              lable={"ثبت دیدگاه"}
              classStyle="  "
              onClickButton={inputError}
            />
          </div>
        </div>
        <Image
          src={"/images/commentimg.png"}
          width={557}
          height={538}
          alt="commentimg "
          className="lg:flex hidden h-[538px] "
        />
      </div> */}
    </div>
  );
}
