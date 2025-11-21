export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    details?: string; // More detailed description for the product page
    ingredients?: string;
    content?: string;
    expiration?: string;
    preservation?: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "tsukemen-set-3",
        name: "赤橙特製つけ麺 3食セット",
        price: 3500,
        image: "/images/products/tsukemen.jpg",
        description: "濃厚な魚介豚骨スープと自家製太麺の絶妙なハーモニー。お店の味をそのままご家庭で。",
        details: "赤橙の看板メニュー「特製つけ麺」の3食セットです。スープは豚骨と魚介の旨味を凝縮した濃厚スープ。麺は小麦の香りが楽しめる自家製極太麺。具材（チャーシュー、メンマ）もセットになっていますので、茹でるだけで本格的な味をお楽しみいただけます。",
        ingredients: "麺：小麦、食塩、かんすい、アルコール、乳酸ナトリウム\nスープ：鶏、豚、玉ねぎ、人参、うるめ、サバ、椎茸、昆布、ニンニク、ショウガ、ネギ、トウガラシ、ブラックペッパー、酢\n※麺とスープには卵、エビなどは使用しておりませんが、麺を製造するラインや店内でご提供するメニューには卵を使用しているため、麺に卵の成分が付着している場合がございます。",
        content: "麺190g・スープ250cc × 3食",
        expiration: "到着後　冷凍で2週間以内",
        preservation: "冷凍保存",
    },
    {
        id: "tsukemen-set-5",
        name: "赤橙特製つけ麺 5食セット",
        price: 5500,
        image: "/images/products/tsukemen.jpg",
        description: "ご家族やご友人とシェアできる5食セット。ギフトにも最適です。",
        details: "お得な5食セットです。ホームパーティーや、ご近所へのお裾分けにも最適。冷凍保存で1ヶ月美味しく召し上がれます。",
        ingredients: "麺：小麦、食塩、かんすい、アルコール、乳酸ナトリウム\nスープ：鶏、豚、玉ねぎ、人参、うるめ、サバ、椎茸、昆布、ニンニク、ショウガ、ネギ、トウガラシ、ブラックペッパー、酢\n※麺とスープには卵、エビなどは使用しておりませんが、麺を製造するラインや店内でご提供するメニューには卵を使用しているため、麺に卵の成分が付着している場合がございます。",
        content: "麺190g・スープ250cc × 5食",
        expiration: "到着後　冷凍で2週間以内",
        preservation: "冷凍保存",
    },
    {
        id: "spicy-tsukemen-set-3",
        name: "辛つけ麺 3食セット",
        price: 3800,
        image: "/images/products/spicy-tsukemen.jpg",
        description: "特製ラー油の辛味が食欲をそそる、辛いもの好きにはたまらない一杯。",
        details: "赤橙の濃厚スープに、数種類のスパイスをブレンドした特製ラー油を合わせました。辛さの中にも旨味がしっかりと感じられる、癖になる味わいです。",
        ingredients: "麺：小麦、食塩、かんすい、アルコール、乳酸ナトリウム\nスープ：鶏、豚、玉ねぎ、人参、うるめ、サバ、椎茸、昆布、ニンニク、ショウガ、ネギ、トウガラシ、ブラックペッパー、酢、特製ラー油\n※麺とスープには卵、エビなどは使用しておりませんが、麺を製造するラインや店内でご提供するメニューには卵を使用しているため、麺に卵の成分が付着している場合がございます。",
        content: "麺190g・スープ250cc × 3食",
        expiration: "到着後　冷凍で2週間以内",
        preservation: "冷凍保存",
    },
];

export function getProduct(id: string): Product | undefined {
    return PRODUCTS.find((p) => p.id === id);
}
