import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosGift } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { RiProductHuntFill } from "react-icons/ri";
const DashBoardBoxes = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div className="box p-5 bg-[#3872fa] cursor-pointer hover:bg-[#000] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <IoIosGift className="text-[50px] text-white" />
            <div className="info w-[70%]">
              <h3 className="text-white">New Orders</h3>
              <b className="text-white">5,027</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-white" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 bg-[#10b981] cursor-pointer hover:bg-[#000] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <FaChartPie className="text-[50px] text-[white]" />
            <div className="info w-[70%]">
              <h3 className="text-white">Sales</h3>
              <b className="text-white">$123,500</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[white]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 bg-[#7928ca] cursor-pointer hover:bg-[#000] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <BsBank2 className="text-[50px] text-[white]" />
            <div className="info w-[70%]">
              <h3 className="text-white">Revenue</h3>
              <b className="text-white">$32,489</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[white]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 bg-[#d60f0f] cursor-pointer hover:bg-[#000] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <RiProductHuntFill className="text-[50px] text-white" />
            <div className="info w-[70%]">
              <h3 className="text-white">Total Products</h3>
              <b className="text-white">8421</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-white" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashBoardBoxes;
