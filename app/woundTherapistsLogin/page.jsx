"use client";

import ButtonRes from "@/components/common/button";
import DropDown from "@/components/common/dropDown";
import Input from "@/components/common/input";
import TelInput from "@/components/common/telInput";
import UploadInput from "@/components/common/uploadInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [errorMessage, setErroreMesssage] = useState("");
  const [result, setResult] = useState("");
  const [inputValue, setInputvalue] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputWorkHistoryWound, setInputWorkHistoryWound] = useState("");
  const [inputWorkHistoryEduction, setInputWorkHistoryEduction] = useState("");
  const [inputcurrentWork, setInputCarrentWork] = useState("");

  const handleClick = (e) => {
    const newError = {};
    if (!inputValue.trim()) newError.name = " نام و نام خانوادگی را وارد کنید ";
    if (!inputNumber.trim()) newError.number = "شماره را وارد کنید .";
    if (inputNumber.length < 10)
      newError.number = " شماره تلفن را به درستی وارد کنید . ";
    if (!inputId.trim()) newError.id = "کدملی را وارد کنید.";
    if (!inputWorkHistoryWound.trim())
      newError.WorkHistoryWound = "سابقه کاری را وارد کنید";
    if (!inputWorkHistoryEduction.trim())
      newError.WorkHistoryEduction = "سابقه کاری را وارد کنید";
    if (!inputcurrentWork.trim())
      newError.currentWork = "نام و آدرس محل کار فعلی را وارد کنید .";

    setErroreMesssage(newError);
    if (Object.keys(newError).length === 0) {
      router.push("/");
    }
  };
  const onInputChange = (e, setInput, feild) => {
    if (errorMessage[feild]) {
      setErroreMesssage((prev) => {
        const newErr = { ...prev };
        delete newErr[feild];
        return newErr;
      });
    }
    setInput(e.target.value);
    setErroreMesssage("");
    setResult("");
  };
  const education = [
    { id: 1, name: "مهندسی کامپیوتر" },
    { id: 2, name: "مهندسی پزشکی" },
    { id: 3, name: "روانشناسی" },
  ];
  const Province = [
    { id: 1, name: "تهران" },
    { id: 2, name: "فارس" },
    { id: 3, name: "اصفهان" },
  ];
  const City = [
    { id: 1, name: "تهران" },
    { id: 2, name: "شیراز" },
    { id: 3, name: "اصفهان" },
  ];

  return (
    <div className=" px-[26px] md:px-[65px] md:pt-[182px] pt-[126px] flex flex-col items-center ">
      <div className="flex flex-col items-center gap-[22px]">
        <p className="font-samim font-bold md:text-[32px] text-[24px] md:leading-[44px] leading-[40px] tracking-[1%] text-right">
          فرم ثبت‌نام درمانگران زخم{" "}
        </p>
        <p className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-[24px] tracking-[1%] text-right md:text-[#637083] text-[#414E62] ">
          اگر در حوزه‌ی درمان زخم فعالیت دارید، با تکمیل فرم زیر به جمع
          درمانگران نیک کلینیک بپیوندید.{" "}
        </p>
      </div>

      <div className=" md:w-[783px] w-[360px] flex flex-wrap gap-[32px] pt-[32px] justify-center items-center ">
        <div className="flex flex-col">
          <Input
            lable={"نام و نام خانوادگی "}
            placeHolder={"نام و نام خانوادگی خود را وارد کنید."}
            inputValue={inputValue}
            inputChange={(e) => onInputChange(e, setInputvalue)}
            classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
          />
          {errorMessage.name && (
            <div className=" text-red-500 ">{errorMessage.name} </div>
          )}
        </div>
        <div>
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
            classStyle="md:w-[304.5px] md:h-[60px] w-[297px] h-[52px]"
          />
          {errorMessage.number && (
            <div className=" text-red-500 ">{errorMessage.number} </div>
          )}
        </div>
        <div>
          <Input
            lable={"کدملی"}
            placeHolder={"کدملی خود را وارد کنید."}
            inputValue={inputId}
            inputChange={(e) =>
              /^[0-9]*$/.test(e.target.value)
                ? onInputChange(e, setInputId)
                : undefined
            }
            classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
          />
          {errorMessage.id && (
            <div className=" text-red-500 ">{errorMessage.id} </div>
          )}
        </div>
        <DropDown
          defaultValue={"رشته تحصیلی خود را انتخاب کنید."}
          labename={"رشته تحصیلی"}
          classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
          options={education}
        />
        <div>
          <Input
            lable={"سابقه کاری در درمان زخم (به سال)"}
            placeHolder={"سابقه کاری در درمان زخم را وارد کنید."}
            inputValue={inputWorkHistoryWound}
            inputChange={(e) =>
              /^[0-9]*$/.test(e.target.value)
                ? onInputChange(e, setInputWorkHistoryWound)
                : undefined
            }
            classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
          />
          {errorMessage.WorkHistoryWound && (
            <div className=" text-red-500 ">
              {errorMessage.WorkHistoryWound}{" "}
            </div>
          )}
        </div>
        <div>
          <Input
            lable={"سابقه کاری در رشته خود (به سال)"}
            placeHolder={"سابقه کاری در رشته خود را وارد کنید."}
            inputValue={inputWorkHistoryEduction}
            inputChange={(e) =>
              /^[0-9]*$/.test(e.target.value)
                ? onInputChange(e, setInputWorkHistoryEduction)
                : undefined
            }
            classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
          />
          {errorMessage.WorkHistoryEduction && (
            <div className=" text-red-500 ">
              {errorMessage.WorkHistoryEduction}{" "}
            </div>
          )}
        </div>
        <DropDown
          defaultValue={"استان را انتخاب کنید."}
          labename={"استان"}
          classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
          options={Province}
        />
        <DropDown
          defaultValue={"شهر را انتخاب کنید."}
          labename={"شهر"}
          classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px] "
          options={City}
        />
        <div>
          <Input
            lable={"نام و آدرس محل کار فعلی"}
            placeHolder={"نام و آدرس محل کار فعلی خود را وارد کنید."}
            inputValue={inputcurrentWork}
            inputChange={(e) => onInputChange(e, setInputCarrentWork)}
            classStyle="md:w-[783px] md:h-[60px] w-[360px] h-[161px]"
          />
          {errorMessage.currentWork && (
            <div className=" text-red-500 ">{errorMessage.currentWork} </div>
          )}
        </div>
        <div className="flex flex-col py-[38px] gap-[21px] items-center rounded-[8px] border border-dashed md:w-[778px] w-[360px] md:h-[185px] h-[162px] border-[#97A1AF] ">
          <p className="hidden md:flex font-[Samim] font-normal text-[18px] leading-[24px] tracking-[1%] text-center text-[#637083]">
            برای تأیید صلاحیت حرفه‌ای، کارت نظام پرستاری معتبر خود را آپلود
            کنید.
          </p>{" "}
          <p className="flex md:hidden font-normal text-[18px] leading-[24px] tracking-[1%] text-center font-[Samim]  text-[#637083]">
            کارت نظام پرستاری معتبر خود را آپلود کنید.
          </p>
          <UploadInput />
          {/* <ButtonRes
            type="first"
            lable={"بارگذاری"}
            secondIcon={"/images/upload.svg"}
            classStyle="w-[125px] h-[40px]"
          /> */}
        </div>
        <div className="flex gap-[22px]">
          <ButtonRes
            type="second"
            lable={"انصراف"}
            classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] md:px-[159.5px] px-[60px]"
          />
          <ButtonRes
            type="first"
            lable={"ارسال"}
            classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] md:px-[159.5px] px-[66px]"
            onClickButton={handleClick}
          />
          {result && <div className="result"> {result} </div>}
        </div>
      </div>
    </div>
  );
}
