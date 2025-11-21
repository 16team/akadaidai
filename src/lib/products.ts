export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    details?: string; // More detailed description for the product page
}

export const PRODUCTS: Product[] = [
    {
        id: "tsukemen-set-3",
        name: "赤橙特製つけ麺 3食セット",
        price: 3500,
        image: "/images/tsukemen.png",
        description: "濃厚な魚介豚骨スープと自家製太麺の絶妙なハーモニー。お店の味をそのままご家庭で。",
        details: "赤橙の看板メニュー「特製つけ麺」の3食セットです。スープは豚骨と魚介の旨味を凝縮した濃厚スープ。麺は小麦の香りが楽しめる自家製極太麺。具材（チャーシュー、メンマ）もセットになっていますので、茹でるだけで本格的な味をお楽しみいただけます。",
    },
    {
        id: "tsukemen-set-5",
        name: "赤橙特製つけ麺 5食セット",
        price: 5500,
        image: "/images/tsukemen.png",
        description: "ご家族やご友人とシェアできる5食セット。ギフトにも最適です。",
        details: "お得な5食セットです。ホームパーティーや、ご近所へのお裾分けにも最適。冷凍保存で1ヶ月美味しく召し上がれます。",
    },
    {
        id: "spicy-tsukemen-set-3",
        name: "辛つけ麺 3食セット",
        price: 3800,
        image: "/images/tsukemen.png",
        description: "特製ラー油の辛味が食欲をそそる、辛いもの好きにはたまらない一杯。",
        details: "赤橙の濃厚スープに、数種類のスパイスをブレンドした特製ラー油を合わせました。辛さの中にも旨味がしっかりと感じられる、癖になる味わいです。",
    },
];

export function getProduct(id: string): Product | undefined {
    return PRODUCTS.find((p) => p.id === id);
}
