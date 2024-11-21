import { useState, useEffect } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { categories } from "@/mocks/mockData";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [impact, setImpact] = useState("");
  const [fundingTimeline, setFundingTimeline] = useState("");
  const [region, setRegion] = useState("");
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onOpenChange: modalOnOpenChange,
  } = useDisclosure();

  const isFormValid = () => {
    return (
      projectName &&
      description &&
      amount &&
      category &&
      impact &&
      fundingTimeline &&
      region
    );
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    modalOnOpen();
    // Clear the form fields
    setProjectName("");
    setDescription("");
    setAmount("");
    setCategory("");
    setImpact("");
    setFundingTimeline("");
    setRegion("");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
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
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
          >
            {categories.map((cat) => (
              <SelectItem key={cat.key} value={cat.label}>
                {cat.label}
              </SelectItem>
            ))}
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
        <Button type="submit" color="primary" fullWidth={true} isDisabled={!isFormValid()}>
          Submit
        </Button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onOpenChange={modalOnOpenChange}
        isDismissable={false}
      >
        <ModalContent>
          <ModalHeader>
            <h1 id="modal-title">Project Created</h1>
          </ModalHeader>
          <ModalBody>
            <p>Your project has been successfully created.</p>
          </ModalBody>
          <ModalFooter>
            <Button auto onClick={() => modalOnOpenChange(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectForm;