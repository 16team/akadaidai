"use client";

import { motion } from "framer-motion";

export function SteamAnimation() {
    // Generate multiple steam particles
    const particles = Array.from({ length: 3 });

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center z-0 opacity-60">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-24 h-24 bg-white blur-[40px] rounded-full"
                    initial={{
                        opacity: 0,
                        y: 40,
                        x: (i - 1) * 30, // Spread particles slightly
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        y: -120,
                        scale: [0.5, 1.5, 2],
                        x: (i - 1) * 60 + (i % 2 === 0 ? 20 : -20), // Waving motion
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.5, // Stagger start times
                    }}
                />
            ))}
        </div>
    );
}
