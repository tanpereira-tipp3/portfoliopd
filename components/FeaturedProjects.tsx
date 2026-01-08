"use client";

import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "./icons";
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

const imgScreenshot20251208At1441111 = "https://www.figma.com/api/mcp/asset/03bf27e8-f7f1-4ca6-97c0-512a8fd9e2d0";
const newProject = projects[0]; // NEW PROJECT (most important)
const aiDialoguesProject = projects[1]; // AI-ASSISTED DIALOGUES (BlueConic)
const ovsProject = projects[2]; // OPERATIONAL VESSEL SCHEDULING PLATFORM (DCSA)
const mathaplanetProject = projects[6]; // REAL-TIME FACTORY PERFORMANCE PLATFORM (Mathaplanet)

export default function FeaturedProjects() {
  return (
    <div className="flex flex-col gap-3 items-start min-h-0 min-w-0 relative shrink-0 w-full flex-1">
      <div className="flex gap-2 items-center relative shrink-0">
        <div className="relative shrink-0 size-4 text-[#5a5a5a]">
          <ClockIcon className="size-full" />
        </div>
        <p className="font-roboto font-normal leading-4 relative shrink-0 text-[#5a5a5a] text-xs tracking-[0.4px]">
          Featured projects
        </p>
      </div>
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full flex-1 min-h-0 overflow-hidden">
        {/* First large card */}
        <div className="relative w-full h-auto flex-shrink-0 pt-1">
          <ProjectCard
            col={1}
            row={1}
            bgColor="bg-primary-fixed"
            image={newProject?.images?.main || imgScreenshot20251208At1441111}
            title={newProject?.title}
            tags={newProject?.tags}
            date={newProject?.date}
            spanFull
            slug={newProject?.slug}
          />
        </div>
        {/* Two smaller cards below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full flex-1 min-h-0 overflow-visible items-stretch">
        <div className="flex flex-col min-h-0 h-full pt-1 overflow-visible">
          <div className="flex-1 min-h-0 overflow-visible">
            <ProjectCard
              col={1}
              row={2}
              bgColor="bg-inverse-on-surface"
              image={aiDialoguesProject?.images?.main || imgScreenshot20251208At1441111}
              title={aiDialoguesProject?.title}
              tags={aiDialoguesProject?.tags}
              date={aiDialoguesProject?.date}
              slug={aiDialoguesProject?.slug}
            />
          </div>
        </div>
        <div className="flex flex-col min-h-0 h-full pt-1 overflow-visible">
          <div className="flex-1 min-h-0 overflow-visible">
            <ProjectCard
              col={2}
              row={2}
              bgColor="bg-[#e9ebff]"
              image={ovsProject?.images?.main || imgScreenshot20251208At1441111}
              title={ovsProject?.title}
              tags={ovsProject?.tags}
              date={ovsProject?.date}
              slug={ovsProject?.slug}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

function ProjectCard({
  col,
  row,
  bgColor,
  image,
  spanFull,
  title,
  tags,
  date,
  slug,
}: {
  col: number;
  row: number;
  bgColor: string;
  image: string;
  spanFull?: boolean;
  title?: string;
  tags?: string[];
  date?: string;
  slug?: string;
}) {
  const isFirstCard = spanFull && row === 1;
  const flexDirection = isFirstCard ? "flex-col sm:flex-row" : "flex-col";
  const textWidth = isFirstCard ? "w-full sm:w-[216px]" : "w-full";
  const imageHeight = isFirstCard ? "h-[225px] sm:h-[225px]" : "h-[200px]";
  const imageSize = isFirstCard ? "h-full sm:h-[225px] w-full sm:w-[600px]" : "h-full w-full";
  const imageContainerClasses = isFirstCard 
    ? "flex flex-col sm:flex-1" 
    : "flex flex-col";
  
  const cardContent = (
    <div
      className={`${bgColor} border border-surface-variant border-solid flex ${flexDirection} items-start ${isFirstCard ? 'sm:justify-between' : 'justify-between'} overflow-hidden relative rounded-2xl self-stretch shrink-0 w-full ${isFirstCard ? 'h-[256px]' : 'h-full max-h-full'} shadow-[0px_4px_8px_-2px_rgba(79,55,138,0.1),0px_2px_4px_-2px_rgba(79,55,138,0.05)] transition-all duration-300 ease-out hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.2),0px_4px_8px_-4px_rgba(79,55,138,0.1)] hover:-translate-y-1 hover:border-primary/30 cursor-pointer group`}
    >
      {/* Text Section - Left on desktop, Top on mobile */}
      <div className={`flex flex-col gap-2 items-start px-4 sm:px-6 py-4 sm:py-4 relative shrink-0 ${textWidth} z-10`}>
        {tags && tags.length > 0 && (
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
        )}
        {!tags && (
          <div className="flex gap-1 items-start relative shrink-0">
            <div className="bg-[rgba(103,80,164,0.2)] flex items-center justify-center px-2 py-[2px] relative rounded-full shrink-0 transition-all duration-300 group-hover:bg-[rgba(103,80,164,0.3)] group-hover:scale-105">
              <p className="font-ibm-plex-mono font-normal leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px]">
                SaaS
              </p>
            </div>
            <div className="bg-[rgba(0,168,25,0.2)] flex flex-col items-center justify-center px-2 py-[2px] relative rounded-full shrink-0 transition-all duration-300 group-hover:bg-[rgba(0,168,25,0.3)] group-hover:scale-105">
              <p className="font-ibm-plex-mono font-normal leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px]">
                AI
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-0 items-start relative shrink-0 w-full">
          <p className="font-roboto font-semibold leading-6 relative shrink-0 text-[#1e1e1e] text-base sm:text-base tracking-[0.5px] w-full whitespace-pre-wrap transition-colors duration-300 group-hover:text-primary">
            {title ? (() => {
              const parts = title.split(/(\s|-)/);
              const transformed = parts.map((part, index) => {
                // Preserve spaces and hyphens
                if (part === ' ' || part === '-') {
                  return part;
                }
                // CRITICAL: Convert "AI" in ANY case (AI, Ai, aI, ai) to "AI" in all caps
                const upperPart = part.toUpperCase();
                if (upperPart === 'AI') {
                  return 'AI';
                }
                // All other words: lowercase
                return part.toLowerCase();
              }).join('');
              // Capitalize the first letter of the entire title
              return transformed.charAt(0).toUpperCase() + transformed.slice(1);
            })() : "Reinforcement learning recommendation system for Blueconic"}
          </p>
        </div>
        {date && (
          <p className="font-roboto font-normal leading-4 relative shrink-0 text-[#757575] text-xs tracking-[0.4px]">
            {date}
          </p>
        )}
        {!date && (
          <p className="font-roboto font-normal leading-4 relative shrink-0 text-[#757575] text-xs tracking-[0.4px]">
            <span className="leading-4">Dic</span>
            <span className="font-roboto leading-4 tracking-[0.4px]"> 2025</span>
          </p>
        )}
      </div>
      
      {/* Image Section - Right on desktop, Bottom on mobile */}
      <div className={`${imageContainerClasses} ${imageHeight} ${isFirstCard ? 'items-end sm:self-end' : 'items-center'} min-h-0 min-w-0 overflow-clip ${isFirstCard ? 'pt-4 px-4 pb-0 sm:pt-0 sm:px-6 sm:pb-0' : 'pt-4 px-4 sm:pt-6 sm:px-6 pb-0'} relative shrink-0 ${isFirstCard ? 'w-full sm:w-auto' : 'w-full'} z-10`}>
        <div className={`${imageSize} relative rounded-t-[4px] rounded-b-none shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] shrink-0 overflow-hidden group-hover:shadow-[0px_20px_40px_-8px_rgba(12,12,13,0.5)] transition-shadow duration-300`}>
          <Image
            alt="Project screenshot"
            className="object-cover rounded-t-[16px] rounded-b-none"
            src={image}
            width={600}
            height={225}
            style={{ objectPosition: "top" }}
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/work/${slug}`}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

