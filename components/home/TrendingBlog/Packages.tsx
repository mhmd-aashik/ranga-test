import { Check, ChevronsRight, Minus } from "lucide-react";
import React from "react";
import DropDownSelect from "./DropDownSelect";
import { pakageDetails } from "@/constants";
import Image from "next/image";

const Packages = () => {
  return (
    <>
      <div className="mx-auto max-w-[1150px] px-5 mb-10">
        <div className="p-[40px] rounded-[20px] border border-[#FD60F3] bg-[#0B4F99]/30">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-white font-bold text-[20px]">Volume Bot</h2>
            <div className="flex">
              <div className="h-[40px] flex items-center justify-center w-[40px] rounded-full text-white bg-[#5663FA]">
                1
              </div>
              <hr className="w-20 h-1 my-[18px] bg-[#5663FA] mx-auto border border-[#5663FA]" />

              <div className="h-[40px] flex items-center justify-center w-[40px] rounded-full bg-black text-white  border-4 border-[#5663FA]">
                2
              </div>
              <hr className="w-20 h-1 my-[18px] bg-[#5663FA] mx-auto border border-[#5663FA]" />

              <div className="h-[40px] bg-black flex items-center justify-center w-[40px] rounded-full text-white border-4 border-[#5663FA]">
                3
              </div>
            </div>
            <div>
              <ChevronsRight className="text-white h-8 w-8" />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-white font-medium text-[16px]">
              Select Your Volume Bot Network
            </h3>
            <div className="w-full">
              <DropDownSelect />
            </div>

            <div className="mt-5">
              <h3 className="text-white text[16px] font-medium ">
                Select Your Package
              </h3>
              <div className="grid gap-5 rounded-3xl bg-[#101432] py-5 sm:grid-cols-2 md:grid-cols-3">
                {pakageDetails.map((item: any) => (
                  <div
                    className="mx-auto flex w-full flex-col rounded-3xl bg-[#0e1029] shadow-xl outline outline-1 outline-[#40E9FD]"
                    key={item.id}
                  >
                    <div className="px-8 sm:py-4 flex items-start gap-2 flex-col">
                      <h3 className="text-[20px] font-semibold leading-8 tracking-tight text-white flex justify-between gap-3">
                        {item.title}
                        {item.recommand && (
                          <div className="flex gap-10 justify-between">
                            <div className="text-[10px] leading-8 tracking-normal ml-2 rounded-full">
                              <span className="text-black bg-white rounded-full p-1">Recommanded</span>
                            </div>
                            <Image
                              src="/assets/dropDownImg/crown.png"
                              width={100}
                              height={100}
                              alt="crown"
                              className="max-w-7 max-h-7"
                            />
                          </div>
                        )}
                      </h3>
                      <div>
                        <p className="text-base leading-7 text-white/50">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-baseline text-[24px] tracking-tight text-white">
                        <span>$</span>
                        <span className="text-[14px] leading-8 tracking-normal text-gray-500">
                          /(UNLIMITED)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-2">
                      <div className="flex flex-1 flex-col justify-between rounded-2xl bg-[#0e1029] px-3">
                        <ul role="list" className="space-y-6">
                          {item.features.map((feature: any) => (
                            <li className="flex items-start" key={feature.id}>
                              <p className="ml-3 flex items-center gap-2 text-sm leading-6 text-white">
                                <Check className="rounded-full h-4 w-4 bg-blue-800 p-0.5 text-black font-bold" />
                                {feature.name}
                              </p>
                            </li>
                          ))}
                        </ul>
                        <div className="my-5">
                          <p className="inline-block w-full cursor-pointer px-4 py-2 text-center text-sm font-semibold leading-5 bg-[#5663FA] text-white shadow-md rounded-full hover:bg-indigo-700">
                            Select
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Packages;
