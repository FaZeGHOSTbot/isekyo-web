import { BookOpen, CreditCard, Sword, Map, TrendingUp, ShoppingCart, Repeat } from 'lucide-react';

export default function Documentation() {
  return (
    <div id="docs" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Game Guide</h2>
          <p className="text-xl text-gray-400">Master the world of Isekyo with these essential guides</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-xl p-8 hover:border-orange-500/60 transition-all">
            <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Collecting Cards</h3>
            <p className="text-gray-400 mb-4">
              Collect cards from your favorite anime series! Cards come in different rarities: Common, Rare, Epic, and Legendary.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Open card packs to get random cards</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Complete daily quests for free packs</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Trade cards with other players</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Build your collection and show off rare finds</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/30 rounded-xl p-8 hover:border-red-500/60 transition-all">
            <div className="bg-red-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Sword className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Dueling System</h3>
            <p className="text-gray-400 mb-4">
              Challenge other players to strategic card battles! Build the strongest deck and prove your skills.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Create decks with your collected cards</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Challenge players to PvP battles</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Win duels to earn coins and experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Climb the leaderboard rankings</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-xl p-8 hover:border-yellow-500/60 transition-all">
            <div className="bg-yellow-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Map className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Dungeon Exploration</h3>
            <p className="text-gray-400 mb-4">
              Explore dangerous dungeons filled with monsters and treasure! Team up or go solo for epic loot.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Enter dungeons to find rare cards</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Face increasingly difficult challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Earn exclusive dungeon-only rewards</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Use dungeon keys for special raids</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl p-8 hover:border-green-500/60 transition-all">
            <div className="bg-green-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Repeat className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Trading System</h3>
            <p className="text-gray-400 mb-4">
              Trade cards and items with other players! Build your dream collection through smart trades.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Send trade offers to other players</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Browse the marketplace for cards</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Set your own prices and negotiate</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use trade tokens to bypass cooldowns</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/60 transition-all">
            <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Leveling Up</h3>
            <p className="text-gray-400 mb-4">
              Gain experience and level up your profile! Unlock new features and exclusive rewards.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Earn XP from battles and quests</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Unlock new abilities and features</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Access higher tier dungeons</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Use XP boosters to level faster</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 transition-all">
            <div className="bg-purple-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <ShoppingCart className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Shop & Items</h3>
            <p className="text-gray-400 mb-4">
              Purchase useful items and boosters! Enhance your gameplay with premium shop items.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Buy card packs with in-game coins</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Purchase boosters for faster progress</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Get cosmetic items to customize</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Find limited-time special offers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-8 md:p-12">
          <div className="flex items-start space-x-4">
            <BookOpen className="w-12 h-12 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Getting Started</h3>
              <p className="text-gray-400 text-lg mb-6">
                Ready to begin your adventure? Add Isekyo to your Discord server and use the <code className="bg-black/50 px-2 py-1 rounded text-orange-500">/start</code> command to receive your first starter pack! Join the support server if you need help or want to connect with other players.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Add to Discord
                </a>
                <a
                  href="https://discord.gg/YOUR_SUPPORT_SERVER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors font-medium border border-orange-500/30"
                >
                  Join Support Server
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
