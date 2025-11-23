import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface User {
  id: string;
  discord_id: string;
  discord_username: string;
  discord_avatar: string | null;
  coins: number;
  created_at: string;
  updated_at: string;
}

export interface BotStats {
  id: string;
  stat_key: string;
  stat_value: number;
  updated_at: string;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string | null;
  item_data: Record<string, unknown>;
  is_active: boolean;
  created_at: string;
}

export interface Purchase {
  id: string;
  user_id: string;
  item_id: string;
  quantity: number;
  total_price: number;
  status: string;
  created_at: string;
}
