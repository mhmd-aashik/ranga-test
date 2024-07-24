"use client";
import Image from "next/image";
import React from "react";

const ReviewCard = (data: any) => {
  const { Name, Country, Rating, Comment, audioLink, Profile } =
    data.attributes;

  const imageData = Profile.data.attributes.url;

  let stars: any;
  if (Rating === 2) {
    stars = Array.from({ length: 2 }, (_, index) => {
      return (
        <Image
          key={index}
          src="/assets/images/Star.png"
          alt="star"
          width={18}
          height={18}
          draggable="false"
        />
      );
    });
  } else if (Rating === 3) {
    stars = Array.from({ length: 3 }, (_, index) => {
      return (
        <Image
          key={index}
          src="/assets/images/Star.png"
          alt="star"
          width={18}
          height={18}
          draggable="false"
        />
      );
    });
  } else if (Rating === 4) {
    stars = Array.from({ length: 4 }, (_, index) => {
      return (
        <Image
          key={index}
          src="/assets/images/Star.png"
          alt="star"
          width={18}
          height={18}
          draggable="false"
        />
      );
    });
  } else if (Rating === 5) {
    stars = Array.from({ length: 5 }, (_, index) => {
      return (
        <Image
          key={index}
          src="/assets/images/Star.png"
          alt="star"
          width={18}
          height={18}
          draggable="false"
        />
      );
    });
  } else {
    stars = null;
  }

  return (
    <div className="mx-auto bg-black/20 my-4 mr-5 max-w-sm gap-5 rounded-xl border border-solid border-fuchsia-400">
      <div className="flex flex-col gap-5 rounded-lg p-5 ">
        <div className="flex gap-10 ">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageData}`}
            alt={Name}
            width={200}
            draggable="false"
            height={200}
            className="size-20 rounded-full object-cover outline outline- outline-fuchsia-500"
          />
          <div>
            <p className="text-white text-[16px] font-semibold">{Name}</p>
            <p className="line-clamp-1 font-[300] text-[#828182] text-[12px]">
              {Country}
            </p>
            <div className="flex gap-1">{stars}</div>
          </div>
        </div>
        <div>
          <p className="text-white text-[12px] font-[300]">{Comment}</p>
          <audio controls className="mt-5 ">
            <source src={audioLink} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
