import { useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

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

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [impact, setImpact] = useState("");
  const [fundingTimeline, setFundingTimeline] = useState("");
  const [region, setRegion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Simulate KYC verification and project approval process
    setTimeout(() => {
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
              {(cat) => <SelectItem key={cat.key}>{cat.label}</SelectItem>}
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
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      ) : (
        <p>Submitting your project...</p>
      )}
    </div>
  );
};

export default ProjectForm;