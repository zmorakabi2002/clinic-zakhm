export default function ButtonRes({
  lable,
  firstIcon,
  secondIcon,
  loading,
  isDisable,
  type = "first",
  onClickButton,
  classStyle = "md:text-[1.25rem] text-[1rem] md:px-[26px] px-[20px]  ",
}) {
  return (
    <>
      {type === "first" ? (
        <div
          tabIndex={0}
          className={` ${
            isDisable
              ? "bg-[#CED2DA] text-[#637083] focus:bg-[#CED2DA]"
              : "bg-[#FF8039] border-[#FF8039] hover:bg-[#FF5B00] text-white focus:bg-[#FF8039]"
          }   flex justify-center items-center font-bold  border-[1px] w-fit md:h-[52px] h-[40px] md:rounded-[50px] rounded-[100px] md:px-[26px] px-[20px] md:py-[12px] py-[8px] gap-2 cursor-pointer ${classStyle}`}
          onClick={onClickButton}
        >
          {firstIcon ? (
            <img src={firstIcon} alt="firsticon" className="w-[28px]" />
          ) : (
            ""
          )}
          <div>{lable}</div>
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              {secondIcon ? (
                <img src={secondIcon} alt="secondIcon" className={`w-[28px]`} />
              ) : (
                ""
              )}
            </>
          )}
        </div>
      ) : (
        <div
          tabIndex={0}
          className={` ${
            isDisable
              ? "bg-[#FFFFFF] border-[2px] border-[#CED2DA] text-[#637083] "
              : "bg-[#FFFFFF] border-[#086391] border-[2px] text-[#141C24]  hover:bg-[#FFFFFF] hover:text-[#202B37] hover:border-[#075379] hover:border-[2px] "
          }   flex justify-center items-center  font-bold  border-[2px] focus:bg-[#F2F4F7] focus:border-[#086391] focus:border-[2px] focus:text-[#086391] w-fit md:h-[52px] h-[40px] rounded-[50px] px-[26px] py-[12px] gap-2 cursor-pointer ${classStyle} `}
          onClick={onClickButton}
        >
          {firstIcon ? (
            <img src={firstIcon} alt="firsticon" className="w-[28px]" />
          ) : (
            ""
          )}
          <div>{lable}</div>
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              {secondIcon ? (
                <img src={secondIcon} alt="secondIcon" className={`w-[28px]`} />
              ) : (
                ""
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
