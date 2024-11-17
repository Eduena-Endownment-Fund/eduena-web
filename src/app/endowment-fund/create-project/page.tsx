"use client";
import { useState } from "react";
import { Button, Input, Text, Select, SelectItem } from "@nextui-org/react";

export default function CreateProject() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [impact, setImpact] = useState("");
  const [fundingTimeline, setFundingTimeline] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState("Pending");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { key: "healthcare", label: "Healthcare" },
    { key: "environment", label: "Environment" },
    { key: "education", label: "Education" },
    { key: "research_and_development", label: "Research and Development" },
    { key: "disaster_relief", label: "Disaster Relief" },
    { key: "economic_empowerment", label: "Economic Empowerment" },
    { key: "technology", label: "Technology" },
    { key: "social_justice", label: "Social Justice" },
    { key: "water_and_sanitation", label: "Water and Sanitation" },
    { key: "infrastructure", label: "Infrastructure" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate KYC verification and project approval process
    setTimeout(() => {
      setStatus("Approved");
      setIsSubmitted(true);
      setProjectName("");
      setDescription("");
      setAmount("");
      setCategory("");
      setImpact("");
      setFundingTimeline("");
      setRegion("");
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Project Registration Section */}
      <section className="flex flex-col items-center justify-center text-center p-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-5xl font-extrabold mb-6">Register Your Project</h2>
        <p className="text-xl mb-10 max-w-3xl">
          Submit your project for funding and support from our endowment fund.
        </p>
      </section>

      <section className="p-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="projectName"
                >
                  Project Name
                </label>
                <Input
                  type="text"
                  id="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <Input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <Input
                  type="text"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <Select
                  items={categories}
                  placeholder="Select a category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {(cat) => <SelectItem>{cat.label}</SelectItem>}
                </Select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="impact"
                >
                  Impact
                </label>
                <Input
                  type="text"
                  id="impact"
                  value={impact}
                  onChange={(e) => setImpact(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fundingTimeline"
                >
                  Funding Timeline
                </label>
                <Input
                  type="text"
                  id="fundingTimeline"
                  value={fundingTimeline}
                  onChange={(e) => setFundingTimeline(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="region"
                >
                  Region
                </label>
                <Input
                  type="text"
                  id="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  fullWidth
                />
              </div>
              <Button type="submit" color="primary" auto>
                Submit
              </Button>
            </form>
          ) : (
            <Text h3>Submitting your project...</Text>
          )}
        </div>
      </section>
    </div>
  );
}
