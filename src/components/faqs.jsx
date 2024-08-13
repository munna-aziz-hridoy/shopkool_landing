"use client";

import React, { useState } from "react";

import { IoMdArrowDropright } from "react-icons/io";

import { faqs } from "@/assets/data/faq";

function Faq({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-primary/40 pb-4">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-semibold text-black/60">{faq.question}</h2>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="outline-none"
        >
          <IoMdArrowDropright fontSize={22} className="text-primary" />
        </button>
      </div>

      <div className={`py-4 ${open ? "block" : "hidden"}`}>
        <p className="text-base font-light">{faq.answer}</p>
      </div>
    </div>
  );
}

function Faqs() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto py-14">
        <h2 class="text-3xl font-bold text-black/80 mb-5">
          Frequently Asked Questions
        </h2>
        <div class="pt-8 text-left  flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <Faq key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
