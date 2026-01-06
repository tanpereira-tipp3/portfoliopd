"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageIcon, MessagePlainIcon } from "./icons";

interface Message {
  id: string;
  from: string;
  subject: string;
  content: string;
  timestamp: string;
  read: boolean;
}

const initialMessageContent = `Hello there!

I'm happy you're browsing through my work. I'm happy to talk to you and explain more extensively about my experience.

I would love the opportunity to discuss how my experience in product design, AI interfaces, and user-centered design could contribute to your team.

I'm flexible with scheduling and would be happy to find a time that works for both of us. Please feel free to reach out via email at tanpereira5@gmail.com or through LinkedIn.

Looking forward to connecting!

Best,
Tania`;

export default function InboxContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    // Initialize messages on client side only
    if (typeof window !== "undefined") {
      const messageRead = localStorage.getItem("inbox_message_read");
      const initialMessages = [
        {
          id: "1",
          from: "Tania Pereira",
          subject: "Welcome! Let's connect",
          content: initialMessageContent,
          timestamp: new Date().toISOString(),
          read: messageRead === "true",
        },
      ];
      setMessages(initialMessages);
      // Only auto-select on mobile, on desktop show "Select a message" initially
      const isMobile = window.innerWidth < 768;
      if (isMobile && initialMessages.length > 0) {
        setSelectedMessage(initialMessages[0]);
      }
    }
  }, []);

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    if (!message.read) {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === message.id ? { ...msg, read: true } : msg))
      );
      localStorage.setItem("inbox_message_read", "true");
      window.dispatchEvent(new CustomEvent("inboxMessageRead"));
    }
  };

  const unreadCount = messages.filter((msg) => !msg.read).length;

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div 
      className="border-[#e3e3e3] border-b-0 md:border-l border-r-0 border-solid border-t flex flex-col min-h-0 min-w-0 pb-24 pt-8 px-4 sm:px-6 md:px-8 relative rounded-tl-0 md:rounded-tl-[24px] shadow-none md:shadow-[0px_16px_32px_-4px_rgba(79,55,138,0.1),0px_4px_4px_-4px_rgba(79,55,138,0.05)] shrink-0 w-full flex-1 h-full overflow-hidden"
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
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 shrink-0 mb-4">
        <h1 className="font-libre-baskerville font-bold italic text-2xl sm:text-3xl md:text-4xl text-black">INBOX</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden gap-4">
        {/* Messages List */}
        <div className={`w-full md:w-[384px] border border-[#e7e0ec] rounded-2xl overflow-y-auto bg-white ${selectedMessage ? 'hidden md:flex' : 'flex'} flex-col`}>
          <div className="p-4">
            {messages.length > 0 ? messages.map((message) => (
              <button
                key={message.id}
                onClick={() => handleMessageClick(message)}
                className={`w-full text-left p-4 rounded-2xl transition-colors mb-2 ${
                  selectedMessage?.id === message.id
                    ? "bg-primary/10 border border-primary"
                    : message.read
                    ? "bg-white hover:bg-gray-50 border border-[#e7e0ec]"
                    : "bg-white border-2 border-primary hover:bg-primary/5"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/fotocv.jpg"
                        alt={message.from}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start flex-1 min-w-0">
                      <p
                        className={`font-roboto font-medium text-sm leading-5 ${
                          !message.read ? "text-[#1e1e1e]" : "text-[#757575]"
                        }`}
                      >
                        {message.from}
                      </p>
                      <p
                        className={`font-roboto font-medium text-base leading-5 ${
                          !message.read ? "text-[#1e1e1e]" : "text-[#757575]"
                        }`}
                      >
                        {message.subject}
                      </p>
                    </div>
                  </div>
                  <p className="font-roboto text-xs leading-4 text-[#757575]">
                    {formatDate(message.timestamp)}
                  </p>
                </div>
              </button>
            )) : (
              <p className="font-roboto text-sm text-[#757575] p-4">No messages</p>
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className={`flex-1 flex flex-col overflow-hidden border border-[#e7e0ec] rounded-2xl bg-white ${selectedMessage ? 'flex' : 'hidden md:flex'}`}>
          {selectedMessage ? (
            <>
              {/* Back button for mobile */}
              <div className="md:hidden flex items-center px-4 pt-4 pb-2">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="flex items-center gap-2 text-[#757575] hover:text-[#1e1e1e] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-roboto text-sm">Back</span>
                </button>
              </div>
              
              {/* Date at top center with line below */}
              <div className="flex flex-col gap-4 items-center pt-4 md:pt-6 px-4 shrink-0 bg-white">
                <p className="font-roboto text-xs leading-4 text-[#757575]">
                  {formatDate(selectedMessage.timestamp)}
                </p>
                <div className="border-b border-[#e3e3e3] w-full h-px"></div>
              </div>
              
              {/* Message Header with profile picture and body */}
              <div className="px-4 pt-4 flex-1 flex flex-col gap-4 bg-white min-h-0 overflow-y-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/fotocv.jpg"
                        alt={selectedMessage.from}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex gap-1 items-center flex-wrap">
                      <p className="font-roboto font-medium text-sm leading-5 text-[#1e1e1e]">
                        {selectedMessage.from}
                      </p>
                      <p className="font-roboto text-xs leading-4 text-[#757575]">
                        {formatTime(selectedMessage.timestamp)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Message Body */}
                  <div className="flex items-center justify-center px-4 sm:px-12 py-0">
                    <div className="flex-1 font-roboto text-sm leading-5 text-[#1e1e1e] whitespace-pre-wrap">
                      {selectedMessage.content}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Line separator and Send a message button */}
              <div className="flex flex-col gap-4 px-4 pb-6 shrink-0 bg-white">
                <div className="border-b border-[#e3e3e3] w-full h-px"></div>
                <a 
                  href="mailto:tanpereira5@gmail.com"
                  className="bg-primary flex gap-[10px] items-center justify-center px-6 sm:px-8 py-4 relative rounded-full shrink-0 w-full cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-[0px_8px_16px_-4px_rgba(79,55,138,0.3)] hover:-translate-y-0.5"
                >
                  <p className="font-roboto font-medium leading-4 relative shrink-0 text-base sm:text-lg text-white tracking-[0.4px]">
                    Send a message
                  </p>
                  <div className="relative shrink-0 size-5 sm:size-6 text-white">
                    <MessagePlainIcon className="size-full" />
                  </div>
                </a>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-white">
              <p className="font-roboto text-[#757575]">Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

