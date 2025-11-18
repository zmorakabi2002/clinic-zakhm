"use client";
import Input from "@/components/common/input";
import { useState } from "react";
import ButtonRes from "@/components/common/button";
import TextArea from "@/components/common/textArea";
import Image from "next/image";

export default function UserOpinion({ image, title, explain, onLoadData }) {
  const [inputValue, setInputvalue] = useState("");
  const [inputValueEmail, setInputvalueEmail] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const oninputChange = (e, setinput) => {
    setinput(e.target.value);
  };

  const inputError = () => {
    const newError = {};

    if (!inputValue.trim()) newError.name = "لطفا نام را وارد کنید.";
    if (!messageInput.trim()) newError.text = "لطفا متن را وارد کنید.";
    if (!inputValueEmail.trim()) newError.email = "لطفا ایمیل را وارد کنید.";
    else if (!/\S+@\S+\.\S+/.test(inputValueEmail))
      newError.email = "فرمت ایمیل اشتباه است";

    setErrorMessage(newError);
    if (Object.keys(newError).length === 0) {
      console.log("اطلاعات ارسال شد");
    }
  };
  return (
    <div className="flex flex-row justify-between items-end ">
      <div className="md:w-[515px] flex flex-col gap-[32px]">
        <p className="font-[samim] font-bold md:text-[32px] text-[24px] ">
          دیدگاه مراجعه کنندگان
        </p>
        <div className=" h-[206px] px-[22px] py-[27px] flex flex-col justify-between bg-[#F9FAFB] border-[#CED2DA] border rounded-[26px] ">
          <p className="font-[samim] font-bold md:text-[20px] text-[16px]">
            {" "}
            فاطمه زارع
          </p>
          <p className="font-[samim] font-normal md:text-[18px] text-[14px] text-[#414E62]">
            ٢٢ مهر ١٤٠٤
          </p>
          <p className="font-[samim] font-normal md:text-[18px] text-[14px] md:leading-[30px] leading-6 text-justify">
            برای درمان زخم دیابت مادربزرگ م مراجعه کردم بسیار با دقت ، صبر و
            حوصله کار کردن و زخمشون کامل خوب شد
          </p>
        </div>
        <p className="font-[samim] font-bold md:text-[24px] text-[20px] ">
          دیدگاه خود را ثبت کنید
        </p>
        <div className="flex flex-col gap-5">
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
    </div>
  );
}
