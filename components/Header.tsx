"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HelpIcon, MessageIcon, TipLogo } from "./icons";

export default function Header() {
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false);

  useEffect(() => {
    // Check if message has been read (stored in localStorage)
    if (typeof window !== "undefined") {
      const messageRead = localStorage.getItem("inbox_message_read");
      if (messageRead !== "true") {
        setHasUnreadMessage(true);
      }

      // Listen for message read events
      const handleMessageRead = () => {
        setHasUnreadMessage(false);
      };

      window.addEventListener("inboxMessageRead", handleMessageRead);
      return () => {
        window.removeEventListener("inboxMessageRead", handleMessageRead);
      };
    }
  }, []);

  return (
    <div className="bg-white flex items-start justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 relative shrink-0 w-full">
      <Link href="/" className="h-6 sm:h-8 relative shrink-0 w-[40px] sm:w-[54px] flex items-center hover:opacity-70 transition-opacity">
        <TipLogo className="w-full h-full" />
      </Link>
      <div className="flex gap-4 sm:gap-4 items-center relative shrink-0">
        <Link
          href="/inbox"
          className="relative shrink-0 size-5 sm:size-6 text-black hover:opacity-70 transition-opacity"
          aria-label="Open inbox"
        >
          <MessageIcon className="size-full" />
          {hasUnreadMessage && (
            <span className="absolute -top-1 -right-1 bg-primary rounded-full size-3 border-2 border-white z-10" />
          )}
        </Link>
        <Link href="/faq" className="relative shrink-0 size-5 sm:size-6 text-black hover:opacity-70 transition-opacity">
          <HelpIcon className="size-full" />
        </Link>
      </div>
    </div>
  );
}

