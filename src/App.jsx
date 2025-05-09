import React, { useState } from "react";
import {
  AlertTriangle,
  CreditCard,
  Database,
  Users,
  LockKeyhole,
  FileText,
  ShoppingCart,
  Filter,
  Search,
  Info,
  Star,
  ChevronDown,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";

export { MarketplaceTab, DumpsTab, AccountsTab, TutorialsTab, VerificationTab };

export default function SimulatedCardingWebsite() {
  const [activeTab, setActiveTab] = useState("market");
  const [showWarning, setShowWarning] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("standard");

  // Educational warning banner
  const EducationalWarningBanner = () => (
    <div
      className={`${
        showWarning ? "block" : "hidden"
      } bg-red-600 text-white p-4 relative rounded-lg`}
    >
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="flex flex-col items-center md:items-center  text-center">
          <AlertTriangle size={24} className="mr-2 flex-shrink-0 mb-3" />
          <div>
            <h2 className="font-bold text-lg">
              EDUCATE PREVENT FROM GIVING SENCITIVE INFORMATION
            </h2>
            <p className="text-sm md:text-base text-justify">
              This interface is a safe, controlled simulation created solely for
              cybersecurity awareness and training. Do NOT trust any website,
              service, or individual requesting personal or financial
              information outside of verified and secure domains (e.g., .gov,
              .edu, or officially recognized .com). Never provide sensitive data
              such as: Credit card numbers Social Security/National ID numbers
              Bank account credentials Personal addresses or passwords ⚠ Any
              platform offering illegal services (like carding, hacking tools,
              or stolen data) is a scam, trap, or honeypot. Interacting with
              such sites may lead to legal consequences or personal loss. Stay
              informed. Stay secure.
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowWarning(false)}
          className="mt-2 md:mt-5 bg-white text-red-600 px-3 py-1 rounded-md hover:bg-gray-100 font-medium"
        >
          Acknowledge & Close
        </button>
      </div>
    </div>
  );

  const tabs = [
    { id: "market", name: "Marketplace", icon: <ShoppingCart size={18} /> },
    { id: "dumps", name: "Card Dumps", icon: <CreditCard size={18} /> },
    { id: "accounts", name: "Accounts", icon: <Users size={18} /> },
    { id: "tutorials", name: "Tutorials", icon: <FileText size={18} /> },
    {
      id: "verification",
      name: "Verification",
      icon: <LockKeyhole size={18} />,
    },
  ];

  // Simulated product data for educational demonstration
  const fakeCards = [
    {
      id: 1,
      bin: "425321xxxxxx8432",
      type: "VISA",
      level: "Platinum",
      country: "United States",
      bank: "Example Bank",
      price: "45.00",
      balance: "$2,000 - $5,000",
      checked: true,
    },
    {
      id: 2,
      bin: "534521xxxxxx7612",
      type: "Mastercard",
      level: "World Elite",
      country: "United Kingdom",
      bank: "Sample Bank",
      price: "70.00",
      balance: "$5,000 - $10,000",
      checked: true,
    },
    {
      id: 3,
      bin: "371449xxxxxx2376",
      type: "AMEX",
      level: "Centurion",
      country: "Canada",
      bank: "Demo Financial",
      price: "120.00",
      balance: "$10,000+",
      checked: true,
    },
    {
      id: 4,
      bin: "601136xxxxxx5904",
      type: "Discover",
      level: "Cashback",
      country: "Australia",
      bank: "Test Credit Union",
      price: "35.00",
      balance: "$1,000 - $2,000",
      checked: false,
    },
    {
      id: 5,
      bin: "422742xxxxxx9173",
      type: "VISA",
      level: "Signature",
      country: "Germany",
      bank: "Mock Bank",
      price: "60.00",
      balance: "$3,000 - $7,000",
      checked: true,
    },
    {
      id: 6,
      bin: "552552xxxxxx1453",
      type: "Mastercard",
      level: "Black",
      country: "France",
      bank: "Placeholder Financial",
      price: "90.00",
      balance: "$8,000 - $15,000",
      checked: true,
    },
  ];

  // Add items to cart function (for educational demonstration only)
  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "market":
        return (
          <MarketplaceTab
            fakeCards={fakeCards}
            addToCart={addToCart}
            searchQuery={searchQuery}
          />
        );
      case "dumps":
        return <DumpsTab />;
      case "accounts":
        return <AccountsTab />;
      case "tutorials":
        return <TutorialsTab />;
      case "verification":
        return <VerificationTab />;
      default:
        return (
          <MarketplaceTab
            fakeCards={fakeCards}
            addToCart={addToCart}
            searchQuery={searchQuery}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 w-screen px-5">
      {/* Educational Warning Banner */}
      <EducationalWarningBanner />

      {/* Header */}
      <header className="bg-black border-b border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <CreditCard size={24} className="text-red-500" />
              <h1 className="text-xl font-bold">
                CardShield{" "}
                <span className="text-red-500">Educational Demo</span>
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800 rounded-md py-1 pl-8 pr-4 text-sm border border-gray-700 focus:outline-none focus:border-gray-600 w-full md:w-auto"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  size={16}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>

              <div className="relative">
                <button
                  className="bg-gray-800 rounded-md py-1 px-3 text-sm border border-gray-700 flex items-center"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <Filter size={16} className="mr-1" />
                  Filter
                  <ChevronDown size={16} className="ml-1" />
                </button>

                {filterOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded-md shadow-lg p-3 z-10 w-48">
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="form-checkbox" />
                        <span>VISA Cards</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="form-checkbox" />
                        <span>Mastercard</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="form-checkbox" />
                        <span>AMEX</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="form-checkbox" />
                        <span>High Balance</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <ShoppingCart size={20} className="text-gray-400" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 px-4 py-1 border-b border-gray-700">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 px-4 py-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-b-2 border-red-500 text-red-400"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Stats Bar */}
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 text-xs md:text-sm">
        <div className="container mx-auto flex justify-between overflow-x-auto hide-scrollbar">
          <div className="flex items-center whitespace-nowrap mr-4">
            <Database size={14} className="mr-1 text-green-400" />
            <span>Cards in stock: 15,742</span>
          </div>
          <div className="flex items-center whitespace-nowrap mr-4">
            <Users size={14} className="mr-1 text-blue-400" />
            <span>Members online: 247</span>
          </div>
          <div className="flex items-center whitespace-nowrap mr-4">
            <CreditCard size={14} className="mr-1 text-yellow-400" />
            <span>Fresh dumps: 1,298</span>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <LockKeyhole size={14} className="mr-1 text-purple-400" />
            <span>Verified sellers: 34</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Info
              size={20}
              className="text-yellow-400 mr-3 mt-1 flex-shrink-0"
            />
            <div>
              <h2 className="font-bold text-lg mb-2">Educational Notice</h2>
              <p className="text-gray-300 text-sm">
              This interface is operated by a trusted and authorized cybersecurity provider 
              for the purpose of lawful investigation, monitoring, and awareness related to 
              financial fraud and illicit digital activity. All data and transactions 
              displayed are real and have been collected under strict compliance 
              with legal and regulatory frameworks. This platform supports security professionals, law enforcement, and authorized entities in analyzing threat patterns, identifying criminal infrastructure, and strengthening preventive measures.
              </p>
              <p className="text-gray-300 text-sm mt-2">
              Disclaimer: Unauthorized access to, or misuse of, this system is strictly prohibited. 
              The content is intended solely for trained professionals and authorized personnel. 
              Any attempt to replicate, distribute, or act upon the data or techniques 
              shown without formal clearance may constitute a breach of national cybersecurity
              laws and result in legal consequences.
              </p>
            </div>
          </div>
        </div>

        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">
              Educational Simulation - Not A Real Service
            </p>
            <p className="text-xs mt-2">
              This demonstration is intended solely for cybersecurity education,
              awareness, and research. Created for informational purposes to
              help identify and prevent credit card fraud.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Marketplace Tab Component
function MarketplaceTab({ fakeCards, addToCart, searchQuery }) {
  const filteredCards = fakeCards.filter(
    (card) =>
      card.bin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.bank.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-700">
          <h2 className="font-bold text-lg">Premium Cards</h2>
          <p className="text-sm text-gray-400">
            Simulated card data for educational demonstration
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  BIN/Last 4
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Level
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Country
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Bank
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Balance
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Price ($)
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredCards.map((card) => (
                <tr key={card.id} className="hover:bg-gray-750">
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {card.bin}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {card.type}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {card.level}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {card.country}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {card.bank}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {card.balance}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    ${card.price}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        card.checked
                          ? "bg-green-900 text-green-300"
                          : "bg-yellow-900 text-yellow-300"
                      }`}
                    >
                      {card.checked ? "Checked" : "Unchecked"}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <button
                      onClick={addToCart}
                      className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md text-xs"
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3 flex items-center">
            <Star size={18} className="text-yellow-400 mr-2" />
            Top Sellers
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-gray-700">
              <span className="text-sm">VISA Platinum USA</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                352 sold
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-700">
              <span className="text-sm">AMEX Centurion</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                287 sold
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-700">
              <span className="text-sm">Mastercard World Elite</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                241 sold
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3 flex items-center">
            <Info size={18} className="text-blue-400 mr-2" />
            Market Updates
          </h3>
          <div className="space-y-3 text-sm">
            <p className="pb-2 border-b border-gray-700">
              New batch of high-balance cards added (demo).
            </p>
            <p className="pb-2 border-b border-gray-700">
              Verification system maintenance scheduled.
            </p>
            <p className="pb-2 border-b border-gray-700">
              Updated checker accuracy to 98.5% (simulation).
            </p>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3 flex items-center">
            <AlertCircle size={18} className="text-red-400 mr-2" />
            Educational Warning
          </h3>
          <div className="text-sm text-gray-300">
            <p>
              This simulation demonstrates how criminal carding sites operate
              for educational purposes only.
            </p>
            <p className="mt-2">In reality, these activities are:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Illegal in all jurisdictions</li>
              <li>Subject to federal prison sentences</li>
              <li>Monitored by law enforcement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dumps Tab Component
function DumpsTab() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center mb-6">
        <Database size={24} className="text-red-500 mr-3" />
        <h2 className="text-xl font-bold">
          Card Dumps Section - Educational Simulation
        </h2>
      </div>

      <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <AlertTriangle size={24} className="text-red-500 mr-3 mt-1" />
          <div>
            <h3 className="font-bold text-lg">Educational Purpose Only</h3>
            <p className="text-gray-300">
              This simulated interface demonstrates how "dumps" (illegally
              obtained magnetic stripe data) are presented on criminal
              marketplaces. This information is provided purely for educational
              and security awareness purposes.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-4">What Are "Dumps"?</h3>
          <p className="text-gray-300 mb-4">
            In cybersecurity terminology, "dumps" refer to stolen payment card
            data extracted from the magnetic stripe of a card. This typically
            includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-6">
            <li>Track 1 and/or Track 2 data</li>
            <li>Primary Account Number (PAN)</li>
            <li>Expiration date</li>
            <li>Encoded cardholder name</li>
            <li>Card Verification Value (CVV)</li>
          </ul>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h4 className="font-medium mb-2">How Criminals Use This Data:</h4>
            <p className="text-gray-400 text-sm">
              This data can be re-encoded onto blank cards to create counterfeit
              payment cards. Financial institutions and merchants protect
              against this by implementing EMV chip technology, real-time fraud
              detection, and other security measures.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">
            Security Awareness Information
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-700 p-3 rounded-lg">
              <h4 className="font-medium mb-1">Protection Measures</h4>
              <p className="text-sm text-gray-300">
                Modern payment systems use EMV chips, tokenization, and
                point-to-point encryption to make card data more secure against
                skimming attacks.
              </p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg">
              <h4 className="font-medium mb-1">
                Reporting Suspicious Activity
              </h4>
              <p className="text-sm text-gray-300">
                Report unauthorized transactions immediately to your financial
                institution and to law enforcement agencies that handle
                cybercrime.
              </p>
            </div>
            <div className="bg-blue-900/30 border border-blue-800 p-3 rounded-lg">
              <h4 className="font-medium mb-1">For Security Professionals</h4>
              <p className="text-sm text-gray-300">
                Understanding how this data is structured and traded helps in
                designing better detection systems and security protocols to
                protect payment infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Accounts Tab Component
function AccountsTab() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center mb-6">
        <Users size={24} className="text-blue-500 mr-3" />
        <h2 className="text-xl font-bold">
          Account Access - Educational Demonstration
        </h2>
      </div>

      <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <AlertTriangle size={24} className="text-yellow-500 mr-3 mt-1" />
          <div>
            <h3 className="font-bold text-lg">Educational Simulation</h3>
            <p className="text-gray-300">
              This interface demonstrates how stolen account access is
              advertised on underground markets. All data shown is fictional and
              created solely for security education purposes.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="bg-gray-800 p-3 border-b border-gray-700">
            <h3 className="font-bold">Banking Accounts (Simulation)</h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-400 mb-4">
              In real criminal markets, this section would contain listings for
              compromised online banking credentials. Such activity is illegal
              and causes severe harm to victims.
            </p>

            <div className="space-y-3">
              <div className="border border-gray-700 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Example Bank</span>
                  <span className="text-green-500 text-sm">$85.00</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Balance: $12,500 (Simulated)
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                    Full Access
                  </span>
                  <button className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">
                    Details
                  </button>
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Demo Credit Union</span>
                  <span className="text-green-500 text-sm">$120.00</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Balance: $28,750 (Simulated)
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                    Full Access
                  </span>
                  <button className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="bg-gray-800 p-3 border-b border-gray-700">
            <h3 className="font-bold">E-Commerce Accounts (Simulation)</h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-400 mb-4">
              Criminal markets often list compromised e-commerce accounts with
              stored payment methods. This simulation shows how this data might
              be displayed.
            </p>

            <div className="space-y-3">
              <div className="border border-gray-700 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Example Shop</span>
                  <span className="text-green-500 text-sm">$25.00</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Payment Methods: 3 (Simulated)
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                    Email Access
                  </span>
                  <button className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">
                    Details
                  </button>
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sample Marketplace</span>
                  <span className="text-green-500 text-sm">$40.00</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Payment Methods: 2 (Simulated)
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                    Full Access
                  </span>
                  <button className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-900/20 border border-blue-800 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-2">
          Security Awareness Information
        </h3>
        <div className="text-gray-300">
          <p className="mb-3">
            Account takeover fraud occurs when criminals gain unauthorized
            access to online accounts. To protect yourself and your
            organization:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use unique, strong passwords for each account</li>
            <li>Enable two-factor authentication wherever possible</li>
            <li>Monitor accounts regularly for suspicious activity</li>
            <li>Use password managers to maintain complex credentials</li>
            <li>Be alert to phishing attempts targeting your credentials</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Tutorials Tab Component
function TutorialsTab() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center mb-6">
        <FileText size={24} className="text-purple-500 mr-3" />
        <h2 className="text-xl font-bold">Security Education Resources</h2>
      </div>

      <div className="bg-purple-900/30 border border-purple-800 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <AlertTriangle size={24} className="text-purple-500 mr-3 mt-1" />
          <div>
            <h3 className="font-bold text-lg">Educational Resources Only</h3>
            <p className="text-gray-300">
              On actual carding sites, this section would contain tutorials on
              illegal activities. This simulation instead provides legitimate
              security education resources to understand and prevent payment
              fraud.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-4">
            Understanding Carding Operations
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Card Skimming Detection</h4>
              <p className="text-sm text-gray-300">
                Learn how to identify card skimming devices at ATMs and
                point-of-sale terminals. Physical signs to watch for include
                loose card readers, hidden cameras, and unusual overlays.
              </p>
              <button className="mt-2 text-xs bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">
                Security Guide
              </button>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">E-commerce Security</h4>
              <p className="text-sm text-gray-300">
                Understand how online shopping security works, including CVV
                verification, 3D Secure, address verification systems, and fraud
                detection algorithms.
              </p>
              <button className="mt-2 text-xs bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">
                Protection Guide
              </button>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Card Fraud Indicators</h4>
              <p className="text-sm text-gray-300">
                Security professionals can learn to recognize potential signs of
                compromised cards, including unusual transaction patterns,
                geographic anomalies, and velocity checks.
              </p>
              <button className="mt-2 text-xs bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">
                Detection Guide
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Protection Strategies</h3>
          <div className="space-y-4">
            <div className="bg-blue-900/20 border border-blue-800 p-4 rounded-lg">
              <h4 className="font-medium mb-2">For Organizations</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Implement proper PCI DSS compliance measures</li>
                <li>Deploy advanced fraud detection systems</li>
                <li>Use tokenization instead of storing card data</li>
                <li>Conduct regular security training for staff</li>
                <li>Perform periodic security assessments</li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-800 p-4 rounded-lg">
              <h4 className="font-medium mb-2">For Consumers</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>Monitor accounts for unauthorized transactions</li>
                <li>Use virtual card numbers for online shopping</li>
                <li>Enable purchase notifications on all cards</li>
                <li>Avoid using debit cards for online purchases</li>
                <li>Check for skimmers before using ATMs or card readers</li>
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-800 p-4 rounded-lg">
              <h4 className="font-medium mb-2">For Security Professionals</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                <li>
                  Study evolving fraud techniques to build better defenses
                </li>
                <li>Implement transaction monitoring systems</li>
                <li>Deploy behavioral analytics to detect anomalies</li>
                <li>Conduct regular red team exercises</li>
                <li>Stay updated on emerging threats and vulnerabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-900 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-3">
          Legal & Ethical Considerations
        </h3>
        <p className="text-gray-300 mb-3">
          Understanding fraud techniques is important for security
          professionals, but always remember:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Never attempt to use these techniques for illegal purposes</li>
          <li>Report security vulnerabilities through proper channels</li>
          <li>Follow responsible disclosure procedures</li>
          <li>Obtain proper authorization before security testing</li>
          <li>Always operate within legal and ethical boundaries</li>
        </ul>
      </div>
    </div>
  );
}

// Add missing VerificationTab component
function VerificationTab() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center mb-6">
        <LockKeyhole size={24} className="text-green-500 mr-3" />
        <h2 className="text-xl font-bold">Account Verification</h2>
      </div>
      {/* Add verification content here */}
      <div className="bg-gray-900 p-4 rounded-lg">
        <p className="text-gray-300">
          Verification system demonstration content.
        </p>
      </div>
    </div>
  );
}
