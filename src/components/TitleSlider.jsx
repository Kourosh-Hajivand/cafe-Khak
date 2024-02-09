/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { categories } from "../../data/products";

// eslint-disable-next-line react/prop-types
function TitleSlider({ selectedIndex }) {
  const filterTitle = categories.filter((item) => item.title);

  return (
    <Swiper
      className="z-30 cursor-pointer rounded-xl "
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={2.5}
      slideToClickedSlide={true}
      spaceBetween={40}
      loop={false}
      grabCursor={true}
      modules={[Pagination]}
      onSlideChange={(e) => console.log(e)}
      onActiveIndexChange={(index) => {
        // setFocusedIndex(index.activeIndex)
        selectedIndex(index.activeIndex);
      }}
    >
      {filterTitle.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={` rounded-xl w-full outline-none   text-sm h-[56px] bg-yellow-50  select-none ${
                  isActive ? "swiper-slide-active   " : "  "
                } flex justify-center items-center`}
                tabIndex="0"
              >
                {item.title}
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default TitleSlider;
