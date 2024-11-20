import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import GetContractBalance from "./GetContractBalance";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { HexAddress } from "@/types/types";
import { abi as EduenaAbi } from "@/abis/Eduena";
import { abi as StakedUSDe } from "@/abis/StakedUSDe";
import { BaseError, parseEther, formatEther } from "viem";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function WithdrawForm() {
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
    abi: StakedUSDe,
    address: process.env.NEXT_PUBLIC_SUSDE_CONTRACT_ADDRESS as HexAddress,
    functionName: "previewWithdraw",
    args: [BigInt(parseEther(debouncedAmount.toString()))],
  });

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

  function withdrawStakedUSDe(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    resetWriteContract();

    writeContract({
      address: process.env.NEXT_PUBLIC_ENDOWMENT_FUND_ADDRESS as HexAddress,
      abi: EduenaAbi,
      functionName: "withdraw",
      args: [BigInt(parseEther(amount.toString()))],
    });

    modalOnOpen();
  }

  return (
    <>
      <form
        className="bg-white rounded-lg shadow-lg p-6"
        onSubmit={withdrawStakedUSDe}
      >
        <div className="mb-6">
          <div className="flex items-center">
            <div className="flex-grow">
              <div className="flex items-center">
                <Input
                  type="number"
                  label="Withdraw"
                  placeholder=""
                  name="amount"
                  value={amount.toString()}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="flex w-48">
                  <Image
                    src="/img/endowment-fund.png"
                    alt="Endowment Fund Logo"
                    className="w-6 h-6 flex-shrink-0 ml-2"
                    width={24}
                    height={24}
                  />
                  <span className="ml-2 flex-shrink-0">EDN</span>
                </div>
              </div>
            </div>
          </div>
          {account.status === "connected" && (
            <p className="text-gray-600 mt-2 text-right text-sm">
              <span className="font-bold">
                Balance:{" "}
                <GetContractBalance
                address={account.address}
                contract={
                  process.env.NEXT_PUBLIC_ENDOWMENT_FUND_ADDRESS! as HexAddress
                }
              />
              </span>
            </p>
          )}
        </div>

        <div className="border-t border-gray-300 mt-4"></div>

        <div className="flex items-center mt-2">
          <Input
            isDisabled
            type="number"
            label="You Receive"
            className="max-w-xs"
            value={
              receiveAmount
                ? Math.floor(
                    Number(formatEther(BigInt(receiveAmount)))
                  ).toString()
                : ""
            }
          />
          <div className="flex w-48">
            <Image
              src="/img/sUSDe.svg"
              alt="sUSDe Logo"
              className="w-6 h-6 flex-shrink-0 ml-2"
              width={24}
              height={24}
            />
            <span className="ml-2 flex-shrink-0">sUSDe</span>
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
                      .NEXT_PUBLIC_SUSDE_CONTRACT_ADDRESS! as HexAddress
                  }
                />
             
            </span>
          </p>
        )}

        <Button color="primary" type="submit" className="w-full block mt-4">
          Withdraw
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
                {isPending ? "Withdrawing..." : "Deposit"}
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isConfirmed && (
                  <>
                    <div>Transaction confirmed.</div>
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
