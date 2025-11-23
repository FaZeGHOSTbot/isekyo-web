import { useEffect, useState } from 'react';
import { Sword, Users, CreditCard, ExternalLink } from 'lucide-react';
import { supabase, BotStats } from '../lib/supabase';

export default function Hero() {
  const [stats, setStats] = useState<Record<string, number>>({
    total_players: 0,
    total_servers: 0,
    total_cards: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('bot_stats')
        .select('*');

      if (error) throw error;

      const statsMap: Record<string, number> = {};
      data?.forEach((stat: BotStats) => {
        statsMap[stat.stat_key] = stat.stat_value;
      });
      setStats(statsMap);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Welcome to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> Isekyo</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Step into an anime isekai adventure! Collect legendary cards, battle in epic duels, explore dangerous dungeons, trade with fellow adventurers, and level up your character in this immersive Discord bot experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-bold text-lg shadow-lg shadow-orange-500/50"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Add to Discord</span>
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('docs');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-bold text-lg border border-orange-500/30"
              >
                <Sword className="w-5 h-5" />
                <span>Get Started</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-3xl opacity-20"></div>
            <img
              src="/ChatGPT Image Nov 23, 2025, 03_42_37 AM.png"
              alt="Isekyo Mascot"
              className="relative w-full max-w-md mx-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-xl p-8 transform hover:scale-105 transition-all shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-12 h-12 text-orange-500" />
              <div className="text-right">
                <div className="text-4xl font-bold text-white">{stats.total_players.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Players</div>
              </div>
            </div>
            <p className="text-gray-400">Active adventurers exploring the isekai world</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-xl p-8 transform hover:scale-105 transition-all shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <Sword className="w-12 h-12 text-red-500" />
              <div className="text-right">
                <div className="text-4xl font-bold text-white">{stats.total_servers.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Servers</div>
              </div>
            </div>
            <p className="text-gray-400">Communities joined in the adventure</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-xl p-8 transform hover:scale-105 transition-all shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="w-12 h-12 text-yellow-500" />
              <div className="text-right">
                <div className="text-4xl font-bold text-white">{stats.total_cards.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Cards</div>
              </div>
            </div>
            <p className="text-gray-400">Unique cards to collect and trade</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
