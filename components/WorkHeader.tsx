"use client";

import { MessagePlainIcon, BellIcon, SunIcon, SettingsIcon } from "./icons";

export default function WorkHeader() {
  return (
    <div className="bg-white flex items-start justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 relative shrink-0 w-full">
      <h1 className="font-libre-baskerville font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-tight relative shrink-0 text-[#1e1e1e]">
        WORK
      </h1>
      <div className="flex gap-2 sm:gap-4 items-center relative shrink-0">
        <div className="relative shrink-0 size-5 sm:size-6 text-[#1e1e1e]">
          <BellIcon className="size-full" />
        </div>
        <div className="relative shrink-0 size-5 sm:size-6 text-[#1e1e1e]">
          <SunIcon className="size-full" />
        </div>
        <div className="relative shrink-0 size-5 sm:size-6 text-[#1e1e1e]">
          <SettingsIcon className="size-full" />
        </div>
        <a 
          href="mailto:tanpereira5@gmail.com"
          className="bg-primary flex items-center justify-center gap-2 px-4 py-2 rounded-full relative shrink-0 cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.3)] hover:-translate-y-0.5"
        >
          <MessagePlainIcon className="size-4 sm:size-5 text-white" />
          <span className="font-roboto font-medium text-sm sm:text-base text-white tracking-[0.4px] hidden sm:inline">
            Send a message
          </span>
        </a>
      </div>
    </div>
  );
}






