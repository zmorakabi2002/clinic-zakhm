import Image from "next/image";

export default function UploadInput({ images = [], onFileChange }) {
  return (
    <div className=" flex flex-col items-center">
      <label
        htmlFor="nursing-card"
        className="flex justify-center items-center gap-2 px-2 w-[125px] h-10 bg-[#FF8039] cursor-pointer rounded-[100px] text-white"
      >
        بارگذاری
        <Image alt="upload" src={"/images/upload.svg"} width={24} height={24} />
      </label>

      <input
        id="nursing-card"
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          onFileChange(files);
        }}
      />
      <div className=" md:w-[200px] w-[100px] flex flex-wrap md:-mt-14 -mt-15 md:ml-100 ml-60 gap-1 ">
        {images.length > 0 &&
          images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="uploaded"
              width={75}
              height={50}
              className="blur-[1px] rounded-lg md:h-[50px] md:w-[75px] h-[45px] w-[45px] "
            />
          ))}
      </div>
    </div>
  );
}
