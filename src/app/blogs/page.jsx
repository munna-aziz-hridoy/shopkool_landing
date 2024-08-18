"use client";

import React from "react";
import { blogs } from "@/assets/data/blogs";
import Link from "next/link";
import Image from "next/image";

function Blogs() {
  return (
    <section className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-left mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 w-full md:w-1/2">
            Article about multiple woo-commerce store management system
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed w-full md:w-1/2">
            Welcome to our blog! Explore our collection of insightful articles
            and guides designed to help you optimize and manage your WooCommerce
            stores effectively. Find valuable tips, tools, and best practices to
            enhance your e-commerce experience.
          </p>
        </header>

        {blogs.map((blog, i) => (
          <div key={i}>
            <div
              className={`flex  gap-14 my-20 ${
                i % 2 == 0
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2 min-h-[400px] relative shadow rounded">
                <Image objectFit="cover" layout="fill" src={blog.image.src} />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-semibold">{blog.title}</h2>
                <p className="text-lg font-light text-gray-500 mt-3">
                  {blog.description}
                </p>
                <Link href={`/blogs/${blog.slug}`}>
                  <p className="text-primary font-semibold p-2 rounded">
                    Read More...
                  </p>
                </Link>
              </div>
            </div>
            <div
              className={`w-full h-[1px] bg-primary/20 ${
                i === blogs.length - 1 && "hidden"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
