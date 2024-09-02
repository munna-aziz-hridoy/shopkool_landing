"use client";

import React from "react";
import { steps, steps2 } from "@/assets/data/steps";
import Link from "next/link";

function Step({ step }) {
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

      <Link href="/docs">
        <p className="text-primary font-semibold">Show more...</p>
      </Link>
    </div>
  );
}

function Steps() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto py-14">
        <h2 class="text-3xl font-bold text-black/80 mb-5">
          How{" "}
          <span className="text-primary relative">
            StoreKool{" "}
            <span className="absolute bg-primary/30 w-full h-5 left-0 bottom-0 rounded" />{" "}
          </span>{" "}
          Works
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
