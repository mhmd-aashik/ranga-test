import BlogsItem from "@/components/blog/BlogsItem";
import TrandingSlides from "@/components/blog/TrandingSlides";
import { fetchBlogs, getHotBlogs } from "@/lib/fetchBlogs";
import Image from "next/image";
import React from "react";

export const revalidate = 0;

const Blogs = async () => {
  const blogData = await fetchBlogs();
  const hotBlogs = await getHotBlogs();

  return (
    <div className="w-full mx-auto">
      <div className="relative w-4xl w-full mx-auto">
        <div className="absolute bottom-0 right-0 ">
          <Image
            src="/assets/vector/vector7.png"
            alt="vector8"
            width={312}
            height={270}
            draggable="false"
          />
        </div>
        <div className="mx-auto max-w-[1150px] h-full bg-[#020000] px-5">
          <div>
            <BlogsItem blogs={blogData} hotBlogs={hotBlogs} />
          </div>
          <TrandingSlides />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
