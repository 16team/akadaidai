import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/products";

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold text-white">お取り寄せ</h1>
                <p className="text-gray-400">
                    ご家庭で楽しめる、赤橙の味。
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
