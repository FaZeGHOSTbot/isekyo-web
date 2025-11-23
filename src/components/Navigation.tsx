import { Menu, X, ShoppingBag, BookOpen, Users, LogIn, LogOut, Coins } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signInWithDiscord, signOut } = useAuth();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/ChatGPT Image Nov 23, 2025, 03_42_37 AM.png"
              alt="Isekyo Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-2xl font-bold text-orange-500">Isekyo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="text-gray-300 hover:text-orange-500 transition-colors flex items-center space-x-1"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop</span>
            </button>
            <button
              onClick={() => scrollToSection('docs')}
              className="text-gray-300 hover:text-orange-500 transition-colors flex items-center space-x-1"
            >
              <BookOpen className="w-4 h-4" />
              <span>Guide</span>
            </button>
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Invite Bot
            </a>
            <a
              href="https://discord.gg/YOUR_SUPPORT_SERVER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors flex items-center space-x-1"
            >
              <Users className="w-4 h-4" />
              <span>Support</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Coins className="w-5 h-5" />
                  <span className="font-bold">{user.coins}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {user.discord_avatar && (
                    <img
                      src={user.discord_avatar}
                      alt={user.discord_username}
                      className="w-8 h-8 rounded-full border-2 border-orange-500"
                    />
                  )}
                  <span className="text-gray-300">{user.discord_username}</span>
                </div>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={signInWithDiscord}
                className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
              >
                <LogIn className="w-4 h-4" />
                <span>Login with Discord</span>
              </button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-orange-500"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-orange-500/20">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-300 hover:text-orange-500 py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="block w-full text-left text-gray-300 hover:text-orange-500 py-2"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('docs')}
              className="block w-full text-left text-gray-300 hover:text-orange-500 py-2"
            >
              Guide
            </button>
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-orange-500 py-2"
            >
              Invite Bot
            </a>
            <a
              href="https://discord.gg/YOUR_SUPPORT_SERVER"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-orange-500 py-2"
            >
              Support Server
            </a>
            <div className="pt-3 border-t border-orange-500/20">
              {user ? (
                <>
                  <div className="flex items-center space-x-2 text-yellow-400 mb-3">
                    <Coins className="w-5 h-5" />
                    <span className="font-bold">{user.coins} Coins</span>
                  </div>
                  <button
                    onClick={signOut}
                    className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={signInWithDiscord}
                  className="w-full flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login with Discord</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
