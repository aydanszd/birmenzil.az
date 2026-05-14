"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Heart, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── Types ─────────────────────────────────────────────── */
interface Listing {
    id: number;
    images: string[];
    price: string;
    rooms: number;
    area: number;
    floor: number;
    totalFloors: number;
    metro: string;
    walkMin: number;
    city: string;
    date: string;
    isPremium?: boolean;
    isUrgent?: boolean;
}

/* ─── Mock data ──────────────────────────────────────────── */
const listings: Listing[] = [
    {
        id: 1,
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
        ],
        price: "227,000 AZN",
        rooms: 3,
        area: 72,
        floor: 2,
        totalFloors: 9,
        metro: "Xalqlar m.s",
        walkMin: 3,
        city: "Bakı",
        date: "bugün 06:00",
        isPremium: true,
        isUrgent: true,
    },
    {
        id: 2,
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
        ],
        price: "535,000 AZN",
        rooms: 3,
        area: 160,
        floor: 12,
        totalFloors: 18,
        metro: "28 May m.s",
        walkMin: 8,
        city: "Bakı",
        date: "bugün 06:00",
        isPremium: true,
        isUrgent: true,
    },
    {
        id: 3,
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
            "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
        ],
        price: "218,000 AZN",
        rooms: 2,
        area: 63,
        floor: 10,
        totalFloors: 16,
        metro: "Q.Qarayev m.s",
        walkMin: 5,
        city: "Bakı",
        date: "bugün 06:00",
        isPremium: true,
        isUrgent: true,
    },
    {
        id: 4,
        images: [
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
            "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&q=80",
        ],
        price: "267,000 AZN",
        rooms: 3,
        area: 87,
        floor: 5,
        totalFloors: 15,
        metro: "Neftçilər m.s",
        walkMin: 4,
        city: "Bakı",
        date: "bugün 06:00",
        isPremium: true,
        isUrgent: true,
    },
];

/* ─── Metro Icon ─────────────────────────────────────────── */
function MetroIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
            <path
                d="M2 18L6 6l6 8 6-8 4 12"
                stroke="#FF6B00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/* ─── Listing Card ───────────────────────────────────────── */
function ListingCard({ listing }: { listing: Listing }) {
    const [liked, setLiked] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    // Subscribe to embla select event
    const onEmblaInit = useCallback(
        (api: NonNullable<typeof emblaApi>) => {
            api.on("select", onSelect);
        },
        [onSelect]
    );

    // Pass init callback via ref workaround
    const setEmblaRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (node && emblaApi) {
                onEmblaInit(emblaApi);
            }
        },
        [emblaApi, onEmblaInit]
    );

    const scrollPrev = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            emblaApi?.scrollPrev();
        },
        [emblaApi]
    );

    const scrollNext = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            emblaApi?.scrollNext();
        },
        [emblaApi]
    );

    const scrollTo = useCallback(
        (e: React.MouseEvent, index: number) => {
            e.preventDefault();
            emblaApi?.scrollTo(index);
        },
        [emblaApi]
    );

    const total = listing.images.length;

    return (
        <div className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            {/* ── Embla Slider ── */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {/* Embla viewport */}
                <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full">
                        {listing.images.map((src, i) => (
                            <div
                                key={i}
                                className="relative flex-[0_0_100%] h-full min-w-0"
                            >
                                <img
                                    src={src}
                                    alt={`listing-${listing.id}-img-${i}`}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Prev / Next — visible on hover */}
                {total > 1 && (
                    <>
                        <button
                            onClick={scrollPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                            <ChevronLeft size={14} className="text-gray-700" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                            <ChevronRight size={14} className="text-gray-700" />
                        </button>
                    </>
                )}

                {/* Dot indicators */}
                {total > 1 && (
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1">
                        {listing.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => scrollTo(e, i)}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-200",
                                    i === selectedIndex
                                        ? "bg-white w-4"
                                        : "bg-white/55 w-1.5 hover:bg-white/80"
                                )}
                            />
                        ))}
                    </div>
                )}

                {/* Premium badge – top left */}
                {listing.isPremium && (
                    <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-md px-2 py-0.5 text-[10px] font-semibold text-blue-600 shadow-sm">
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Premium
                        </span>
                    </div>
                )}

                {/* Like – top right */}
                <button
                    onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
                    className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
                >
                    <Heart
                        size={13}
                        className={cn("transition-colors", liked ? "fill-red-500 text-red-500" : "text-gray-400")}
                    />
                </button>

                {/* Urgent badge – bottom right */}
                {listing.isUrgent && (
                    <div className="absolute bottom-2.5 right-2.5 z-10 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shadow">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* ── Card body ── */}
            <div className="p-3.5 flex flex-col gap-1.5">
                <p className="text-[17px] font-bold text-gray-900 leading-none">{listing.price}</p>

                <p className="text-xs text-gray-500">
                    {listing.rooms} otaqlı • {listing.area} m² • {listing.floor}/{listing.totalFloors} mərtəbə
                </p>

                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <MetroIcon />
                    <span>{listing.metro}</span>
                    <span className="text-gray-400">~{listing.walkMin} dəq. 🚶</span>
                </div>

                <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[11px] text-gray-400">
                        {listing.city}, {listing.date}
                    </span>
                    <button
                        onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
                        className="text-gray-300 hover:text-red-400 transition-colors"
                    >
                        <Heart
                            size={14}
                            className={cn(liked ? "fill-red-500 text-red-500" : "")}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─── Section ────────────────────────────────────────────── */
export default function PremiumListings() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl font-bold text-gray-900">Premium elanlar</h2>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-sm text-gray-500 hover:text-gray-900 gap-1.5 font-medium"
                    >
                        Daha çox <ArrowRight size={14} />
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {listings.map((l) => (
                        <ListingCard key={l.id} listing={l} />
                    ))}
                </div>
            </div>
        </section>
    );
}