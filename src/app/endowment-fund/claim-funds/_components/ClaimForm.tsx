import { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
  type BaseError,
} from "wagmi";
import { abi as EduenaAbi } from "@/abis/Eduena";
import { HexAddress } from "@/types/types";
import { parseEther } from "viem";

const ClaimForm = () => {
  const account = useAccount();
  const [amount, setAmount] = useState("");
  const {
    data: hash,
    writeContract,
    isPending,
    error,
    reset: resetWriteContract,
  } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    resetWriteContract();
    writeContract({
      address: process.env.NEXT_PUBLIC_ENDOWMENT_FUND_ADDRESS as HexAddress,
      abi: EduenaAbi,
      functionName: "distribute",
      args: [
        account?.address as HexAddress,
        BigInt(parseEther(amount.toString())),
      ],
    });
  };

  useEffect(() => {
    if (isConfirmed) {
      setAmount("");
    }
  }, [isConfirmed]);

  return (
    <div className="container mx-auto p-6 max-w-md bg-white rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="number"
            label="Claim amount"
            placeholder=""
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
        </div>
        <Button
          color="primary"
          type="submit"
          className="w-full block mt-4"
          isDisabled={
            account.status !== "connected" || !amount || parseInt(amount) <= 0
          }
        >
          {" "}
          Claim Fund{" "}
        </Button>
      </form>

      {isPending && <div className="text-blue-500 mt-4">Claiming...</div>}
      {isConfirming && (
        <div className="text-yellow-500 mt-4">Waiting for confirmation...</div>
      )}
      {isConfirmed && (
        <div className="text-green-500 mt-4">Transaction confirmed.</div>
      )}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">
            {(error as BaseError).shortMessage || error.message}
          </span>
        </div>
      )}
    </div>
  );
};

export default ClaimForm;
