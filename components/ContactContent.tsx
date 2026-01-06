"use client";

import { MessagePlainIcon, DownloadIcon } from "./icons";

export default function ContactContent() {
  return (
    <div 
      className="border-[#e3e3e3] border-b-0 md:border-l border-r-0 border-solid border-t flex flex-col gap-12 md:gap-[48px] items-center min-h-0 min-w-0 pb-24 pt-8 px-4 sm:px-6 md:px-8 relative rounded-tl-0 md:rounded-tl-[24px] shadow-none md:shadow-[0px_16px_32px_-4px_rgba(79,55,138,0.1),0px_4px_4px_-4px_rgba(79,55,138,0.05)] shrink-0 w-full flex-1 min-h-full overflow-y-auto"
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
      {/* Content wrapper that determines the scrollable height */}
      <div className="relative w-full flex flex-col gap-12 md:gap-[48px] items-center min-h-full" style={{ height: 'fit-content' }}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 relative shrink-0 w-full z-10">
          <h1 className="font-libre-baskerville font-medium italic leading-normal relative shrink-0 text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-black tracking-0 uppercase">
            Contact
          </h1>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px] items-start relative shrink-0 w-full z-10 pb-0 h-fit">
        {/* Hero Section */}
        <div className="flex flex-col gap-6 sm:gap-8 items-start relative shrink-0 w-full max-w-4xl">
          <p className="font-avenir font-semibold leading-normal relative shrink-0 text-[25px] text-[#1e1e1e] tracking-[0.4px] w-full">
            Let's work together
          </p>
          <div className="font-roboto font-normal leading-6 relative shrink-0 text-base sm:text-lg text-[#1e1e1e] tracking-[0.25px] w-full whitespace-pre-wrap">
            <p className="mb-0">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team. Whether you're looking for a product designer to help bring your vision to life, or you have a complex system that needs thoughtful design, let's connect.
            </p>
          </div>
        </div>

        {/* Contact Methods - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
          {/* Email Card */}
          <a 
            href="mailto:tanpereira5@gmail.com"
            className="bg-white border border-surface-variant border-solid flex flex-col gap-4 items-start p-6 sm:p-8 relative rounded-2xl shrink-0 w-full shadow-[0px_4px_8px_-2px_rgba(79,55,138,0.1),0px_2px_4px_-2px_rgba(79,55,138,0.05)] transition-all duration-300 ease-out hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.2),0px_4px_8px_-4px_rgba(79,55,138,0.1)] hover:-translate-y-1 hover:border-primary/30 group"
          >
            <div className="flex gap-4 items-center relative shrink-0 w-full">
              <div className="bg-primary-container flex items-center justify-center p-3 rounded-xl shrink-0">
                <MessagePlainIcon className="size-6 text-primary" />
              </div>
              <div className="flex flex-col gap-1 items-start flex-1 min-w-0">
                <p className="font-roboto font-medium leading-5 relative shrink-0 text-sm text-[#757575] tracking-[0.4px] uppercase">
                  Email
                </p>
                <p className="font-roboto font-normal leading-6 relative shrink-0 text-base sm:text-lg text-[#1e1e1e] tracking-[0.25px] group-hover:text-primary transition-colors">
                  tanpereira5@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/tania-pereira-709752168/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-surface-variant border-solid flex flex-col gap-4 items-start p-6 sm:p-8 relative rounded-2xl shrink-0 w-full shadow-[0px_4px_8px_-2px_rgba(79,55,138,0.1),0px_2px_4px_-2px_rgba(79,55,138,0.05)] transition-all duration-300 ease-out hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.2),0px_4px_8px_-4px_rgba(79,55,138,0.1)] hover:-translate-y-1 hover:border-primary/30 group"
          >
            <div className="flex gap-4 items-center relative shrink-0 w-full">
              <div className="bg-primary-container flex items-center justify-center p-3 rounded-xl shrink-0">
                <svg width="24" height="24" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path fillRule="evenodd" clipRule="evenodd" d="M52.5 52.5H41.8156V34.3021C41.8156 29.3128 39.9198 26.5245 35.9707 26.5245C31.6746 26.5245 29.4301 29.4261 29.4301 34.3021V52.5H19.1333V17.8333H29.4301V22.5029C29.4301 22.5029 32.526 16.7742 39.8826 16.7742C47.2357 16.7742 52.5 21.2645 52.5 30.5512V52.5ZM6.84935 13.294C3.34206 13.294 0.5 10.4297 0.5 6.89701C0.5 3.36436 3.34206 0.5 6.84935 0.5C10.3566 0.5 13.197 3.36436 13.197 6.89701C13.197 10.4297 10.3566 13.294 6.84935 13.294ZM1.53255 52.5H12.2694V17.8333H1.53255V52.5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1 items-start flex-1 min-w-0">
                <p className="font-roboto font-medium leading-5 relative shrink-0 text-sm text-[#757575] tracking-[0.4px] uppercase">
                  LinkedIn
                </p>
                <p className="font-roboto font-normal leading-6 relative shrink-0 text-base sm:text-lg text-[#1e1e1e] tracking-[0.25px] group-hover:text-primary transition-colors">
                  linkedin.com/in/tania-pereira-709752168
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch sm:items-center justify-start relative shrink-0 w-full max-w-4xl">
          {/* Send Message Button */}
          <a 
            href="mailto:tanpereira5@gmail.com"
            className="bg-primary flex gap-[10px] items-center justify-center px-6 sm:px-8 py-4 sm:py-5 relative rounded-full shrink-0 flex-1 sm:flex-initial cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.3)] hover:-translate-y-0.5"
          >
            <p className="font-roboto font-medium leading-4 relative shrink-0 text-base sm:text-lg text-white tracking-[0.4px]">
              Send a message
            </p>
            <div className="relative shrink-0 size-5 sm:size-6 text-white">
              <MessagePlainIcon className="size-full" />
            </div>
          </a>

          {/* Download CV Button */}
          <a 
            href="/cv-tania-pereira.pdf" 
            download="cv-tania-pereira.pdf"
            className="bg-primary-container border border-primary border-solid flex gap-[10px] items-center justify-center px-6 sm:px-8 py-4 sm:py-5 relative rounded-full shrink-0 flex-1 sm:flex-initial cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.2)] hover:-translate-y-0.5"
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
  );
}

