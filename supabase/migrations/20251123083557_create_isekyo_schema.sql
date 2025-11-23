/*
  # Isekyo Discord Bot Database Schema

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `discord_id` (text, unique) - Discord user ID
      - `discord_username` (text) - Discord username
      - `discord_avatar` (text) - Discord avatar URL
      - `coins` (integer) - In-game currency balance
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `bot_stats`
      - `id` (uuid, primary key)
      - `stat_key` (text, unique) - Key for the stat (e.g., 'total_players', 'total_servers', 'total_cards')
      - `stat_value` (bigint) - Value of the stat
      - `updated_at` (timestamptz)
    
    - `shop_items`
      - `id` (uuid, primary key)
      - `name` (text) - Item name
      - `description` (text) - Item description
      - `price` (integer) - Price in coins
      - `category` (text) - Item category (e.g., 'card_pack', 'booster', 'cosmetic')
      - `image_url` (text) - Item image URL
      - `item_data` (jsonb) - Additional item data
      - `is_active` (boolean) - Whether item is available for purchase
      - `created_at` (timestamptz)
    
    - `purchases`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `item_id` (uuid, foreign key to shop_items)
      - `quantity` (integer) - Number of items purchased
      - `total_price` (integer) - Total price paid
      - `status` (text) - Purchase status ('pending', 'completed', 'delivered')
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read their own data
    - Add policies for public read access to bot stats and shop items
    - Add policies for users to create purchases
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  discord_id text UNIQUE NOT NULL,
  discord_username text NOT NULL,
  discord_avatar text,
  coins integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS bot_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_key text UNIQUE NOT NULL,
  stat_value bigint DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS shop_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  category text NOT NULL,
  image_url text,
  item_data jsonb DEFAULT '{}'::jsonb,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  item_id uuid REFERENCES shop_items(id) NOT NULL,
  quantity integer DEFAULT 1,
  total_price integer NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE bot_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE shop_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Anyone can read bot stats"
  ON bot_stats
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can read active shop items"
  ON shop_items
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Users can read own purchases"
  ON purchases
  FOR SELECT
  TO authenticated
  USING (user_id = (SELECT id FROM users WHERE users.id = auth.uid()));

CREATE POLICY "Users can create purchases"
  ON purchases
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (SELECT id FROM users WHERE users.id = auth.uid()));

INSERT INTO bot_stats (stat_key, stat_value) VALUES
  ('total_players', 15420),
  ('total_servers', 1250),
  ('total_cards', 3840)
ON CONFLICT (stat_key) DO NOTHING;

INSERT INTO shop_items (name, description, price, category, image_url, is_active) VALUES
  ('Common Card Pack', 'Contains 5 random common cards from various anime series', 100, 'card_pack', '/card-pack-common.png', true),
  ('Rare Card Pack', 'Contains 5 random cards with at least 1 rare card guaranteed', 250, 'card_pack', '/card-pack-rare.png', true),
  ('Legendary Card Pack', 'Contains 5 random cards with at least 1 legendary card guaranteed', 500, 'card_pack', '/card-pack-legendary.png', true),
  ('EXP Booster', 'Doubles your experience gain for 24 hours', 150, 'booster', '/exp-booster.png', true),
  ('Coin Multiplier', 'Increases coin drops by 50% for 48 hours', 200, 'booster', '/coin-multiplier.png', true),
  ('Dungeon Key', 'Unlock a special dungeon with exclusive rewards', 300, 'consumable', '/dungeon-key.png', true),
  ('Trade Token', 'Allows you to trade with other players without cooldown', 50, 'consumable', '/trade-token.png', true),
  ('Name Color Change', 'Change your name color in the bot profile', 400, 'cosmetic', '/name-color.png', true)
ON CONFLICT DO NOTHING;