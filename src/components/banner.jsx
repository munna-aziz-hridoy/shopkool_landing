import React from "react";

import bannerImg from "@/assets/images/banner.png";
import bannerImg2 from "@/assets/images/banner_2.png";

import { CommonSection } from ".";

function Banner() {
  return (
    <CommonSection
      imageSrc={bannerImg.src}
      imageSrc2={bannerImg2.src}
      title={
        <h2 className="text-4xl font-bold text-black/90 leading-snug">
          <span className="text-primary relative">
            Simplify{" "}
            <span className="absolute bg-primary/30 w-full h-5 left-0 bottom-0 rounded" />{" "}
          </span>{" "}
          your WooCommerce <br /> management with
          <br />
          <span className="text-primary relative">
            StoreKool{" "}
            <span className="absolute bg-primary/30 w-full h-5 left-0 bottom-0 rounded" />
          </span>
          .
        </h2>
      }
      subtitle="Connect, Manage, and Update Multiple Stores Effortlessly."
      content={
        "Are you managing multiple WooCommerce stores? Tired of updating products and orders one by one? StoreKool is here to revolutionize your store management. Connect, update, and manage all your stores from one place with ease."
      }
    />
  );
}

export default Banner;
