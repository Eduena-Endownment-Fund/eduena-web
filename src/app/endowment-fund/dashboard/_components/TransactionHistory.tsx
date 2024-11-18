import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
  } from "@nextui-org/table";
  
  interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: string;
    status: string;
  }
  
  interface TransactionHistoryProps {
    transactions: Transaction[];
  }
  
  const TransactionHistory = ({ transactions }: TransactionHistoryProps) => {
    return (
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Transaction History</h3>
          <Table aria-label="Transaction History">
            <TableHeader>
              <TableColumn>ID</TableColumn>
              <TableColumn>Date</TableColumn>
              <TableColumn>Description</TableColumn>
              <TableColumn>Amount</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    );
  };
  
  export default TransactionHistory;