import "./BannerContainer.css";
const BannerContainer = () => {
  return (
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
          />
          <span className="h-[48px] border border-black p-[11px] rounded-r bg-[#FF444A] text-white">
            Search
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;
