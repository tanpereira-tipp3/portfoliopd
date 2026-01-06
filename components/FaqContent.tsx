"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Where am I based and what's my work status?",
    answer: "I'm based in the Netherlands and currently working under the Highly Skilled Migrant visa. To join your team long-term, I would need visa sponsorship from your company.",
  },
  {
    question: "What's my availability?",
    answer: "I'm currently open to new opportunities. My notice period is typically 1 month, but I'm flexible and can discuss arrangements that work for both parties. I'm happy to have an initial conversation to explore potential fits."
  },
  {
    question: "What languages do I speak?",
    answer: "I'm a native Spanish speaker with professional working proficiency in English, and I'm currently learning Dutch 🇳🇱 slowly but steadily."
  },
  {
    question: "How do I like to work?",
    answer: "I enjoy a hybrid setup. I love going to the office to collaborate, whiteboard, and solve problems together, and I'm equally comfortable working remotely when deep focus is needed.\n\nIn my day-to-day work I use tools like Figma and FigJam for design, Miro for mapping, Cursor for collaborating closely with engineers, and Jira and Notion for planning and documentation. I'm also comfortable working across the Microsoft and Adobe suites when needed."
  },
  {
    question: "How do I collaborate with others?",
    answer: "I believe great products come from close collaboration. I work directly with PMs to define strategy, with engineers to ensure feasibility, and with data scientists on AI features.\n\nI present design decisions with rationale, and iterate based on feedback. I value transparency, regular communication, and building shared understanding across disciplines."
  },
  {
    question: "What am I like as a person?",
    answer: "I'm genuinely passionate about design and my work, and I'm always eager to keep learning and improving. I'm naturally competitive in a healthy way, I like setting goals, pushing myself, and getting better at what I do.\n\nOutside of work, I love staying active, dancing, traveling, and spending time with animals. I'm really into interior design and food, I love cooking and discovering new restaurants. I also enjoy sharing my culture with others and learning from different perspectives. I'm a positive, optimistic person who values joy, curiosity, and being happy in both work and life."
  }
];

export default function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            FAQ
          </h1>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col gap-6 sm:gap-8 items-start relative shrink-0 w-full max-w-4xl z-10 pb-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#e7e0ec] border-solid flex flex-col relative shrink-0 w-full rounded-2xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex flex-row items-center justify-between gap-4 p-6 sm:p-8 text-left w-full hover:bg-surface-container-low transition-colors"
            >
              <p className="font-avenir font-semibold leading-normal relative shrink-0 text-lg sm:text-xl text-[#1e1e1e] tracking-[0.4px] flex-1">
                {faq.question}
              </p>
              <svg
                className={`relative shrink-0 size-5 sm:size-6 text-[#1e1e1e] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="font-roboto font-normal leading-6 relative shrink-0 text-base sm:text-lg text-[#1e1e1e] tracking-[0.25px] whitespace-pre-wrap">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

