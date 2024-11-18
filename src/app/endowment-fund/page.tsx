"use client";

import { useState } from "react";
import DepositForm from "./_components/DepositForm";
import WithdrawForm from "./_components/WithdrawForm";
import TabButton from "./_components/TabButton";
import InformationSection from "./_components/InformationSection";
import HeroSection from "@/components/HeroSection";

export default function EndowmentFundPage() {
  const [amount, setAmount] = useState("");
  const [activeTab, setActiveTab] = useState("deposit");
  const [depositAmount, setDepositAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [currentDeposit, setCurrentDeposit] = useState(1000); // Example current deposit amount
  const [currentWithdraw, setCurrentWithdraw] = useState(500); // Example current withdrawable amount

  return (
    <>
      <HeroSection
        title="Manage Your Endowment"
        description="Seamlessly deposit funds to support impactful projects or withdraw your endowment with ease. Join us in making a difference!"
      />
      <div className="container mx-auto p-6 max-w-md">
        <div className="mt-6">
          <div className="flex justify-center border-b mb-6">
            <TabButton
              label="Deposit"
              isActive={activeTab === "deposit"}
              onClick={() => setActiveTab("deposit")}
            />
            <TabButton
              label="Withdraw"
              isActive={activeTab === "withdraw"}
              onClick={() => setActiveTab("withdraw")}
            />
          </div>

          {activeTab === "deposit" && (
            <DepositForm
              amount={amount}
              setAmount={setAmount}
              depositAmount={depositAmount}
              receiveAmount={receiveAmount}
            />
          )}

          {activeTab === "withdraw" && (
            <WithdrawForm
              currentWithdraw={currentWithdraw}
              receiveAmount={receiveAmount}
              setReceiveAmount={setReceiveAmount}
              depositAmount={depositAmount}
            />
          )}
        </div>

        <InformationSection />
      </div>
    </>
  );
}