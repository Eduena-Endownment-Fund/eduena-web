"use client";
import HeroSection from "@/components/HeroSection";
import { useState } from "react";
import ProjectCard from "./_components/ProjectCard";
import { projectData } from "@/mocks/mockData";

export default function Projects() {
  const [projects] = useState(projectData);

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Endowment Fund Use-Cases"
        description="Our endowment fund supports various use-cases including research, development, community outreach, and educational programs."
      />
      <section className="p-6 md:p-6 lg:p-18">
        <div className="mx-auto rounded">
          <h2 className="text-3xl font-bold mb-6">Projects for Funding</h2>
          {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
          ) : (
        <p>No projects submitted yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}