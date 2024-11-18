import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

const ClaimForm = () => {
  const [projectId, setProjectId] = useState("");
  const [amount, setAmount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate claim process
    setTimeout(() => {
      setIsSubmitted(true);
      setProjectId("");
      setAmount("");
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
              htmlFor="projectId"
            >
              Project ID
            </label>
            <Input
              type="text"
              id="projectId"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
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
          <Button type="submit" color="primary" auto>
            Claim Funds
          </Button>
        </form>
      ) : (
        <p>Submitting your claim...</p>
      )}
    </div>
  );
};

export default ClaimForm;