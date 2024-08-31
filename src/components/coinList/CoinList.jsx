import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/autoplay';
import Coin from "./Coin";

const CoinList = () => {
  const coins = ["", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <div className="w-full h-[74px] flex items-center flex-row bg-[#00000085] p-3">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          992: {
            slidesPerView: 7,
          },
        }}

        modules={[Autoplay]}
        draggable={true}
        grabCursor={true}
      >
        {coins.map((coin, index) => {
          return (
            <SwiperSlide  key={index}>
              <Coin
               
                title={"BTC"}
                price={"63000"}
                logo="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png"
                percent={5}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CoinList;
