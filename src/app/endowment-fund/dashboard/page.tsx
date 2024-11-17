"use client";
import { useState } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function Dashboard() {
  const [reports, setReports] = useState([
    {
      title: "Annual Report 2023",
      description:
        "Detailed report of the endowment fund's performance in 2023.",
      date: "2023-12-31",
      link: "#",
    },
    {
      title: "Quarterly Report Q1 2024",
      description: "Performance report for the first quarter of 2024.",
      date: "2024-03-31",
      link: "#",
    },
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: "TXN12345",
      date: "2023-11-01",
      description: "Funding for Healthcare Access and Research",
      amount: "$75,000",
      status: "Completed",
    },
    {
      id: "TXN12346",
      date: "2023-12-15",
      description: "Funding for Open-Source Technology Development",
      amount: "$30,000",
      status: "Completed",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-col items-center justify-center text-center p-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-5xl font-extrabold mb-6">
          Endowment Fund Dashboard
        </h2>
        <p className="text-xl mb-10 max-w-3xl">
          Overview of the endowment fund management, including reports and
          transaction history.
        </p>
      </section>

      {/* Overview Section */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Fund Overview</h3>
          <Card shadow="sm">
            <CardBody className="p-6">
              <h4 className="text-2xl font-semibold mb-4">Total Fund Value</h4>
              <p className="text-4xl font-bold">$1,000,000</p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Reports Section */}
      <section className="p-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <Card key={index} shadow="sm">
                <CardBody className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{report.title}</h4>
                  <p className="text-gray-700 mb-4">{report.description}</p>
                  <p className="text-gray-500">Date: {report.date}</p>
                  <a
                    href={report.link}
                    className="text-blue-600 underline mt-4 inline-block"
                  >
                    View Report
                  </a>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction History Section */}
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
    </div>
  );
}
