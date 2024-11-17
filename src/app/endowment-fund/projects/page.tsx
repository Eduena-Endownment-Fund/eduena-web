"use client";
import { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      projectName: "Education Scholarships and Fellowships",
      description:
        "Providing long-term scholarships for underprivileged students and funding educational research and innovation.",
      amount: "$50,000",
      category: "Education",
      impact: "Enables 200 students to complete higher education annually.",
      fundingTimeline: "2024-2026",
      region: "Global",
      status: "Active",
    },
    {
      projectName: "Innovative Research and Development Projects",
      description:
        "Providing grants for cutting-edge R&D initiatives in fields like biotechnology, renewable energy, and artificial intelligence.",
      amount: "$120,000",
      category: "Research and Development",
      impact:
        "Funds 10 breakthrough R&D projects with potential to drive industry innovation and solve critical global challenges.",
      fundingTimeline: "2024-2028",
      region: "Global",
      status: "Proposed",
    },
    {
      projectName: "Healthcare Access and Research",
      description:
        "Funding rare disease research and improving healthcare access in underserved communities.",
      amount: "$75,000",
      category: "Health",
      impact: "Provides medical care for 5,000 individuals annually.",
      fundingTimeline: "2024-2025",
      region: "Developing Countries",
      status: "Proposed",
    },
    {
      projectName: "Open-Source Technology Development",
      description:
        "Grants for developers building decentralized protocols and digital privacy tools.",
      amount: "$30,000",
      category: "Technology",
      impact: "Funds 15 innovative tech projects benefiting the public.",
      fundingTimeline: "2024-2026",
      region: "Global",
      status: "Active",
    },
    {
      projectName: "Climate Change Mitigation Projects",
      description:
        "Supporting renewable energy, carbon capture, and reforestation programs to combat climate change.",
      amount: "$100,000",
      category: "Environment",
      impact: "Offsets 10,000 tons of CO2 annually and plants 50,000 trees.",
      fundingTimeline: "2024-2027",
      region: "Global",
      status: "Active",
    },
    {
      projectName: "Disaster Relief and Humanitarian Aid",
      description:
        "Creating rapid response mechanisms for natural disasters and humanitarian crises.",
      amount: "$150,000",
      category: "Relief",
      impact: "Supports 10,000 displaced individuals during crises.",
      fundingTimeline: "2024-2025",
      region: "Global",
      status: "Active",
    },
    {
      projectName: "Social Entrepreneurship and Small Business Support",
      description:
        "Microloans for underserved entrepreneurs and incubators for social ventures.",
      amount: "$40,000",
      category: "Entrepreneurship",
      impact: "Supports 100 small businesses and creates 500 jobs annually.",
      fundingTimeline: "2024-2026",
      region: "Developing Countries",
      status: "Active",
    },
    {
      projectName: "Decentralized Science (DeSci) Initiatives",
      description:
        "Funding open-access scientific research and decentralized peer review systems.",
      amount: "$80,000",
      category: "Science",
      impact: "Enables 20 research projects with global implications.",
      fundingTimeline: "2024-2027",
      region: "Global",
      status: "Proposed",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-col items-center justify-center text-center p-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-5xl font-extrabold mb-6">
          Endowment Fund Use-Cases
        </h2>
        <p className="text-xl mb-10 max-w-3xl">
          Our endowment fund supports various use-cases including research,
          development, community outreach, and educational programs.
        </p>
      </section>
      {/* Projects Display Section */}
      <section className="p-32">
        <div className="mx-auto rounded">
          <h2 className="text-3xl font-bold mb-6">Projects for Funding</h2>
          {projects.length > 0 ? (
            <div className="gap-12 grid grid-cols-2 sm:grid-cols-4 ">
              {projects.map((project, index) => (
                <Card key={index} shadow="sm">
                  <CardBody className="overflow-visible p-6">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={project.projectName}
                      className="w-full object-cover h-[140px]"
                      src={project.img} // Assuming you have an img key in your project object
                    />
                    <h2 className="text-2xl font-bold mt-4">
                      {project.projectName}
                    </h2>
                    <p className="mt-2 text-gray-700">{project.description}</p>
                    <p className="mt-2 text-gray-700">
                      Impact: {project.impact}
                    </p>
                    <p className="mt-2 text-gray-700">
                      Funding Timeline: {project.fundingTimeline}
                    </p>
                    <p className="mt-2 text-gray-700">
                      Region: {project.region}
                    </p>
                    <p className="mt-2 text-gray-700">
                      Status: {project.status}
                    </p>
                  </CardBody>
                  <CardFooter className="text-xl justify-between p-6">
                    <b>{project.category}</b>
                    <p className="text-4xl text-primary-500 font-bold">
                      {project.amount}
                    </p>
                  </CardFooter>
                </Card>
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
