"use client";

import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatureCard from "./FeatureCard";

const SwiperSlider = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="w-[280px] h-[380px] md:w-[500px] md:h-[380px] p-8"
    >
      <SwiperSlide className="swiper_slide bg-[#ce1111]">
        <FeatureCard image="/images/i1.svg" title="Web Hosting" />
      </SwiperSlide>
      <SwiperSlide className="swiper_slide bg-[#00233f]">
        <FeatureCard image="/images/i2.svg" title="Shared Hosting" />
      </SwiperSlide>
      <SwiperSlide className="swiper_slide bg-[#027243]">
        <FeatureCard image="/images/i3.svg" title="VPS Hosting" />
      </SwiperSlide>
      <SwiperSlide className="swiper_slide bg-[#844f09]">
        <FeatureCard image="/images/i4.png" title="Wordpress Hosting" />
      </SwiperSlide>
      <SwiperSlide className="swiper_slide bg-[#374e01]">
        <FeatureCard image="/images/i5.png" title="Cloud Hosting" />
      </SwiperSlide>
      <SwiperSlide className="swiper_slide bg-[#b40a2f]">
        <FeatureCard image="/images/i6.png" title="Reseller Hosting" />
      </SwiperSlide>
      <SwiperSlide className="swiper_slide bg-[#08ab9d]">
        <FeatureCard image="/images/i7.png" title="Email Hosting" />
      </SwiperSlide>
      <SwiperSlide className="swiper_slide bg-[#780478]">
        <FeatureCard image="/images/i7.svg" title="E-commerce Hosting" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
