"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
    const [query, setQuery] = useState("");

    return (
        <footer className="w-full bg-white font-sans max-w-7xl mx-auto">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Menyu */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">Menyu</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Ana səhifə", href: "/" },
                                { label: "Haqqımızda", href: "/haqqimizda" },
                                { label: "Əməkdaşlıq", href: "/emekdasliq" },
                                { label: "Əlaqə", href: "/elaqe" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-500 hover:text-[#1a8fe3] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Dəstək */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">Dəstək</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Tez-tez verilən suallar", href: "/faq" },
                                { label: "Reklam yerləşdirin", href: "/reklam-yerlesdir" },
                                { label: "Şərtlər və qaydalar", href: "/sertler" },
                                { label: "Gizlilik siyasəti", href: "/gizlilik" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-500 hover:text-[#1a8fe3] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Xidmətlər */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4">Xidmətlər</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Əmlak qiymətləndir", href: "/emlak-qiymetlendirmesi" },
                                { label: "Statistika", href: "/statistika" },
                                { label: "Ev satışı", href: "/baki/satilir" },
                                { label: "Ev kirayəsi", href: "/baki/kiraye" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-500 hover:text-[#1a8fe3] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AI Axtarış */}
                    <div>
                        <div className="border border-gray-200 rounded-2xl p-5 w-[400px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-15 h-15 flex-shrink-0">
                                    <img
                                        src="https://play-lh.googleusercontent.com/vzQiLtqFTmOrAHNOywBR-62YoOb3u30CPKX_dXJ5AEYV0i33fOeF1x6s1DcUU3U7suyN0O-NXOOI7D1O-pb4-w=w240-h480-rw"
                                        alt="AI Robot"
                                        width={60}
                                        height={60}
                                        className="w-15 h-15 object-contain"
                                    />
                                </div>
                                <h4 className="text-sm font-semibold text-gray-900">
                                    <span className="text-[#1a8fe3]">Süni intellekt</span> ilə axtarış
                                </h4>
                            </div>
                            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                Süni intellekt köməkçimizə sual verin və ya axtarış edin, o
                                sizə ən uyğun elanları tapmaqda kömək edəcək.
                            </p>
                            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 focus-within:border-[#1a8fe3] transition-colors">
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Nə axtarırsınız?"
                                    className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                                />
                                <button
                                    className="w-8 h-8 bg-[#1a8fe3] hover:bg-[#1679c4] rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                                    onClick={() => {
                                        if (query.trim()) {
                                            window.location.href = `/ai-axtaris?q=${encodeURIComponent(query)}`;
                                        }
                                    }}
                                >
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/">
                    <img
                        src="https://birmenzil.az/assets/images/logo.svg"
                        alt="Birmənzil"
                        width={120}
                        height={30}
                        className="h-6 w-auto object-contain"
                    />
                </Link>

                {/* Contact */}
                <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
                    <a
                        href="tel:+994104579203"
                        className="flex items-center gap-1.5 hover:text-[#1a8fe3] transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +994 10 457 92 03
                    </a>
                    <a
                        href="mailto:info@birmenzil.az"
                        className="flex items-center gap-1.5 hover:text-[#1a8fe3] transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        info@birmenzil.az
                    </a>
                    <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Nizami 135B, Bakı, Azərbaycan
                    </span>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                    {[
                        { href: "https://birmenzil.az/assets/icons/social/tiktok.svg", label: "TikTok", src: "https://birmenzil.az/assets/icons/social/tiktok.svg" },
                        { href: "https://birmenzil.az/assets/icons/social/instagram.svg", label: "Instagram", src: "https://birmenzil.az/assets/icons/social/instagram.svg" },
                        { href: "https://birmenzil.az/assets/icons/social/linkedln.svg", label: "LinkedIn", src: "https://birmenzil.az/assets/icons/social/linkedln.svg" },
                        { href: "https://facebook.com", label: "Facebook", src: "https://birmenzil.az/assets/icons/social/facebook.svg" },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-9 h-9 rounded-xl overflow-hidden hover:opacity-85 transition-opacity flex-shrink-0"
                        >
                            <img
                                src={social.src}
                                alt={social.label}
                                width={36}
                                height={36}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
                © 2026 Birmənzil. Bütün hüquqlar qorunur.
            </div>
        </footer>
    );
};

export default Footer;