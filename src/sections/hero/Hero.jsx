import React from "react";
import { CoinList, Header } from "../../components";
import { HeroImage } from "../../assets/img";

const Hero = () => {
  return (
    <section className={`hero max-md:h-auto h-[90vh] `}>
      <CoinList />
      <div className="container mx-auto flex justify-center items-center">
        <div className="container p-2">
          <Header />

          <div className="flex max-md:flex-col h-full justify-between items-center pt-16">
            <div className="des max-md:text-center">
              <h2 className="text-2xl font-bold">SPECIFIC MARKET <span className="text-main-yellow">DATA</span></h2>
              <br />
              <p>
                Categorized and analyzed data with artificial intelligence for <br/>
                you and your company
              </p>
              <br />
              <button className="p-3 px-7 border-2 border-main-yellow text-main-yellow rounded-full hover:bg-main-yellow hover:text-green-500">
                Know More
              </button>
            </div>
            <div className="img-box">
              <img src={HeroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
