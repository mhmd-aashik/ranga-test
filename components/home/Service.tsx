import React from "react";
import Link from "next/link";
import { fetchServices } from "@/lib/fetchBlogs";
import TrendBlogCards from "../shared/BlogCard";
import Image from "next/image";
import ServiceCard from "../shared/ServiceCard";

const Service = async () => {
  const serviceData = await fetchServices();
  const services = serviceData?.data?.data;

  return (
    <div className="w-full mx-auto relative">
      <div className="mx-auto max-w-[1150px] px-5 mt-5">
        <h2 className="font-poppins text-[30px] font-medium text-white sm:text-[48px]">
          Expert Services for Your Existing Token
        </h2>

        <div className="mt-5 grid gap-x-7 sm:grid-cols-2 md:grid-cols-3">
          {services.length > 0 ? (
            services.map((item: any) => (
              <ServiceCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-4 flex h-[40vh] flex-col items-center justify-center">
              <h4 className="text-center text-3xl text-red-500">
                Oops! No service data found
              </h4>
            </div>
          )}
        </div>
        {services.length > 0 && (
          <div className="mt-2 flex">
            <Link
              href="/blogs"
              className="text-[16px] mx-auto font-medium py-2 px-0 rounded-[10px]  text-[#40E9FD] hover:text-[#D243FA] active:text-[#B529DC] sm:text-left w-full text-center"
            >
              View More
            </Link>
          </div>
        )}
      </div>
      <div className="absolute top-60 right-0">
        <Image
          src="/assets/vector/vector7.png"
          alt="vector7"
          width={380}
          height={365}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Service;
