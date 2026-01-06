"use client";

import Image from "next/image";
import { MessagePlainIcon } from "./icons";
import { DownloadIcon } from "./icons";

const imgProfile = "/about.png";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  projects?: Array<{
    period: string;
    client?: string;
    description: string;
  }>;
}

const experiences: Experience[] = [
  {
    title: "Product Designer",
    company: "BlueConic",
    location: "[NL]",
    period: "Jan 2025 - Present",
    description: "I lead AI-powered feature design, define the AI UX strategy, and create scalable patterns in collaboration with PMs, engineers, and data scientists.",
  },
  {
    title: "UX/UI Designer",
    company: "The Weird Science",
    location: "[NL]",
    period: "Jan 2023 - Dec 2024",
    description: "Designed digital platforms for multiple clients, turning complex workflows into intuitive experiences through research and prototyping.",
    projects: [
      {
        period: "10 months project",
        client: "DCSA (via TWS)",
        description: "Designed B2B tools for identity, maintenance, scheduling & documentation.",
      },
      {
        period: "5 months project",
        client: "MetaPlanet (via TWS)",
        description: "Designed a real-time factory performance platform with dashboards & alerts.",
      },
    ],
  },
  {
    title: "Head of Web Strategy",
    company: "Media Source",
    location: "[MX]",
    period: "Jan 2022 - Dec 2022",
    description: "Led digital project strategy, client workshops, and optimization efforts across multiple web initiatives.",
    projects: [
      {
        period: "2 months project",
        client: "Edenred (via MS)",
        description: "Improved website engagement through usability & structure updates.",
      },
      {
        period: "4 months project",
        client: "Spectrum brands (via MS)",
        description: "Redesigned marketing websites for Latin American brands.",
      },
    ],
  },
  {
    title: "Web Designer",
    company: "Media Source",
    location: "[MX]",
    period: "Sep 2019 - Dec 2021",
    description: "Designed websites and prototypes while collaborating with developers to deliver user-centered solutions.",
  },
  {
    title: "Content MKT Designer",
    company: "Media Source",
    location: "[MX]",
    period: "Jan 2019 - Sep 2019",
    description: "Created digital assets and visuals to support marketing campaigns across multiple channels.",
  },
  {
    title: "Jr. Designer",
    company: "Media Source",
    location: "[MX]",
    period: "Jan 2018 - Dec 2018",
    description: "Executed design concepts for print and digital media, supporting senior designers.",
  },
  {
    title: "Freelancer",
    company: "",
    location: "[MX]",
    period: "Jul 2017 - Dec 2017",
    description: "Developed branding and marketing materials for small clients.",
  },
];

const reviews = [
  { 
    text: "Special thanks for @Tania and @Busra for turning things around so quickly and making it look good and work smooth",
    py: "py-5",
    maxWidth: "max-w-[482px]"
  },
  { 
    text: "Awesome.\nYou never cease to amaze. Hahaha.",
    py: "py-5",
    maxWidth: "max-w-[278px]"
  },
  { 
    text: "Great meeting, great work, It provoked a much needed conversation about how we're going to approach this. well done!",
    py: "py-[10px]",
    maxWidth: "max-w-[482px]"
  },
  { 
    text: "Btw @Tania you did very well, thanks for the prototype",
    py: "py-[30px]",
    maxWidth: "max-w-[406px]"
  },
  { 
    text: "@Tania Pereira alright, thanks for your sharp eye",
    py: "py-[30px]",
    maxWidth: "max-w-[406px]"
  },
  { 
    text: "Really great job! I was talking with Olivier afterwards and told him you were amazing",
    py: "py-5",
    maxWidth: "max-w-[482px]"
  },
  { 
    text: "Great presentation BTW, I think you handled the room very well.",
    py: "py-[30px]",
    maxWidth: "max-w-[455px]"
  },
];

export default function AboutContent() {
  return (
    <div 
      className="border-[#e3e3e3] border-b-0 md:border-l border-r-0 border-solid border-t flex flex-col gap-12 md:gap-[48px] items-center min-h-0 min-w-0 pb-24 pt-8 px-4 sm:px-6 md:px-8 relative rounded-tl-0 md:rounded-tl-[24px] shadow-none md:shadow-[0px_16px_32px_-4px_rgba(79,55,138,0.1),0px_4px_4px_-4px_rgba(79,55,138,0.05)] shrink-0 w-full flex-1 h-full overflow-y-auto"
      style={{
        background: `
          linear-gradient(135deg, rgba(224, 247, 250, 0.6) 0%, rgba(243, 229, 245, 0.5) 50%, rgba(225, 190, 231, 0.4) 100%),
          linear-gradient(45deg, rgba(187, 222, 251, 0.4) 0%, rgba(250, 250, 250, 0.8) 50%, rgba(225, 190, 231, 0.5) 100%),
          linear-gradient(180deg, rgba(224, 247, 250, 0.5) 0%, rgba(250, 250, 250, 0.9) 50%, rgba(225, 190, 231, 0.4) 100%),
          #fafafa
        `,
        backgroundSize: '100% 100%',
      }}
    >

      {/* Header and About Section with specific gap */}
      <div className="flex flex-col gap-12 md:gap-[106px] relative shrink-0 w-full z-10" style={{ height: 'fit-content' }}>
        <div className="flex flex-col gap-12 relative shrink-0 w-full z-10" style={{ height: 'fit-content' }}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 relative shrink-0 w-full z-10">
            <h1 className="font-libre-baskerville font-medium italic leading-normal relative shrink-0 text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-black tracking-0 uppercase">
              About
            </h1>
            <a 
              href="mailto:tanpereira5@gmail.com"
              className="bg-primary flex gap-[10px] items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 relative rounded-full shrink-0 cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.3)] hover:-translate-y-0.5"
            >
              <p className="font-roboto font-medium leading-4 relative shrink-0 text-sm sm:text-base md:text-lg text-white tracking-[0.4px]">
                Send a message
              </p>
              <div className="relative shrink-0 size-4 sm:size-5 md:size-6 text-white">
                <MessagePlainIcon className="size-full" />
              </div>
            </a>
          </div>

          {/* About Section */}
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px] items-start relative shrink-0 w-full z-10 pb-0 h-fit" style={{ height: 'fit-content' }}>
        {/* Profile Image */}
        <div className="relative w-full aspect-[1259/355.53662109375] rounded-xl sm:rounded-2xl overflow-hidden">
          <Image
            src={imgProfile}
            alt="Tania Pereira"
            fill
            className="object-cover object-top"
            unoptimized
            priority
          />
        </div>

        {/* Tagline and Description */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[60px] items-start justify-center relative shrink-0 w-full h-fit">
          <div className="flex flex-[1_0_0] flex-col gap-0 items-start min-w-0 relative shrink-0 w-full lg:w-auto h-fit">
            <p className="font-libre-baskerville font-bold italic leading-normal uppercase relative shrink-0 text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-[#1e1e1e] tracking-[0.4px] w-full whitespace-pre-wrap h-fit">
              Tania Pereira, Product Designer focused on making complex systems intuitive and scalable.
            </p>
          </div>
          <div className="flex flex-[1_0_0] flex-col gap-4 sm:gap-6 items-start min-h-0 min-w-0 relative shrink-0 pb-0 w-full lg:w-auto">
            <div className="font-roboto font-normal leading-5 relative shrink-0 text-sm sm:text-base text-[#1e1e1e] tracking-[0.25px] w-full whitespace-pre-wrap">
              <p className="mb-0">
                I thrive in environments where ambiguity, data, and multidisciplinary collaboration intersect, especially when AI or technical constraints are part of the challenge. My work spans B2B platforms, operational tools, identity systems, logistics, and AI-assisted workflows.
              </p>
              <p className="mb-0 text-[14px]">&nbsp;</p>
              <p>
                I enjoy designing clarity into messy problems, building patterns that scale, and partnering with engineers, PMs, and data scientists to bring impactful products to life.
              </p>
            </div>
            <a 
              href="/cv-tania-pereira.pdf" 
              download="cv-tania-pereira.pdf"
              className="bg-primary-container border border-primary border-solid flex gap-[10px] items-center justify-center px-6 sm:px-8 py-3 sm:py-4 relative rounded-full shrink-0 w-full sm:w-auto cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.2)] hover:-translate-y-0.5 mb-6 md:mb-0"
            >
              <p className="font-roboto font-medium leading-4 relative shrink-0 text-base sm:text-lg text-primary tracking-[0.4px]">
                Download CV
              </p>
              <div className="relative shrink-0 size-5 sm:size-6 text-primary">
                <DownloadIcon className="size-full" />
              </div>
            </a>
          </div>
        </div>
        </div>
        </div>

        {/* Experience Timeline */}
        <div className="flex flex-col gap-0 items-center justify-center relative shrink-0 w-full z-10 mt-8 md:mt-0">
        {/* Mobile Timeline */}
        <div className="flex md:hidden flex-col gap-6 items-start justify-start relative shrink-0 w-full px-4">
          <div className="relative w-full">
            {/* Vertical line on left */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-surface-variant" />
            
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex gap-4 items-start pl-6 relative">
                  <div className="relative shrink-0 size-3 bg-surface-variant rounded-full z-10 border border-surface-variant -ml-[30px]" />
                  <div className="flex flex-col gap-3 items-start flex-1">
                    <div className="font-roboto font-medium leading-6 relative shrink-0 text-lg tracking-0 w-full">
                      <p className="mb-0">{exp.title}</p>
                      <p className="text-base">@{exp.company} {exp.location}</p>
                    </div>
                    <div className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full">
                      <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{exp.period}</p>
                      <p className="font-roboto leading-5 text-sm tracking-[0.25px] mb-4">
                        {exp.description}
                      </p>
                    </div>
                    {exp.projects && exp.projects.map((project, projIndex) => (
                      <div key={projIndex} className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full mt-2">
                        <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{project.period}</p>
                        <p className="font-roboto leading-5 text-sm tracking-[0.25px]">
                          {project.client && <span>{project.client} </span>}
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {index < experiences.length - 1 && <div className="h-6" />}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex flex-row gap-6 items-start justify-center relative shrink-0 w-full max-w-5xl mx-auto">
          {/* Left Column - Right-aligned text */}
          <div className="flex flex-col items-start px-0 relative shrink-0 w-[360px] pt-[180px]">
            {/* First Group: UX/UI Designer with projects */}
            <div className="flex flex-col gap-4 items-start leading-0 relative shrink-0 text-right w-full pt-1.5">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <div className="font-roboto font-medium leading-7 relative shrink-0 text-[22px] tracking-0 w-full whitespace-pre-wrap">
                  <p className="mb-0">{experiences[1].title}</p>
                  <p>@{experiences[1].company} {experiences[1].location}</p>
                </div>
                <div className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                  <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{experiences[1].period}</p>
                  <p className="font-roboto leading-5 text-sm tracking-[0.25px]">
                    {experiences[1].description}
                  </p>
                </div>
                {experiences[1].projects && experiences[1].projects.map((project, projIndex) => (
                  <div key={projIndex} className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                    <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{project.period}</p>
                    <p className="font-roboto leading-5 text-sm tracking-[0.25px]">
                      {project.client && <span>{project.client} </span>}
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer to align with second dot */}
            <div className="h-[184.543px]" />

            {/* Second Group: Web Designer and Jr. Designer */}
            <div className="flex flex-col gap-[300px] items-start relative shrink-0 w-full pt-[195px] md:pt-[195px]">
              <div className="flex flex-col gap-4 items-start leading-0 relative shrink-0 text-right w-full pt-1.5">
                <div className="font-roboto font-medium leading-7 relative shrink-0 text-[22px] tracking-0 w-full whitespace-pre-wrap">
                  <p className="mb-0">{experiences[3].title}</p>
                  <p>@{experiences[3].company} {experiences[3].location}</p>
                </div>
                <div className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                  <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{experiences[3].period}</p>
                  <p className="font-roboto leading-5 text-sm tracking-[0.25px]">
                    {experiences[3].description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start leading-0 relative shrink-0 text-right w-full pt-1.5">
                <div className="font-roboto font-medium leading-7 relative shrink-0 text-[22px] tracking-0 w-full whitespace-pre-wrap">
                  <p className="mb-0">{experiences[5].title}</p>
                  <p>@{experiences[5].company} {experiences[5].location}</p>
                </div>
                <div className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                  <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px] tracking-[0.4px]">{experiences[5].period}</p>
                  <p className="font-roboto leading-5 text-sm tracking-[0.25px]">
                    {experiences[5].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Line - Center */}
          <div className="flex flex-col items-center px-0 py-0 relative self-stretch shrink-0">
            {/* Continuous vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-surface-variant" />
            
            {/* Dots positioned along the line */}
            <div className="relative shrink-0 size-3 bg-surface-variant rounded-full z-10 border border-surface-variant" />
            <div className="h-[184.543px]" />
            <div className="relative shrink-0 size-3 bg-surface-variant rounded-full z-10 border border-surface-variant" />
            <div className="h-[327.349px]" />
            <div className="relative shrink-0 size-3 bg-surface-variant rounded-full z-10 border border-surface-variant" />
            <div className="h-[328.524px]" />
            <div className="relative shrink-0 size-3 bg-surface-variant rounded-full z-10 border border-surface-variant" />
            <div className="h-[187.026px]" />
            <div className="relative shrink-0 size-3 bg-surface-variant rounded-full z-10 border border-surface-variant" />
            <div className="h-[218.697px]" />
            <div className="relative shrink-0 size-3 bg-surface-variant rounded-full z-10 border border-surface-variant" />
            <div className="h-[138.031px]" />
            <div className="relative shrink-0 size-3 bg-surface-variant rounded-full z-10 border border-surface-variant" />
          </div>

          {/* Right Column - Left-aligned text */}
          <div className="flex flex-col items-start relative shrink-0 w-[360px] gap-0 h-fit">
            {/* First Group: Product Designer */}
            <div className="flex flex-col gap-4 items-start leading-0 relative shrink-0 text-left w-full pt-1.5">
              <div className="font-roboto font-medium leading-7 relative shrink-0 text-[22px] tracking-0 w-full whitespace-pre-wrap">
                <p className="mb-0">{experiences[0].title}</p>
                <p>@{experiences[0].company} {experiences[0].location}</p>
              </div>
              <div className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{experiences[0].period}</p>
                <p className="font-roboto leading-5 text-sm tracking-[0.25px] mb-4">
                  {experiences[0].description}
                </p>
              </div>
            </div>

            {/* Spacer to align with second dot */}
            <div className="h-[184.543px]" />

            {/* Second Group: Head of Web Strategy, Content MKT Designer, Freelancer */}
            <div className="flex flex-col gap-[260px] items-start relative shrink-0 w-full pt-[180px]">
              {/* Head of Web Strategy with projects */}
              <div className="flex flex-col gap-4 items-start leading-0 relative shrink-0 text-left w-full pt-1.5">
                <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                  <div className="font-roboto font-medium leading-7 relative shrink-0 text-[22px] tracking-0 w-full whitespace-pre-wrap">
                    <p className="mb-0">{experiences[2].title} </p>
                    <p>@{experiences[2].company} {experiences[2].location}</p>
                  </div>
                  <div className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                    <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{experiences[2].period}</p>
                    <p className="font-roboto leading-5 text-sm tracking-[0.25px]">
                      {experiences[2].description}
                    </p>
                  </div>
                </div>
                {experiences[2].projects && experiences[2].projects.map((project, projIndex) => (
                  <div key={projIndex} className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                    <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{project.period}</p>
                    <p className="font-roboto leading-5 text-sm tracking-[0.25px]">
                      {project.client && <span>{project.client} </span>}
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Content MKT Designer */}
              <div className="flex flex-col gap-4 items-start leading-0 relative shrink-0 text-left w-full pt-1.5">
                <div className="font-roboto font-medium leading-7 relative shrink-0 text-[22px] tracking-0 w-full whitespace-pre-wrap">
                  <p className="mb-0">{experiences[4].title} </p>
                  <p>@{experiences[4].company} {experiences[4].location}</p>
                </div>
                <div className="font-roboto font-normal relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                  <p className="font-ibm-plex-mono leading-4 mb-0 not-italic text-[10px]">{experiences[4].period}</p>
                  <p className="font-roboto leading-5 text-sm tracking-[0.25px]">
                    {experiences[4].description}
                  </p>
                </div>
              </div>

              {/* Freelancer */}
              <div className="flex flex-col gap-4 items-start relative shrink-0 text-left w-full pt-1.5">
                <p className="font-roboto font-medium leading-7 relative shrink-0 text-[22px] tracking-0 w-full whitespace-pre-wrap">
                  {experiences[6].title} {experiences[6].location}
                </p>
                <div className="font-ibm-plex-mono font-normal leading-0 relative shrink-0 text-[0px] tracking-[0.4px] w-full whitespace-pre-wrap">
                  <p className="leading-4 mb-0 text-[10px]">{experiences[6].period}</p>
                  <p className="font-roboto font-normal leading-5 text-sm tracking-[0.25px]">
                    {experiences[6].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 items-center relative shrink-0 w-full z-10">
        <div className="flex flex-col gap-2 items-center not-italic relative shrink-0 tracking-[0.4px] w-full px-4">
          <p className="font-avenir font-bold leading-normal relative shrink-0 text-xl sm:text-[25px] text-[#1e1e1e]">
            Messages that make me proud
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4 sm:px-0">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e7e0ec] border-solid flex flex-col px-6 sm:px-8 py-6 sm:py-8 relative rounded-2xl sm:rounded-3xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]"
            >
              <div className="font-roboto font-normal leading-[1.75] relative shrink-0 text-[15px] text-[#1e1e1e] tracking-[0.2px] whitespace-pre-wrap w-full">
                {review.text.split('\n').map((line, lineIdx) => (
                  <p key={lineIdx} className={lineIdx === 0 ? "mb-0" : "mt-3 mb-0"}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

