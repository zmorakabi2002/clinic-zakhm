import Image from "next/image";

export default function UploadProf({ images, onClickUpload, onFileChange }) {
  return (
    <div className="relative flex flex-col items-center">
      <label
        htmlFor="Profile-img"
        onClick={onClickUpload} // کلیک از والد کنترل می‌شود
        className="flex flex-col
        
        items-center gap-3"
      >
        <Image
          src={images ? `/images/${images}` : "/images/user-avatar.svg"}
          alt="user-avatar"
          width={100}
          height={100}
          className="border-2 border-[#e1e4e9] p-1.5 rounded-[50px] w-[100px] h-[100px]"
        />
        <p className="text-[#74777c] text-[12px]"> انتخاب پروفایل</p>
      </label>

      <input
        id="Profile-img"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          console.log("file is : ", file);
          onFileChange(file); // فقط فایل را بفرست، نه event
        }}
      />

      {/* {images.length > 0 && (
        <Image
          src={images}
          alt="uploaded"
          width={100}
          height={100}
          className="rounded-[10px] blur-[1px] absolute md:left-[330px] left-33 bottom-0 top-0.5"
        />
      )} */}
    </div>
  );
}
