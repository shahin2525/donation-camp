import { useRef, useState } from "react";
import "./BannerContainer.css";
import CardContainer from "../CardContainer/CardContainer";
const BannerContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef("");
  console.log(inputRef);
  const handleSearch = () => {
    setInputValue(inputRef.current.value);
  };
  return (
    <div>
      <div className="banner-img">
        <div className="content_4">
          <h2 className="w-[774px] font-bold text-[48px]">
            I Grow By Helping People In Need
          </h2>
          <div className="mt-10">
            <input
              type="text"
              placeholder="Type here"
              className="w-full max-w-xs border border-black rounded-l p-4 h-[48px] bg-opacity-0 bg-black text-black"
              // onChange={(e) => setInputValue(e.target.value)}
              ref={inputRef}
            />
            <span
              onClick={handleSearch}
              className="h-[48px] border border-black p-[11px] rounded-r bg-[#FF444A] text-white cursor-pointer"
            >
              Search
            </span>
          </div>
        </div>
      </div>
      <CardContainer
        // handleSearch={handleSearch}
        inputValue={inputValue}
      ></CardContainer>
    </div>
  );
};

export default BannerContainer;
