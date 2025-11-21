import Image from "next/image";

export default function HowToCookPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="mb-16 text-center">
                <h1 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                    美味しい<span className="text-brand-orange">作り方</span>
                </h1>
                <p className="text-gray-300">
                    ご家庭でもお店の味をそのままに。<br />
                    誰でも簡単に作れる3ステップをご紹介します。
                </p>
            </div>

            <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/images/how-to/step1-boil.jpg"
                            alt="Step 1: 麺を茹でる"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="inline-block bg-brand-orange text-white font-bold px-3 py-1 rounded-full mb-4">
                            STEP 1
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">麺を茹でる</h2>
                        <p className="text-gray-300 leading-relaxed">
                            大きめの鍋にたっぷりのお湯を沸騰させます。<br />
                            凍ったままの麺を袋から取り出し、お湯に入れます。<br />
                            <span className="text-brand-orange font-bold">茹で時間は約8分〜10分</span>です。<br />
                            お好みの硬さになるよう、時々味見をしてください。
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/images/how-to/step2-soup.jpg"
                            alt="Step 2: スープを温める"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="inline-block bg-brand-orange text-white font-bold px-3 py-1 rounded-full mb-4">
                            STEP 2
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">スープを温める</h2>
                        <p className="text-gray-300 leading-relaxed">
                            別の鍋にお湯を沸かし、凍ったままのスープを袋ごと入れます。<br />
                            <span className="text-brand-orange font-bold">約10分間</span>、中火で湯煎してください。<br />
                            ※袋が鍋のふちに触れると溶ける恐れがありますのでご注意ください。
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-white/10">
                        <Image
                            src="/images/how-to/step3-plate.jpg"
                            alt="Step 3: 盛り付ける"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="inline-block bg-brand-orange text-white font-bold px-3 py-1 rounded-full mb-4">
                            STEP 3
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">盛り付ける</h2>
                        <p className="text-gray-300 leading-relaxed">
                            茹で上がった麺をザルにあけ、<span className="text-brand-orange font-bold">冷水でしっかりと洗います</span>。<br />
                            水気をよく切って器に盛り、温めたスープを別の器に注ぎます。<br />
                            お好みでネギや海苔、煮卵などをトッピングしてお召し上がりください。
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                <h3 className="text-xl font-bold text-white mb-4">美味しく食べるコツ</h3>
                <p className="text-gray-300">
                    麺は冷水で締めることで、コシとツルツル感が生まれます。<br />
                    スープは熱々の状態が一番美味しいので、召し上がる直前に器に注いでください。
                </p>
            </div>
        </div>
    );
}
