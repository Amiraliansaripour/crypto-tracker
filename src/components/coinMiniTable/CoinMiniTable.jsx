import React from "react";

const CoinMiniTable = () => {
  return (
    <div className="flex items-center max-lg:mt-10">
      <div className="flex flex-col items-center justify-center w-[500px] max-sm:w-[365px] max-xl:max-w-2xl gap-3">
        <h2 className="font-bold">Crypto Currency Pricing Table</h2>
        <table className="w-full border-[1px] rounded-xl ">
          <tr className="border-[1px]">
            <td className="px-4 py-1">Name</td>
            <td className="px-4 py-1">Price</td>
            <td className="px-4 py-1">24h Change</td>
          </tr>
         {
          ["","","","","",""].map((coin)=>{
            return(
              <tr className="border-[1px]">
              <td className="px-4 py-3 flex items-center gap-2 cursor-pointer">
                <div className="img-box w-8 h-8 rounded-full bg-main-yellow">
                  <img src="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png" className="w-full h-full object-cover" alt="" />
                </div>
                <span>BTC</span>
              </td>
              <td className="px-4 py-3">45.000 $</td>
              <td className="px-4 py-3 text-green-500">+24 %</td>
            </tr>
            )
          })
         }
         <tr className="border-[1px]">
              <td className="px-4 py-3 flex items-center gap-2">
                <span className="text-lg text-gray-400">220 more record</span>
              </td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3 text-right cursor-pointer">View all</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default CoinMiniTable;
