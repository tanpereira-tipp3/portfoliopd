"use client";

import Image from "next/image";
import AboutMeSection from "./AboutMeSection";
import FeaturedProjects from "./FeaturedProjects";
import { MessagePlainIcon, AnalyticsIcon, ArrowUpIcon } from "./icons";

export default function MainContent() {
  return (
    <div className="border-[#e3e3e3] border-b-0 md:border-l border-r-0 border-solid border-t flex flex-1 flex-col gap-6 md:gap-12 h-auto md:h-full items-start min-h-0 min-w-0 pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-8 pb-8 relative rounded-tl-0 md:rounded-tl-[24px] shadow-none md:shadow-[0px_16px_32px_-4px_rgba(79,55,138,0.1),0px_4px_4px_-4px_rgba(79,55,138,0.05)] shrink-0">
      <div className="absolute inset-0 overflow-hidden rounded-tl-0 md:rounded-tl-[24px] pointer-events-none">
        <Image
          alt=""
          className="object-cover opacity-[0.15]"
          src="/bg.jpg"
          fill
          style={{ objectPosition: "50% 50%" }}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-4 relative shrink-0 w-full z-10">
        <p className="font-libre-baskerville font-medium italic leading-normal relative shrink-0 text-3xl sm:text-4xl md:text-5xl text-black tracking-0 uppercase">
          Hello there!
        </p>
        <a 
          href="mailto:tanpereira5@gmail.com"
          className="bg-primary flex gap-[10px] items-center justify-center px-6 sm:px-8 py-3 sm:py-4 relative rounded-full shrink-0 w-full sm:w-auto cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.3)] hover:-translate-y-0.5"
        >
          <p className="font-roboto font-medium leading-4 relative shrink-0 text-base sm:text-lg text-white tracking-[0.4px]">
            Send a message
          </p>
          <div className="relative shrink-0 size-5 sm:size-6 text-white">
            <MessagePlainIcon className="size-full" />
          </div>
        </a>
      </div>
      <div className="flex flex-1 flex-col gap-6 md:gap-8 items-start min-h-0 min-w-0 relative shrink-0 w-full z-10 flex-auto md:flex-1">
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
          <div className="flex gap-2 items-center relative shrink-0">
            <div className="relative shrink-0 size-4 text-[#5a5a5a]">
              <AnalyticsIcon className="size-full" />
            </div>
            <p className="font-roboto font-normal leading-4 relative shrink-0 text-[#5a5a5a] text-xs tracking-[0.4px]">
              Analytics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch relative shrink-0 w-full min-w-0">
            <AnalyticsCard title="Professional experience" value="8 years" />
            <AnalyticsCard title="Features developed" value="+30 features" />
            <AnalyticsCard title="Industries" value="8 diverse industries" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch relative flex-auto md:flex-1 w-full min-w-0 min-h-0 md:overflow-hidden md:max-h-full">
          <div className="md:col-span-1 lg:col-span-1 flex flex-col min-h-0 md:max-h-full md:overflow-hidden">
            <AboutMeSection />
          </div>
          <div className="md:col-span-1 lg:col-span-2 flex flex-col min-h-0 md:max-h-full md:overflow-hidden mt-6 md:mt-0">
            <FeaturedProjects />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-surface-variant border-solid flex flex-1 flex-col gap-0 items-start min-h-0 min-w-0 p-4 relative rounded-2xl shrink-0">
      <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
        <div className="flex flex-col gap-0 items-start relative shrink-0 w-full">
          <p className="font-roboto font-medium leading-5 relative shrink-0 text-[#1e1e1e] text-sm tracking-[0.25px] w-full whitespace-pre-wrap">
            {title}
          </p>
        </div>
        <div className="flex gap-2 items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-6 text-[#14ae5c]">
            <ArrowUpIcon className="size-full" />
          </div>
          <p className="font-roboto font-semibold leading-7 relative shrink-0 text-[#1e1e1e] text-[22px] tracking-0 w-full">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

