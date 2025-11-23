"use client";

import { useState } from "react";
import Input from "@/components/common/input";
import ButtonRes from "@/components/common/button";
import TelInput from "@/components/common/telInput";
import TextArea from "@/components/common/textArea";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { object } from "yup";

export default function Page() {
  // const [inputValue, setInputvalue] = useState("");
  // const [titleInput, setTitleInput] = useState("");
  // const [numberInput, setNumberInput] = useState("");
  // const [messageInput, setMessageInput] = useState("");
  const ValidationSchema = Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی را وارد کنید ."),
    number: Yup.string()
      .required("شماره همراه را وارد کنید.")
      .matches(/^[0-9]{10}$/, "شماره همراه به درستی وارد کنید."),
    title: Yup.string().required(" عنوان را وارد کنید . "),
  });
  const initialValues = {
    fullName: "",
    number: "",
    title: "",
    message: "",
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
    <div className=" px-[26px] md:px-[65px] md:pt-[182px] pt-[126px] md:mb-[180px] flex flex-col items-center mb-[101px]">
      <div className="md:w-[706px]">
        <div className="flex flex-col items-center gap-[22px]  ">
          <p className="font-samim font-bold md:text-[32px] text-[24px] md:leading-11 leading-10 tracking-[1%] text-right">
            رزرو نوبت آنلاین
          </p>
          <p className="font-samim font-bold md:text-[20px] text-[16px] md:leading-[38px] leading-6 tracking-[1%] text-right md:text-[#637083] text-[#414E62] ">
            برای دریافت نوبت لطفا فرم زیر را پر کنید.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
        >
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
              <div className=" flex flex-wrap gap-3.5 justify-center mt-[22px]  ">
                <div>
                  <Input
                    name="fullName"
                    lable={"نام و نام خانوادگی "}
                    placeHolder={"نام و نام خانوادگی خود را وارد کنید."}
                    inputValue={values.fullName}
                    inputChange={(e) =>
                      setFieldValue("fullName", e.target.value)
                    }
                    className="md:w-[706px] md:h-[60px] w-[360px] h-[52px]"
                  />
                  {errors.fullName && touched.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <TelInput
                    name="number"
                    lable={"شماره همراه"}
                    placeHolder={"9** *** ****"}
                    inputValue={values.number}
                    maxNum={10}
                    inputChange={(e) =>
                      /^[0-9]*$/.test(e.target.value)
                        ? setFieldValue("number", e.target.value)
                        : undefined
                    }
                    classStyle="md:w-[266px] md:h-[60px] w-[297px] h-[52px] "
                  />
                  {errors.number && touched.number && (
                    <p className="text-red-500 text-sm">{errors.number}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="title"
                    lable="عنوان "
                    placeHolder={"عنوان را وارد کنید."}
                    inputValue={values.title}
                    inputChange={(e) => setFieldValue("title", e.target.value)}
                    classStyle="md:w-[706px] md:h-[60px] w-[360px] h-[52px]"
                  />
                  {errors.title && touched.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                  )}
                </div>
                <div>
                  <TextArea
                    name="message"
                    lable={"پیام "}
                    placeHolder={" پیام خود را وارد کنید.."}
                    inputValue={values.message}
                    inputChange={(e) =>
                      setFieldValue("message", e.target.value)
                    }
                    classStyle="md:w-[706px] h-[176px] w-[360px]"
                  />
                </div>
                <div>
                  <ButtonRes
                    lable={"ارسال"}
                    classStyle="text-[1rem] md:text-[0.9rem] lg:text-[1.25rem] md:px-[329.5px] px-[161.5px]  "
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
    </div>
  );
}
