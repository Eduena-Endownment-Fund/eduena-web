"use client";
import HeroSection from "@/components/HeroSection";
import ProjectForm from "./_components/ProjectForm";

export default function CreateProject() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Register Your Project"
        description="Submit your project for funding and support from our endowment fund."
      />
      <section className="p-8">
        <ProjectForm />
      </section>
    </div>
  );
}