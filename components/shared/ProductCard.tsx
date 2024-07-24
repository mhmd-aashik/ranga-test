import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ item }: any) => {
  const { attributes } = item;
  const { title, slug, description } = attributes;
  const imageData = attributes.phoneView.data.attributes.formats;
  const imageUrl = imageData?.medium?.url;

  return (
    <>
      <Link
        href={`/product/${slug}`}
        className="z-10 mx-auto my-4 max-w-[357px]  rounded-xl bg-gradient-to-r from-[#C946FB] via-[#C946FB] to-[#6161FB] p-[1px]"
      >
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
            alt={title}
            width={400}
            height={230}
            draggable="false"
            className="h-[230px] overflow-hidden rounded-t-xl object-cover"
          />
        </div>
        <div className="rounded-b-xl bg-[#020000] p-5 px-12">
          <p className="line-clamp-1 font-poppins text-[18px] font-bold text-[#40E9FD]">
            {title}
          </p>
          <p className="line-clamp-2 font-poppins pt-3 text-[12px] font-normal text-white">
            {description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
