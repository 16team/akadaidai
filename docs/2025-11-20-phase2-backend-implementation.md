# フェーズ2: バックエンド実装計画
Date: 2025-11-20

## 目的
現在のサイトは「見た目」と「フロントエンドの機能」は完成していますが、実際に商品を販売するための**バックエンド（決済、注文管理、メール送信）**が未実装です。

フェーズ2では、以下を実装します：
1. **Supabase（データベース）** で注文・顧客情報を管理
2. **Stripe（決済）** で実際の支払い処理を完結
3. **Resend（メール送信）** で注文確認・お問い合わせ対応を自動化
4. **簡易管理画面** で店舗側が注文を確認・管理

---

## 実装ステップ

### 1. Supabase セットアップ

#### 1.1 プロジェクト作成
- Supabase公式サイトで新規プロジェクトを作成
- 接続情報（URL、anon key）を `.env.local` に保存

#### 1.2 テーブル設計
以下のテーブルを作成：

**orders（注文）**
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT now(),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  customer_address TEXT NOT NULL,
  customer_city TEXT NOT NULL,
  customer_zipcode TEXT NOT NULL,
  items JSONB NOT NULL, -- 注文商品の配列
  total_amount INTEGER NOT NULL, -- 合計金額（円）
  gift_wrapping BOOLEAN DEFAULT false,
  noshi BOOLEAN DEFAULT false,
  stripe_payment_intent_id TEXT, -- Stripe決済ID
  status TEXT DEFAULT 'pending', -- pending / paid / shipped / completed
  updated_at TIMESTAMP DEFAULT now()
);
```

**inquiries（お問い合わせ）**
```sql
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' -- unread / replied
);
```

**products（商品マスタ）**
```sql
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  image_url TEXT,
  stock INTEGER DEFAULT 50, -- 在庫数
  is_active BOOLEAN DEFAULT true
);
```

#### 1.3 Next.jsとの接続
- `@supabase/supabase-js` をインストール
- `lib/supabaseClient.ts` で接続を確立

---

### 2. Stripe 決済統合

#### 2.1 Stripeアカウント作成
- Stripe公式サイトでアカウント作成
- 秘密キーとパブリックキーを `.env.local` に保存

#### 2.2 決済フロー実装
1. **チェックアウト画面**: お客様情報を入力後、「注文を確定」ボタンを押す
2. **API Route (`/api/create-payment-intent`)**: Stripeの決済意図（Payment Intent）を作成
3. **Stripe Elements**: カード情報を安全に入力
4. **支払い完了**: 成功したらSupabaseに注文を保存

#### 2.3 実装ファイル
- `src/app/api/create-payment-intent/route.ts`: Stripe Payment Intent作成
- `src/app/checkout/page.tsx`: Stripe Elements組み込み

---

### 3. メール送信 (Resend)

#### 3.1 Resendアカウント作成
- Resend公式サイトでAPIキーを取得
- ドメイン認証（DNS設定）を行う

#### 3.2 メール送信タイミング
- **注文完了時**: お客様へ「注文確認メール」
- **お問い合わせ送信時**: お客様へ「受付完了メール」、店舗側へ「通知メール」

#### 3.3 実装ファイル
- `src/app/api/send-order-email/route.ts`: 注文完了メール送信
- `src/app/api/send-inquiry-email/route.ts`: お問い合わせメール送信

---

### 4. 簡易管理画面

#### 4.1 ログイン機能
- Supabase Authを使用した店舗スタッフ専用ログイン
- 管理画面は `/admin` 配下に配置

#### 4.2 機能
- **注文一覧**: 全注文のステータス（未発送/発送済み）を表示
- **注文詳細**: 顧客情報、注文内容、合計金額を確認
- **ステータス更新**: 「発送済み」に変更するボタン
- **お問い合わせ一覧**: 未返信の問い合わせを確認

#### 4.3 実装ファイル
- `src/app/admin/page.tsx`: 管理画面トップ（注文一覧）
- `src/app/admin/orders/[id]/page.tsx`: 注文詳細
- `src/app/admin/inquiries/page.tsx`: お問い合わせ一覧

---

### 5. お問い合わせフォームの動作化

#### 5.1 現状
- UIのみ実装済み（`/contact`）

#### 5.2 追加実装
- フォーム送信時に `/api/submit-inquiry` へPOST
- Supabaseに保存 + Resendでメール送信

---

## 環境変数（.env.local）

実装に必要な環境変数：

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (管理画面用)

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Resend
RESEND_API_KEY=re_...
```

---

## 作業順序（推奨）

1. **Supabase セットアップ** (テーブル作成、Next.js接続確認)
2. **お問い合わせフォーム動作化** (Supabase保存 + Resendメール送信)
3. **Stripe決済統合** (チェックアウト画面改修)
4. **注文データ保存** (Stripe成功時にSupabaseへ記録)
5. **管理画面構築** (注文一覧・詳細ページ作成)

---

## 注意点

### セキュリティ
- Supabaseの**Row Level Security (RLS)** を有効化し、不正アクセスを防ぐ
- 管理画面は必ず認証必須にする

### テスト環境
- StripeはTest Modeで開発・テストを行い、本番移行時にLive Keyに切り替え

### 商品マスタ
- 現在は `lib/products.ts` でハードコードしているが、SupabaseのProductsテーブルから取得する形に変更すると、商品追加・編集が管理画面から可能になる

---

## 完成後のシステム構成

```
[ユーザー] 
  ↓ 商品閲覧・カート追加
[Next.js (Vercel)] 
  ↓ 注文確定
[Stripe] → 決済成功
  ↓
[Supabase] → 注文保存
  ↓
[Resend] → メール送信（お客様/店舗）
  ↓
[管理画面 (/admin)] → 店舗スタッフが確認・発送処理
```

これで、ECサイトとして完全に稼働可能な状態になります。

---
*Created by Gemini Agent (Phase 2 Planning)*
