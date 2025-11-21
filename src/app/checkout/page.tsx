"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
    const { items, cartTotal, clearCart, updateQuantity, removeItem } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCheckout = async () => {
        setIsProcessing(true);
        // Simulate Stripe Checkout redirect
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsProcessing(false);
        setIsSuccess(true);
        clearCart();
    };

    if (isSuccess) {
        return (
            <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
                <div className="mb-6 rounded-full bg-green-500/20 p-4 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                <h1 className="mb-4 text-3xl font-bold text-white">ご注文ありがとうございます</h1>
                <p className="mb-8 text-gray-400">
                    決済が完了しました。確認メールをお送りしましたのでご確認ください。
                </p>
                <Button asChild size="lg">
                    <Link href="/">トップページへ戻る</Link>
                </Button>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
                <h1 className="mb-4 text-2xl font-bold text-white">カートは空です</h1>
                <Button asChild>
                    <Link href="/">買い物を続ける</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="mb-12 text-3xl font-bold text-white">ご注文内容の確認</h1>

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Order Summary */}
                <div className="space-y-8">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <h2 className="mb-6 text-xl font-bold text-white">カートの商品</h2>
                        <div className="space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-white/10">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="flex justify-between">
                                            <h3 className="font-medium text-white">{item.name}</h3>
                                            <p className="font-bold text-white">¥{(item.price * item.quantity).toLocaleString()}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-2 text-gray-400 hover:text-white transition-colors"
                                                    type="button"
                                                >
                                                    -
                                                </button>
                                                <span className="text-sm text-white w-4 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-2 text-gray-400 hover:text-white transition-colors"
                                                    type="button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-sm text-gray-500 hover:text-red-400 transition-colors underline"
                                                type="button"
                                            >
                                                削除
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 border-t border-white/10 pt-6">
                            <div className="flex justify-between text-lg font-bold text-white">
                                <span>合計</span>
                                <span className="text-brand-orange">¥{cartTotal.toLocaleString()}</span>
                            </div>
                            <p className="mt-2 text-xs text-gray-500">※送料は次の画面で計算されます</p>
                        </div>
                    </div>
                </div>

                {/* Checkout Form (Mock) */}
                <div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <h2 className="mb-6 text-xl font-bold text-white">お客様情報</h2>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">姓</label>
                                    <input type="text" required className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white focus:border-brand-orange focus:outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">名</label>
                                    <input type="text" required className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white focus:border-brand-orange focus:outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">メールアドレス</label>
                                <input type="email" required className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white focus:border-brand-orange focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">住所</label>
                                <input type="text" required className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white focus:border-brand-orange focus:outline-none" />
                            </div>

                            <div className="space-y-4 border-t border-white/10 pt-6">
                                <h3 className="font-bold text-white">ギフトオプション</h3>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="gift-wrapping" className="h-5 w-5 rounded border-white/10 bg-black/50 text-brand-orange focus:ring-brand-orange" />
                                    <label htmlFor="gift-wrapping" className="text-sm text-gray-300">
                                        簡易ラッピング (+¥0)
                                    </label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="noshi" className="h-5 w-5 rounded border-white/10 bg-black/50 text-brand-orange focus:ring-brand-orange" />
                                    <label htmlFor="noshi" className="text-sm text-gray-300">
                                        熨斗（のし）をつける (+¥0)
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-4 border-t border-white/10 pt-6">
                                <h3 className="font-bold text-white">お支払い情報 (デモ)</h3>
                                <div className="space-y-4 rounded-md border border-white/10 bg-black/30 p-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">カード番号</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="0000 0000 0000 0000"
                                                className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 pl-10 text-white focus:border-brand-orange focus:outline-none font-mono"
                                                disabled
                                            />
                                            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">有効期限</label>
                                            <input
                                                type="text"
                                                placeholder="MM / YY"
                                                className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white focus:border-brand-orange focus:outline-none font-mono"
                                                disabled
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">CVC</label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white focus:border-brand-orange focus:outline-none font-mono"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button
                                    type="submit"
                                    className="w-full py-6 text-lg font-bold"
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? "処理中..." : "注文を確定する (デモ)"}
                                </Button>
                                <p className="mt-4 text-center text-xs text-gray-500">
                                    ※これはデモサイトです。実際の決済は行われません。
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
