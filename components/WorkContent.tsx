"use client";

import Image from "next/image";
import Link from "next/link";
import { MessagePlainIcon } from "./icons";
import { projects } from "@/data/projects";

// Tag color mapping - each tag has a specific color
const getTagColor = (tag: string): string => {
  const tagColors: { [key: string]: string } = {
    "SaaS": "bg-[rgba(81,128,164,0.2)] group-hover:bg-[rgba(81,128,164,0.3)]",
    "B2B": "bg-[rgba(0,168,25,0.2)] group-hover:bg-[rgba(0,168,25,0.3)]",
    "AI": "bg-[rgba(103,80,164,0.2)] group-hover:bg-[rgba(103,80,164,0.3)]",
    "Logistics Tech": "bg-[rgba(81,128,164,0.2)] group-hover:bg-[rgba(81,128,164,0.3)]",
    "Logistics tech": "bg-[rgba(81,128,164,0.2)] group-hover:bg-[rgba(81,128,164,0.3)]",
    "Compliance": "bg-[rgba(255,152,0,0.2)] group-hover:bg-[rgba(255,152,0,0.3)]",
    "Digital twin": "bg-[rgba(156,39,176,0.2)] group-hover:bg-[rgba(156,39,176,0.3)]",
  };
  return tagColors[tag] || "bg-[rgba(128,128,128,0.2)] group-hover:bg-[rgba(128,128,128,0.3)]";
};

export default function WorkContent() {
  // Determine which projects should span full width (every 3rd project starting from 1st)
  const getSpanFull = (index: number) => {
    return index % 3 === 0;
  };

  // Get different background color for each card
  const getCardBgColor = (index: number): string => {
    const colors = [
      "bg-primary-fixed",
      "bg-inverse-on-surface",
      "bg-[#e9ebff]",
      "bg-[#f0f4ff]",
      "bg-[#fff4e6]",
      "bg-[#f5f0ff]",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-[#fafafa] border-[#e3e3e3] border-b-0 md:border-l border-r-0 border-solid border-t flex flex-col gap-6 md:gap-8 items-start min-h-0 min-w-0 p-4 sm:p-6 md:p-8 relative rounded-tl-0 md:rounded-tl-[24px] shadow-none md:shadow-[0px_16px_32px_-4px_rgba(79,55,138,0.1),0px_4px_4px_-4px_rgba(79,55,138,0.05)] shrink-0 w-full flex-1 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-4 relative shrink-0 w-full z-10">
        <h1 className="font-libre-baskerville font-medium italic leading-normal relative shrink-0 text-3xl sm:text-4xl md:text-5xl text-black tracking-0 uppercase">
          WORK
        </h1>
        <a 
          href="mailto:tanpereira5@gmail.com"
          className="bg-primary hidden sm:flex gap-[10px] items-center justify-center px-6 sm:px-8 py-3 sm:py-4 relative rounded-full shrink-0 w-full sm:w-auto cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.3)] hover:-translate-y-0.5"
        >
          <p className="font-roboto font-medium leading-4 relative shrink-0 text-base sm:text-lg text-white tracking-[0.4px]">
            Send a message
          </p>
          <div className="relative shrink-0 size-5 sm:size-6 text-white">
            <MessagePlainIcon className="size-full" />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative flex-1 w-full min-w-0 overflow-y-auto pt-2 pb-4">
        {projects.map((project, index) => {
          const spanFull = getSpanFull(index);
          const image = project.images.main || project.images.dashboards || "https://www.figma.com/api/mcp/asset/03bf27e8-f7f1-4ca6-97c0-512a8fd9e2d0";
          
          const card = (
            <ProjectCard
              col={index + 1}
              row={Math.floor(index / 2) + 1}
              bgColor={getCardBgColor(index)}
              image={image}
              title={project.title}
              tags={project.tags}
              date={project.date}
              spanFull={spanFull}
            />
          );

          if (spanFull) {
            return (
              <div key={project.slug} className="md:col-span-2 relative w-full">
                <Link href={`/work/${project.slug}`}>{card}</Link>
              </div>
            );
          }

          return (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              {card}
            </Link>
          );
        })}
      </div>
      {/* Send a message button - mobile only, at bottom */}
      <a 
        href="mailto:tanpereira5@gmail.com"
        className="bg-primary sm:hidden flex gap-[10px] items-center justify-center px-6 py-4 relative rounded-full shrink-0 w-full cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.3)] hover:-translate-y-0.5 mt-4"
      >
        <p className="font-roboto font-medium leading-4 relative shrink-0 text-base text-white tracking-[0.4px]">
          Send a message
        </p>
        <div className="relative shrink-0 size-5 text-white">
          <MessagePlainIcon className="size-full" />
        </div>
      </a>
    </div>
  );
}

function ProjectCard({
  col,
  row,
  bgColor,
  image,
  title,
  tags,
  date,
  spanFull,
}: {
  col: number;
  row: number;
  bgColor: string;
  image: string;
  title: string;
  tags: string[];
  date: string;
  spanFull?: boolean;
}) {
  const isFullWidthCard = spanFull === true;
  const flexDirection = isFullWidthCard ? "flex-col sm:flex-row" : "flex-col";
  const textWidth = isFullWidthCard ? "w-full sm:w-[216px]" : "w-full";
  const imageHeight = isFullWidthCard ? "h-full" : "h-[220px]";
  const imageSize = isFullWidthCard ? "h-full w-full sm:w-[600px] sm:flex-1" : "h-full w-full";
  const imageContainerClasses = isFullWidthCard 
    ? "flex flex-col sm:flex-1 sm:min-w-0" 
    : "flex flex-col";
  
  return (
    <div
      className={`${bgColor} border border-surface-variant border-solid flex ${flexDirection} items-start ${isFullWidthCard ? '' : 'justify-between'} overflow-clip relative rounded-2xl w-full h-full ${isFullWidthCard ? 'min-h-[350px]' : ''} shadow-[0px_4px_8px_-2px_rgba(79,55,138,0.1),0px_2px_4px_-2px_rgba(79,55,138,0.05)] transition-all duration-300 ease-out hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.2),0px_4px_8px_-4px_rgba(79,55,138,0.1)] hover:-translate-y-1 hover:border-primary/30 group`}
    >
      {/* Text Section - Left on desktop, Top on mobile */}
      <div className={`flex flex-col gap-2 items-start px-4 sm:px-6 py-4 sm:py-4 relative shrink-0 ${textWidth} z-10`}>
        <div className="flex gap-1 items-start relative shrink-0 flex-wrap">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className={`${getTagColor(tag)} flex items-center justify-center px-2 py-[2px] relative rounded-full shrink-0 transition-all duration-300 group-hover:scale-105`}
              >
                <p className="font-ibm-plex-mono font-normal leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px]">
                  {tag}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-0 items-start relative shrink-0 w-full">
          <p className="font-roboto font-semibold leading-6 relative shrink-0 text-[#1e1e1e] text-base sm:text-base tracking-[0.5px] w-full whitespace-pre-wrap transition-colors duration-300 group-hover:text-primary">
            {title.split(/(\s|-)/).map((part, index) => {
              // Preserve spaces and hyphens
              if (part === ' ' || part === '-') {
                return part;
              }
              // Preserve "AI" and other acronyms in all caps
              if (part.toUpperCase() === 'AI' || part.match(/^[A-Z]{2,}$/)) {
                return part.toUpperCase();
              }
              // Capitalize first letter, lowercase rest
              return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
            }).join('')}
          </p>
        </div>
        <p className="font-roboto font-normal leading-4 relative shrink-0 text-[#757575] text-xs tracking-[0.4px]">
          {date}
        </p>
      </div>
      
      {/* Image Section - Right on desktop, Bottom on mobile */}
      <div className={`${imageContainerClasses} ${isFullWidthCard ? imageHeight : 'flex-1 min-h-[220px]'} items-center min-h-0 min-w-0 overflow-clip ${isFullWidthCard ? 'pt-4 px-4 pb-0 sm:pt-6 sm:px-6 sm:pb-0' : 'pt-4 px-4 sm:pt-6 sm:px-6 pb-0'} relative shrink-0 w-full ${isFullWidthCard ? 'sm:w-auto' : ''} z-10`}>
        <div className={`${isFullWidthCard ? imageSize : 'h-full w-full min-h-[220px]'} relative rounded-t-[4px] rounded-b-none shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 overflow-hidden group-hover:shadow-[0px_20px_40px_-8px_rgba(12,12,13,0.5)] transition-shadow duration-300`}>
          <Image
            alt="Project screenshot"
            className="object-cover rounded-t-[16px]"
            src={image}
            fill
            style={{ objectPosition: "top" }}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
