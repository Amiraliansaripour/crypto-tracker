import React from "react";
import { CoinLaptop } from "../../assets/img";

const AboutUs = () => {
  return (
    <div className="w-full bg-main-gray h-auto py-8 mt-10">
      <div className="container mx-auto flex max-xl:flex-col-reverse items-center justify-between">
        <div className="flex flex-col items-start justify-start w-6/12 max-xl:w-full p-4 gap-3">
          <h2 className="text-white text-[42px] font-bold">
            َAbout <span className="text-main-yellow">Us</span>
          </h2>
          <p className="text-main-yellow">
            With the help of artificial intelligence, we simplified the analysis
            of your data for you
          </p>
          <span className="font-bold text-white">We Are AiTradeAll</span>
          <p className="text-white">
            Welcome to AiTradeAll! We're a top AI company specializing in
            financial analysis, providing valuable insights across industries.
            With cutting-edge algorithms, we ensure accurate analysis,
            empowering informed decision-making and revolutionizing financial
            analysis. Our services at AiTradeAll offer unparalleled quality in
            artificial intelligence-based stock market data analysis. Affiliated
            with Lotus Universal Information Technology, a leading IT company,
            we're committed to delivering effective collaborations and better
            results in the future, leveraging our expertise and experience.
          </p>
        </div>
        <div className="flex items-center justify-center w-6/12 max-xl:w-full">
          <div className="w-full  rounded-xl overflow-hidden">
            <img
              src={CoinLaptop}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
