"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="container mt-5 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-2xl"
        >
          <SwiperSlide>
            <Image
              src="/img2.jpg"
              alt="Example Image"
              width={10}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
          
            <Image src="/img.jpg" alt="Example Image" width={10} height={100} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
