import React from 'react';

export default function LegalPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="mb-12 text-3xl font-bold text-white text-center">特定商取引法に基づく表記</h1>

            <div className="space-y-12 text-gray-300 leading-relaxed">

                {/* Shop Info */}
                <section>
                    <h2 className="mb-6 text-xl font-bold text-brand-orange border-b border-brand-orange/30 pb-2">ショップ情報</h2>
                    <dl className="grid gap-4 sm:grid-cols-[200px_1fr]">
                        <dt className="font-bold text-white">ショップ名</dt>
                        <dd>麺屋 赤橙</dd>

                        <dt className="font-bold text-white">販売業者</dt>
                        <dd>麺屋 赤橙｜木造 弘輝</dd>

                        <dt className="font-bold text-white">販売責任者</dt>
                        <dd>木造 弘輝</dd>

                        <dt className="font-bold text-white">所在地</dt>
                        <dd>〒483-8259 愛知県江南市上奈良町緑13 エコープラザ１F</dd>

                        <dt className="font-bold text-white">電話番号</dt>
                        <dd>0587-56-3111</dd>

                        <dt className="font-bold text-white">メールアドレス</dt>
                        <dd>info@akadaidai.com</dd>

                        <dt className="font-bold text-white">ホームページ</dt>
                        <dd><a href="http://www.akadaidai.com" className="hover:text-brand-orange underline">http://www.akadaidai.com</a></dd>

                        <dt className="font-bold text-white">取扱商品</dt>
                        <dd>麺販売</dd>

                        <dt className="font-bold text-white">販売数量</dt>
                        <dd>
                            商品は在庫限りとさせていただきます。<br />
                            ご注文いただきました商品が在庫切れの場合は、TEL、またはメールでご連絡差し上げます。
                        </dd>

                        <dt className="font-bold text-white">商品代金以外の必要料金</dt>
                        <dd>送料・代金引換手数料・各種振込手数料をご負担いただきます。</dd>
                    </dl>
                </section>

                {/* Shipping */}
                <section>
                    <h2 className="mb-6 text-xl font-bold text-brand-orange border-b border-brand-orange/30 pb-2">送料について</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="border-b border-white/10 text-white">
                                <tr>
                                    <th className="py-2">地域</th>
                                    <th className="py-2">都道府県</th>
                                    <th className="py-2">送料 (税込)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr><td className="py-2">北海道</td><td>北海道</td><td>1,458円</td></tr>
                                <tr><td className="py-2">北東北</td><td>青森・秋田・岩手</td><td>1,134円</td></tr>
                                <tr><td className="py-2">南東北</td><td>宮城・山形・福島</td><td>1,026円</td></tr>
                                <tr><td className="py-2">関東</td><td>茨城・栃木・群馬・埼玉・千葉・神奈川・東京・山梨</td><td>918円</td></tr>
                                <tr><td className="py-2">信越</td><td>長野・新潟</td><td>918円</td></tr>
                                <tr><td className="py-2">中部</td><td>静岡・愛知・三重・岐阜</td><td>918円</td></tr>
                                <tr><td className="py-2">北陸</td><td>富山・石川・福井</td><td>918円</td></tr>
                                <tr><td className="py-2">関西</td><td>大阪・京都・滋賀・奈良・和歌山・兵庫</td><td>918円</td></tr>
                                <tr><td className="py-2">中国</td><td>岡山・広島・山口・鳥取・島根</td><td>1,026円</td></tr>
                                <tr><td className="py-2">四国</td><td>香川・徳島・愛媛・高知</td><td>1,134円</td></tr>
                                <tr><td className="py-2">九州</td><td>福岡・佐賀・長崎・大分・熊本・宮崎・鹿児島</td><td>1,134円</td></tr>
                                <tr><td className="py-2">沖縄</td><td>沖縄</td><td>別途</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">
                        ※上記全てクール料金、税込み<br />
                        ※一部離島地域につきましては、別途ご連絡させていただきます。<br />
                        <span className="text-brand-orange font-bold">6食以上ご購入で送料無料です。</span>
                    </p>
                </section>

                {/* Fees */}
                <section>
                    <h2 className="mb-6 text-xl font-bold text-brand-orange border-b border-brand-orange/30 pb-2">手数料について</h2>

                    <h3 className="mb-2 font-bold text-white">代金引換手数料</h3>
                    <ul className="mb-6 list-disc pl-5 space-y-1">
                        <li>10,000円以下: 324円</li>
                        <li>30,000円以下: 432円</li>
                        <li>100,000円以下: 648円</li>
                        <li>300,000円以下: 1,080円</li>
                        <li>500,000円以下: 2,160円</li>
                        <li>100万円以下: 3,240円</li>
                        <li>100万円を超える場合: 4,320円</li>
                    </ul>

                    <h3 className="mb-2 font-bold text-white">決済手数料</h3>
                    <p className="mb-2">
                        ショッピングカートの注文確認画面に決済手数料を表示し、決済金額に加算します。（手数料はお客様負担となります）
                    </p>
                    <p className="text-sm bg-white/5 p-4 rounded-md">
                        決済手数料 = 【決済金額】 / (1 - 0.04104) - 【決済金額】 円<br />
                        <span className="text-xs text-gray-500">※計算結果が173円以下の場合は、一律173円です。小数点以下は切り上げ。</span>
                    </p>
                </section>

                {/* Terms */}
                <section>
                    <h2 className="mb-6 text-xl font-bold text-brand-orange border-b border-brand-orange/30 pb-2">お支払い・期限</h2>
                    <dl className="grid gap-4 sm:grid-cols-[200px_1fr]">
                        <dt className="font-bold text-white">申込の有効期限</dt>
                        <dd>
                            <strong className="text-white block mb-1">【代金引換・クレジットカード決済】</strong>
                            ご指定日に商品をお受け取り下さい。不在の場合は配送業者の不在伝票の日数内に必ずお受け取り下さい。<br /><br />
                            <strong className="text-white block mb-1">【銀行振込・コンビニ決済・ネットバンク決済】</strong>
                            ご注文後7日以内にご入金ください。7日以内に確認できない場合はキャンセル扱いとさせていただきます。
                        </dd>

                        <dt className="font-bold text-white">引渡し時期</dt>
                        <dd>
                            <strong className="text-white block mb-1">【代金引換・クレジットカード決済】</strong>
                            在庫のある商品はご注文確認後6営業日以内に発送いたします。<br /><br />
                            <strong className="text-white block mb-1">【銀行振込・コンビニ決済・ネットバンク決済】</strong>
                            在庫のある商品はご入金確認後6営業日以内に発送いたします。<br />
                            ※基本的に配送は日本国内のみとさせていただきます。
                        </dd>

                        <dt className="font-bold text-white">お支払方法</dt>
                        <dd>代金引換、銀行振込、クレジットカード決済、コンビニ決済、ネットバンク決済</dd>

                        <dt className="font-bold text-white">お支払期限</dt>
                        <dd>
                            代金引換：商品引渡時<br />
                            銀行振込・コンビニ・ネットバンク：ご注文後7日以内<br />
                            クレジットカード：クレジット会社の規定に準ずる
                        </dd>
                    </dl>
                </section>

                {/* Returns */}
                <section>
                    <h2 className="mb-6 text-xl font-bold text-brand-orange border-b border-brand-orange/30 pb-2">返品・不良品について</h2>
                    <dl className="grid gap-4 sm:grid-cols-[200px_1fr]">
                        <dt className="font-bold text-white">返品期限・条件</dt>
                        <dd>
                            ・お客様のご都合によるご返品にはご対応できかねます。<br />
                            ・不良品があった場合は商品到着後2日以内にご連絡ください。<br />
                            ・一度開封された商品、お客様の責任でキズや汚れが生じた商品の返品はお受けできません。<br />
                            ※商品到着後、中身のご確認をお願い致します。
                        </dd>

                        <dt className="font-bold text-white">返品送料</dt>
                        <dd>不良品の際は返送料をこちらが負担いたします。</dd>

                        <dt className="font-bold text-white">不良品</dt>
                        <dd>
                            万一発送中の破損、不良品、あるいはご注文と違う商品が届いた場合のみ返品をお受けいたします。
                            当店の在庫状況を確認のうえ、新品、または同等品と交換させていただきます。
                        </dd>
                    </dl>
                </section>

            </div>
        </div>
    );
}
