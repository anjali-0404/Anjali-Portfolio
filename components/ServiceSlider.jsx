import {
  RxCrop,
  RxPencil2,
  RxCode,
  RxRocket,
  RxArrowTopRight,
  RxLayers,
  RxGear,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [

  {
    Icon: RxCode,
    title: "Web Development",
    description: "Building responsive websites with React & Next.js.",
  },
  {
    Icon: RxLayers,
    title: "Full Stack",
    description: "Backend APIs + frontend integration & database handling.",
  },
  {
    Icon: RxGear,
    title: "Automation",
    description: "AI-driven workflows and optimization scripts.",
  },
  {
    Icon: RxPencil2,
    title: "UI/UX Design",
    description: "Modern user-friendly interfaces for web & apps.",
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">
              <item.Icon />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
