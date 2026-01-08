import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // Changed background to a slightly darker, warmer black
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Name Section */}
          <div className="flex-shrink-0 flex items-center">
            <Image 
              src="/logo.jpeg" 
              alt="Vanguard Alliance Logo" 
              width={32} 
              height={32} 
              className="rounded-sm mr-3" // Added rounded corners and margin
            />
            <span className="text-xl font-bold text-white tracking-wider">
              VANGUARD <span className="text-amber-500">ALLIANCE</span>
            </span>
          </div>
          
          {/* Top Tab Bar Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Homepage
              </Link>
              <Link href="/" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link href="#News" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                News
              </Link>
              <Link href="#Member-list" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Member List
              </Link>
              {/* Gold Button */}
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors ml-4 shadow-md shadow-amber-900/20">
                Member Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}