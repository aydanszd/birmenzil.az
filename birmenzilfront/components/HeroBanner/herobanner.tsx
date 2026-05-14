"use client";

import { useState } from "react";
import { Search, Sparkles, SlidersHorizontal, Clock, LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const categories = [
    { img: "https://birmenzil.az/assets/icons/filter-navbar/close-to-me.svg", label: "Mənə yaxın" },
    { img: "https://birmenzil.az/assets/icons/bucket-home.svg", label: "Mənzil al" },
    { img: "https://birmenzil.az/assets/icons/rent.svg", label: "Kirayə" },
    { img: "https://birmenzil.az/_next/image?url=%2Fassets%2Ficons%2Fdaily-calendar.png&w=48&q=75", label: "Günlük" },
    { img: "https://birmenzil.az/assets/icons/filter-navbar/family.svg", label: "Ailə üçün" },
    { img: "https://birmenzil.az/_next/image?url=%2Fassets%2Ficons%2Froommate.png&w=48&q=75", label: "Tələbə dostu" },
    { img: "https://birmenzil.az/assets/icons/filter-navbar/urgent-on-sale.svg", label: "Təcili satılır" },
    { img: "https://birmenzil.az/assets/icons/rent.svg", label: "Hazır İpoteka" },
];

export default function BirmenzilSearch() {
    const [mode, setMode] = useState<"filter" | "ai">("filter");
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full max-w-7xl mt-10 mx-auto">
            {/* Mode Toggle */}
            <div className="flex items-center gap-2 mb-6">
                <Toggle
                    pressed={mode === "filter"}
                    onPressedChange={() => setMode("filter")}
                    className={cn(
                        "flex items-center gap-2 px-4 h-9 rounded-xl text-sm font-medium border transition-all",
                        mode === "filter"
                            ? "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    )}
                >
                    <SlidersHorizontal size={14} />
                    Filtrlər
                </Toggle>

                <Toggle
                    pressed={mode === "ai"}
                    onPressedChange={() => setMode("ai")}
                    className={cn(
                        "flex items-center gap-2 px-4 h-9 rounded-xl text-sm font-medium border transition-all",
                        mode === "ai"
                            ? "bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-50 hover:text-teal-600"
                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    )}
                >
                    <Sparkles size={14} />
                    Süni intellektlə axtarış
                </Toggle>
            </div>

            {/* Headline */}
            <h1 className="text-[32px] font-bold text-gray-900 mb-5 leading-snug">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-bold">
                    Birmənzil
                </span> ilə arzuladığın mənzili tap
            </h1>

            {/* Search Row */}
            <div className="flex items-stretch gap-2">
                {/* Property Type */}
                <Select defaultValue="sale-apartment">
                    <SelectTrigger className="w-[180px] py-[20px] rounded-[12px] border-gray-300 text-sm">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sale-apartment">Satılır, Mənzil</SelectItem>
                        <SelectItem value="sale-house">Satılır, Ev</SelectItem>
                        <SelectItem value="rent-apartment">Kirayə, Mənzil</SelectItem>
                        <SelectItem value="rent-house">Kirayə, Ev</SelectItem>
                        <SelectItem value="daily">Günlük kirayə</SelectItem>
                    </SelectContent>
                </Select>

                {/* Room Count */}
                <Select>
                    <SelectTrigger className="w-[130px] py-[20px] rounded-[12px] border-gray-300 text-sm text-gray-500">
                        <SelectValue placeholder="Otaq sayı" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1 otaqlı</SelectItem>
                        <SelectItem value="2">2 otaqlı</SelectItem>
                        <SelectItem value="3">3 otaqlı</SelectItem>
                        <SelectItem value="4">4 otaqlı</SelectItem>
                        <SelectItem value="5">5+ otaqlı</SelectItem>
                    </SelectContent>
                </Select>

                {/* Price */}
                <Select>
                    <SelectTrigger className="w-[120px] py-[20px] rounded-[12px] border-gray-300 text-sm text-gray-500">
                        <SelectValue placeholder="Qiymət" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0-50000">0 – 50,000 ₼</SelectItem>
                        <SelectItem value="50000-100000">50,000 – 100,000 ₼</SelectItem>
                        <SelectItem value="100000-200000">100,00０ – 20０,０００ ₼</SelectItem>
                        <SelectItem value="2０００００+">2００,０００+ ₼</SelectItem>
                    </SelectContent>
                </Select>

                {/* Location Search + History Popover */}
                <div className="flex-1">
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="relative cursor-text">
                                <Search
                                    size={15}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                                />
                                <Input
                                    placeholder="Məsələn: 28 May metrosu"
                                    className="h-11 pl-9 pr-36 rounded-xl border-gray-300 text-sm placeholder:text-gray-400"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                                    {["Metro", "Rayon", "Nişangah"].map((tag) => (
                                        <span key={tag} className="text-xs text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </PopoverTrigger>

                        <PopoverContent
                            align="start"
                            className="w-80 p-4 rounded-xl shadow-lg border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-gray-800">
                                    Axtarış tarixçəsi
                                </span>
                                <Clock size={15} className="text-gray-400" />
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                Axtarış tarixçəsini və yadda saxladığınız filtrləri görmək üçün hesabınıza daxil olun.
                            </p>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full gap-2 rounded-lg text-xs border-gray-200 text-gray-700 hover:bg-gray-50"
                            >
                                <LogIn size={13} />
                                Daxil ol
                            </Button>
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Search Button */}
                <Button className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold gap-2">
                    Axtar
                    <Search size={14} />
                </Button>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 mt-5 overflow-x-auto pb-1 gap-6">
                {categories.map(({ img, label }, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveCategory(i === activeCategory ? null : i)}
                        className={cn(
                            "flex flex-col items-center gap-1.5 px-[10px] py-[10px] rounded-xl border text-[11px] font-medium transition-all flex-shrink-0 min-w-[72px]",
                            activeCategory === i
                                ? "border-blue-600 bg-blue-50 text-blue-600"
                                : "border-gray-200 text-gray-600 hover:border-gray-200 hover:bg-white"
                        )}
                    >
                        <div
                            className={cn(
                                activeCategory === i ? "bg-blue-100" : "bg-white"
                            )}
                        >
                            {/* Replace src with your actual icon paths */}
                            <img
                                src={img}
                                alt={label}
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-center leading-tight">{label}</span>
                    </button>
                ))}
                <div className="w-[400px] text-[14px] border border-gray-200 bg-[#f3f4f6] p-3 rounded-[16px]">
                    <h1 className="text-gray-500">
                        Axtarış tarixçəsi
                    </h1>
                    <p className="">
                        Axtarış tarixçəsini və yadda saxladığınız filtrləri görmək üçün hesabınıza daxil olun.
                    </p>
                </div>
            </div>
        </div>
    );
}