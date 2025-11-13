"use client";

import { createContext, useContext } from "react";

const data = [
  {
    id: "1",
    name: "",
    title: "وکیوم‌تراپی",
    explain:
      "با اعمال فشار منفی، ترشحات زخم خارج و جریان خون در ناحیه افزایش می‌یابد تا روند ترمیم سرعت بگیرد.",
    img: "/images/aboutclinic.jpg",
  },
  {
    id: "2",
    name: "",
    title: " لیزر و نوردرمانی",
    explain:
      "تابش کنترل‌شده‌ی نور قرمز باعث تحریک ترمیم بافت و بهبود زخم‌های مزمن و دیابتی می‌شود.",
    img: "/images/aboutclinic.jpg",
  },
  {
    id: "3",
    name: "",
    title: "PRP",
    explain:
      "پلاسمای غنی از پلاکت، با تحریک سلول‌های ترمیمی بدن، به بهبود سریع‌تر زخم و کاهش التهاب کمک می‌کند.",
    img: "/images/aboutclinic.jpg",
  },
  {
    id: "4",
    name: "",
    title: "اوزون‌تراپی",
    explain:
      "تزریق یا تماس موضعی اوزون باعث اکسیژن‌رسانی بهتر و کاهش عفونت در زخم‌های مزمن می‌شود.",
    img: "/images/aboutclinic.jpg",
  },
  {
    id: "5",
    name: "",
    title: " لارو درمانی",
    explain:
      "درمان با لاروهای استریل به پاک‌سازی بافت‌های مرده کمک می‌کند و روند ترمیم را تسریع می‌بخشد.",
    img: "/images/aboutclinic.jpg",
  },
  {
    id: "6",
    name: "",
    title: "پانسمان نوین",
    explain:
      "پانسمان‌های مدرن با حفظ رطوبت کنترل‌شده، محیط ایده‌آلی برای ترمیم زخم ایجاد می‌کنند.",
    img: "/images/aboutclinic.jpg",
  },
];

const DataConstext = createContext(data);

export const DataProvider = ({ children }) => {
  return (
    <DataConstext.Provider value={data}> {children}</DataConstext.Provider>
  );
};

export const useData = () => useContext(DataConstext);
