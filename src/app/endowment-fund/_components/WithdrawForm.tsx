import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from 'next/image';

export default function WithdrawForm() {

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="bg-white rounded-lg shadow-lg p-6" onSubmit={submit}>
      <div className="mb-6">
        <div className="flex items-center">
          <div className="flex-grow">
            <div className="flex items-center">
              <Input
                type="number"
                label="Withdraw"
                placeholder=""
                id="amount"
                name="amount"
              />
              <div className="flex w-48">
                <Image
                  src="img/sUSDe.svg"
                  alt="sUSDe Logo"
                  className="w-6 h-6 flex-shrink-0 ml-2"
                />
                <span className="ml-2 flex-shrink-0">sUSDe</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-2 text-right text-sm">
          <span className="font-bold">Balance: 123</span>
        </p>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg mb-4">
        <p className="text-gray-600">
          You receive: <span className="font-bold">123</span>
        </p>
      </div>
      <Button color="primary" type="submit" className="w-full block mt-4">
        Withdraw
      </Button>
    </form>
  );
}
