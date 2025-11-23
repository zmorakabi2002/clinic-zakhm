import Image from "next/image";

export default function UploadInput({ image, onClickUpload, onFileChange }) {
  return (
    <div className="relative flex flex-col items-center">
      <label
        htmlFor="nursing-card"
        onClick={onClickUpload} // کلیک از والد کنترل می‌شود
        className="flex justify-center items-center gap-2 px-2 w-[125px] h-10 bg-[#FF8039] cursor-pointer rounded-[100px] font-samim font-bold text-[#F9FAFB]"
      >
        بارگذاری
        <Image alt="upload" src={"/images/upload.svg"} width={24} height={24} />
      </label>

      <input
        id="nursing-card"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          onFileChange(file); // فقط فایل را بفرست، نه event
        }}
      />

      {image && (
        <Image
          src={image}
          alt="uploaded"
          width={100}
          height={100}
          className="rounded-[10px] blur-[1px] absolute md:left-[330px] left-33 bottom-0 top-0.5"
        />
      )}
    </div>
  );
}
