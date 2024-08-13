import React from "react";
import Image from "next/image";

function CommonSection({
  imageSrc,
  reverse = false,
  title,
  subtitle,
  content,
}) {
  return (
    <section className="p-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`w-full flex  py-20 gap-10 ${
            reverse && "flex-row-reverse"
          }`}
        >
          <div className="w-full lg:w-1/2 self-center">
            {title}
            <p className="text-xl font-semibold text-black/75 mt-4">
              {subtitle}
            </p>
            <p className="font-light text-black/60 my-4">{content}</p>
            <button className="border-2 border-primary/80 px-3 py-1 text-white font-medium bg-primary/80 hover:bg-transparent hover:text-primary duration-200 mt-7">
              Try Free Now
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                layout="fill"
                objectFit="contain"
                className="shadow rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonSection;
