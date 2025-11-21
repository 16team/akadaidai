import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "麺屋 赤橙 - 公式オンラインショップ -",
  description: "麺屋赤橙(aka daidai)の特性つけ麺がお取り寄せできるようになりました！一度食べたら忘れられない至高のつけ麺を是非、ご家庭で、ご家族でご堪能ください！",
  openGraph: {
    title: "麺屋 赤橙 - 公式オンラインショップ -",
    description: "麺屋赤橙(aka daidai)の特性つけ麺がお取り寄せできるようになりました！一度食べたら忘れられない至高のつけ麺を是非、ご家庭で、ご家族でご堪能ください！",
    url: "https://akadaidai.com", // 仮のURL、デプロイ後に修正推奨
    siteName: "麺屋 赤橙",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/main-visual.jpg", // OGP画像としてメインビジュアルを使用
        width: 1200,
        height: 630,
        alt: "麺屋 赤橙",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "麺屋 赤橙 - 公式オンラインショップ -",
    description: "麺屋赤橙(aka daidai)の特性つけ麺がお取り寄せできるようになりました！一度食べたら忘れられない至高のつけ麺を是非、ご家庭で、ご家族でご堪能ください！",
    images: ["/images/main-visual.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cartContext";
import { CartDrawer } from "@/components/ui/CartDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
