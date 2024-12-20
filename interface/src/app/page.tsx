"use client";

import HeroSection from "@/components/HeroSection";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Disclosure
        as="header"
        className="p-4 shadow-md bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      >
        {({ open }) => (
          <>
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-semibold">Eduena</h1>
              </div>
              <div className="flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <nav className="hidden sm:flex space-x-6">
                <Link href="#features" className="text-lg">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-lg">
                  How It Works
                </Link>
                <Link href="#contact" className="text-lg">
                  Contact
                </Link>
                <Link
                  href="https://github.com/Eduena-Endownment-Fund/eduena-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  Docs
                </Link>
                <Link
                  href="/endowment-fund"
                  className="bg-white text-blue-600 px-4 py-2 rounded shadow-md hover:bg-gray-200 font-semibold"
                >
                  Launch App
                </Link>
              </nav>
            </div>
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link
                  href="#features"
                  className="block text-lg text-white hover:bg-blue-700 rounded-md px-3 py-2"
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="block text-lg text-white hover:bg-blue-700 rounded-md px-3 py-2"
                >
                  How It Works
                </Link>
                <Link
                  href="#contact"
                  className="block text-lg text-white hover:bg-blue-700 rounded-md px-3 py-2"
                >
                  Contact
                </Link>
                <Link
                  href="https://github.com/Eduena-Endownment-Fund/eduena-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg text-white hover:bg-blue-700 rounded-md px-3 py-2"
                >
                  Docs
                </Link>
                <Link
                  href="/endowment-fund"
                  className="block bg-white text-blue-600 px-4 py-2 rounded shadow-md hover:bg-gray-200 font-semibold"
                >
                  Launch App
                </Link>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Hero Section */}
      <HeroSection
        title="Decentralized Endowment Fund Management on sUSDe"
        description="Connecting donors, organizations, and beneficiaries transparently and securely. Empowering initiatives in Decentralized Science (DeSci), DAOs, Education, Social Impact, and more."
      >
        <a
          href="https://github.com/Eduena-Endownment-Fund/eduena-web"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Learn More
        </a>
      </HeroSection>

      {/* Features Section */}
      <section id="features" className="p-8">
        <h3 className="text-3xl font-bold text-center my-12">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">Stake sUSDe</h4>
            <p>
              Stake sUSDe to generate yield for funding community initiatives.
            </p>
          </div>
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">
              Endowment Fund Management
            </h4>
            <p>
              Securely manage deposits and withdrawals with full transparency.
            </p>
          </div>
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">Claim Funds</h4>
            <p>
              Apply for funding via automated, tamper-proof smart contracts.
            </p>
          </div>
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">
              Projects and Initiatives
            </h4>
            <p>
              Explore funded projects or propose new initiatives for support.
            </p>
          </div>{" "}
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">
              Transparency and Governance Dashboard
            </h4>
            <p>
              Monitor project performance, fund impact, and transactions in
              real-time with on-chain transparency.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="p-8">
        <h3 className="text-3xl font-bold text-center my-12">How It Works</h3>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-2">Staking by Donors</h4>
            <p>
              Donors stake sUSDe through the Eduena platform. The collected
              funds are managed as an endowment and invested to generate yield.
            </p>
          </div>
          <div className="p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-2">
              Fund Distribution Based on Yield
            </h4>
            <p>
              The yield from the endowment is distributed to beneficiaries who
              have passed the selection process. This distribution is automated
              by smart contracts according to a predetermined schedule.
            </p>
          </div>
          <div className="p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-2">Application Process</h4>
            <p>
              Beneficiaries register and apply for the desired initiatives.
              After passing KYC verification, the application is processed and
              verified by smart contracts. Eligible beneficiaries receive funds
              according to the applicable terms.
            </p>
          </div>
          <div className="p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-2">
              Reporting and Audit Reports
            </h4>
            <p>
              All transactions and fund usage are transparently displayed on the
              platform dashboard. Eduena also provides audit reports that can be
              accessed by donors to check fund usage.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="p-4 text-center mt-auto">
        <p>
          Contact us at{" "}
          <a href="mailto:info@eduena.com" className="underline">
            info@eduena.com
          </a>
        </p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
}
