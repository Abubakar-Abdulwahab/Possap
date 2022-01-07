import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-creative/effect-creative";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";

import data from "./data.json";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HeroSection = () => {
  return (
    <section id="hero">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        speed={1000}
        loop={true}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
      >
        {data?.map((info) => (
          <SwiperSlide className={`slide${info.id}`}>
            <div className="container">
              <div className="hero__content">
                {info.miniHeader && <h4>{info.miniHeader}</h4>}
                <h2>{info.title}</h2>
                <p>{info.subtitle}</p>
                <div className="hero__btn_group">
                  <a href="#/" role="button" className="btn  hero__primary_btn">
                    Request Service
                  </a>
                  <a
                    href="#/"
                    role="button"
                    className="btn  hero__secondary_btn"
                  >
                    Make Payment
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
