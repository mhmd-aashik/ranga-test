"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";

const NewsletterForm = () => {
  return (
    <form className="flex grow flex-col justify-end self-stretch text-lg leading-10 text-white max-md:mt-10 max-md:max-w-full">
      <label htmlFor="email" className="max-md:max-w-full">
        Sign up for our newsletter
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email address"
        className=" mt-2 justify-center border-b border-solid border-stone-300 bg-transparent text-stone-300 text-opacity-50 outline-none  max-md:max-w-full"
      />
      <button
        type="submit"
        className="mt-8 self-start whitespace-nowrap rounded-[32px] border border-solid border-white px-9 py-2 text-center text-base font-medium leading-6 max-md:px-5 hover:bg-white/40"
      >
        Subscribe
      </button>
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center self-stretch bg-[#1a1a1a] pb-14 pt-12 px-5 relative mt-auto">
      <div className="w-full max-w-[1130px] justify-between px-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="flex grow flex-col justify-between max-md:mt-10">
              <h2 className="text-4xl font-medium leading-10 text-white">
                Ranga Technologies
              </h2>
              <h3 className="mt-12 text-2xl font-medium leading-8 text-indigo-500 max-md:mt-10">
                Let&lsquo;s Talk
              </h3>
              <div className="flex items-center justify-start gap-3">
                <SocialIcon
                  url="https://www.linkedin.com/company/rangatechnologies/posts/?feedView=all"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://api.whatsapp.com/message/XEABYADPSDL2D1?autoload=1&app_absent=0"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://t.me/rangatechnologies"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://web.facebook.com/people/Ranga-Technologies/100093439967609/"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://www.instagram.com/rangatechnologies/"
                  bgColor="none"
                  className="!size-10"
                />
                <SocialIcon
                  url="https://google.com"
                  bgColor="none"
                  className="!size-10"
                />
              </div>
            </div>
          </section>
          <section className="ml-5  flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
            <NewsletterForm />
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
