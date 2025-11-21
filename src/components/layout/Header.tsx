"use client";

import Link from 'next/link';
import { useCart } from '@/lib/cartContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function Header() {
    const { cartCount, setIsCartOpen } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { href: '/products', label: 'お取り寄せ' },
        { href: '/shops', label: '店舗一覧' },
        { href: '/how-to', label: '美味しい作り方' },
        { href: '/about', label: 'こだわり' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className="text-2xl font-bold tracking-tighter text-brand-orange">
                        麺屋 赤橙
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium hover:text-brand-orange transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Cart Button (Desktop) */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 hover:text-brand-orange transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </nav>

                {/* Mobile Actions (Cart + Hamburger) */}
                <div className="flex items-center gap-4 md:hidden z-50">
                    {/* Cart Button (Mobile) */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 hover:text-brand-orange transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-white hover:text-brand-orange transition-colors"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay (Side Drawer) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm md:hidden"
                            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-[100] w-3/4 max-w-sm bg-black border-l border-white/10 shadow-2xl md:hidden h-[100dvh]"
                            style={{ position: 'fixed', top: 0, right: 0, height: '100dvh', backgroundColor: '#0a0a0a' }}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between p-6 border-b border-white/10 flex-none">
                                    <span className="text-xl font-bold text-brand-orange">MENU</span>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 text-gray-400 hover:text-white"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-lg font-medium text-white hover:text-brand-orange transition-colors border-b border-white/5 pb-4"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="pt-8 pb-8">
                                        <p className="text-sm text-gray-500 mb-2">営業時間</p>
                                        <p className="text-gray-300">11:00 - 14:00 / 18:00 - 21:00</p>
                                        <p className="text-gray-500 text-xs mt-1">定休日: 水曜日</p>
                                    </div>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
