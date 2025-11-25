"use client";
import Input from "@/components/common/input";
import { useState } from "react";
import ButtonRes from "@/components/common/button";
import TextArea from "@/components/common/textArea";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form } from "formik";

export default function UserOpinion({ image, title, explain, onLoadData }) {
  // const [errorMessage, setErrorMessage] = useState({});

  const ValidationSchema = Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی خود را وارد کنید ."),
    email: Yup.string()
      .email("ایمیل معتبر نیست.")
      .required("ایمیل خود را وارد کنید."),
    message: Yup.string().required("دیدگاه خود را وارد کنید . "),
  });
  const initialValues = {
    fullName: "",
    email: "",
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
    <div className="flex flex-row justify-between md:px-[65px] px-[26px] items-end ">
      <div className="md:w-[515px] flex flex-col gap-8">
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
              <div className="flex flex-col gap-5">
                <div>
                  <Input
                    name="fullName"
                    lable={"نام و نام خانوادگی "}
                    placeHolder={"نام و نام خانوادگی خود را وارد کنید."}
                    inputValue={values.fullName}
                    inputChange={(e) =>
                      setFieldValue("fullName", e.target.value)
                    }
                    classStyle="md:w-[515px] md:h-[66px] w-full h-[52px]"
                  />
                  {errors.fullName && touched.fullName && (
                    <p className="text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Input
                    name="email"
                    lable={"ایمیل"}
                    placeHolder={"ایمیل خود را وارد کنید."}
                    inputValue={values.email}
                    inputChange={(e) => setFieldValue("email", e.target.value)}
                    classStyle="md:w-[515px] md:h-[66px] w-full h-[52px]"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <TextArea
                    name="message"
                    lable={"دیدگاه"}
                    placeHolder={"دیدگاه خود را وارد کنید...."}
                    inputValue={values.message}
                    inputChange={(e) =>
                      setFieldValue("message", e.target.value)
                    }
                    classStyle="md:w-[515px] md:h-[176px] w-full h-[176px]"
                  />
                  {errors.message && touched.message && (
                    <p className="text-red-600">{errors.message}</p>
                  )}
                </div>
                <ButtonRes
                  lable={"ثبت دیدگاه"}
                  classStyle="  "
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
            </Form>
          )}
        </Formik>
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
