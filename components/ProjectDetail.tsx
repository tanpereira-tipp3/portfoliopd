"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import { getProjectBySlug, projects } from "@/data/projects";

// Tag color mapping - each tag has a specific color
const getTagColor = (tag: string): string => {
  const tagColors: { [key: string]: string } = {
    "SaaS": "bg-[rgba(81,128,164,0.2)]",
    "B2B": "bg-[rgba(0,168,25,0.2)]",
    "AI": "bg-[rgba(103,80,164,0.2)]",
    "Logistics Tech": "bg-[rgba(81,128,164,0.2)]",
    "Logistics tech": "bg-[rgba(81,128,164,0.2)]",
    "Compliance": "bg-[rgba(255,152,0,0.2)]",
    "Digital twin": "bg-[rgba(156,39,176,0.2)]",
  };
  return tagColors[tag] || "bg-[rgba(128,128,128,0.2)]";
};

export default function ProjectDetail({ slug }: { slug: string }) {
  const router = useRouter();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) {
      console.warn(`Project not found for slug: ${slug}`);
      router.push("/work");
    }
  }, [project, router, slug]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <p className="text-xl font-bold mb-2">Project not found</p>
          <p className="text-gray-600">Slug: {slug}</p>
          <p className="text-gray-600 mt-2">Redirecting to work page...</p>
        </div>
      </div>
    );
  }

  // Find current project index and get next project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
  const nextProject = projects[nextIndex];

  return (
    <div className="bg-white flex flex-col items-start relative h-screen w-full overflow-hidden">
      {/* Debug: Project loaded */}
      <Header />
      <div className="flex flex-col md:flex-row flex-1 items-start md:items-stretch min-h-0 min-w-0 relative shrink-0 w-full overflow-hidden">
        <Sidebar activePage="work" />
        <div className="bg-[#fafafa] border-[#e3e3e3] border-b-0 md:border-l border-r-0 border-solid border-t flex flex-col gap-[88px] items-start min-h-0 min-w-0 p-4 sm:p-6 md:p-8 relative rounded-tl-0 md:rounded-tl-[24px] shadow-none md:shadow-[0px_16px_32px_-4px_rgba(79,55,138,0.1),0px_4px_4px_-4px_rgba(79,55,138,0.05)] shrink-0 w-full flex-1 overflow-y-auto">
          {/* Navigation buttons */}
          <div className="flex items-center justify-between w-full mb-2">
            <Link
              href="/work"
              className="flex items-center gap-2 text-[#1e1e1e] hover:text-primary transition-colors duration-300"
            >
              <ArrowLeftIcon className="size-5" />
              <span className="font-roboto font-medium text-sm tracking-[0.4px]">
                Back to work
              </span>
            </Link>
            <Link
              href={`/work/${nextProject.slug}`}
              className="flex items-center gap-2 text-[#1e1e1e] hover:text-primary transition-colors duration-300"
            >
              <span className="font-roboto font-medium text-sm tracking-[0.4px]">
                Next project
              </span>
              <ArrowRightIcon className="size-5" />
            </Link>
          </div>

          {/* Project Header */}
          <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
            <div className="flex gap-1 items-start relative shrink-0 flex-wrap">
              {project.tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className={`${getTagColor(tag)} flex items-center justify-center px-2 py-[2px] relative rounded-full shrink-0`}
                  >
                    <p className="font-ibm-plex-mono font-normal leading-4 relative shrink-0 text-[#1e1e1e] text-xs tracking-[0.4px]">
                      {tag}
                    </p>
                  </div>
                );
              })}
            </div>
            <h1 className="font-libre-baskerville font-medium italic leading-normal relative shrink-0 text-3xl sm:text-4xl md:text-5xl text-black tracking-0 uppercase">
              {project.title}
            </h1>
            <p className="font-roboto font-normal leading-4 relative shrink-0 text-[#757575] text-xs tracking-[0.4px]">
              {project.date}
            </p>
          </div>

          {/* Project Overview Section - Two Columns */}
          <div className="w-full">
            {/* Debug: Section should be visible */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column - Role Section in White Card */}
              <div className="bg-white rounded-2xl border-2 border-surface-variant pt-12 pb-12 px-8 flex flex-col gap-10 md:gap-6 justify-between items-start">
                <div className="flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-0 w-full">
                  <p className="font-roboto font-black text-xl text-[#1e1e1e] tracking-[0.5px] w-full sm:w-[150px] shrink-0">
                    Role
                  </p>
                  <p className="font-roboto font-extralight text-lg text-[#757575] tracking-[0.5px]">
                    {project.role}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-0 w-full">
                  <p className="font-roboto font-black text-xl text-[#1e1e1e] tracking-[0.5px] w-full sm:w-[150px] shrink-0">
                    Duration
                  </p>
                  <p className="font-roboto font-extralight text-lg text-[#757575] tracking-[0.5px]">
                    {project.duration}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-0 w-full">
                  <p className="font-roboto font-black text-xl text-[#1e1e1e] tracking-[0.5px] w-full sm:w-[150px] shrink-0">
                    Client
                  </p>
                  <p className="font-roboto font-extralight text-lg text-[#757575] tracking-[0.5px]">
                    {project.client}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-0 w-full">
                  <p className="font-roboto font-black text-xl text-[#1e1e1e] tracking-[0.5px] w-full sm:w-[150px] shrink-0">
                    Tools
                  </p>
                  <p className="font-roboto font-extralight text-lg text-[#757575] tracking-[0.5px] break-words flex-1">
                    {project.tools}
                  </p>
                </div>
              </div>

              {/* Right Column - Project Overview Section (no box) */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="font-roboto font-black text-[25px] text-[#1e1e1e] tracking-[0.5px]">
                    Project Overview
                  </h3>
                  <p className="font-roboto font-normal text-sm leading-6 text-[#1e1e1e] tracking-[0.5px]">
                    {project.overview}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-roboto font-black text-base text-[#1e1e1e] tracking-[0.5px]">
                    The challenge
                  </h3>
                  <p className="font-roboto font-normal text-[14px] leading-6 text-[#1e1e1e] tracking-[0.5px] whitespace-pre-line">
                    {project.challenge}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-roboto font-black text-base text-[#1e1e1e] tracking-[0.5px]">
                    My role
                  </h3>
                  <p className="font-roboto font-normal text-sm leading-6 text-[#1e1e1e] tracking-[0.5px]">
                    {project.roleDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section - Two Columns */}
          {Object.keys(project.process).length > 0 && (
            <div className="flex flex-col gap-[88px] w-full">
              {/* Process Image (if beforeProcess exists) */}
              {project.images.beforeProcess && (
                <div className="relative w-full min-h-[355px] rounded-2xl overflow-hidden bg-[#F5EFF7] border border-surface-variant border-solid pt-8 px-4 sm:px-8 md:px-[200px] pb-0 flex items-start justify-start" style={{ height: "400px" }}>
                  <Image
                    alt="Process visualization"
                    className="object-contain shadow-sm"
                    src={project.images.beforeProcess}
                    width={800}
                    height={600}
                    style={{ color: "transparent", width: "100%", height: "fit-content", objectFit: "contain", objectPosition: "top", borderRadius: "16px" }}
                    unoptimized
                    priority
                  />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full h-fit items-stretch">
                {/* Left Column - Process Description */}
                <div className="flex flex-col gap-6">
                  <h2 className="font-roboto font-semibold text-[#1e1e1e] tracking-[0.5px]" style={{ fontSize: "25px" }}>
                    Process
                  </h2>
                  {Object.entries(project.process).map(([key, value]) => {
                    if (!value) return null;
                    // Preserve "AI" and other acronyms before adding spaces
                    const title = key
                      .replace(/\bAI\b/g, "AI_PLACEHOLDER")
                      .replace(/([A-Z])/g, " $1")
                      .replace(/AI_PLACEHOLDER/g, "AI")
                      .replace(/^./, (str) => str.toUpperCase())
                      .trim();
                    return (
                      <div key={key} className="flex flex-col gap-2">
                        <h2 className="font-roboto font-black text-base text-[#1e1e1e] tracking-[0.5px]">
                          {title}
                        </h2>
                        <p className="font-roboto font-normal text-sm leading-6 text-[#1e1e1e] tracking-[0.5px]">
                          {value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Right Column - Process Image */}
                {project.images.process && (
                  <div className="flex items-start justify-center h-full">
                    <Image
                      alt="Process visualization"
                      className="object-cover rounded-2xl border border-[#e7e0ec]"
                      src={project.images.process}
                      width={800}
                      height={600}
                      style={{ height: "100%", width: "100%", color: "transparent", objectFit: "cover", objectPosition: "top left" }}
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Solution Section - Two Columns */}
          {project.solution.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
              {/* Left Column - Solution Image */}
              {project.images.solution && (
                <div className="flex items-center justify-center w-full h-full" style={{ width: "100%" }}>
                  <Image
                    alt="Solution visualization"
                    className="object-contain rounded-2xl border border-[#e7e0ec]"
                    src={project.images.solution}
                    width={800}
                    height={500}
                    style={{ maxWidth: "100%", height: "fit-content", width: "fit-content", color: "transparent", objectPosition: "top left", borderRadius: "16px" }}
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Right Column - Solution Text */}
              <div className={`flex flex-col gap-4 ${project.images.solution ? 'justify-center' : ''}`}>
                <h2 className="font-roboto font-black text-[#1e1e1e] tracking-[0.5px]" style={{ fontSize: "25px" }}>
                  Solution
                </h2>
                <div className="flex flex-col gap-4">
                  {project.solution.map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-roboto font-normal text-sm leading-6 text-[#1e1e1e] tracking-[0.5px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Impact Section */}
          {project.impact.length > 0 && (
            <div className="flex flex-col gap-6 w-full items-center pb-24 md:pb-0">
              <h2 className="font-roboto font-semibold text-[25px] text-[#1e1e1e] tracking-[0.5px] text-center">
                Impact
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {project.impact.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-surface-variant rounded-full px-4 py-2 flex items-center gap-2 shadow-[0px_2px_4px_-2px_rgba(79,55,138,0.1)]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.6679 7C15.6679 6.58579 16.0037 6.25 16.4179 6.25H22.0001C22.4143 6.25 22.7501 6.58579 22.7501 7V12.5458C22.7501 12.96 22.4143 13.2958 22.0001 13.2958C21.5858 13.2958 21.2501 12.96 21.2501 12.5458V8.80286L15.1142 14.9013C14.6453 15.3674 14.2411 15.7692 13.874 16.0477C13.4805 16.3462 13.0433 16.572 12.5051 16.572C11.9669 16.5719 11.5297 16.346 11.1363 16.0474C10.7693 15.7688 10.3652 15.367 9.89635 14.9007L9.62209 14.628C9.10793 14.1167 8.77458 13.7875 8.49701 13.5769C8.23678 13.3794 8.11512 13.3573 8.03455 13.3574C7.95399 13.3574 7.83234 13.3795 7.57225 13.5772C7.29484 13.7881 6.96173 14.1175 6.44795 14.6292L2.52928 18.5314C2.23577 18.8237 1.7609 18.8227 1.46862 18.5292C1.17634 18.2357 1.17734 17.7608 1.47084 17.4686L5.42439 13.5315C5.89332 13.0645 6.29748 12.662 6.66458 12.383C7.05808 12.0839 7.49542 11.8576 8.03401 11.8574C8.5726 11.8572 9.0101 12.0832 9.40381 12.382C9.77112 12.6607 10.1756 13.063 10.6448 13.5296L10.9191 13.8024C11.4328 14.3132 11.7658 14.6421 12.0432 14.8526C12.3031 15.0499 12.4247 15.072 12.5052 15.072C12.5858 15.072 12.7074 15.0499 12.9674 14.8527C13.2448 14.6423 13.5779 14.3134 14.0917 13.8027L20.1815 7.75H16.4179C16.0037 7.75 15.6679 7.41421 15.6679 7Z" fill="#14AE5C"/>
                  </svg>
                  <p className="font-roboto font-medium text-sm text-[#1e1e1e] tracking-[0.4px]">
                    {item}
                  </p>
                </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


