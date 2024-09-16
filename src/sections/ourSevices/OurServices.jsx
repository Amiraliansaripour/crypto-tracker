import React from "react";
import { S1,S2,S3 } from "../../assets/img";
import { Button } from "../../components";
const OurServices = () => {
  return (
    <div className="cointainer mx-auto flex flex-col items-center gap-3 mt-10">
      <div className="flex flex-col items-center px-3">
        <h2 className="text-[42px] font-bold">
          Our <span className="text-main-yellow">Services</span>
        </h2>
        <p className="text-center">
          Providing analysis in the context of security and different financial
          markets with up-to-date support
        </p>
      </div>

      <div className="flex max-md:flex-col items-center justify-center gap-3 mt-10">
          <div className="max-w-[261px] h-[300px] flex flex-col items-center justify-around shadow-lg p-3 rounded-xl">
            <div className="bg-main-yellow rounded-full p-2">
              <img src={S1} alt="" className="h-[48px]"/>
            </div>

            <h3 className="font-bold">DIFFERENT MARKETS</h3>
            <p className="text-gray-400 text-center">Any market for analysis can be implemented with any possible dataset</p>
          </div>

          <div className="max-w-[261px] h-[300px] flex flex-col items-center justify-around shadow-lg p-3 rounded-xl">
            <div className="bg-main-yellow rounded-full p-2">
              <img src={S2} alt="" className="h-[48px]"/>
            </div>

            <h3 className="font-bold">SECURITY DATA</h3>
            <p className="text-gray-400 text-center">Any market for analysis can be implemented with any possible dataset</p>
          </div>

          <div className="max-w-[261px] h-[300px] flex flex-col items-center justify-around shadow-lg p-3 rounded-xl">
            <div className="bg-main-yellow rounded-full p-2">
              <img src={S3} alt="" className="h-[48px]"/>
            </div>

            <h3 className="font-bold">EXPERT SUPPORT</h3>
            <p className="text-gray-400 text-center">Any market for analysis can be implemented with any possible dataset</p>
          </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <Button value="View All" />
      </div>
    </div>
  );
};

export default OurServices;
