"use client";
import ButtonRes from "@/components/common/button";
import CommentCard from "@/components/common/commentCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stars = [
  {
    id: 1,
    user: "محمد رضایی",
    url: "/images/userimg.jpg",
    explainText:
      "تجربیات من در نیک کلینیک بسیار عالی و رضایت‌بخش است. ایشان از برخورد فوق‌حرفه‌ای برخوردارند و کادر ایشان نیز به بهبود مراجعه‌کننده اهمیت می‌دهند.",
    stars: 3,
  },
  {
    id: 2,
    user: "نیما",
    url: "/images/userimg.jpg",
    explainText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    stars: 1,
  },
  {
    id: 3,
    user: "علی",
    url: "/images/userimg.jpg",
    explainText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    stars: 3,
  },
  {
    id: 4,
    user: "محمد",
    url: "/images/userimg.jpg",
    explainText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    stars: 4,
  },
  {
    id: 5,
    user: "رضا",
    url: "/images/userimg.jpg",
    explainText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    stars: 4,
  },
  {
    id: 6,
    user: "سارا",
    url: "/images/userimg.jpg",
    explainText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    stars: 4,
  },
  {
    id: 7,
    user: "کیمیا",
    url: "/images/userimg.jpg",
    explainText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    stars: 4,
  },
];

export default function Commentssection() {
  const router = useRouter();
  const [cards, setCards] = useState(stars);

  const handleClick = () => {
    router.push("/clientSatisfaction");
  };
  const handleCardClick = () => {
    const first = cards[0];
    setCards((prev) => [...prev]);
    setTimeout(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const f = newArr.shift();
        newArr.push(f);
        return newArr;
      });
    }, 300);
  };
  return (
    <div className="lg:mt-17 mt-12.5 lg:mx-16 mx-[1.93rem] flex flex-col">
      <div className="lg:h-[418px] h-[505px] lg:flex lg:flex-row lg:gap-0 flex flex-col gap-[26px] lg:items-end items-center justify-between">
        <div className="lg:w-[36.187rem] w-[22.3rem] lg:h-[312px] h-[120px] flex flex-col justify-center gap-8">
          <p className="font-[samim] font-bold lg:text-[2rem] text-[1.5rem] lg:leading-11 leading-10 text-[#141C24] ">
            در مورد کلینیک نیک چه میشنویم؟
          </p>
          <p className="font-[samim] font-bold lg:text-[1.5rem] text-[1rem] lg:leading-11 leading-6 text-[#414E62] ">
            این ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد کلینیک
            نیک دارند.
          </p>
        </div>

        <div className="lg:w-[485px] lg:h-[418px] w-[22.3rem] h-full flex items-end ">
          <AnimatePresence>
            {cards.slice(0, 3).map((item, index) => {
              const offsetX = index * -20;
              const offsetY = index * -32;
              const rotate = index * -5;

              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={index === 0 ? handleCardClick : undefined}
                  className="absolute cursor-pointer"
                  style={{ zIndex: 10 - index }}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate,
                    x: offsetX,
                    y: offsetY,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: -80, // 💥 حرکت کارت به بالا
                    transition: { duration: 0.3 },
                  }}
                  transition={{
                    duration: 0.35,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  <CommentCard userData={item} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-[26px] ">
        <ButtonRes lable={"ثبت و مشاهده نظرات"} onClickButton={handleClick} />
      </div>
    </div>
  );
}
