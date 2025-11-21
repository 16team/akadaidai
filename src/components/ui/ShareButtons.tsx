"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

interface ShareButtonsProps {
    title: string;
    url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    // Use window.location.href if url is not provided (client-side only)
    const shareUrl = typeof window !== "undefined" ? (url || window.location.href) : "";
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(shareUrl);

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm font-bold text-gray-400 text-center">この商品をシェアする</p>
            <div className="flex flex-wrap justify-center gap-3">
                {/* X (Twitter) */}
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-black border border-white/20 text-white hover:bg-white/10 transition-colors"
                    aria-label="Share on X"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>

                {/* LINE */}
                <a
                    href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#06C755] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on LINE"
                >
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.3c0 4.662-4.261 8.5-10.423 8.5-.825 0-1.634-.071-2.41-.208-.846.735-2.796 1.86-3.016 1.984-.22.123-.485.12-.676-.014-.193-.135-.262-.391-.172-.612l.74-2.206c-4.963-2.11-8.043-5.31-8.043-8.944C0 4.186 4.665 0 10.423 0S24 4.186 24 10.3" />
                    </svg>
                </a>

                {/* Facebook */}
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on Facebook"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>

                {/* Copy Link */}
                <button
                    onClick={handleCopy}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors relative"
                    aria-label="Copy Link"
                >
                    {copied ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    )}
                    {copied && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-2 py-1 rounded shadow-lg whitespace-nowrap">
                            Copied!
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}
