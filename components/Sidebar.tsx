"use client";

import Link from "next/link";
import { HomeIcon, WorkIcon, StarIcon, PhoneIcon } from "./icons";

export default function Sidebar({ activePage = "home" }: { activePage?: "home" | "work" | "about" | "contact" | "faq" | "inbox" }) {
  return (
    <>
      {/* Mobile: Bottom navigation bar */}
      <div className="md:hidden bg-white flex flex-row w-full border-t border-[#e3e3e3] items-center fixed bottom-0 left-0 right-0 z-50 shadow-[0_-2px_8px_rgba(0,0,0,0.1)]">
        <div className="bg-[#f7f2fa] rounded-2xl mx-4 my-2 flex flex-row items-center justify-around px-2 py-2 w-full">
          <Link href="/" className="flex flex-col items-center gap-1 p-2 relative shrink-0">
            <div className={`relative shrink-0 size-5 ${activePage === "home" ? "text-primary" : "text-[#1e1e1e]"}`}>
              <HomeIcon className="size-full" />
            </div>
            <p className={`font-roboto font-normal leading-4 relative shrink-0 text-xs tracking-[0.4px] ${activePage === "home" ? "text-primary" : "text-[#1e1e1e]"}`}>
              Home
            </p>
          </Link>
          <Link href="/work" className="flex flex-col items-center gap-1 p-2 relative shrink-0">
            <div className={`relative shrink-0 size-5 ${activePage === "work" ? "text-primary" : "text-[#1e1e1e]"}`}>
              <WorkIcon className="size-full" />
            </div>
            <p className={`font-roboto font-normal leading-4 relative shrink-0 text-xs tracking-[0.4px] ${activePage === "work" ? "text-primary" : "text-[#1e1e1e]"}`}>
              Work
            </p>
          </Link>
          <Link href="/about" className="flex flex-col items-center gap-1 p-2 relative shrink-0">
            <div className={`relative shrink-0 size-5 ${activePage === "about" ? "text-primary" : "text-[#1e1e1e]"}`}>
              <StarIcon className="size-full" />
            </div>
            <p className={`font-roboto font-normal leading-4 relative shrink-0 text-xs tracking-[0.4px] ${activePage === "about" ? "text-primary" : "text-[#1e1e1e]"}`}>
              About
            </p>
          </Link>
          <Link href="/contact" className="flex flex-col items-center gap-1 p-2 relative shrink-0">
            <div className={`relative shrink-0 size-5 ${activePage === "contact" ? "text-primary" : "text-[#1e1e1e]"}`}>
              <PhoneIcon className="size-full" />
            </div>
            <p className={`font-roboto font-normal leading-4 relative shrink-0 text-xs tracking-[0.4px] ${activePage === "contact" ? "text-primary" : "text-[#1e1e1e]"}`}>
              Contact
            </p>
          </Link>
        </div>
      </div>

      {/* Desktop: Left sidebar */}
      <div className="hidden md:flex md:flex-col bg-white w-auto border-b-0 border-l border-[#e3e3e3] h-full items-start relative shrink-0">
        <div className="flex flex-col gap-6 items-center justify-start px-6 py-8 relative shrink-0 border-0">
          <Link href="/" className={`${activePage === "home" ? "bg-surface-container-low" : ""} flex flex-col items-center p-3 relative rounded-lg shrink-0 w-full hover:bg-surface-container-low transition-colors`}>
            <div className="flex flex-col gap-2 items-center relative shrink-0">
              <div className="relative shrink-0 size-4 text-[#1e1e1e]">
                <HomeIcon className="size-full" />
              </div>
              <p className={`font-roboto ${activePage === "home" ? "font-medium" : "font-normal"} leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px] whitespace-nowrap`}>
                Home
              </p>
            </div>
          </Link>
          <Link href="/work" className={`${activePage === "work" ? "bg-surface-container-low" : ""} flex flex-col gap-2 items-center p-3 relative rounded-lg shrink-0 w-full hover:bg-surface-container-low transition-colors`}>
            <div className="relative shrink-0 size-4 text-[#1e1e1e]">
              <WorkIcon className="size-full" />
            </div>
            <p className={`font-roboto ${activePage === "work" ? "font-medium" : "font-normal"} leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px] whitespace-nowrap`}>
              Work
            </p>
          </Link>
          <Link href="/about" className={`${activePage === "about" ? "bg-surface-container-low" : ""} flex flex-col gap-2 items-center p-3 relative rounded-lg shrink-0 w-full hover:bg-surface-container-low transition-colors`}>
            <div className="relative shrink-0 size-4 text-[#1e1e1e]">
              <StarIcon className="size-full" />
            </div>
            <p className={`font-roboto ${activePage === "about" ? "font-medium" : "font-normal"} leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px] whitespace-nowrap`}>
              About
            </p>
          </Link>
          <Link href="/contact" className={`${activePage === "contact" ? "bg-surface-container-low" : ""} flex flex-col gap-2 items-center p-3 relative rounded-lg shrink-0 w-full hover:bg-surface-container-low transition-colors`}>
            <div className="relative shrink-0 size-4 text-[#1e1e1e]">
              <PhoneIcon className="size-full" />
            </div>
            <p className={`font-roboto ${activePage === "contact" ? "font-medium" : "font-normal"} leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px] whitespace-nowrap`}>
              Contact
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

