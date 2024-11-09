"use client";

import { useState } from 'react';

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      className={`py-3 px-6 ${isActive ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-500'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function StakeForm({ amount, setAmount, institution, setInstitution, handleDeposit, stakeAmount, receiveAmount }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Stake Funds</h2>
      <p className="text-gray-600 mb-6">
        Contributors can deposit funds to support educational scholarships for verified students.
      </p>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="institution">
          Institution Name (Optional)
        </label>
        <input
          id="institution"
          type="text"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={handleDeposit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Deposit Funds
      </button>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">You stake: <span className="font-bold">{stakeAmount}</span></p>
        <p className="text-gray-600">You receive: <span className="font-bold">{receiveAmount}</span></p>
      </div>
    </div>
  );
}

function UnstakeForm({ currentStake, stakeAmount, setStakeAmount, handleUnstake, receiveAmount }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Unstake Funds</h2>
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">Current Stake: <span className="font-bold">{currentStake}</span></p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unstakeAmount">
          Amount
        </label>
        <input
          id="unstakeAmount"
          type="number"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={handleUnstake}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Unstake Funds
      </button>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">You stake: <span className="font-bold">{stakeAmount}</span></p>
        <p className="text-gray-600">You receive: <span className="font-bold">{receiveAmount}</span></p>
        <p className="text-gray-600 mt-2">USDe will be available to withdraw 7 days after unstaking.</p>
      </div>
    </div>
  );
}

function WithdrawForm({ currentWithdraw, receiveAmount, setReceiveAmount, handleWithdraw, stakeAmount }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Withdraw Funds</h2>
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">Current Withdrawable Amount: <span className="font-bold">{currentWithdraw}</span></p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="withdrawAmount">
          Amount
        </label>
        <input
          id="withdrawAmount"
          type="number"
          value={receiveAmount}
          onChange={(e) => setReceiveAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={handleWithdraw}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Withdraw Funds
      </button>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">You stake: <span className="font-bold">{stakeAmount}</span></p>
        <p className="text-gray-600">You receive: <span className="font-bold">{receiveAmount}</span></p>
      </div>
    </div>
  );
}

function InformationSection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Information</h2>
      <p className="text-gray-600">
        The deposited funds are used to finance educational scholarships for all verified students in the system. All profits from the deposits are used to fund scholarships.
      </p>
    </div>
  );
}

function EndowmentFund() {
  const [amount, setAmount] = useState('');
  const [institution, setInstitution] = useState('');
  const [activeTab, setActiveTab] = useState('stake');
  const [stakeAmount, setStakeAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [currentStake, setCurrentStake] = useState(1000); // Example current stake amount
  const [currentWithdraw, setCurrentWithdraw] = useState(500); // Example current withdrawable amount

  const handleDeposit = () => {
    // Handle deposit logic here
  };

  const handleUnstake = () => {
    // Handle unstake logic here
  };

  const handleWithdraw = () => {
    // Handle withdraw logic here
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mt-6">
        <div className="flex justify-center border-b mb-6">
          <TabButton label="Stake" isActive={activeTab === 'stake'} onClick={() => setActiveTab('stake')} />
          <TabButton label="Unstake" isActive={activeTab === 'unstake'} onClick={() => setActiveTab('unstake')} />
          <TabButton label="Withdraw" isActive={activeTab === 'withdraw'} onClick={() => setActiveTab('withdraw')} />
        </div>

        {activeTab === 'stake' && (
          <StakeForm
            amount={amount}
            setAmount={setAmount}
            institution={institution}
            setInstitution={setInstitution}
            handleDeposit={handleDeposit}
            stakeAmount={stakeAmount}
            receiveAmount={receiveAmount}
          />
        )}

        {activeTab === 'unstake' && (
          <UnstakeForm
            currentStake={currentStake}
            stakeAmount={stakeAmount}
            setStakeAmount={setStakeAmount}
            handleUnstake={handleUnstake}
            receiveAmount={receiveAmount}
          />
        )}

        {activeTab === 'withdraw' && (
          <WithdrawForm
            currentWithdraw={currentWithdraw}
            receiveAmount={receiveAmount}
            setReceiveAmount={setReceiveAmount}
            handleWithdraw={handleWithdraw}
            stakeAmount={stakeAmount}
          />
        )}
      </div>

      <InformationSection />
    </div>
  );
}

export default function Example() {
  return <EndowmentFund />;
}