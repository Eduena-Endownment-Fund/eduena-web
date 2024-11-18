"use client";
import HeroSection from "@/components/HeroSection";
import { reports, transactions } from "@/mocks/mockData";
import FundOverview from "./_components/FundOverview";
import ReportsSection from "./_components/ReportsSection";
import TransactionHistory from "./_components/TransactionHistory";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Endowment Fund Dashboard"
        description="Overview of the endowment fund management, including reports and transaction history."
      />
      <FundOverview />
      <ReportsSection reports={reports} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}