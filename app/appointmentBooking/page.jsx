"use client";

import { useState } from "react";
import Input from "@/components/common/input";
import ButtonRes from "@/components/common/button";
import TelInput from "@/components/common/telInput";
import TextArea from "@/components/common/textArea";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { Route } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [inputValue, setInputvalue] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [errorMessage, setErroreMesssage] = useState("");

  const onInputChange = (e, setinput, field) => {
    if (errorMessage[field]) {
      setErroreMesssage((prev) => {
        const newErr = { ...prev };
        delete newErr[field];
        return newErr;
      });
    }
    setinput(e.target.value);
  };
  const handleClick = (e) => {
    const newError = {};
    if (!inputValue.trim())
      newError.name = "نام و نام خانوادگی خود را وارد کنید.";
    if (!numberInput.trim()) newError.number = "شماره همراه را وارد کنید.";
    if (numberInput.length < 10)
      newError.number = "شماره همراه را به درستی وارد کنید .";
    if (!titleInput.trim()) newError.title = "عنوان را وارد کنید.";
    if (!messageInput.trim()) newError.message = "پیام را وارد کنید.";
    setErroreMesssage(newError);
    if (Object.keys(newError).length === 0) {
      router.push("/");
    }
  };

  return (
    <div className=" px-[26px] md:px-[65px] md:pt-[182px] pt-[126px] md:mb-[180px] mb-[59px] flex flex-col items-center  h-[100vh]">
      <div className="bg-red-400 w-[500px] h-[300px] rounded-[20px] relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/images/gifts.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <div className="md:w-[706px]">
        <div className="flex flex-col items-center gap-[22px]  ">
          <p className="font-samim font-bold md:text-[32px] text-[24px] md:leading-[44px] leading-[40px] tracking-[1%] text-right">
            رزرو نوبت آنلاین
          </p>
          <p className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[1%] text-right md:text-[#637083] text-[#414E62] ">
            برای دریافت نوبت لطفا فرم زیر را پر کنید.
          </p>
        </div>
        <div className=" flex flex-wrap gap-[14px] justify-center mt-[22px] ">
          <div>
            <Input
              lable={"نام و نام خانوادگی "}
              placeHolder={"نام و نام خانوادگی خود را وارد کنید."}
              inputValue={inputValue}
              inputChange={(e) => onInputChange(e, setInputvalue, "name")}
              className="md:w-[706px] md:h-[60px] w-[360px] h-[52px]"
            />
            {errorMessage.name && (
              <div className=" text-red-500 ">{errorMessage.name} </div>
            )}
          </div>
          <div>
            <TelInput
              lable={"شماره همراه"}
              placeHolder={"9999999999"}
              inputValue={numberInput}
              inputChange={(e) =>
                /^[0-9]*$/.test(e.target.value)
                  ? onInputChange(e, setNumberInput, "number")
                  : undefined
              }
              classStyle="md:w-[266px] md:h-[60px] w-[297px] h-[52px] "
            />
            {errorMessage.number && (
              <div className=" text-red-500 ">{errorMessage.number} </div>
            )}
          </div>
          <div>
            <Input
              lable="عنوان "
              placeHolder={"عنوان را وارد کنید."}
              inputValue={titleInput}
              inputChange={(e) => onInputChange(e, setTitleInput, "title")}
              classStyle="md:w-[706px] md:h-[60px] w-[360px] h-[52px]"
            />
            {errorMessage.title && (
              <div className=" text-red-500 ">{errorMessage.title} </div>
            )}
          </div>
          <div>
            <TextArea
              lable={"پیام "}
              placeHolder={" پیام خود را وارد کنید.."}
              inputValue={messageInput}
              inputChange={(e) => onInputChange(e, setMessageInput, message)}
              classStyle="md:w-[706px] h-[176px] w-[360px]"
            />
            {errorMessage.message && (
              <div className=" text-red-500 ">{errorMessage.message} </div>
            )}
          </div>
          <div>
            <ButtonRes
              lable={"ارسال"}
              classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] md:px-[329.5px] px-[161.5px]  "
              onClickButton={handleClick}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
