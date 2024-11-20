import { HexAddress } from "@/types/types";
import { useReadContract } from "wagmi";
import { abi as USDeAbi } from "@/abis/USDe"; // Adjust the import path as necessary
import { formatEther } from "viem";
import { useEffect } from "react";

interface GetContractBalanceProps {
  address: HexAddress;
  contract: HexAddress;
  onRefetch: (refetch: () => void) => void;
}

export default function GetContractBalance({
  address,
  contract,
  onRefetch,
}: Readonly<GetContractBalanceProps>) {
  const result = useReadContract({
    abi: USDeAbi,
    address: contract,
    functionName: "balanceOf",
    args: [address],
  });

  useEffect(() => {
    onRefetch(result.refetch);
  }, [onRefetch, result.refetch]);

  return (
    <>
      {result.isLoading && <span>Loading...</span>}
      {result.isSuccess && (
        <span>
          {formatEther(result.data)
            .split('.')
            .map((part, index) => (index === 1 ? part.substring(0, 2) : part))
            .join('.')}
        </span>
      )}
      {result.isError && <span>{result.error.shortMessage}</span>}
    </>
  );
}