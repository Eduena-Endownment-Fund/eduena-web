"use client";

import HeroSection from "@/components/HeroSection";
import ClaimForm from "./_components/ClaimForm";

export default function ClaimFunds() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Claim Your Funds"
        description="Submit a claim to receive the funds allocated to your approved project."
      />
      <section className="p-8">
        <ClaimForm />
      </section>
    </div>
  );
}