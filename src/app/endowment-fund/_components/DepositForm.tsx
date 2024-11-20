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
  useWaitForTransactionReceipt,
  useWriteContract,
  type BaseError,
} from "wagmi";
import GetContractBalance from "./GetContractBalance";
import { abi as USDeAbi } from "@/abis/USDe";
import { abi as EduenaAbi } from "@/abis/Eduena";
import { parseEther } from "viem";
import React, { useState, useRef, useEffect } from "react";

const DepositForm = () => {
  const account = useAccount();
  const [amount, setAmount] = useState("");
  const [isDeposit, setIsDeposit] = useState(false);
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
    useWaitForTransactionReceipt({ hash });
  const refetchBalance = useRef<() => void>(() => {});

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value.toString());
  };

  const approveUSDe = async (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  const depositUSDe = (e: React.FormEvent<HTMLFormElement>) => {
    setIsDeposit(true);
    e.preventDefault();
    resetWriteContract();
    writeContract({
      address: process.env.NEXT_PUBLIC_ENDOWMENT_FUND_ADDRESS as HexAddress,
      abi: EduenaAbi,
      functionName: "deposit",
      args: [BigInt(parseEther(amount.toString()))],
    });
  };

  useEffect(() => {
    if (isConfirmed) {
      refetchBalance.current();
    }

    if(isConfirmed && isDeposit && !modalIsOpen) {
      setAmount("");
      setIsDeposit(false);
    }

  }, [isConfirmed, isDeposit, modalIsOpen]);

  return (
    <>
      <form className="bg-white rounded-lg shadow-lg p-6" onSubmit={approveUSDe}>
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
                        process.env.NEXT_PUBLIC_USDE_CONTRACT_ADDRESS! as HexAddress
                      }
                      onRefetch={(refetch) => (refetchBalance.current = refetch)}
                    />
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
        <Button
          color="primary"
          type="submit"
          className="w-full block mt-4"
          isDisabled={account.status !== "connected" || (!amount || parseInt(amount) <= 0)}
        >
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
              <ModalHeader className="flex flex-col gap-1">{isDeposit ? "Deposit USDe" : 'Approve USDe'}</ModalHeader>
              <ModalBody>
                {hash && (
                  <div className="text-wrap whitespace-normal bg-gray-100 p-2 rounded break-words">
                    <strong>Transaction Hash:</strong> {hash}
                  </div>
                )}

                {isDeposit ? (
                  <>
                    {isPending ? (
                      <div className="mb-4">
                        <div className="text-blue-500">Depositing...</div>
                      </div>
                    ) : (
                      ""
                    )}
                    {isConfirming && (
                      <div className="text-yellow-500 mb-4">
                        Waiting for confirmation...
                      </div>
                    )}
                    {isConfirmed && (
                      <div className="text-green-500 mb-4">
                        <div>Transaction confirmed.</div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {isPending ? (
                      <div className="mb-4">
                        <div className="text-blue-500">Approving...</div>
                      </div>
                    ) : (
                      ""
                    )}
                    {isConfirming && (
                      <div className="text-yellow-500 mb-4">
                        Waiting for confirmation...
                      </div>
                    )}
                    {isConfirmed && (
                      <div className="text-green-500 mb-4">
                        <div>Transaction confirmed.</div>
                        <form onSubmit={depositUSDe}>
                          <Button
                            color="primary"
                            type="submit"
                            className="w-full mt-2"
                          >
                            Deposit
                          </Button>
                        </form>
                      </div>
                    )}
                  </>
                )}

                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
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
};

export default DepositForm;