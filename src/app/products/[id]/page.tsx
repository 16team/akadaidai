import { AddToCartButton } from "@/components/ui/AddToCartButton";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { getProduct } from "@/lib/products";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Main Product Section */}
            <div className="grid gap-12 lg:grid-cols-2 mb-24">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-bold text-white tracking-tight md:text-5xl">
                        {product.name}
                    </h1>
                    <p className="mb-8 text-3xl font-bold text-brand-orange">
                        ¥{product.price.toLocaleString()} <span className="text-sm text-gray-400 font-normal">（税込）</span>
                    </p>

                    <div className="mb-10 text-lg text-gray-300 leading-relaxed">
                        {product.description}
                    </div>

                    <div className="flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5">
                        <AddToCartButton product={product} />
                        <p className="text-xs text-gray-500 text-center">
                            ※クール便での配送となります
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <ShareButtons title={`麺屋 赤橙 - ${product.name}`} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bento Grid Features Section */}
            <div className="mb-12">
                <h2 className="mb-12 text-3xl font-bold text-center text-white">
                    <span className="text-brand-orange">こだわり</span>のポイント
                </h2>

                <div className="grid gap-6 md:grid-cols-3 h-auto md:h-[500px]">
                    {/* Noodle Feature - Large Block */}
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                        <Image
                            src="/images/about/noodles.jpg"
                            alt="Noodles"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                        />
                        <div className="relative z-20 h-full flex flex-col justify-end">
                            <h3 className="text-2xl font-bold text-brand-orange mb-2">自家製極太麺</h3>
                            <p className="text-gray-200">
                                毎朝店内で製麺する、小麦の香り豊かな極太麺。<br />
                                モチモチとした食感と、スープとの絡みを計算し尽くした<br />
                                至高の麺をお楽しみください。
                            </p>
                        </div>
                    </div>

                    {/* Soup Feature - Small Block */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                        <Image
                            src="/images/about/soup.jpg"
                            alt="Soup"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                        />
                        <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors" />
                        <div className="relative z-20 h-full flex flex-col justify-end">
                            <h3 className="text-xl font-bold text-white mb-2">濃厚スープ</h3>
                            <p className="text-sm text-gray-300">
                                豚骨と魚介の旨味を<br />極限まで凝縮。
                            </p>
                        </div>
                    </div>

                    {/* Ingredients Feature - Small Block */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                        <Image
                            src="/images/about/ingredients.jpg"
                            alt="Ingredients"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                        />
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                        <div className="relative z-20 h-full flex flex-col justify-end">
                            <h3 className="text-xl font-bold text-white mb-2">特製具材</h3>
                            <p className="text-sm text-gray-300">
                                とろけるチャーシューと<br />極太メンマ。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Description Text */}
            <div className="max-w-3xl mx-auto text-center py-12 border-t border-white/10">
                <p className="text-gray-300 leading-loose">
                    {product.details}
                </p>
            </div>

            {/* Product Specifications */}
            <div className="max-w-3xl mx-auto mt-16">
                <h3 className="text-xl font-bold text-white mb-6 text-center">商品仕様</h3>
                <div className="rounded-lg border border-white/10 bg-white/5 overflow-hidden">
                    <dl className="divide-y divide-white/10">
                        {product.ingredients && (
                            <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                                <dt className="font-bold text-gray-400 md:col-span-1">原材料名</dt>
                                <dd className="text-gray-200 md:col-span-3 whitespace-pre-wrap text-sm leading-relaxed">{product.ingredients}</dd>
                            </div>
                        )}
                        {product.content && (
                            <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                                <dt className="font-bold text-gray-400 md:col-span-1">内容量</dt>
                                <dd className="text-gray-200 md:col-span-3">{product.content}</dd>
                            </div>
                        )}
                        {product.expiration && (
                            <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                                <dt className="font-bold text-gray-400 md:col-span-1">賞味期限</dt>
                                <dd className="text-gray-200 md:col-span-3">{product.expiration}</dd>
                            </div>
                        )}
                        {product.preservation && (
                            <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                                <dt className="font-bold text-gray-400 md:col-span-1">保存方法</dt>
                                <dd className="text-gray-200 md:col-span-3">{product.preservation}</dd>
                            </div>
                        )}
                    </dl>
                </div>
            </div>
        </div>
    );
}
