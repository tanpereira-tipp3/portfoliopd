"use client";

import { AnalyticsIcon, ArrowUpIcon } from "./icons";

const analyticsCards = [
  { title: "Professional experience", value: "8 years" },
  { title: "Features developed", value: "+30 features" },
  { title: "Industries", value: "8 diverse industries" },
];

export default function AnalyticsSection({ 
  showCards,
  showHeading = true
}: { 
  showCards?: string[];
  showHeading?: boolean;
}) {
  const cardsToShow = showCards 
    ? analyticsCards.filter(card => showCards.includes(card.title))
    : analyticsCards;

  return (
    <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
      {showHeading && (
        <div className="flex gap-2 items-center relative shrink-0">
          <div className="relative shrink-0 size-4 text-[#5a5a5a]">
            <AnalyticsIcon className="size-full" />
          </div>
          <p className="font-roboto font-normal leading-4 relative shrink-0 text-[#5a5a5a] text-xs tracking-[0.4px]">
            Analytics
          </p>
        </div>
      )}
      <div className="flex flex-col gap-3 items-stretch relative shrink-0 w-full">
        {cardsToShow.map((card) => (
          <AnalyticsCard
            key={card.title}
            title={card.title}
            value={card.value}
          />
        ))}
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

