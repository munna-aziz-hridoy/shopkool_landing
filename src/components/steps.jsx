"use client";

import { steps, steps2 } from "@/assets/data/steps";
import Image from "next/image";
import React, { useState } from "react";

function Step({ step }) {
  const [showMoreActive, setShowMoreActive] = useState(false);

  return (
    <div class="mb-10 ml-5 mt-8">
      <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 relative">
        <p className="absolute text-4xl font-black text-black/20 -top-[35px] -left-[25px]">
          <span className="text-5xl">S</span>tep{" "}
          <span className="text-primary/20">{step.step}</span>
        </p>
        {step.title}
      </h3>
      <p class="text-gray-500 ">{step.content}</p>

      <div
        style={{
          maxHeight: showMoreActive ? "600px" : "0", // Change to maxHeight for smooth transition
          transition: "max-height 700ms ease", // Add easing for smoother effect
        }}
        className={`overflow-auto `}
      >
        <div
          className="raw_content appearance-none"
          dangerouslySetInnerHTML={{ __html: step.details }}
        />
        {step.image.map((img, i) => (
          <div key={i} className="relative w-full h-[400px] mt-3">
            <Image layout="fill" src={img.src} objectFit="contain" />
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMoreActive(!showMoreActive)}
        className="text-primary font-semibold"
      >
        Show {showMoreActive ? "less" : "more"}...
      </button>
    </div>
  );
}

function Steps() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto py-14">
        <h2 class="text-3xl font-bold text-black/80 mb-5">
          How <span className="text-primary">ShopKool</span> Works
        </h2>
        <div class="grid pt-8 text-left border-t border-primary/30 md:gap-16  md:grid-cols-2">
          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <Step step={step} key={step.step} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {steps2.map((step) => (
              <Step step={step} key={step.step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
