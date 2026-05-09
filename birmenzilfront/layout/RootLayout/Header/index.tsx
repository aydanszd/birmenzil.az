"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    BarChart2,
    Handshake,
    Map,
    Scale,
    Heart,
    Plus,
    Menu,
    X,
    CreditCard,
} from "lucide-react";

const topLinks = [
    { label: "Əmlakını qiymətləndir", icon: MapPin },
    { label: "Statistika", icon: BarChart2 },
    { label: "Əməkdaşlıq", icon: Handshake },
];

const navLinks = [
    { label: "Satılır", href: "/satilir" },
    { label: "Kirayə", href: "/kiraye" },
    { label: "Otaq yoldaşı", href: "/otaq-yoldasi" },
    { label: "Fürsətlər", href: "/fursatlar" },
    { label: "İpoteka", href: "/ipoteka" },
    { label: "Qiymət xəritəsi", href: "/qiymet-xeritesi" },
    { label: "Agentliklər", href: "/agentlikler" },
    { label: "Rieltorlar", href: "/rieltorlar" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md mt-2">
            <div className="border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-10">
                    <div className="hidden md:flex items-center gap-5">
                        {topLinks.map(({ label, icon: Icon }) => (
                            <Link key={label} href="#" className="flex items-center gap-1 text-sm text-gray-600 transition-colors font-medium">
                                <Icon size={14} />
                                {label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <button className="flex items-center gap-2 rounded-[6px] border border-gray-200 p-[6px] bg-[#F2F2F7]" aria-label="Xəritə">
                            <Map className="text-gray-600" size={22} />
                        </button>
                        <button className="flex items-center gap-2 rounded-[6px] border border-gray-200 p-[6px] bg-[#F2F2F7]" aria-label="Müqayisə">
                            <Scale className="text-gray-600" size={22} />
                        </button>
                        <button className="flex items-center gap-2 rounded-[6px] border border-gray-200 p-[6px] bg-[#F2F2F7]" aria-label="Seçilmişlər">
                            <Heart className="text-gray-600" size={22} />
                        </button>
                        <button className="flex items-center gap-2 rounded-[6px] border border-gray-200 p-[6px] bg-[#F2F2F7]" aria-label="Əlavə et">
                            <CreditCard className="text-gray-600" size={22} />
                        </button>
                        <Link
                            href="#"
                            className="flex items-center gap-1.5 p-[10px] bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            <Plus size={15} />
                            Elan yarat
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center h-14 gap-8">
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Image
                            src="https://birmenzil.az/assets/images/logo.svg"
                            alt="BirMənzil Logo"
                            width={120}
                            height={102}
                            className="rounded-lg"
                        />
                    </Link>
                    <nav className="hidden lg:flex items-center gap-1 flex-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors whitespace-nowrap font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <button
                        className="lg:hidden ml-auto p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menyu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white">
                        <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-gray-100 mt-2 pt-2 flex flex-col gap-1">
                                {topLinks.map(({ label, icon: Icon }) => (
                                    <Link
                                        key={label}
                                        href="#"
                                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-50 rounded-md transition-colors"
                                    >
                                        <Icon size={14} />
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}