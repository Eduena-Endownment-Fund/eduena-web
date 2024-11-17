"use client";

import { useState } from "react";
import DepositForm from "./_components/DepositForm";
import WithdrawForm from "./_components/WithdrawForm";

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      className={`py-3 px-6 ${
        isActive ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-500"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function InformationSection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Information</h2>
      <p className="text-gray-600">
        The deposited funds are used to support various initiatives and projects
        for verified beneficiaries. All profits generated from the deposits are
        utilized to fund these initiatives, ensuring transparency and security
        in the process.
      </p>
    </div>
  );
}



export default function EndowmentFundPage() {
  const [amount, setAmount] = useState("");
  const [activeTab, setActiveTab] = useState("deposit");
  const [depositAmount, setDepositAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [currentDeposit, setCurrentDeposit] = useState(1000); // Example current deposit amount
  const [currentWithdraw, setCurrentWithdraw] = useState(500); // Example current withdrawable amount

  return (
    <>
      <section className="flex flex-col items-center justify-center text-center p-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-5xl font-extrabold mb-6">Manage Your Endowment</h2>
        <p className="text-xl mb-10 max-w-3xl">
          Seamlessly deposit funds to support impactful projects or withdraw
          your endowment with ease. Join us in making a difference!
        </p>
      </section>
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