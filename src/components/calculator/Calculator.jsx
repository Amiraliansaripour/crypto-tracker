import React from "react";

const Calculator = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-[500px] max-sm:w-[365px] h-[500px] max-md: bg-gradient-to-t from-orange-300 to-yellow-200 rounded-full">
        <div className="w-[450px] h-[450px] flex-col border-2 border-gray-300 bg-white rounded-lg overflow-hidden">
          <div className="w-full h-[60px] flex items-center justify-center bg-[#2E2A22] text-white">
            Currency Converter
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-3 p-2">
              <label htmlFor="" className="text-gray-700 font-semibold">
                Crypto Type
              </label>
              <input
                type="text"
                placeholder="select"
                className="bg-[#F6F6F6] w-full h-[46px] outline-0 rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col gap-3 p-2">
              <label htmlFor="" className="text-gray-700 font-semibold">
                Amount
              </label>
              <input
                type="number"
                placeholder="2"
                className="bg-[#F6F6F6] w-full h-[46px] outline-0 rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col gap-3 p-2">
              <label htmlFor="" className="text-gray-700 font-semibold">
                Seeking Crypto Amount
              </label>
              <div
                type="number"
                className="bg-[#F6F6F6] w-full h-[46px] outline-0 rounded-lg p-3"
              >
                $156700
              </div>
            </div>

            <div className="flex flex-col gap-3 p-2">
              <button className="bg-main-yellow rounded-full p-3">Convert</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
