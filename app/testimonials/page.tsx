import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what families and couples say about their experience with Jane Wingfield of altogetherceremonies — celebrant in Surrey.",
};

const testimonials = [
  {
    quote:
      "Jane created the most beautiful wedding ceremony we could have imagined. Every word felt personal — like she had known us for years. Our guests were in tears before we'd even exchanged rings.",
    name: "Sophie & Tom R.",
    type: "Wedding",
    location: "Surrey",
  },
  {
    quote:
      "When we lost Mum, we didn't know how to begin. Jane guided us through the whole process with such gentleness and care. The service was everything Mum would have wanted. We will be forever grateful.",
    name: "The Harrison Family",
    type: "Funeral",
    location: "Sussex",
  },
  {
    quote:
      "Our naming day for little Eloise was just perfect. Jane's warmth filled the room and her words were so beautifully chosen. Our friends and family still talk about how special the day felt.",
    name: "Laura & James M.",
    type: "Naming Ceremony",
    location: "Surrey",
  },
  {
    quote:
      "We renewed our vows on our 25th anniversary and wanted something more than just a party. Jane helped us reflect on our life together and created vows that made us fall in love all over again.",
    name: "Diane & Peter S.",
    type: "Vow Renewal",
    location: "Hampshire",
  },
  {
    quote:
      "I had no idea what to expect from a celebrant-led wedding. By the end of our first meeting with Jane, I knew it was the best decision we ever made. She is warm, professional, and so talented.",
    name: "Amelia & George T.",
    type: "Wedding",
    location: "Kent",
  },
  {
    quote:
      "Dad's ceremony was handled with such incredible sensitivity. Jane listened to every story, every detail, and reflected him so faithfully. It was a true celebration of his life.",
    name: "The Williams Family",
    type: "Funeral",
    location: "Surrey",
  },
  {
    quote:
      "We weren't sure about having a celebrant for our son's naming day — we thought it might feel too formal. It was the complete opposite. Jane made it feel intimate, joyful, and deeply meaningful.",
    name: "Rachel & Ben K.",
    type: "Naming Ceremony",
    location: "Surrey",
  },
  {
    quote:
      "I cannot recommend Jane highly enough. She has a rare ability to hold space for both joy and grief, and to find exactly the right words for whatever the moment calls for. Truly exceptional.",
    name: "Charlotte M.",
    type: "Memorial Service",
    location: "West Sussex",
  },
  {
    quote:
      "Our ceremony was outdoors in the garden, totally non-traditional, and Jane embraced our vision completely. She brought it to life in a way that exceeded everything we had hoped for.",
    name: "Priya & Daniel O.",
    type: "Wedding",
    location: "Surrey",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 bg-[#EDE8DC]/40">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-4">
              Kind Words
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#2C2826] leading-tight mb-6">
              Testimonials
            </h1>
            <p className="text-[#6B6460] text-lg max-w-2xl mx-auto leading-relaxed">
              Hearing from families and couples is the greatest privilege of
              this work. Here is what some of them have shared.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials grid ─────────────────────────────────── */}
      <section className="py-24 bg-[#FAF8F3]">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 3) * 80}>
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <svg
                    className="w-8 h-8 text-[#C4A05C] mb-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.333C7.333 11.791 8.791 10 11 10L10 8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.667C21.333 11.791 22.791 10 25 10L24 8z" />
                  </svg>

                  <p className="text-[#2C2826] leading-relaxed italic flex-1 text-[0.95rem]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#EDE8DC] flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-[#2C2826] text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-[#9A9590] mt-0.5">
                        {t.location}
                      </p>
                    </div>
                    <span className="flex-shrink-0 px-3 py-1 bg-[#EEF4EF] text-[#587060] text-xs font-medium rounded-full">
                      {t.type}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note on reviews ───────────────────────────────────── */}
      <section className="py-16 bg-[#EDE8DC]/40">
        <div className="container-max max-w-2xl text-center">
          <ScrollReveal>
            <p className="text-[#6B6460] text-sm leading-relaxed italic">
              &ldquo;Every ceremony I create is unique, and every family I work
              with teaches me something new. I am grateful beyond words for the
              trust placed in me at life&rsquo;s most important moments.&rdquo;
            </p>
            <p className="mt-4 text-sm text-[#7A9E80] font-medium">
              — Jane Wingfield
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#587060] text-center">
        <ScrollReveal>
          <div className="container-max">
            <h2 className="font-serif text-4xl text-white mb-4">
              Ready to create your own story?
            </h2>
            <p className="text-white/75 mb-8 max-w-md mx-auto">
              I&rsquo;d love to hear about your ceremony and explore how we can
              create something truly memorable.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#C4A05C] text-white font-medium rounded-full hover:bg-[#A8854A] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
