"use client";

import { Button } from "@/components/ui/Button";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cartContext";
import { useState } from "react";

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addItem } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addItem(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <Button
            size="lg"
            className="w-full text-lg py-6 transition-all duration-300"
            onClick={handleAddToCart}
            disabled={isAdded}
        >
            {isAdded ? "カートに追加しました" : "カートに入れる"}
        </Button>
    );
}
