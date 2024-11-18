import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 shadow-md bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold">Eduena</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#features" className="text-lg">
              Features
            </a>
            <a href="#how-it-works" className="text-lg">
              How It Works
            </a>
            <a href="#contact" className="text-lg">
              Contact
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Docs
            </a>
            <a
              href="/endowment-fund"
              className="bg-white text-blue-600 px-4 py-2 rounded shadow-md hover:bg-gray-200 font-semibold"
            >
              Launch App
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection
        title="Decentralized Endowment Fund Management on sUSDe"
        description="Connecting donors, organizations, and beneficiaries transparently and securely."
      >
        <a
          href="https://example.com"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">Stake sUSDe</h4>
            <p>Use the yield to fund various initiatives.</p>
          </div>
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">Initiative Selection</h4>
            <p>
              Beneficiaries can choose initiatives offered by organizations.
            </p>
          </div>
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">Automated Process</h4>
            <p>
              Automated application and distribution process using smart
              contracts.
            </p>
          </div>
          <div className="p-6 rounded shadow-md bg-white">
            <h4 className="text-xl font-semibold mb-2">Transparency</h4>
            <p>Transparent transaction and fund usage reporting.</p>
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
