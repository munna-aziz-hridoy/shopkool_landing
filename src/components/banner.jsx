import React from "react";

import bannerImg from "@/assets/images/banner.png";

import { CommonSection } from ".";

function Banner() {
  return (
    <CommonSection
      imageSrc={bannerImg.src}
      title={
        <h2 className="text-4xl font-bold text-black/90 leading-snug">
          <span className="text-primary">Simplify </span> your WooCommerce{" "}
          <br /> management with
          <br />
          <span className="text-primary">ShopKool</span>.
        </h2>
      }
      subtitle="Connect, Manage, and Update Multiple Stores Effortlessly."
      content={
        "Are you managing multiple WooCommerce stores? Tired of updating products and orders one by one? ShopKool is here to revolutionize your store management. Connect, update, and manage all your stores from one place with ease."
      }
    />
  );
}

export default Banner;
