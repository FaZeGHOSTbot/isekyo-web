import { useEffect, useState } from 'react';
import { ShoppingBag, Coins, Lock, CheckCircle } from 'lucide-react';
import { supabase, ShopItem } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export default function Shop() {
  const [items, setItems] = useState<ShopItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasingId, setPurchasingId] = useState<string | null>(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchShopItems();
  }, []);

  const fetchShopItems = async () => {
    try {
      const { data, error } = await supabase
        .from('shop_items')
        .select('*')
        .eq('is_active', true)
        .order('price', { ascending: true });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching shop items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (item: ShopItem) => {
    if (!user) {
      alert('Please login to make a purchase');
      return;
    }

    if (user.coins < item.price) {
      alert('Insufficient coins! Complete quests and battles to earn more coins.');
      return;
    }

    setPurchasingId(item.id);

    try {
      const { error } = await supabase
        .from('purchases')
        .insert({
          user_id: user.id,
          item_id: item.id,
          quantity: 1,
          total_price: item.price,
          status: 'pending',
        });

      if (error) throw error;

      setPurchaseSuccess(item.id);
      setTimeout(() => setPurchaseSuccess(null), 3000);

      alert(`Purchase successful! Your ${item.name} will be delivered to your Discord account within a few minutes. Check your inventory in the bot!`);
    } catch (error) {
      console.error('Error making purchase:', error);
      alert('Purchase failed. Please try again.');
    } finally {
      setPurchasingId(null);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'card_pack':
        return 'from-blue-500/20 to-purple-500/20 border-blue-500/30';
      case 'booster':
        return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
      case 'consumable':
        return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
      case 'cosmetic':
        return 'from-pink-500/20 to-rose-500/20 border-pink-500/30';
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'card_pack':
        return 'Card Pack';
      case 'booster':
        return 'Booster';
      case 'consumable':
        return 'Consumable';
      case 'cosmetic':
        return 'Cosmetic';
      default:
        return category;
    }
  };

  if (loading) {
    return (
      <div id="shop" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 flex items-center justify-center">
        <div className="text-white text-xl">Loading shop...</div>
      </div>
    );
  }

  return (
    <div id="shop" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Item Shop</h2>
          <p className="text-xl text-gray-400 mb-6">
            Purchase items with your in-game coins and get them delivered directly to your Discord account
          </p>
          {!user && (
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-orange-400">
                Login with Discord to purchase items and manage your inventory
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${getCategoryColor(item.category)} rounded-xl border overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {getCategoryLabel(item.category)}
                  </span>
                  {purchaseSuccess === item.id && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>

                <div className="bg-black/30 rounded-lg p-6 mb-4 h-32 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-orange-500 opacity-50" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-4 min-h-[60px]">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Coins className="w-5 h-5 text-yellow-400" />
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                  </div>
                </div>

                <button
                  onClick={() => handlePurchase(item)}
                  disabled={!user || purchasingId === item.id || (user && user.coins < item.price)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                    !user
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : user.coins < item.price
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : purchasingId === item.id
                      ? 'bg-orange-600 text-white cursor-wait'
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
                >
                  {!user ? (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Login Required</span>
                    </>
                  ) : user.coins < item.price ? (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Insufficient Coins</span>
                    </>
                  ) : purchasingId === item.id ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Purchase</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">How to Earn Coins</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-2">Daily Quests</h4>
              <p className="text-sm">Complete daily quests in the bot to earn coins and other rewards</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Win Duels</h4>
              <p className="text-sm">Battle other players and earn coins for each victory</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Dungeon Rewards</h4>
              <p className="text-sm">Explore dungeons to find coin rewards and valuable items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
