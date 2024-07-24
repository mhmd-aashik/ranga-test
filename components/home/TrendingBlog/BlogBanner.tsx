"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import router from "next/router";
import Packages from "./Packages";

interface BlogBannerProps {
  title: string;
  slug: string;
  description: any;
  desktopView: string;
}

const BlogBanner = ({
  title,
  slug,
  description,
  desktopView,
}: BlogBannerProps) => {
  const imageData = (desktopView as any)?.data?.attributes?.formats;
  const imageUrl = imageData?.large?.url;

  const truncateDescription =
    description.length > 600 ? description.slice(0, 600) + "..." : description;

  const [packages, setPackages] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-[1150px] px-5 mb-10">
        <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
          Trending topic of this week
        </h2>
      </div>
      {!packages ? (
        <>
          <div className="overflow-hidden rounded-3xl bg-black border border-[#B529DC]">
            <Image
              src={`http://92.205.233.9:1338${imageUrl}`}
              alt={`${title}`}
              width={1700}
              height={700}
              className="max-h-[440px] rounded-t-3xl bg-center object-cover"
            />
            <div className="p-8">
              <div>
                <h2 className="pb-8 font-bold text-[#5663FA] sm:text-[20px]">
                  {title}
                </h2>
                <div className=" max-h-[800px] overflow-auto text-[18px] font-[300] text-white">
                  <Markdown>{truncateDescription}</Markdown>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <Link
                  href={`/trendblog/${slug}`}
                  className="text-[16px] font-medium text-[#5663FA] hover:text-[#D243FA] active:text-[#B529DC]"
                >
                  Read More
                </Link>
                <Button
                  onClick={() => setPackages(true)}
                  className="h-10 w-[140px] rounded-full bg-[#5663FA] hover:bg-[#D243FA] text-white active:bg-[#B529DC]"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Packages />
      )}
    </>
  );
};

export default BlogBanner;
