import { features } from "@/assets/data/feature";
import React from "react";

function FeatureSection() {
  return (
    <section id="features" className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-14">
        <h2 className="text-3xl font-bold text-black/80 text-center mb-5">
          Why Choose{" "}
          <span className="text-primary relative">
            StoreKool{" "}
            <span className="absolute bg-primary/30 w-full h-5 left-0 bottom-0 rounded" />
          </span>
          ?
        </h2>

        <p className="font-light text-black/60 my-4 text-center w-full md:w-2/3 mx-auto">
          Connect, Manage, and Update Multiple Stores Effortlessly with
          StoreKool. Designed for WooCommerce store managers, StoreKool
          streamlines your workflow with powerful bulk update features,
          real-time synchronization, and an intuitive interface.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="w-full shadow bg-white rounded p-5 flex flex-col justify-center items-center gap-4 hover:bg-primary duration-200 hover:-translate-y-4 group"
            >
              <div className="w-24 h-24 bg-primary flex justify-center items-center rounded-full group-hover:bg-white duration-200">
                {feature.icon}
              </div>
              <h2 className="text-primary/80 text-2xl font-semibold text-center group-hover:text-white duration-200">
                {feature.title}
              </h2>
              <p className="font-medium text-black/80 text-center mt-3 mb-5 group-hover:text-white duration-200">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
