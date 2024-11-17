import { useEffect, useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "@/abis/EndowmentFund";
import { abi as usde } from "@/abis/USDe";
import {
  useSendTransaction,
  useBalance,
  useReadContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";
import { parseEther, parseGwei } from "viem";
import { ethers } from "ethers";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function DepositForm({
  amount,
  setAmount,
  depositAmount,
  receiveAmount,
}) {
  const { data: hash, error, writeContract, isPending } = useWriteContract();
  const [processState, setProcessState] = useState("Approving");
  const { address } = useAccount();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data: balance } = useReadContract({
    address: process.env.NEXT_PUBLIC_USDE_CONTRACT_ADDRESS,
    abi: usde,
    functionName: "balanceOf",
    args: [address],
    enabled: !!address,
  });
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  async function approveUSDe(e: React.FormEvent<HTMLFormElement>) {
    await setProcessState("Approving");

    e.preventDefault();
    onOpen();

    writeContract({
      address: process.env.NEXT_PUBLIC_USDE_CONTRACT_ADDRESS,
      abi,
      functionName: "approve",
      args: [
        process.env.NEXT_PUBLIC_ENDOWMENT_FUND_ADDRESS,
        parseEther(amount),
      ],
    });
  }

  async function handleDeposit() {
    await setProcessState("Depositing");

    writeContract({
      address: process.env.NEXT_PUBLIC_ENDOWMENT_FUND_ADDRESS,
      abi,
      functionName: "_deposit",
      args: [parseEther(amount)],
    });
  }

  useEffect(() => {
    if (isConfirmed && processState === "Approving") {
      setProcessState("ConfirmDeposit"); 
    } else if (isConfirmed && processState === "Depositing") {
      setProcessState("Deposited");
    }
  }, [isConfirmed, processState]);

  return (
    <form className="bg-white rounded-lg shadow-lg p-6" onSubmit={approveUSDe}>
      <div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4"></div>
        <div className="flex items-center">
          <div className="flex-grow">
            <div className="flex items-center">
              <Input
                type="number"
                label="Deposit"
                placeholder=""
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={isPending}
              />
              <div className="flex w-48">
                <img
                  src="img/usde.svg"
                  alt="USDe Logo"
                  className="w-6 h-6 flex-shrink-0 ml-2"
                />
                <span className="ml-2 flex-shrink-0">USDe</span>
              </div>
            </div>

            <p className="text-gray-600 mt-2 text-right text-sm">
              <span className="font-bold">
                Balance:{" "}
                {balance ? Number(ethers.formatEther(balance)).toFixed(2) : "0"}{" "}
              </span>
            </p>

            <div className="border-t border-gray-300 mt-4"></div>

            <div className="flex items-center mt-2">
              <Input
                isDisabled
                type="number"
                label="You Receive"
                className="max-w-xs"
              />
              <div className="flex w-48">
                <img
                  src="img/sUSDe.svg"
                  alt="sUSDe Logo"
                  className="w-6 h-6 flex-shrink-0 ml-2"
                />
                <span className="ml-2 flex-shrink-0">sUSDe</span>
              </div>
            </div>

            <p className="text-gray-600 mt-2 text-right text-sm">
              <span className="font-bold">
                Balance:{" "}
                {balance ? Number(ethers.formatEther(balance)).toFixed(2) : "0"}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <Button
        color="primary"
        disabled={isPending}
        type="submit"
        className="w-full block mt-4"
      >
        Deposit
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Deposit</ModalHeader>
              <ModalBody>
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">
                      {(error as BaseError).shortMessage || error.message}
                    </span>
                  </div>
                )}

                {processState === "Approving" && (
                  <>
                    {isPending && <div>Approving USDe...</div>}
                    {isConfirming && <div>Waiting for confirmation...</div>}
                    {isConfirmed && (
                      <>
                        <div>USDe approved.</div>
                      </>
                    )}
                  </>
                )}

                {processState === "Depositing" && (
                  <>
                    {isPending && <div>Depositing USDe...</div>}
                    {isConfirming && <div>Waiting for confirmation...</div>}
                    {isConfirmed && (
                      <>
                        <div>USDe deposited.</div>
                      </>
                    )}

                    {hash && (
                      <p className="text-sm text-gray-700">
                        <strong>Transaction Hash:</strong>
                        <span className="block mt-1 break-words">{hash}</span>
                      </p>
                    )}
                  </>
                )}

                {processState === "Deposited" && (
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      className="w-12 h-12 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>

                    <h2 className="text-2xl font-bold text-gray-700 mt-4">
                      All done!
                    </h2>
                    <p className="text-gray-500 mt-2">
                      All done! You have deposited {depositAmount} USDe
                    </p>
                  </div>
                )}

                {hash && (
                  <div className="bg-gray-100 p-4 rounded-md shadow-md">
                    <span className="text-gray-700">
                      Transaction ID:{" "}
                      <span className="font-semibold text-gray-700">
                        <span className="block mt-1 break-words">{hash}</span>
                      </span>
                    </span>
                  </div>
                )}

                {!error && processState !== "Deposited" && (
                  <>
                    <Button
                      color="primary"
                      onClick={handleDeposit}
                      isLoading={!isConfirmed}
                    >
                      {processState === "Approve"
                        ? "Approve USDe"
                        : "Deposit USDe"}
                    </Button>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                {(error || processState === "Deposited") && (
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}