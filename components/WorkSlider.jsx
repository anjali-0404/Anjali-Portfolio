import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "RoomMateMatch",
          path:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&q=80&w=800&auto=format",
          link: "https://github.com/anjali-0404/RoomMateMatch",
        },
        {
          title: "Smart Surveillance",
          path:
            "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&q=80&w=800&auto=format",
          link: "https://github.com/anjali-0404/smartsurveillance",
        },
        {
          title: "File Encryption Tool",
          path:
            "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&q=80&w=800&auto=format",
          link: "https://github.com/anjali-0404/fileencrypt",
        },
        {
          title: "Expense Tracker",
          path:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&q=80&w=800&auto=format",
          link: "https://github.com/anjali-0404/expense-tracker",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                key={imageI}
                className="relative rounded-lg overflow-hidden group"
              >
                {/* FIXED IMG TAG — always works! */}
                <img
                  src={image.path}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                {/* hover text */}
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                  <Link
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  >
                    <div>{image.title}</div>

                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      VIEW
                    </div>

                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <BsArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
