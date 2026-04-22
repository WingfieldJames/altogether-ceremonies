"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const images = [
  { src: "/images/jane-12.jpg", alt: "Jane Wingfield at an outdoor ceremony", caption: "Ready for the ceremony", w: 600, h: 800 },
  { src: "/images/jane-9.jpg",  alt: "Jane performing a ceremony with flowers", caption: "Celebrating love", w: 600, h: 800 },
  { src: "/images/jane-1.jpg",  alt: "Jane Wingfield, Celebrant", caption: "altogetherceremonies", w: 600, h: 800 },
  { src: "/images/jane-11.jpg", alt: "Jane at an elegant stone venue entrance", caption: "A beautiful setting", w: 600, h: 800 },
  { src: "/images/jane-2.jpg",  alt: "Jane Wingfield, Celebrant", caption: "altogetherceremonies", w: 600, h: 800 },
  { src: "/images/jane-20.jpg",  alt: "Jane Wingfield, Celebrant portrait", caption: "Jane Wingfield, Celebrant", w: 600, h: 750 },
  { src: "/images/jane-3.jpg",  alt: "Jane Wingfield, Celebrant", caption: "altogetherceremonies", w: 600, h: 800 },
  { src: "/images/jane-10.jpg", alt: "Jane arriving at a venue", caption: "Arriving at the venue", w: 600, h: 800 },
  { src: "/images/jane-21.jpg",  alt: "Jane Wingfield, Celebrant", caption: "altogetherceremonies", w: 600, h: 800 },
  { src: "/images/jane-7.jpg",  alt: "Jane at Guildford Crematorium", caption: "A moment of quiet dignity", w: 800, h: 600 },
  { src: "/images/jane-5.jpg",  alt: "Jane Wingfield, Celebrant", caption: "altogetherceremonies", w: 600, h: 800 },
  { src: "/images/jane-6.jpg",  alt: "Jane Wingfield, Celebrant", caption: "altogetherceremonies", w: 600, h: 800 },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = useCallback((i: number) => setLightbox(i), []);
  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() =>
    setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null)), []);
  const next = useCallback(() =>
    setLightbox((i) => (i !== null ? (i + 1) % images.length : null)), []);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 bg-[#EDE8DC]/40">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-4">
              Gallery
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#2C2826] leading-tight mb-6">
              Moments of Joy
            </h1>
            <p className="text-[#6B6460] text-lg max-w-2xl mx-auto leading-relaxed">
              Each ceremony a story, each one utterly unique. I&rsquo;ll prepare and plan so you can remember.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Grid ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="container-max">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <ScrollReveal key={img.src} delay={(i % 3) * 60} className="break-inside-avoid">
                <button
                  onClick={() => open(i)}
                  className="group block w-full overflow-hidden rounded-xl relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A9E80]"
                  aria-label={`View image: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#2C2826]/0 group-hover:bg-[#2C2826]/30 transition-colors duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {img.caption}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note ──────────────────────────────────────────────── */}
      <section className="py-12 bg-[#EDE8DC]/40">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-sm text-[#9A9590] italic">
              Photography by altogetherceremonies. More images coming soon.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center py-4">
              <p className="text-white/80 text-sm">{images[lightbox].caption}</p>
              <p className="text-white/40 text-xs mt-1">
                {lightbox + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
