"use client";

import Link from "next/link";

const PromoSection = () => {
    return (
        <div className="bg-[#F2F3F4] mt-[-60px]">
        <section className="max-w-7xl mx-auto px-4 py-6 space-y-4 font-sans mt-20 bg-[#F2F3F4]">
            {/* Top Banner - Reklam */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-between min-h-[160px]">
                {/* Background image placeholder */}
                <div
                    className="absolute inset-0 bg-cover bg-right opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80')",
                    }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

                <div className="relative z-10 p-8 max-w-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        Reklamınız burada ola bilər!
                    </h2>
                    <p className="text-gray-500 text-sm mb-5">
                        Saytımızda yerinizi tutaraq minlərlə potensial müştəriyə çata
                        bilərsiniz.
                    </p>
                    <Link
                        href="https://birmenzil.az/reklam-yerlesdir"
                        className="inline-flex items-center gap-2 bg-[#1a8fe3] hover:bg-[#1679c4] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        Müraciət et
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Middle Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card 1 - Bonus */}
                <div className="bg-gradient-to-br from-[#1a8fe3] to-[#0d6dbf] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between min-h-[160px]">
                    <div>
                        <h3 className="text-lg font-bold leading-snug mb-2">
                            20 elan paylaş
                            <br />
                            <span className="text-yellow-300">100 AZN bonus</span> əldə et
                        </h3>
                        <p className="text-blue-100 text-sm">
                            Qeydiyyatdan keç və ilk 20 elanda 100 manat bonus əldə et.
                            Saytda elanların paylaşılması pulsuzdur.
                        </p>
                    </div>
                    <Link
                        href="https://birmenzil.az/elan-yarat"
                        className="mt-4 inline-flex items-center gap-2 bg-white text-[#1a8fe3] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-all w-fit"
                    >
                        Başla
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Card 2 - Statistika */}
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[160px] border border-gray-100">
                    <div>
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                            <svg
                                className="w-5 h-5 text-[#1a8fe3]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                            Qiymət Statistikası
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Fərqli şəhər və rayonlarda mənzil, ofis və torpaq sahələrinin
                            orta bazar qiymətlərini izləyin.
                        </p>
                    </div>
                    <Link
                        href="https://birmenzil.az/statistika"
                        className="mt-4 inline-flex items-center gap-2 bg-[#1a8fe3] hover:bg-[#1679c4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all w-fit shadow-sm"
                    >
                        Ətraflı
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Card 3 - Xaricdə Əmlak */}
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[160px] border border-gray-100 relative overflow-hidden">
                    <div
                        className="absolute right-0 top-0 bottom-0 w-32 bg-cover bg-center opacity-20 rounded-r-2xl"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1524813686514-a57563d77965?w=300&q=80')",
                        }}
                    />
                    <div className="relative z-10">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                            <svg
                                className="w-5 h-5 text-[#1a8fe3]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                                />
                            </svg>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                            Xaricdə Əmlak Almaq
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Türkiyə, Dubay və Avropada sərfəli daşınmaz əmlak imkanları!
                        </p>
                    </div>
                    <Link
                        href="https://birmenzil.az/baki/satilir/xarici_emlaklar"
                        className="relative z-10 mt-4 inline-flex items-center gap-2 bg-[#1a8fe3] hover:bg-[#1679c4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all w-fit shadow-sm"
                    >
                        Ətraflı
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Sizin üçün + Xidmətlər */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sizin üçün */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-base font-bold text-gray-800 mb-4">Sizin üçün</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href="https://birmenzil.az/ai-axtaris"
                            className="group bg-[#eef6fd] hover:bg-[#ddeefa] rounded-xl p-4 flex flex-col items-start gap-2 transition-all"
                        >
                            <div className="text-3xl"><img src="https://birmenzil.az/_next/image?url=%2Fassets%2Ficons%2Fservices%2Funder-construction.png&w=384&q=75" alt="" /></div>
                            <span className="text-sm font-medium text-gray-800 leading-tight">
                                Sizə uyğun olan evi biz tapaq
                            </span>
                        </Link>
                        <Link
                            href="https://birmenzil.az/ipoteka-kalkulyator"
                            className="group bg-[#eef6fd] hover:bg-[#ddeefa] rounded-xl p-4 flex flex-col items-start gap-2 transition-all"
                        >
                            <div className="text-3xl"><img src="https://png.pngtree.com/png-clipart/20250416/original/pngtree-3d-cartoon-calculator-icon-isolated-on-a-transparent-background-png-image_20777508.png" alt="" /></div>
                            <span className="text-sm font-medium text-gray-800 leading-tight">
                                İpoteka hesabla
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Xidmətlər */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-base font-bold text-gray-800 mb-4">Xidmətlər</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href="https://birmenzil.az/rieltorlar"
                            className="group bg-[#eef6fd] hover:bg-[#ddeefa] rounded-xl p-4 flex flex-col items-start gap-2 transition-all"
                        >
                            <div className="text-3xl"><img src="https://static.vecteezy.com/system/resources/thumbnails/060/686/457/small/extraordinary-geometric-crisp-edges-outlining-a-pair-of-scissors-flat-color-clean-lines-with-scalable-design-4k-png.png" alt="" /></div>
                            <span className="text-sm font-medium text-gray-800 leading-tight">
                                Rieltor axtarın
                            </span>
                        </Link>
                        <Link
                            href="https://birmenzil.az/emlak-qiymetlendirmesi"
                            className="group bg-[#eef6fd] hover:bg-[#ddeefa] rounded-xl p-4 flex flex-col items-start gap-2 transition-all"
                        >
                            <div className="text-3xl"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/property-investment-3d-icon-png-download-10330777.png" alt="" /></div>
                            <span className="text-sm font-medium text-gray-800 leading-tight">
                                Əmlakınızı qiymətləndirin
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Row - İpoteka + Əməkdaşlıq */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* İpoteka */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-5">
                    <div className="text-5xl flex-shrink-0"><img src="https://birmenzil.az/_next/image?url=%2Fassets%2Ficons%2Fadvertisement.png&w=256&q=75" alt="" /></div>
                    <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                            İpoteka təkliflərinə bax
                        </h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Müxtəlif bankların təklif etdiyi ipoteka şərtlərinə ətraflı bax
                        </p>
                        <Link
                            href="https://birmenzil.az/ipoteka"
                            className="inline-flex items-center gap-2 bg-[#1a8fe3] hover:bg-[#1679c4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm"
                        >
                            Ətraflı
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Əməkdaşlıq */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-5">
                    <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                            Əməkdaşlıq üçün buradayıq!
                        </h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Agentliklər, investorlar, rieltorlar və reklam imkanları
                            haqqında ətraflı məlumat üçün buraya daxil olun.
                        </p>
                        <Link
                            href="https://birmenzil.az/emekdasliq"
                            className="inline-flex items-center gap-2 bg-[#1a8fe3] hover:bg-[#1679c4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm"
                        >
                            Ətraflı
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className="text-5xl flex-shrink-0"><img src="https://birmenzil.az/_next/image?url=%2Fassets%2Ficons%2Fmortgage-eligible.png&w=256&q=75" alt="" /></div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default PromoSection;