"use client";

import React, { useRef } from "react";

import { testimonials } from "@/assets/data/testimonials";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import qouteIcon from "@/assets/images/qoute.png";

import Image from "next/image";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function Testimonials() {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-14">
        <div class="grid pt-8 text-left  md:gap-16  md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold text-black/80 mb-5">
              What Our Users Are Saying
            </h2>
            <p className="text-lg font-medium text-black/60">
              At StoreKool, we value the feedback and experiences of our users.
              Hearing how our platform has made a difference in managing
              WooCommerce stores inspires us to keep improving. Here are some
              testimonials from our satisfied users:
            </p>
          </div>
          <div>
            <div className="slider-container">
              <Slider
                {...settings}
                ref={(slider) => {
                  sliderRef = slider;
                }}
              >
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="relative">
                    <div className="flex gap-8 items-start bg-white p-8 rounded min-h-[350px]">
                      <div>
                        <div className="w-32 h-32 relative rounded-full">
                          <Image
                            src={testimonial.image.src}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-black/70 font-medium mb-3">
                          {testimonial.testimonial}
                        </p>
                        <div className="flex items-center gap-5">
                          <span className="text-sm font-semibold text-black/85">
                            {testimonial.date}
                          </span>
                          <a
                            className="font-semibold text-primary underline "
                            href={testimonial.link}
                            target="_blank"
                            rel="noreferer"
                          >
                            Visit
                          </a>
                        </div>
                        <p className="text-sm font-semibold text-primary">
                          {testimonial.user}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0">
                      <div className="relative w-20 h-20 opacity-10">
                        <Image src={qouteIcon.src} layout="fill" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex justify-start items-center gap-4 mt-5">
              <button
                onClick={previous}
                className="w-[40px] h-[40px] border border-primary rounded-full text-xl flex justify-center items-center"
              >
                <FaArrowLeftLong className="text-primary" />
              </button>
              <button
                onClick={next}
                className="w-[40px] h-[40px] border border-primary rounded-full text-xl flex justify-center items-center"
              >
                <FaArrowRightLong className="text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
