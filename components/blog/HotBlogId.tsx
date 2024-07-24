import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export const revalidate = 0;

const HotBlogId = ({ item }: any) => {
  const { id, attributes } = item;
  const { title, slug, description } = attributes;
  const imageData = attributes.phoneView.data.attributes.formats;
  const imageUrl = imageData?.medium?.url;

  return (
    <>
      <Link
        href={`/hotblog/${slug}`}
        className="z-10 mx-auto mt-4 sm:max-w-[550px] max-w-[442px] rounded-xl bg-gradient-to-r from-[#C946FB] via-[#C946FB] to-[#6161FB] p-[1px]"
      >
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
            alt={title}
            width={550}
            height={410}
            className="max-h-[410px] sm:max-w-[548px] max-w-[442px] overflow-hidden rounded-t-xl object-cover"
          />
        </div>
        <div className="rounded-b-xl bg-[#020000] p-5 px-12">
          <p className="line-clamp-1 font-poppins text-[18px] font-bold text-[#40E9FD]">
            {title}
          </p>
          <p className="line-clamp-2 pt-3 text-[12px] font-poppins font-normal text-white">
            <ReactMarkdown>{description}</ReactMarkdown>
          </p>
        </div>
      </Link>
    </>
  );
};

export default HotBlogId;
