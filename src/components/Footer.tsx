import { Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/ChatGPT Image Nov 23, 2025, 03_42_37 AM.png"
                alt="Isekyo Logo"
                className="h-10 w-10 rounded-full"
              />
              <span className="text-2xl font-bold text-orange-500">Isekyo</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your gateway to an anime isekai adventure on Discord. Collect, battle, and explore!
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('shop');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('docs');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Guide
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/YOUR_SUPPORT_SERVER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center space-x-1"
                >
                  <span>Support Server</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center space-x-1"
                >
                  <span>Invite Bot</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-500/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Isekyo. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for the anime community</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
