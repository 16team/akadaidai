"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
                <div className="mb-6 rounded-full bg-green-500/20 p-4 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                <h1 className="mb-4 text-3xl font-bold text-white">送信完了</h1>
                <p className="mb-8 text-gray-300">
                    お問い合わせありがとうございます。<br />
                    内容を確認次第、担当者よりご連絡させていただきます。
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    戻る
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16 max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold text-white text-center">お問い合わせ</h1>
            <p className="mb-12 text-center text-gray-400">
                ご質問やご要望がございましたら、お気軽にお問い合わせください。
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                            お名前 <span className="text-brand-orange">*</span>
                        </label>
                        <input
                            id="name"
                            required
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                            placeholder="山田 太郎"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                            メールアドレス <span className="text-brand-orange">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                            placeholder="taro@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                        件名
                    </label>
                    <input
                        id="subject"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                        placeholder="商品について"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        お問い合わせ内容 <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                        id="message"
                        required
                        rows={6}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                        placeholder="お問い合わせ内容をご記入ください..."
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full py-6 text-lg"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "送信中..." : "送信する"}
                </Button>
            </form>
        </div>
    );
}
