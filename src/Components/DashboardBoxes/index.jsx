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
          <div className="box p-5 bg-white cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <IoIosGift className="text-[50px] text-blue-800" />
            <div className="info w-[70%]">
              <h3>New Orders</h3>
              <b>5,027</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-blue-800" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 bg-white cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <FaChartPie className="text-[50px] text-[#10b981]" />
            <div className="info w-[70%]">
              <h3>Sales</h3>
              <b>$123,500</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#10b981]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 bg-white cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <BsBank2 className="text-[50px] text-[#7928ca]" />
            <div className="info w-[70%]">
              <h3>Revenue</h3>
              <b>$32,489</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#7928ca]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5 bg-white cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <RiProductHuntFill className="text-[50px] text-red-800" />
            <div className="info w-[70%]">
              <h3>Total Products</h3>
              <b>8421</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-red-800" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashBoardBoxes;
