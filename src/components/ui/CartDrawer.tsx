"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export function CartDrawer() {
    const { items, removeItem, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isCartOpen]);

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="relative h-full w-full max-w-md border-l border-white/10 bg-brand-black p-6 shadow-2xl transition-transform">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-white">ショッピングカート</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 text-gray-400 hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
                        <p className="mb-4">カートは空です</p>
                        <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                            買い物を続ける
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-250px)] space-y-6">
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
                                        <div>
                                            <h3 className="font-medium text-white">{item.name}</h3>
                                            <p className="text-sm text-brand-orange">¥{item.price.toLocaleString()}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-1 text-gray-400 hover:text-white"
                                                >
                                                    -
                                                </button>
                                                <span className="text-sm text-white w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-1 text-gray-400 hover:text-white"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-xs text-gray-500 hover:text-red-400"
                                            >
                                                削除
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-black p-6">
                            <div className="mb-4 flex items-center justify-between text-lg font-bold text-white">
                                <span>合計</span>
                                <span>¥{cartTotal.toLocaleString()}</span>
                            </div>
                            <Button className="w-full py-6 text-lg" asChild onClick={() => setIsCartOpen(false)}>
                                <Link href="/checkout">
                                    レジに進む
                                </Link>
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
