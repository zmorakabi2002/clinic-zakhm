"use client";

import DropDown from "@/components/common/dropDown";
import Input from "@/components/common/input";
import TelInput from "@/components/common/telInput";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputvalue] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputEduction, setInputEduction] = useState("");
  const [inputWorkHistoryWound, setInputWorkHistoryWound] = useState("");
  const [inputWorkHistoryEduction, setInputWorkHistoryEduction] = useState("");
  const [inputProvince, setInputProvince] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputcurrentWork, setInputCarrentWork] = useState("");
  const onInputChange = (e, setInput) => {
    setInput(e.target.value);
  };
  return (
    <div className="pt-[182px] flex flex-col">
      <div>
        <p className="font-samim font-bold md:text-[32px] text-[24px] md:leading-[44px] leading-[40px] tracking-[1%] text-right">
          فرم ثبت‌نام درمانگران زخم{" "}
        </p>
        <p className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[1%] text-right md:text-[#637083] text-[#414E62] ">
          اگر در حوزه‌ی درمان زخم فعالیت دارید، با تکمیل فرم زیر به جمع
          درمانگران نیک کلینیک بپیوندید.{" "}
        </p>
      </div>

      <div>
        <Input
          lable={"نام و نام خانوادگی "}
          placeHolder={"نام و نام خانوادگی خود را وارد کنید."}
          inputValue={inputValue}
          inputChange={(e) => onInputChange(e, setInputvalue)}
          className=""
        />
        <TelInput
          lable={"شماره همراه "}
          placeHolder={"9999999999"}
          inputValue={inputNumber}
          maxNum={10}
          inputChange={(e) =>
            /^[0-9]*$/.test(e.target.value)
              ? onInputChange(e, setInputNumber)
              : undefined
          }
          classStyle=""
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <DropDown
        defaultValue={"رشته تحصیلی خود را انتخاب کنید"}
        labename={"رشته تحصیلی"}
      />
    </div>
  );
}

{
  /* <Input
lable={"نام و نام خانوادگی "}
placeHolder={"نام و نام خانوادگی خود را وارد کنید."}
inputValue={inputValue}
inputChange={(e) => oninputChange(e, setInputvalue)}
className="w-[337px] h-[60px]"
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
            classStyle="w-[266px] h-[60px] "
          />
 */
}
