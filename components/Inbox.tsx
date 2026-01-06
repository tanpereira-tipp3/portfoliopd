"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MessageIcon } from "./icons";

interface Message {
  id: string;
  from: string;
  subject: string;
  content: string;
  timestamp: string;
  read: boolean;
}

const initialMessageContent = `Hello there!

Thank you for taking the time to explore my portfolio. I'm thrilled that you're interested in learning more about my work and expertise.

I would love the opportunity to meet with you and discuss in greater depth how my experience in product design, AI/ML interfaces, and user-centered design could contribute to your team. I'm particularly excited about the possibility of bringing thoughtful, data-driven design solutions to complex challenges.

I'm open to discussing:
• My approach to designing AI-powered features and scalable design systems
• How I collaborate with cross-functional teams (PMs, engineers, data scientists)
• My experience leading design initiatives and defining UX strategy
• Any specific projects or challenges you'd like to explore together

I'm flexible with scheduling and would be happy to find a time that works for both of us. Please feel free to reach out via email at tanpereira5@gmail.com or through LinkedIn.

Looking forward to connecting!

Best regards,
Tania Pereira`;

export default function Inbox({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(() => {
    // Initialize messages on client side only
    if (typeof window !== "undefined") {
      const messageRead = localStorage.getItem("inbox_message_read");
      return [
        {
          id: "1",
          from: "Tania Pereira",
          subject: "Welcome! Let's connect",
          content: initialMessageContent,
          timestamp: new Date().toISOString(),
          read: messageRead === "true",
        },
      ];
    }
    return [];
  });
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (isOpen && messages.length > 0 && !selectedMessage) {
      setSelectedMessage(messages[0]);
    }
  }, [isOpen, messages, selectedMessage]);

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    if (!message.read) {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === message.id ? { ...msg, read: true } : msg))
      );
      // Mark as read in localStorage
      localStorage.setItem("inbox_message_read", "true");
      // Dispatch custom event to notify Header
      window.dispatchEvent(new CustomEvent("inboxMessageRead"));
    }
  };

  const unreadCount = messages.filter((msg) => !msg.read).length;

  if (!isOpen || typeof window === "undefined") return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] max-h-[800px] flex flex-col overflow-hidden m-4" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-white border-b border-[#e3e3e3] flex items-center justify-between px-6 py-4 shrink-0">
          <div className="flex items-center gap-3">
            <MessageIcon className="size-6 text-black" />
            <h2 className="font-libre-baskerville font-medium text-2xl text-black">Inbox</h2>
            {unreadCount > 0 && (
              <span className="bg-primary text-white text-xs font-roboto font-medium px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-black hover:opacity-70 transition-opacity text-2xl leading-none"
            aria-label="Close inbox"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Messages List */}
          <div className="w-full md:w-80 border-r border-[#e3e3e3] overflow-y-auto bg-[#fafafa]">
            <div className="p-2">
              {messages.map((message) => (
                <button
                  key={message.id}
                  onClick={() => handleMessageClick(message)}
                  className={`w-full text-left p-4 rounded-lg mb-2 transition-colors ${
                    selectedMessage?.id === message.id
                      ? "bg-primary/10 border border-primary"
                      : message.read
                      ? "bg-white hover:bg-gray-50 border border-[#e3e3e3]"
                      : "bg-white border-2 border-primary hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p
                      className={`font-roboto font-medium text-sm truncate ${
                        !message.read ? "text-black" : "text-[#757575]"
                      }`}
                    >
                      {message.from}
                    </p>
                    {!message.read && (
                      <span className="bg-primary rounded-full size-2 shrink-0 mt-1.5" />
                    )}
                  </div>
                  <p
                    className={`font-roboto font-semibold text-base mb-1 ${
                      !message.read ? "text-black" : "text-[#757575]"
                    }`}
                  >
                    {message.subject}
                  </p>
                  <p className="font-roboto text-xs text-[#757575]">
                    {new Date(message.timestamp).toLocaleDateString()}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Message Detail */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {selectedMessage ? (
              <>
                <div className="border-b border-[#e3e3e3] p-6 shrink-0 bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-roboto font-semibold text-lg text-black mb-1">
                        {selectedMessage.from}
                      </p>
                      <p className="font-roboto font-medium text-base text-[#757575] mb-2">
                        {selectedMessage.subject}
                      </p>
                    </div>
                    <p className="font-roboto text-sm text-[#757575]">
                      {new Date(selectedMessage.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-6 bg-white">
                  <div className="font-roboto text-base leading-6 text-[#1e1e1e] whitespace-pre-wrap">
                    {selectedMessage.content}
                  </div>
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
    </div>
  );

  return createPortal(modalContent, document.body);
}

