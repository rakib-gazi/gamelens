import React from "react";
import HighestRatedReview from "../components/HighestRatedReview";
import SwiperSlider from "../components/SwiperSlider";
import Premium from "../components/Premium";
import Recent from "../components/Recent";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <SwiperSlider></SwiperSlider>
      <div className="container mx-auto">
        <HighestRatedReview></HighestRatedReview>
        <Recent></Recent>
        <Premium></Premium>
        <Newsletter></Newsletter>
      </div>
    </>
  );
};

export default Home;
