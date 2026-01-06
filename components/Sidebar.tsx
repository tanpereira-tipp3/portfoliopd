"use client";

import Link from "next/link";
import { HomeIcon, WorkIcon, StarIcon, PhoneIcon } from "./icons";

export default function Sidebar({ activePage = "home" }: { activePage?: "home" | "work" | "about" | "contact" | "faq" | "inbox" }) {
  return (
    <div className="bg-white flex flex-row md:flex-col w-full md:w-auto border-b md:border-b-0 border-[#e3e3e3] md:h-full items-center md:items-start relative shrink-0 overflow-x-auto">
      <div className="flex flex-row md:flex-col gap-2 md:gap-6 items-center md:items-center justify-start px-4 md:px-6 py-3 md:py-8 relative shrink-0 border-0">
        <Link href="/" className={`${activePage === "home" ? "bg-surface-container-low" : ""} flex flex-row md:flex-col items-center md:items-center p-2 md:p-3 relative rounded-lg shrink-0 w-full hover:bg-surface-container-low transition-colors`}>
          <div className="flex flex-row md:flex-col gap-1.5 md:gap-2 items-center relative shrink-0">
            <div className="relative shrink-0 size-4 text-[#1e1e1e]">
              <HomeIcon className="size-full" />
            </div>
            <p className={`font-roboto ${activePage === "home" ? "font-medium" : "font-normal"} leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px] whitespace-nowrap`}>
              Home
            </p>
          </div>
        </Link>
        <Link href="/work" className={`${activePage === "work" ? "bg-surface-container-low" : ""} flex flex-row md:flex-col gap-1.5 md:gap-2 items-center p-2 md:p-3 relative rounded-lg shrink-0 w-full hover:bg-surface-container-low transition-colors`}>
          <div className="relative shrink-0 size-4 text-[#1e1e1e]">
            <WorkIcon className="size-full" />
          </div>
          <p className={`font-roboto ${activePage === "work" ? "font-medium" : "font-normal"} leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px] whitespace-nowrap`}>
            Work
          </p>
        </Link>
        <Link href="/about" className={`${activePage === "about" ? "bg-surface-container-low" : ""} flex flex-row md:flex-col gap-1.5 md:gap-2 items-center p-2 md:p-3 relative rounded-lg shrink-0 w-full hover:bg-surface-container-low transition-colors`}>
          <div className="relative shrink-0 size-4 text-[#1e1e1e]">
            <StarIcon className="size-full" />
          </div>
          <p className={`font-roboto ${activePage === "about" ? "font-medium" : "font-normal"} leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px] whitespace-nowrap`}>
            About
          </p>
        </Link>
        <Link href="/contact" className={`${activePage === "contact" ? "bg-surface-container-low" : ""} flex flex-row md:flex-col gap-1.5 md:gap-2 items-center p-2 md:p-3 relative rounded-lg shrink-0 w-full hover:bg-surface-container-low transition-colors`}>
          <div className="relative shrink-0 size-4 text-[#1e1e1e]">
            <PhoneIcon className="size-full" />
          </div>
          <p className={`font-roboto ${activePage === "contact" ? "font-medium" : "font-normal"} leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px] whitespace-nowrap`}>
            Contact
          </p>
        </Link>
      </div>
    </div>
  );
}

