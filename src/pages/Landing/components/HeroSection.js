import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Swiper core and required modules
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
        <SwiperSlide className="slide1">
          <div className="container">
            <div className="hero__content">
              <h2>
                Welcome to the Police Specialized Services Automation Project
                (POSSAP) Portal
              </h2>
              <p>
                You can pay for services or bills such as Special protection
                services, Guards service, Police extracts etc.
              </p>
              <div className="hero__btn_group">
                <a href="#/" role="button" className="btn  hero__primary_btn">
                  Request Service
                </a>
                <a href="#/" role="button" className="btn  hero__secondary_btn">
                  Make Payment
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
