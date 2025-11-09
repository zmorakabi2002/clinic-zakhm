import Image from "next/image";
import { useState, useEffect } from "react";

export default function UploadInput() {
  const [imageis, setImage] = useState(null);
  const STORAGE_KEY = "uplodedImages";
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setImage(saved);
    }
  }, []);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      localStorage.setItem(STORAGE_KEY, base64);
      setImage(base64);
    };
    reader.readAsDataURL(file);
  };
  const clearImage = () => {
    localStorage.removeItem(STORAGE_KEY);
    setImage(null);
  };

  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="nursing-card"
        className=" flex justify-center items-center gap-[8px] px-[8px] w-[125px] h-[40px] bg-[#FF8039] cursor-pointer rounded-[100px] font-samim font-bold text-[#F9FAFB] leading-6  "
      >
        بارگذاری{" "}
        <Image alt="upload" src={"/images/upload.svg"} width={24} height={24} />
      </label>
      <input
        id="nursing-card"
        type="file"
        // multiple
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />
      {imageis && (
        <div>
          <Image
            src={imageis}
            alt="khkhg"
            width={100}
            height={100}
            className=""
          />{" "}
          <button className="" onClick={() => {}}>
            {" "}
          </button>{" "}
        </div>
      )}
      {/* {preview && <img src={preview} className="" />} */}
    </div>
  );
}
