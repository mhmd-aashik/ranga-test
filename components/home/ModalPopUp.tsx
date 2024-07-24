import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SocialIcon } from "react-social-icons";

const ModalPopUp = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="z-40 h-10  w-[150px] rounded-full bg-[#5663FA] text-[16px] font-medium text-white hover:bg-[#D243FA] active:bg-[#B529DC]">
        Contact Us
      </AlertDialogTrigger>
      <AlertDialogContent className="border-purple-500 bg-black !rounded-2xl">
        <div className="flex items-center justify-around gap-1">
          <SocialIcon
            url="https://t.me/rangatechnologies"
            fgColor="white"
            bgColor="transparent"
            className="hover:bg-[#DC22F9] bg-gray-600 rounded-full text-white"
          />
          <SocialIcon
            url="https://x.com/rangatechnology"
            fgColor="white"
            bgColor="transparent"
            className="hover:bg-[#DC22F9] bg-gray-600 rounded-full text-white"
          />
          <SocialIcon
            url="https://api.whatsapp.com/message/XEABYADPSDL2D1?autoload=1&app_absent=0"
            fgColor="white"
            bgColor="transparent"
            className="hover:bg-[#DC22F9] bg-gray-600 rounded-full text-white"
          />
          <SocialIcon
            url="https://www.instagram.com/rangatechnologies/"
            fgColor="white"
            bgColor="transparent"
            className="hover:bg-[#DC22F9] bg-gray-600 rounded-full text-white"
          />
          <SocialIcon
            url="https://www.linkedin.com/company/rangatechnologies/posts/?feedView=all"
            fgColor="white"
            bgColor="transparent"
            className="hover:bg-[#DC22F9] bg-gray-600 rounded-full text-white"
          />
          {/* <SocialIcon
            url="https://www.youtube.com/@DEXVolumeBots"
            fgColor="white"
            bgColor="transparent"
            className="hover:bg-[#DC22F9] bg-gray-600 rounded-full text-white"
          /> */}
          <SocialIcon
            url="https://web.facebook.com/people/Ranga-Technologies/100093439967609/"
            fgColor="white"
            bgColor="transparent"
            className="hover:bg-[#DC22F9] bg-gray-600 rounded-full text-white"
          />
        </div>

        <AlertDialogFooter className="mt-8">
          <AlertDialogCancel className="border-none h-10 w-[126px] rounded-full bg-[#5663FA] text-[16px] font-medium !text-white hover:bg-[#D243FA] active:bg-[#B529DC]">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalPopUp;
