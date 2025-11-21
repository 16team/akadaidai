"use client";

import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { TextReveal } from "@/components/ui/TextReveal";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { SteamAnimation } from "@/components/ui/SteamAnimation";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Background Image Placeholder - In real app, use a high quality photo or video */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/50 to-brand-black z-0" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-80"
        />

        {/* Steam Animation */}
        <div className="absolute inset-0 z-10 flex items-center justify-center translate-y-20">
          <SteamAnimation />
        </div>

        <div className="relative z-20 container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="mb-6 flex flex-col items-center justify-center md:flex-row md:gap-4">
            <TextReveal text="濃厚" className="text-5xl font-bold tracking-tighter text-brand-orange md:text-7xl" />
            <TextReveal text="極まる。" className="text-5xl font-bold tracking-tighter text-white md:text-7xl" delay={0.5} />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl"
          >
            行列のできるつけ麺店「麺屋 赤橙」の味を、<br className="hidden md:block" />
            全国の皆様へお届けします。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="#products">
                商品を見る
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
            <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder for concept image */}
            <Image
              src="/images/tsukemen.png"
              alt="Cooking process"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white">
              一杯に込めた<span className="text-brand-orange">情熱</span>
            </h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              赤橙のスープは、厳選された豚骨と魚介を長時間煮込み、
              旨味を極限まで凝縮させています。
            </p>
            <p className="mb-6 text-gray-300 leading-relaxed">
              麺はスープとの絡みを計算し尽くした特注の極太麺。
              小麦の香りとモチモチとした食感が楽しめます。
              お店で提供している味をそのまま冷凍パックに閉じ込めました。
            </p>
            <Button variant="outline" asChild>
              <Link href="/about">
                赤橙についてもっと知る
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">お取り寄せ商品</h2>
          <p className="text-gray-400">ご自宅で本格的なつけ麺をお楽しみください</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
