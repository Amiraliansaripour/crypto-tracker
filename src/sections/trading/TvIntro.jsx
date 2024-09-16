import React from "react";
import { Laptop } from "../../assets/img";
const TvIntro = () => {
  return (
    <div className="w-full relative mt-14">
      <div className="tv-intro-shape w-[70%] max-md:w-full h-[100vh] max-md:h-auto absolute top-0 left-0 bg-[#5f5f5f57]"></div>
      <div className="container mx-auto flex max-md:flex-col items-center ">
        <img
          src={Laptop}
          alt=""
          className="absolute max-md:relative w-[60%] right-0 z-10"
        />

        <div className="flex flex-col">
          <h2 className="text-[32px] font-semibold mix-blend-multiply max-md:text-center">
            Tradingview <span className="text-main-yellow">Chart</span>
          </h2>
          <p className="w-[350px] mix-blend-multiply z-10 mt-5 p-2 max-md:text-center">
            AItradeAll leverages the power of TradingView technology to present
            trading data on dynamic charts. TradingView is a renowned charting
            platform, favored by millions of traders and investors globally. It
            provides cutting-edge charting tools and a collaborative space for
            market enthusiasts. With TradingView, our users in Oman can track
            key upcoming events, understand how to read the forex economic
            calendar, chat, create charts, and prepare for successful trades
          </p>
        </div>
      </div>
    </div>
  );
};

export default TvIntro;
