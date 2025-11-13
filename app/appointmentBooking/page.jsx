"use client";

import { useState } from "react";
import Input from "@/components/common/input";
import ButtonRes from "@/components/common/button";
import TelInput from "@/components/common/telInput";
import TextArea from "@/components/common/textArea";

export default function Page() {
  const [inputValue, setInputvalue] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const oninputChange = (e, setinput) => {
    setinput(e.target.value);
  };

  return (
    <div className=" px-[26px] md:px-[65px] md:pt-[182px] pt-[126px] md:mb-[180px] mb-[59px] flex flex-col items-center  ">
      <div className="md:w-[706px]">
        <div className="flex flex-col items-center gap-[22px]  ">
          <p className="font-samim font-bold md:text-[32px] text-[24px] md:leading-[44px] leading-[40px] tracking-[1%] text-right">
            رزرو نوبت آنلاین
          </p>
          <p className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[1%] text-right md:text-[#637083] text-[#414E62] ">
            برای دریافت نوبت لطفا فرم زیر را پر کنید.
          </p>
        </div>
        <div className=" flex flex-wrap gap-[14px] justify-center mt-[22px] ">
          <Input
            lable={"نام و نام خانوادگی "}
            placeHolder={"نام و نام خانوادگی خود را وارد کنید."}
            inputValue={inputValue}
            inputChange={(e) => oninputChange(e, setInputvalue)}
            className="md:w-[706px] md:h-[60px] w-[360px] h-[52px]"
          />

          <TelInput
            lable={"شماره همراه"}
            placeHolder={"9999999999"}
            inputValue={numberInput}
            inputChange={(e) =>
              /^[0-9]*$/.test(e.target.value)
                ? oninputChange(e, setNumberInput)
                : undefined
            }
            classStyle="md:w-[266px] md:h-[60px] w-[297px] h-[52px] "
          />

          <Input
            lable="عنوان "
            placeHolder={"عنوان را وارد کنید."}
            inputValue={titleInput}
            inputChange={(e) => oninputChange(e, setTitleInput)}
            classStyle="md:w-[706px] md:h-[60px] w-[360px] h-[52px]"
          />
          <TextArea
            lable={"پیام "}
            placeHolder={" پیام خود را وارد کنید.."}
            inputValue={messageInput}
            inputChange={(e) => oninputChange(e, setMessageInput)}
            classStyle="md:w-[706px] h-[176px] w-[360px]"
          />

          <ButtonRes
            lable={"ارسال"}
            classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] md:px-[329.5px] px-[161.5px]  "
            onClickButton={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
