"use client";

import Image from "next/image";
import Link from "next/link";
import { FileIcon, ArrowRightUpIcon } from "./icons";

export default function AboutMeSection() {
  return (
    <div className="flex flex-col gap-3 items-start min-h-0 min-w-0 relative shrink-0 w-full flex-1">
      <div className="flex gap-2 items-center relative shrink-0">
        <div className="relative shrink-0 size-4 text-[#5a5a5a]">
          <FileIcon className="size-full" />
        </div>
        <p className="font-roboto font-normal leading-4 relative shrink-0 text-[#5a5a5a] text-xs tracking-[0.4px]">
          Suggested for you
        </p>
      </div>
      <div className="bg-white border border-surface-variant border-solid flex flex-col gap-4 items-start justify-between min-h-0 min-w-0 p-4 relative rounded-2xl shrink-0 w-full flex-1 overflow-hidden">
        <div className="relative rounded-2xl shrink-0 w-[200px] h-[160px] sm:h-[180px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
            <Image
              alt="Profile picture"
              className="absolute h-[133.33%] left-0 max-w-none top-0 w-full"
              src="/fotocv.jpg"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start relative flex-1 min-h-0 w-full overflow-auto">
          <div className="flex flex-col gap-0 items-start relative shrink-0 w-full">
            <p className="font-roboto font-medium leading-5 relative shrink-0 text-[#1e1e1e] text-sm tracking-[0.25px] w-full whitespace-pre-wrap">
              About Me
            </p>
          </div>
          <div className="font-roboto font-normal leading-5 relative shrink-0 text-[#1e1e1e] text-sm tracking-[0.25px] w-full whitespace-pre-wrap">
            <p className="mb-0">
              I'm Tania Pereira, a Product Designer who specializes in turning complex systems into intuitive, scalable experiences.
            </p>
            <p className="mb-0 text-sm">&nbsp;</p>
            <p className="mb-0">
              I thrive in environments where ambiguity, data, and multidisciplinary collaboration intersect, especially
              when AI or technical constraints are part of the challenge. My work spans B2B platforms, operational tools,
              identity systems, logistics, and AI-assisted workflows.
            </p>
            <p className="mb-0 text-sm">&nbsp;</p>
            <p className="mb-0">
              I enjoy designing clarity into messy problems, building patterns that scale, and partnering with engineers,
              PMs, and data scientists to bring impactful products to life.
            </p>
          </div>
        </div>
        <Link href="/about" className="flex gap-2 items-center relative shrink-0 mt-2 hover:opacity-80 transition-opacity">
          <div className="flex flex-col gap-0 items-start relative shrink-0">
            <p className="font-roboto font-medium leading-5 relative shrink-0 text-primary text-sm tracking-[0.25px] w-full whitespace-pre-wrap">
              Read more
            </p>
          </div>
          <div className="relative shrink-0 size-4 text-primary">
            <ArrowRightUpIcon className="size-full" />
          </div>
        </Link>
      </div>
    </div>
  );
}

