import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
            <div className="aspect-square relative overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Scarcity Badge */}
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                    1日限定50食
                </div>
            </div>
            <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-white">{product.name}</h3>
                <p className="mb-4 text-sm text-gray-400 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-orange">
                        ¥{product.price.toLocaleString()}
                    </span>
                    <Button asChild size="sm">
                        <Link href={`/products/${product.id}`}>
                            詳細を見る
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
