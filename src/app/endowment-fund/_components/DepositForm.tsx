import { HexAddress } from "@/types/types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
  type BaseError,
} from "wagmi";
import GetContractBalance from "./GetContractBalance";
import { abi as USDeAbi } from "@/abis/USDe";
import { abi as StakedUSDeAbi } from "@/abis/StakedUSDe";
import { abi as EduenaAbi } from "@/abis/Eduena";
import { formatEther, parseEther } from "viem";
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

export default function DepositForm() {
  const account = useAccount();
  const [amount, setAmount] = useState("");
  const [debouncedAmount, setDebouncedAmount] = useState(amount);

  // Debounce the amount
  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedAmount(amount);
    }, 300);

    handler();

    return () => {
      handler.cancel();
    };
  }, [amount]);

  const { data: receiveAmount } = useReadContract({
    abi: StakedUSDeAbi,
    address: process.env.NEXT_PUBLIC_SUSDE_CONTRACT_ADDRESS as HexAddress,
    functionName: "previewDeposit",
    args: [BigInt(parseEther(debouncedAmount.toString()))],
  });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString();
    setAmount(value);
  };
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onOpenChange: modalOnOpenChange,
  } = useDisclosure();
  const {
    data: hash,
    writeContract,
    isPending,
    error,
    reset: resetWriteContract,
  } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  async function approveUSDe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    writeContract({
      address: process.env.NEXT_PUBLIC_USDE_CONTRACT_ADDRESS as HexAddress,
      abi: USDeAbi,
      functionName: "approve",
      args: [
        process.env.NEXT_PUBLIC_ENDOWMENT_FUND_ADDRESS as HexAddress,
        BigInt(parseEther(amount.toString())),
      ],
    });

    modalOnOpen();
  }

  function depositUSDe(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    resetWriteContract();

    writeContract({
      address: process.env.NEXT_PUBLIC_ENDOWMENT_FUND_ADDRESS as HexAddress,
      abi: EduenaAbi,
      functionName: "deposit",
      args: [BigInt(parseEther(amount.toString()))],
    });
  }

  return (
    <>
      <form
        className="bg-white rounded-lg shadow-lg p-6"
        onSubmit={approveUSDe}
      >
        <div>
          <div className="flex items-center">
            <div className="flex-grow">
              <div className="flex items-center">
                <Input
                  type="number"
                  label="Deposit"
                  placeholder=""
                  name="amount"
                  value={amount.toString()}
                  onChange={handleAmountChange}
                />
                <div className="flex w-48">
                  <Image
                    src="img/usde.svg"
                    alt="USDe Logo"
                    className="w-6 h-6 flex-shrink-0 ml-2"
                    width={24}
                    height={24}
                  />
                  <span className="ml-2 flex-shrink-0">USDe</span>
                </div>
              </div>

              {account.status === "connected" && (
                <p className="text-gray-600 mt-2 text-right text-sm">
                  <span className="font-bold">
                    Balance:{" "}
                    <GetContractBalance
                      address={account.address}
                      contract={
                        process.env
                          .NEXT_PUBLIC_USDE_CONTRACT_ADDRESS! as HexAddress
                      }
                    />
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
        <Button color="primary" type="submit" className="w-full block mt-4">
          Deposit
        </Button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onOpenChange={modalOnOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Deposit</ModalHeader>
              <ModalBody>
                {hash && <div>Transaction Hash: {hash}</div>}
                {isPending ? "Approving..." : "Deposit"}
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isConfirmed && (
                  <>
                    <div>Transaction confirmed.</div>
                    <form onSubmit={depositUSDe}>
                      <Button color="primary" type="submit">
                        Deposit
                      </Button>
                    </form>
                  </>
                )}
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
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
