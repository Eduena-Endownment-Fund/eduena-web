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
import { useAccount } from "wagmi";
import GetContractBalance from "./GetContractBalance";

export default function DepositForm() {
  const account = useAccount();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  async function approveUSDe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onOpen();
  }

  return (
    <form className="bg-white rounded-lg shadow-lg p-6" onSubmit={approveUSDe}>
      <div>
        <div className="flex items-center">
          <div className="flex-grow">
            <div className="flex items-center">
              <Input
                type="number"
                label="Deposit"
                placeholder=""
                id="amount"
                name="amount"
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
                  Balance: <GetContractBalance address={account.address} contract={process.env.NEXT_PUBLIC_USDE_CONTRACT_ADDRESS! as HexAddress} />
                </span>
              </p>
            )}

            <div className="border-t border-gray-300 mt-4"></div>

            <div className="flex items-center mt-2">
              <Input
                isDisabled
                type="number"
                label="You Receive"
                className="max-w-xs"
              />
              <div className="flex w-48">
                <Image
                  src="img/sUSDe.svg"
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
                  Balance: <GetContractBalance address={account.address} contract={process.env.NEXT_PUBLIC_SUSDE_CONTRACT_ADDRESS! as HexAddress} />
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <Button color="primary" type="submit" className="w-full block mt-4">
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
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">error message</span>
                </div>
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
    </form>
  );
}
