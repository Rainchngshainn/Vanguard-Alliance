import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Building2, TrendingUp, Users, ArrowRight, Calendar } from "lucide-react";

export default function Home() {
  // Demo data for the news section
  const newsArticles = [
    {
      id: 1,
      category: "Market Update",
      title: "Aerospace Index Hits All-Time High",
      date: "Jan 04, 2026",
      excerpt: "The recent surge in AS demand has created unprecedented profit margins for our manufacturing partners."
    },
    {
      id: 2,
      category: "Alliance Event",
      title: "Weekly MP Contest Winners Announced",
      date: "Dec 28, 2025",
      excerpt: "Congratulations to our top three retailers who dominated the market production contest this week."
    },
    {
      id: 3,
      category: "Strategy",
      title: "Optimizing Supply Chains for Q1",
      date: "Dec 15, 2025",
      excerpt: "A deep dive into reducing sourcing costs and improving vertical integration for electronics."
    }
  ];

  return (
    // Using neutral-950 for a warmer, deeper black background
    <main className="min-h-screen bg-neutral-950 text-gray-200">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background with darker overlay to make gold pop */}
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
            VANGUARD <span className="text-amber-500">ALLIANCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Grow Together, Rise Together.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {/* Gold primary button */}
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-amber-900/30 border border-amber-500/50">
              Join the Alliance
            </button>
            <button className="px-8 py-3 border border-gray-600 hover:bg-white/10 hover:border-gray-400 text-white font-bold rounded-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* INTRODUCTION / STATS */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-colors">
              {/* Amber Icon */}
              <Building2 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Leading Players</h3>
              <p className="text-gray-400">Comprised of Top-CV Players from All Sectors</p>
            </div>
            <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-colors">
              <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Networking and Partnerships</h3>
              <p className="text-gray-400">Facilitating Business and Long-term Suppliers</p>
            </div>
            <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-colors">
              <TrendingUp className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Events and Giveaways</h3>
              <p className="text-gray-400">Participate in Sponsored Events to Grow Your Company Faster</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & EXEC TEAM */}
      <section id="mission" className="py-24 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-16">
            [To.....]
          </p>

          <h2 id="team" className="text-3xl font-bold text-white mb-10">Executive Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Executive Card 1 - Gold theme */}
            <div className="flex items-center space-x-4 p-4 bg-neutral-900 rounded-lg border border-neutral-800">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-amber-900/20">
                CEO
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">Username</h4>
                <p className="text-amber-400 text-sm">Chairman</p>
              </div>
            </div>
            
            {/* Executive Card 2 - Secondary gold/dark theme */}
            <div className="flex items-center space-x-4 p-4 bg-neutral-900 rounded-lg border border-neutral-800">
              <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center text-xl font-bold text-amber-500 border border-amber-500/30">
                COO
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">Username</h4>
                <p className="text-gray-400 text-sm">Director of Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: LATEST NEWS SECTION */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">Latest News</h2>
              <p className="text-gray-400 mt-2">Updates from the Vanguard Alliance headquarters.</p>
            </div>
            <Link href="/news" className="hidden md:flex items-center text-amber-500 hover:text-amber-400 font-medium transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              // This is a Link block that wraps the whole card
              <Link 
                href="#" // Update this to `/news/${article.id}` when you have pages
                key={article.id} 
                className="group flex flex-col p-6 bg-neutral-950 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-wider bg-amber-500/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-amber-600 group-hover:text-amber-400 text-sm font-bold transition-colors mt-auto">
                  Read Article 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
             <Link href="/news" className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}