"use client";

import ButtonRes from "@/components/common/button";
import DropDown from "@/components/common/dropDown";
import Input from "@/components/common/input";
import TelInput from "@/components/common/telInput";
import UploadInput from "@/components/common/uploadInput";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, FormikHelpers } from "formik";
import TextArea from "@/components/common/textArea";

export default function Page() {
  const ValidationSchema = Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی را وارد کنید ."),

    number: Yup.string()
      .required("شماره همراه را وارد کنید.")
      .matches(/^[0-9]{10}$/, "شماره همراه به درستی وارد کنید."),
    code: Yup.number().required("کد ملی را وارد کنید."),
    education: Yup.string().required("رشته تحصیلی را وارد کنید ."),
    WorkHistoryWound: Yup.string().required(
      "سابقه کاری خود را در درمان زخم وارد کنید . "
    ),
    WorkHistoryEduction: Yup.string().required(
      "سابقه کاری در رشته خود را وارد کنید."
    ),
    provincee: Yup.string().required("استان را وارد کنید."),
    cityis: Yup.string().required("شهر را وارد کنید."),
    currentWork: Yup.string().required(
      "نام و آدرس محل کار فعلی را وارد کنید ."
    ),
    imagesis: Yup.mixed()
      .required("تصویر را آپلود کنید .")
      .test("fileSize", "حجم تصویر باید کمتر از 2MB باشد", (file) =>
        file ? file.size <= 2 * 1024 * 1024 : false
      )
      .test("fileType", "فقط فرمت jpg یا png", (file) =>
        file ? ["image/jpeg", "image/png"].includes(file.type) : false
      ),
  });
  const router = useRouter();
  const [city, setCity] = useState();
  const STORAGE_KEY = "uploadedImages";
  const [image, setImage] = useState(null);

  const handleClickCancel = (e) => {
    e.preventDefault();
    router.push("/");
  };

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setImage(saved);
  }, []);

  const initialValues = {
    fullName: "",
    code: "",
    number: "",
    education: null,
    WorkHistoryWound: "",
    WorkHistoryEduction: "",
    provincee: null,
    cityis: null,
    currentWork: "",
    imagesis: null,
  };
  const education = [
    { id: 1, name: "مهندسی کامپیوتر" },
    { id: 2, name: "مهندسی پزشکی" },
    { id: 3, name: "روانشناسی" },
  ];

  const provinces = {
    تهران: ["تهران", "شمیرانات", "ری", "اسلام‌شهر", "بهارستان"],
    فارس: ["شیراز", "مرودشت", "کازرون", "لار", "جهرم"],
    اصفهان: ["اصفهان", "کاشان", "نجف‌آباد", "خمینی‌شهر"],
    "خراسان رضوی": ["مشهد", "نیشابور", "تربت‌حیدریه", "سبزوار"],
    // هر استان خواستی اضافه کن
  };

  const handleCheckErrors = async (values, validateForm, setTouched) => {
    // همه فیلدها را touched کن تا خطاها نمایش داده شوند
    setTouched(
      Object.keys(values).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );

    // اعتبارسنجی فرم
    const errors = await validateForm(values);
    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className=" px-[26px] md:px-[65px] md:pt-[182px] pt-[126px] flex flex-col items-center ">
      <div className="flex flex-col items-center gap-[22px]">
        <p className="font-samim font-bold md:text-[32px] text-[24px] md:leading-11 leading-10 tracking-[1%] text-right">
          فرم ثبت‌نام درمانگران زخم{" "}
        </p>
        <p className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-6 text-center  md:text-[#637083] text-[#414E62] ">
          اگر در حوزه‌ی درمان زخم فعالیت دارید، با تکمیل فرم زیر به جمع
          درمانگران نیک کلینیک بپیوندید.{" "}
        </p>
      </div>
      <Formik initialValues={initialValues} validationSchema={ValidationSchema}>
        {({
          values,
          errors,
          touched,
          validateForm,
          setTouched,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form>
            <div className=" md:w-[783px] w-[360px] flex flex-wrap gap-8 pt-8 justify-center items-center ">
              <div className="flex flex-col">
                <Input
                  name="fullName"
                  lable="نام و نام خانوادگی"
                  placeHolder="نام و نام خانوادگی خود را وارد کنید."
                  inputValue={values.fullName} // ← مقدار از Formik
                  inputChange={(e) => setFieldValue("fullName", e.target.value)} // ← تغییر فارمیک
                  classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
                />

                {errors.fullName && touched.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div>
                <TelInput
                  name="number"
                  lable={"شماره همراه "}
                  placeHolder={"9** *** ****"}
                  inputValue={values.number}
                  maxNum={10}
                  inputChange={(e) =>
                    /^[0-9]*$/.test(e.target.value)
                      ? setFieldValue("number", e.target.value)
                      : undefined
                  }
                  classStyle="md:w-[304.5px] md:h-[60px] w-[297px] h-[52px]"
                />
                {errors.number && touched.number && (
                  <p className="text-red-500 text-sm">{errors.number}</p>
                )}
              </div>
              <div>
                <Input
                  name="code"
                  lable={"کدملی"}
                  placeHolder={"کدملی خود را وارد کنید."}
                  inputValue={values.code}
                  inputChange={(e) =>
                    /^[0-9]*$/.test(e.target.value)
                      ? setFieldValue("code", e.target.value)
                      : undefined
                  }
                  classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
                />

                {errors.code && touched.code && (
                  <p className="text-red-500 text-sm">{errors.code}</p>
                )}
              </div>
              <div>
                <DropDown
                  name="education"
                  defaultValue={"رشته تحصیلی خود را انتخاب کنید."}
                  labename={"رشته تحصیلی"}
                  classStyle="md:w-[375.5px] w-[360px] "
                  options={education}
                  onOptionClick={(value) => {
                    setFieldValue("education", value);
                    setTouched({ ...touched, education: false });
                  }}
                />
                {errors.education && touched.education && (
                  <p className="text-red-500 text-sm">{errors.education}</p>
                )}
              </div>
              <div>
                <Input
                  name="WorkHistoryWound"
                  lable={"سابقه کاری در درمان زخم (به سال)"}
                  placeHolder={"سابقه کاری در درمان زخم را وارد کنید."}
                  maxLenght={2}
                  inputValue={values.WorkHistoryWound}
                  inputChange={(e) =>
                    /^[0-9]*$/.test(e.target.value)
                      ? setFieldValue("WorkHistoryWound", e.target.value)
                      : undefined
                  }
                  classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
                />

                {errors.WorkHistoryWound && touched.WorkHistoryWound && (
                  <p className="text-red-500 text-sm">
                    {errors.WorkHistoryWound}
                  </p>
                )}
              </div>
              <div>
                <Input
                  name="WorkHistoryEduction"
                  lable={"سابقه کاری در رشته خود (به سال)"}
                  placeHolder={"سابقه کاری در رشته خود را وارد کنید."}
                  maxLenght={2}
                  inputValue={values.WorkHistoryEduction}
                  inputChange={(e) =>
                    /^[0-9]*$/.test(e.target.value)
                      ? setFieldValue("WorkHistoryEduction", e.target.value)
                      : undefined
                  }
                  classStyle="md:w-[375.5px] md:h-[60px] w-[360px] h-[52px]"
                />
                {errors.WorkHistoryEduction && touched.WorkHistoryEduction && (
                  <p className="text-red-500 text-sm">
                    {errors.WorkHistoryEduction}
                  </p>
                )}
              </div>
              <div>
                <DropDown
                  name="provincee"
                  defaultValue={"استان را انتخاب کنید."}
                  labename={"استان"}
                  classStyle="md:w-[375.5px] w-[360px]"
                  options={Object.keys(provinces).map((p) => ({ name: p }))} // ✔️ استان‌ها
                  onOptionClick={(value) => {
                    setFieldValue("provincee", value);
                    setCity(""); // ✔️ ریست کردن شهر
                    setFieldValue("cityis", ""); // ✔️ ریست داخل Formik
                    setTouched({ ...touched, provincee: false });
                  }}
                />
                {errors.provincee && touched.provincee && (
                  <p className="text-red-500 text-sm">{errors.provincee}</p>
                )}
              </div>
              <div>
                <DropDown
                  name="cityis"
                  defaultValue={"شهر را انتخاب کنید."}
                  labename={"شهر"}
                  classStyle="md:w-[375.5px] w-[360px]"
                  options={
                    values.provincee
                      ? provinces[values.provincee].map((c) => ({ name: c })) // ✔️ شهرهای استان انتخاب‌شده
                      : []
                  }
                  onOptionClick={(value) => {
                    setFieldValue("cityis", value);
                    setTouched({ ...touched, cityis: false });
                  }}
                />
                {errors.cityis && touched.cityis && (
                  <p className="text-red-500 text-sm">{errors.cityis}</p>
                )}
              </div>
              <div>
                <TextArea
                  name="currentWork"
                  lable={"نام و آدرس محل کار فعلی"}
                  placeHolder={"نام و آدرس محل کار فعلی خود را وارد کنید."}
                  inputValue={values.currentWork}
                  inputChange={(e) =>
                    setFieldValue("currentWork", e.target.value)
                  }
                  classStyle="md:w-[783px] w-[360px] md:h-[60px] h-[161px] "
                />
                {errors.currentWork && touched.currentWork && (
                  <p className="text-red-500 text-sm">{errors.currentWork}</p>
                )}
              </div>
              <div className="flex flex-col py-[38px] gap-[21px] items-center rounded-lg border border-dashed md:w-[778px] w-[360px] md:h-[185px] h-[162px] border-[#97A1AF] ">
                <p className="hidden md:flex font-[Samim] font-normal text-[18px] leading-6 tracking-[1%] text-center text-[#637083]">
                  برای تأیید صلاحیت حرفه‌ای، کارت نظام پرستاری معتبر خود را
                  آپلود کنید.
                </p>{" "}
                <p className="flex md:hidden font-normal text-[18px] leading-6 tracking-[1%] text-center font-[Samim]  text-[#637083]">
                  کارت نظام پرستاری معتبر خود را آپلود کنید.
                </p>
                <UploadInput
                  image={image}
                  onFileChange={(file) => {
                    // ۱. فایل را به Formik بده
                    setFieldValue("imagesis", file);

                    // ۲. اگر برای preview هم می‌خوای
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        const base64 = reader.result;
                        localStorage.setItem(STORAGE_KEY, base64);
                        setImage(base64);
                      };
                      reader.readAsDataURL(file);
                    } else {
                      setImage(null);
                    }
                  }}
                />
                {errors.imagesis && touched.imagesis && (
                  <p className="text-red-500 text-sm">{errors.imagesis}</p>
                )}
              </div>
              <div className="flex gap-[22px]">
                <ButtonRes
                  type="second"
                  lable={"انصراف"}
                  classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] md:px-[159.5px] px-[60px]"
                  onClickButton={handleClickCancel}
                />
                <ButtonRes
                  type="first"
                  lable="ارسال"
                  classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] md:px-[159.5px] px-[66px]"
                  onClickButton={() =>
                    handleCheckErrors(
                      values,
                      validateForm,
                      setTouched,
                      handleSubmit
                    )
                  }
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
