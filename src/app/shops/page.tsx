import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const SHOPS = [
    {
        id: "konan",
        name: "江南本店",
        description: "国産の新鮮な鶏を惜しみなく使い、四国瀬戸内海で取れた煮干や厳選された鰹節などをふんだんに使用したスープが特長のつけ麺を是非ご賞味下さい。",
        address: "〒483-8259 愛知県江南市上奈良町緑13エコープラザ1F",
        tel: "0587-56-3111",
        hours: [
            "平日 11:30～14:00 / 18:00～21:30",
            "土・日・祝 11:30～14:30 / 18:00～21:30"
        ],
        holiday: "水曜日",
        mapLink: "https://maps.google.com/?q=麺屋赤橙江南本店"
    },
    {
        id: "issha",
        name: "一社店",
        description: "国産の新鮮な鶏を惜しみなく使い四国瀬戸内海で取れた煮干や厳選された鰹節などをふんだんに使用したスープが特長のつけ麺を是非ご賞味下さい！！",
        address: "〒465-0093 愛知県名古屋市名東区一社１丁目１２５",
        tel: null,
        hours: [
            "昼 11:30～14:30",
            "夜 17:00～00:00"
        ],
        holiday: "年中無休",
        mapLink: "https://maps.google.com/?q=麺屋赤橙一社店"
    },
    {
        id: "gifu",
        name: "岐阜六条店",
        description: "国産の新鮮な鶏を惜しみなく使い四国瀬戸内海で取れた煮干や厳選された鰹節などをふんだんに使用したスープが特長のつけ麺を是非ご賞味下さい！！",
        address: "〒500-8357 岐阜県岐阜市六条大溝２丁目８−７",
        tel: "052-753-8002",
        hours: [
            "月火 11:30〜14:00 (LO 14:00)",
            "木金土日 11:30〜14:00 / 18:00〜21:00 (LO 21:00)"
        ],
        holiday: "水曜日",
        mapLink: "https://maps.google.com/?q=麺屋赤橙岐阜六条店"
    }
];

export default function ShopsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="mb-12 text-4xl font-bold text-white text-center">店舗一覧</h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {SHOPS.map((shop) => (
                    <div key={shop.id} className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-orange/10">
                        {/* Shop Image */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={`/images/shops/${shop.id}.jpg`}
                                alt={shop.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                                <h2 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">{shop.name}</h2>
                                <div className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">

                            <p className="mb-6 text-sm text-gray-400 leading-relaxed flex-grow">
                                {shop.description}
                            </p>

                            <div className="space-y-4 text-sm text-gray-300">
                                <div className="flex gap-3">
                                    <span className="shrink-0 font-bold text-brand-orange">住所</span>
                                    <span>{shop.address}</span>
                                </div>
                                {shop.tel && (
                                    <div className="flex gap-3">
                                        <span className="shrink-0 font-bold text-brand-orange">TEL</span>
                                        <span>{shop.tel}</span>
                                    </div>
                                )}
                                <div className="flex gap-3">
                                    <span className="shrink-0 font-bold text-brand-orange">時間</span>
                                    <div className="flex flex-col">
                                        {shop.hours.map((h, i) => (
                                            <span key={i}>{h}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="shrink-0 font-bold text-brand-orange">休み</span>
                                    <span>{shop.holiday}</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10">
                                <Button variant="secondary" className="w-full group-hover:bg-brand-orange group-hover:text-white transition-colors" asChild>
                                    <a href={shop.mapLink} target="_blank" rel="noopener noreferrer">
                                        Google Mapsで見る
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
