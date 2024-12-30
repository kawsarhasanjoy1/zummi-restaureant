import Image from "next/image";
import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CommonSwiper = ({ blogs }: { blogs: any }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="">
          {blogs?.map(
            (blog: {
              _id: React.Key | null | undefined;
              image: string | StaticImport;
            }) => {
              return (
                <SwiperSlide key={blog?._id} className="">
                  <Image
                    src={blog?.image}
                    quality={100}
                    height={700}
                    width={700}
                    alt=""
                  />
                </SwiperSlide>
              );
            }
          )}
        </div>
      </Swiper>
    </div>
  );
};

export default CommonSwiper;
