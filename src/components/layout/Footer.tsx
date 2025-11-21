import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-brand-black py-12 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-brand-orange">麺屋 赤橙</h3>
                        <p className="text-gray-400">
                            こだわりのつけ麺をご家庭で。<br />
                            厳選された素材と職人の技が織りなす<br />
                            至高の一杯をお届けします。
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 font-bold text-white">リンク</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/products" className="hover:text-brand-orange">商品一覧</Link></li>
                            <li><Link href="/about" className="hover:text-brand-orange">店舗情報</Link></li>
                            <li><Link href="/how-to" className="hover:text-brand-orange">美味しい作り方</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-orange">お問い合わせ</Link></li>
                            <li><Link href="/privacy" className="hover:text-brand-orange">プライバシーポリシー</Link></li>
                            <li><Link href="/legal" className="hover:text-brand-orange">特定商取引法に基づく表記</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-bold text-white">店舗情報</h3>
                        <p className="text-gray-400">
                            〒500-0000<br />
                            岐阜県岐阜市...<br />
                            営業時間: 11:00 - 14:00 / 18:00 - 21:00<br />
                            定休日: 水曜日
                        </p>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Menya Akadaidai. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
