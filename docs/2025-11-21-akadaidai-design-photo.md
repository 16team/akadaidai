# 開発メモ - 2025年11月21日

## 本日の作業内容

### 1. アセット統合（Logo, Main Visual, 各種画像）

#### ロゴとメインビジュアル
- **ロゴ**: `public/logo/logo.svg` を Header と Footer に統合
- **メインビジュアル**: `public/images/main-visual.jpg` をヒーローセクションに適用
- **ファビコン**: `public/favicon.ico` を設定済み

#### 画像素材の配置フォルダ構成
```
public/
  ├── logo/
  │   └── logo.svg (設定済み)
  ├── images/
  │   ├── main-visual.jpg (設定済み)
  │   ├── main-visual-2.jpg (設定済み)
  │   ├── main-visual-3.jpg (設定済み)
  │   ├── products/
  │   │   ├── tsukemen.jpg
  │   │   └── spicy-tsukemen.jpg
  │   ├── top/
  │   │   └── concept.jpg
  │   ├── how-to/
  │   │   ├── step1-boil.jpg
  │   │   ├── step2-soup.jpg
  │   │   └── step3-plate.jpg
  │   ├── about/
  │   │   ├── hero.jpg
  │   │   ├── soup.jpg
  │   │   ├── noodles.jpg
  │   │   └── ingredients.jpg
  │   └── shops/
  │       ├── konan.jpg
  │       ├── issha.jpg
  │       └── gifu.jpg
```

### 2. 画像素材の詳細

#### 商品画像 (`public/images/products/`)
| 用途 | ファイル名 | 推奨サイズ | 枚数 |
|------|-----------|-----------|------|
| 赤橙特製つけ麺 | `tsukemen.jpg` | 1000x1000px (正方形) | 1枚 |
| 辛つけ麺 | `spicy-tsukemen.jpg` | 1000x1000px (正方形) | 1枚 |

#### トップページ (`public/images/top/`)
| 用途 | ファイル名 | 推奨サイズ | 枚数 |
|------|-----------|-----------|------|
| コンセプト（情熱） | `concept.jpg` | 1920x1080px (16:9) | 1枚 |

#### 美味しい作り方 (`public/images/how-to/`)
| 用途 | ファイル名 | 推奨サイズ | 枚数 |
|------|-----------|-----------|------|
| STEP 1: 麺を茹でる | `step1-boil.jpg` | 1920x1080px (16:9) | 1枚 |
| STEP 2: スープを温める | `step2-soup.jpg` | 1920x1080px (16:9) | 1枚 |
| STEP 3: 盛り付ける | `step3-plate.jpg` | 1920x1080px (16:9) | 1枚 |

#### 赤橙のこだわり (`public/images/about/`)
| 用途 | ファイル名 | 推奨サイズ | 枚数 |
|------|-----------|-----------|------|
| 究極の一杯（メイン） | `hero.jpg` | 1000x1000px (正方形) | 1枚 |
| 濃厚スープ | `soup.jpg` | 800x1200px (縦長) | 1枚 |
| 自家製極太麺 | `noodles.jpg` | 1200x800px (横長) | 1枚 |
| 特製具材 | `ingredients.jpg` | 1200x800px (横長) | 1枚 |

#### 店舗画像 (`public/images/shops/`)
| 用途 | ファイル名 | 推奨サイズ | 枚数 |
|------|-----------|-----------|------|
| 江南本店 | `konan.jpg` | 1200x800px (横長) | 1枚 |
| 一社店 | `issha.jpg` | 1200x800px (横長) | 1枚 |
| 岐阜六条店 | `gifu.jpg` | 1200x800px (横長) | 1枚 |

### 3. SEO & OGP の実装

#### 更新ファイル
- `src/app/layout.tsx`

#### 設定内容
- **タイトル**: 麺屋 赤橙 - 公式オンラインショップ -
- **説明文**: 麺屋赤橙(aka daidai)の特性つけ麺がお取り寄せできるようになりました！一度食べたら忘れられない至高のつけ麺を是非、ご家庭で、ご家族でご堪能ください！
- **OGP画像**: `/images/main-visual.jpg`
- **Twitter Card**: `summary_large_image`
- **ドメイン**: `https://akadaidai.jp` (仮設定)
- **ファビコン**: `/favicon.ico`

### 4. ヒーローセクションのスライドショー実装

#### 更新ファイル
- `src/app/page.tsx`

#### 実装内容
- 3枚の画像をフェードでループ表示
  - `main-visual.jpg`
  - `main-visual-2.jpg`
  - `main-visual-3.jpg`
- 切り替え間隔: 5秒
- アニメーション: Framer Motion の `AnimatePresence` を使用
- フェード時間: 1.5秒

### 5. 会社情報の更新

#### 更新ファイル
- `src/app/legal/page.tsx` (特定商取引法ページ)
- `src/components/layout/Footer.tsx`

#### 更新内容
- **販売業者**: 麺屋 赤橙｜山口 孝司
- **販売責任者**: 山口 孝司
- **所在地**: 〒500-8357 岐阜県岐阜市六条大溝２丁目８−７ セントラルキッチン
- **メールアドレス**: info@akadaidai.jp
- **ホームページ**: https://akadaidai.jp
- **フッター**: 「店舗情報」を「販売情報」に変更し、セントラルキッチンの住所を記載
- **フッターリンク**: 店舗情報のリンク先を `/about` から `/shops` に修正

### 6. 店舗画像の追加

#### 更新ファイル
- `src/app/shops/page.tsx`

#### 実装内容
- 各店舗カードの上部に店舗画像を表示
- 画像パス: `/images/shops/{shop_id}.jpg`
- 画像の高さ: `h-64` (256px)
- ホバーエフェクト: 画像がズームイン (`scale-110`)
- グラデーションオーバーレイ: 下部に黒のグラデーションを配置

### 7. コード変更の詳細

#### `src/components/layout/Header.tsx`
- テキストロゴを `Image` コンポーネント (`/logo/logo.svg`) に変更
- 「限定通販」バッジを追加

#### `src/components/layout/Footer.tsx`
- テキストロゴを `Image` コンポーネント (`/logo/logo.svg`) に変更
- 「店舗情報」セクションを「販売情報」に変更
- 販売情報の住所を更新

#### `src/app/page.tsx`
- コンセプト画像を `/images/top/concept.jpg` に変更
- ヒーローセクションにスライドショーを実装

#### `src/app/how-to/page.tsx`
- STEP 1〜3 の画像をプレースホルダーから実画像に変更
- 画像パス: `/images/how-to/step{1-3}-{boil|soup|plate}.jpg`

#### `src/app/about/page.tsx`
- Bento Grid の各画像をプレースホルダーから実画像に変更
- 画像パス: `/images/about/{hero|soup|noodles|ingredients}.jpg`

#### `src/app/products/[id]/page.tsx`
- こだわりセクションの画像をプレースホルダーから実画像に変更
- 画像パス: `/images/about/{noodles|soup|ingredients}.jpg`

#### `src/lib/products.ts`
- 商品画像パスを更新
  - `tsukemen-set-3`, `tsukemen-set-5`: `/images/products/tsukemen.jpg`
  - `spicy-tsukemen-set-3`: `/images/products/spicy-tsukemen.jpg`

### 8. 完了したタスク

- [x] 画像素材の統合（Logo, Main Visual）
- [x] 商品画像の統合
- [x] トップページ画像の統合
- [x] How-toページ画像の統合
- [x] Aboutページ画像の統合
- [x] 店舗画像の統合
- [x] SEO & OGP の実装
- [x] ヒーローセクションのスライドショー実装
- [x] 会社情報の更新（特商法、フッター）

### 9. 技術スタック

- **フレームワーク**: Next.js 15
- **アニメーション**: Framer Motion
- **画像最適化**: Next.js Image コンポーネント
- **スタイリング**: Tailwind CSS

### 10. 次のステップ

現在、フロントエンドの実装は完了しています。次のフェーズでは以下の機能を実装予定です：

1. **Supabase セットアップ**: データベースの設計と統合
2. **Stripe 決済統合**: 実際のチェックアウトフローの実装
3. **Email 送信 (Resend)**: 注文確認メールの送信機能
4. **シンプルな管理画面**: 注文と問い合わせの管理
5. **お問い合わせフォーム機能**: フォームの動作実装

---

## 備考

- すべての画像は `public/images/` 配下に統一して配置
- 画像の遅延読み込みは Next.js Image コンポーネントが自動で処理
- OGP 画像は SNS シェア時に自動表示される
- ヒーローセクションのスライドショーはパフォーマンスに配慮し、CSS ベースの `backgroundImage` を使用
