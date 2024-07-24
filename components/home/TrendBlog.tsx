import React from "react";
import Link from "next/link";
import TrendBlogCards from "../shared/BlogCard";
import { fetchProducts } from "@/lib/fetchBlogs";
import Image from "next/image";
import ProductCard from "../shared/ProductCard";

const TrendBlog = async () => {
  const result = await fetchProducts();
  const products = result?.data?.data;

  return (
    <div className="w-full mx-auto relative">
      <div className="relative z-20 mx-auto max-w-[1150px] px-5 pt-20">
        <div>
          <h2 className="font-poppins text-[30px] font-medium text-white sm:text-[48px]">
            Unlock Investment Opportunities
          </h2>
          <p className="text-left font-poppins text-[22px] font-extralight text-white sm:text-[32px]">
            In Cutting-Edge Solutions
          </p>
        </div>
        <div className="mt-5 max-w-[1150px] mx-auto grid gap-x-7 sm:grid-cols-2 md:grid-cols-3">
          {products.length > 0 ? (
            products.map((item: any) => (
              <ProductCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-4 flex h-[40vh] flex-col items-center justify-center">
              <h4 className="text-center text-3xl text-red-500">
                Oops! No trending data found
              </h4>
            </div>
          )}
        </div>
        {products.length > 0 && (
          <div className="flex ">
            <Link
              href="/blogs"
              className="text-[16px] mx-auto font-medium py-2 px-0  text-[#5663FA] hover:text-[#D243FA] active:text-[#B529DC] sm:text-left text-center w-full"
            >
              View More
            </Link>
          </div>
        )}
      </div>
      <div className="absolute top-60  left-0">
        <Image
          src="/assets/vector/vector6.png"
          alt="vector6"
          width={380}
          height={365}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default TrendBlog;
