import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mb-16 text-center">
                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                    <span className="text-brand-orange">赤橙</span>のこだわり
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-300">
                    一杯のつけ麺に込めた、私たちの情熱と技術。<br />
                    素材選びから製法まで、一切の妥協を許さない<br />
                    至高の味わいをお届けします。
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid gap-6 md:grid-cols-4 md:grid-rows-3 h-auto md:h-[800px]">

                {/* Hero Image - Large Square */}
                <div className="min-h-[300px] md:min-h-0 md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 group">
                    <Image
                        src="/images/tsukemen.png"
                        alt="Tsukemen Hero"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <h2 className="text-3xl font-bold text-white mb-2">究極の一杯</h2>
                        <p className="text-gray-300">
                            濃厚でありながら、最後の一滴まで飲み干せる。<br />
                            それが赤橙のつけ麺です。
                        </p>
                    </div>
                </div>

                {/* Soup - Tall Portrait */}
                <div className="min-h-[300px] md:min-h-0 md:col-span-1 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 group">
                    <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors z-0" />
                    <div className="relative z-10 p-8 h-full flex flex-col">
                        <div className="mb-auto">
                            <span className="inline-block rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-bold text-brand-orange mb-4">
                                SOUP
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-4">濃厚魚介豚骨</h3>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            国産の新鮮な鶏を惜しみなく使い、四国瀬戸内海で取れた煮干や厳選された鰹節などをふんだんに使用。<br /><br />
                            数種類の素材を長時間煮込み、旨味を極限まで抽出したスープは、濃厚ながらもくどさのない、奥深い味わいに仕上がっています。
                        </p>
                    </div>
                </div>

                {/* Noodles - Wide Landscape */}
                <div className="min-h-[200px] md:min-h-0 md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <h3 className="text-xl font-bold text-white mb-2">自家製極太麺</h3>
                    <p className="text-sm text-gray-400">
                        毎朝店内で打つ、小麦の香り豊かな麺。<br />
                        スープとの相性を第一に考えた特注粉を使用。
                    </p>
                </div>

                {/* Ingredients - Wide Landscape */}
                <div className="min-h-[200px] md:min-h-0 md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent" />
                    <h3 className="text-xl font-bold text-white mb-2">特製具材</h3>
                    <p className="text-sm text-gray-400">
                        低温調理でしっとりと仕上げたチャーシュー。<br />
                        食感の良い極太メンマ。
                    </p>
                </div>

                {/* Philosophy - Wide Block */}
                <div className="min-h-[200px] md:min-h-0 md:col-span-2 md:row-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-brand-orange p-8 flex flex-col justify-center items-center text-center group hover:bg-brand-orange/90 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4">「美味しい」のその先へ</h3>
                    <p className="text-white/90 max-w-md">
                        お客様の「美味しい」という笑顔のために。<br />
                        私たちは日々、味の探求を続けています。
                    </p>
                </div>

                {/* Access - Small Block */}
                <div className="min-h-[100px] md:min-h-0 md:col-span-2 md:row-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 flex items-center justify-between group hover:bg-white/10 transition-colors">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">店舗情報</h3>
                        <p className="text-sm text-gray-400">愛知県・岐阜県に3店舗展開中</p>
                    </div>
                    <a href="/shops" className="rounded-full bg-white px-6 py-2 text-sm font-bold text-black hover:bg-gray-200 transition-colors">
                        店舗一覧を見る
                    </a>
                </div>

            </div>
        </div>
    );
}
