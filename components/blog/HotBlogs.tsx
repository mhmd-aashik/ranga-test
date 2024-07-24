"use client";
import { useState, useEffect } from "react";
import HotBlogId from "./HotBlogId";

const HotBlogs = ({ hotBlogs }: any) => {
  const [isClient, setIsClient] = useState(false);
  const hotBlogsData = hotBlogs?.data?.data;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mx-auto max-w-[1150px] grid gap-5 lg:grid-cols-2">
      {isClient &&
        hotBlogsData?.map((item: any) => (
          <HotBlogId key={item.id} item={item} />
        ))}
    </div>
  );
};

export default HotBlogs;
