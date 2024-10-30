"use client";

import RetroGrid from "./ui/retro-grid";
import { ContactForm } from "./contact-form.jsx";

export function RetroGridSection() {
  return (
    <div className="relative py-[50px] flex h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <div>
        <h2 className="font-heading text-[40px]">Connect with our Team</h2>
        <ContactForm />
      </div>
      <RetroGrid />
    </div>
  );
}
