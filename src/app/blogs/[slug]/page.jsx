"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { blogs } from "@/assets/data/blogs";
import Image from "next/image";
import { Spinner } from "@/components";

function BlogDetails() {
  const params = useParams();

  const [active_blog, setActive_blog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedBlog = blogs.find((blog) => blog.slug === params.slug);
    setActive_blog(selectedBlog);
    setLoading(false);
  }, [params.slug]);

  return (
    <Fragment>
      {loading ? (
        <div className="py-8 flex justify-center items-center min-h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-8  rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {active_blog.title}
          </h1>
          <p className="text-gray-700 mb-4">{active_blog.description}</p>

          {active_blog.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                {section.heading}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: section.content }}
                className="text-gray-700 mb-4"
              />
              {section.image && (
                <div className="w-full min-h-[500px] relative">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    src={section.image.src}
                    alt={section.heading}
                  />
                </div>
              )}
            </div>
          ))}

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            Conclusion
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: active_blog.conclusion }}
            className="text-gray-700 mb-4"
          />
        </div>
      )}
    </Fragment>
  );
}

export default BlogDetails;
