import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex sm:hidden">
        <Menu className="flex size-10 rounded-full bg-[#5663FA] p-1 text-white sm:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-[#020000]">
        <SheetHeader>
          <Image
            src="https://solanavolumebooster.com/_next/image?url=%2Fassets%2FLogo.png&w=256&q=75"
            alt="logo-img"
            width={140}
            height={40}
            className="block"
          />
        </SheetHeader>

        <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <ul className="flex flex-col items-center justify-center gap-5">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link._id}
                className="text-[30px] text-white"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
