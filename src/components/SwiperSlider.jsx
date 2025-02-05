import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import zelda from "../assets/zelda.webp";
import war from "../assets/war.jpg";
import legacy from "../assets/legacy.jpg";
import apex from "../assets/apex.jpg";
import warzone from "../assets/warzone.avif";
import pubg from "../assets/pubg.jpg";

import { Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const SwiperSlider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={warzone}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[550px] w-full "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold bg-logo text-white p-2 rounded-xl">
                <Typewriter words={['Call of Deauty: Warzone']} loop={true}/>
                
              </h2>
              <p className="text-xs md:text-base lg:text-lg bg-logo text-white  p-2 rounded-xl max-w-[90%] lg:max-w-[70%]">
                
              Call of Duty: Warzone was a 2020 free-to-play battle royale first-person shooter game developed by Raven Software and Infinity Ward and published by Activision.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={war}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[550px] w-full "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold bg-logo text-white p-2 rounded-xl">
              <Typewriter words={['God of War Ragnarök']} loop={true}/>
              
              </h2>
              <p className="text-xs md:text-base lg:text-lg bg-logo text-white  p-2 rounded-xl max-w-[90%] lg:max-w-[70%]">
              God of War Ragnarök is a 2022 action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={legacy}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[550px] w-full "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold bg-logo text-white p-2 rounded-xl">
              <Typewriter words={['Hogwarts Legacy']} loop={true}/>
              
              </h2>
              <p className="text-xs md:text-base lg:text-lg bg-logo text-white  p-2 rounded-xl max-w-[90%] lg:max-w-[70%]">
              Hogwarts Legacy is a 2023 action role-playing game developed by Avalanche Software and published by Warner Bros. Games under its Portkey Games label. It is part of the Wizarding World franchise.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={apex}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[550px] w-full "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold bg-logo text-white p-2 rounded-xl">
              <Typewriter words={['Apex Legends']} loop={true}/>
              
              </h2>
              <p className="text-xs md:text-base lg:text-lg bg-logo text-white  p-2 rounded-xl max-w-[90%] lg:max-w-[70%]">
              Apex Legends is a 2019 battle royale-hero shooter video game developed by Respawn Entertainment and published by Electronic Arts, set in the same science fiction universe as Respawn's Titanfall series. 
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={pubg}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[550px] w-full "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold bg-logo text-white p-2 rounded-xl">
              <Typewriter words={["PUBG : PlayerUnknown's Battlegrounds"]} loop={true}/>
              
              </h2>
              <p className="text-xs md:text-base lg:text-lg bg-logo text-white  p-2 rounded-xl max-w-[90%] lg:max-w-[70%]">
              PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds) is a 2017 battle royale video game published by Krafton, and developed by Krafton's PUBG Studios. The game was inspired by the Japanese film Battle Royale (2000).
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={zelda}
              alt=""
              className="h-[250px] md:h-[300px] lg:h-[550px] w-full "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold bg-logo text-white p-2 rounded-xl">
              <Typewriter words={['The Legend of Zelda']} loop={true}/>
              
              </h2>
              <p className="text-xs md:text-base lg:text-lg bg-logo text-white  p-2 rounded-xl max-w-[90%] lg:max-w-[70%]">
              The Legend of Zelda is a media franchise created by the Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
