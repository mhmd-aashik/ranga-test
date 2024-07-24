import React from "react";
import Image from "next/image";
import ModalPopUp from "./ModalPopUp";

const Hero = () => {
  return (
    <>
      <section className="mx-auto mb-3 flex max-w-[1150px] max-h-[570px] items-center justify-between gap-10 pt-10 px-5">
        <div className="flex w-full max-w-[430px] flex-col gap-5 sm:items-start">
          <h1 className="text-left text-[68px] font-semibold leading-tight text-white sm:leading-[80px]">
            Premier
            <span className="block bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-transparent sm:flex">
              Blockchain
            </span>
            <span className="block bg-gradient-to-r from-[#D243FA] to-[#542CB1] bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="w-[340px] sm:w-[440px] text-left text-[22px] font-medium text-white sm:p-0">
            Cutting-Edge Blockchain Technology. <br /> Secure. Scalable.
            Revolutionary..
          </p>
          <ModalPopUp />
        </div>
        <video
          width="590"
          height="571"
          className="hidden w-full items-start !justify-start sm:h-[500px] sm:max-w-[500px] md:flex -z-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/homevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};

export default Hero;
