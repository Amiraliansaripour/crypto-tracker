import React from "react";
import { Calculator, CoinMiniTable } from "./../../components";
const CalcCoin = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container flex max-md:flex-col items-center justify-between p-2">
        <Calculator />

        <CoinMiniTable />
      </div>
    </div>
  );
};

export default CalcCoin;
