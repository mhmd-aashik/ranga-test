"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import MobileNav from "../mobile/MobileNav";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-[#020000]">
      <nav className="mx-auto flex max-w-[1150px] px-2 h-[100px] items-center justify-around py-3 ">
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/assets/images/Logo.png"
              alt="logo-img"
              width={140}
              height={40}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5 sm:gap-10">
          <ul className="hidden items-center justify-center gap-10 sm:flex">
            {navLinks.map((link) => {
              const activeLink = pathname === link.path;
              return (
                <Link
                  href={link.path}
                  className={`${
                    activeLink
                      ? "link-animation  !text-blue-500 !underline underline-offset-8"
                      : "link-animation hover:!text-blue-500 !text-white"
                  }`}
                  key={link._id}
                >
                  {link.title}
                </Link>
              );
            })}
          </ul>
          <div className="flex gap-3">
            <ul className="flex gap-5">
              <li>
                <Link href="https://t.me/rangatechnologies">
                  <Image
                    src="/assets/social/telegram.png"
                    alt="telegram-icon"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@DEXVolumeBots">
                  <Image
                    src="/assets/social/Youtube.png"
                    alt="youtube-icon"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/message/XEABYADPSDL2D1">
                  <Image
                    src={"/assets/social/WhatsApp.png"}
                    alt="twitter-icon"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
