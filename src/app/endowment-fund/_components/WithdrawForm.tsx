import { useAccount, useWriteContract } from "wagmi";
import { abi } from "@/abis/EndowmentFund";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";

export default function WithdrawForm({
  amount,
  setAmount,
  stakeAmount,
  receiveAmount,
}) {
  const { data: hash, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const amount = formData.get("amount") as string;

    debugger;

    writeContract({
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      abi,
      functionName: "stake",
      args: [BigInt(amount)],
    });
  }

  return (
    <form className="bg-white rounded-lg shadow-lg p-6" onSubmit={submit}>
      <div className="mb-6">
        <div className="flex items-center">
          <div className="flex-grow">
            <input
              id="amount"
              name="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center ml-4 p-2">
            <img
              src="img/sUSDe.svg"
              alt="sUSDe Logo"
              className="w-6 h-6 flex-shrink-0"
            />
            <span className="ml-2 flex-shrink-0">sUSDe</span>
          </div>
        </div>
        <p className="text-gray-600 mt-2">
          Balance: <span className="font-bold">123 sUSDe</span>
        </p>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg mb-4">
        {hash && <div>Transaction Hash: {hash}</div>}
        <p className="text-gray-600">
          You receive: <span className="font-bold">{receiveAmount}</span>
        </p>
      </div>
      <button
        type="submit"
        className="w-full block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Withdraw
      </button>
    </form>
  );
}
