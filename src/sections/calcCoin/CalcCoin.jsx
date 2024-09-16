import React from "react";
import { Calculator, CoinMiniTable } from "./../../components";
const CalcCoin = () => {
  return (
    <div className="container mx-auto flex items-center justify-center">
      <div className="container flex max-xl:flex-col items-center justify-between p-2">
        <Calculator />

        <CoinMiniTable />
      </div>
    </div>
  );
};

export default CalcCoin;
