import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar fixed z-10 bg-black text-white max-w-6xl bg-opacity-30">
        {/* navbar fixed z-10 text-black max-w-6xl  */}
        {/* navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white */}
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="mr-[48px] font-normal text-[18px]">
            <NavLink to={"/"}>Home</NavLink>
          </div>
          <div className="mr-[48px] font-normal text-[18px]">
            <NavLink to="/donation">Donation</NavLink>
          </div>
          <div className="mr-[48px] font-normal text-[18px]">
            <NavLink to="/statistic">Static</NavLink>
          </div>
          <div className="font-normal text-[18px]">
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
