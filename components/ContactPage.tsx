"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import ContactContent from "./ContactContent";

export default function ContactPage() {
  return (
    <div className="bg-white flex flex-col items-start relative h-screen w-full overflow-auto md:overflow-hidden">
      <Header />
      <div className="flex flex-col md:flex-row flex-auto md:flex-1 items-start md:items-stretch min-h-0 min-w-0 relative shrink-0 w-full">
        <Sidebar activePage="contact" />
        <ContactContent />
      </div>
    </div>
  );
}



