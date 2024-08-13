import React from "react";

import bannerImg from "@/assets/images/banner.png";

import { CommonSection } from ".";

function SectionTwo() {
  return (
    <CommonSection
      reverse
      imageSrc={bannerImg.src}
      title={
        <h2 className="text-6xl font-black text-black/90 leading-snug">
          <span className="text-primary">Tech talent </span> isn't <br /> bound
          to one place.
          <br />
          <span className="text-primary">Neither are we.</span>
        </h2>
      }
      subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dicta odit adipisci doloremque vitae a tenetur voluptatum pariatur magni porro!"
    />
  );
}

export default SectionTwo;
