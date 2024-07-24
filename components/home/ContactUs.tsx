"use client";

import Image from "next/image";
import { Button } from "../ui/button";

const ContactUs = () => {
  return (
    <div className="mx-auto w-full relative">
      <div className="mx-auto mt-[44px] w-fit sm:w-[1150px] px-5 z-40 pb-6 sm:pb-3">
        <h2 className="text-[48px] font-medium text-white">Contact us </h2>
        <div className="mx-auto flex items-center justify-between gap-5 -pt-10">
          <div className="w-full mx-auto ">
            <form action="" className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-b mx-auto w-[340px] sm:w-[538px] border-[#C9C9C9]/40 py-2 text-white focus:border-[#C9C9C9]/40 focus:outline-none placeholder:text-[#C9C9C9]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b mx-auto w-[340px] sm:w-[538px] border-[#C9C9C9]/40 py-2 text-white focus:border-[#C9C9C9]/40  focus:outline-none  placeholder:text-[#C9C9C9] "
                />
              </div>
              <div className="flex flex-col gap-2 w-[340px] sm:w-[538px]">
                <label htmlFor="" className="text-[#C9C9C9]">
                  Project Details
                </label>
                <textarea
                  name="text"
                  className="bg-transparent border p-4 mx-auto w-full border-[#C9C9C9]/40 py-2 text-white focus:border-[#C9C9C9]/40  focus:outline-none h-[160px]  placeholder:text-[#C9C9C9]/40  rounded-[20px]"
                />
              </div>
              <Button className="h-9 rounded-full bg-[#5663FA] hover:bg-[#D243FA] active:bg-[#B529DC] text-white w-[180px]">
                Send request
              </Button>
            </form>
          </div>

          <Image
            src="/assets/images/formImg.png"
            alt="hero"
            width={527}
            height={416}
            className="mx-auto hidden h-[416px] w-[527px] items-center justify-center sm:flex"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-50">
        <Image
          src="/assets/vector/vector8.png"
          alt="vector8"
          width={312}
          height={270}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ContactUs;
