import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

type Service = {
  title: string;
  description: string;
  /** Omit for a text-only card. */
  image?: string;
  href: string;
  /** Optional Tailwind object-position utilities, for photos that need a custom crop. */
  objectPosition?: string;
};

const services: Service[] = [
  {
    title: "Weddings",
    description:
      "A ceremony that truly reflects who you are as a couple - your story, your words, your perfect day.",
    image: "/images/jane-22.jpg",
    href: "/services#weddings",
  },
  {
    title: "Funerals & Memorials",
    description:
      "A deeply personal tribute that honours a life lived, bringing comfort and meaning.",
    image: "/images/jane-7.jpg",
    href: "/services#funerals",
  },
  {
    title: "Naming Ceremonies",
    description:
      "A beautiful way to welcome a new life into your family and community, surrounded by those who love them.",
    image: "/images/jane-23.jpg",
    href: "/services#naming",
  },
  {
    title: "Vow Renewals",
    description:
      "Celebrate your journey together and reaffirm your commitment in a ceremony as meaningful as your first.",
    href: "/services#vow-renewals",
  },
  {
    title: "Other Celebrations",
    description:
      "Life is full of moments worth marking - anniversaries, retirements, coming-of-age, and more.",
    href: "/services#other",
  },
];

const testimonials = [
  {
    quote:
      "I just wanted to say thank you so much for everything. I smile every time I think about the ceremony you performed for us and how warm and wonderful it was. You made the whole ceremony feel so personal, relaxed and full of love, and it really was everything we could have hoped for. We honestly couldn't have asked for a lovelier person to be part of such an important moment for us. Sam and I always speak so warmly about you, and we both feel incredibly lucky that you were the one who married us.",
    name: "Sam & Spring",
    type: "Wedding, July 2026",
    span: "md:col-span-3 md:col-start-1",
    image: "/images/jane-29.jpg",
    imageAlt: "Jane arriving at a summer wedding venue",
    imageSide: "right" as const,
    imageSpan: "md:col-span-1 md:col-start-4",
  },
  {
    quote:
      "Jane is simply a wonderful person - kind, thoughtful, warm, and genuinely caring, with a natural ability to connect with others. She is someone you can trust to handle important moments with grace, sincerity, and professionalism. Jane is ideally suited to the role of a celebrant, and I have no doubt that she will leave a lasting, positive impression on all those she works with.",
    name: "Melany",
    type: "Colleague",
    span: "md:col-span-3 md:col-start-2",
    image: "/images/jane-25.jpg",
    imageAlt: "Jane talking with the photographer before a ceremony",
    imageSide: "left" as const,
    imageSpan: "md:col-span-1 md:col-start-1",
  },
];

// Candid photos from real ceremonies that don't already appear elsewhere on
// this page, shown as a collage beside the closing call to action.
// Deliberately mixed shapes and slight rotations so the group reads as a
// scattered set of prints rather than a tidy grid.
const ctaCollage = [
  { src: "/images/jane-24.jpg", alt: "Jane walking down the aisle at a garden ceremony", shape: "aspect-[3/4]", tilt: "-rotate-2" },
  { src: "/images/jane-22.jpg", alt: "A couple kissing at the end of their outdoor wedding ceremony", shape: "aspect-[4/3]", tilt: "rotate-1" },
  { src: "/images/jane-27.jpg", alt: "Jane walking towards the venue entrance", shape: "aspect-[4/5]", tilt: "rotate-2" },
  { src: "/images/jane-28.jpg", alt: "Jane handing a reading to a guest at an outdoor ceremony", shape: "aspect-[4/5]", tilt: "rotate-1" },
  { src: "/images/jane-26.jpg", alt: "Chairs set out on the lawn for an outdoor ceremony", shape: "aspect-[3/4]", tilt: "-rotate-1" },
  { src: "/images/jane-23.jpg", alt: "Jane planning a ceremony with a client", shape: "aspect-[4/3]", tilt: "-rotate-2" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="flex flex-col md:flex-row min-h-screen pt-16 md:pt-20">
        {/* Text - bottom on mobile, left on desktop */}
        <div className="flex-1 bg-[#FAF8F3] flex items-center justify-center px-8 md:px-14 lg:px-20 py-16 md:py-0 order-2 md:order-1">
          <div className="max-w-lg w-full">
            <p className="text-[#C4A05C] text-xs uppercase tracking-[0.25em] font-medium mb-6">
              Jane Wingfield &mdash; Celebrant
            </p>
            <h1 className="font-serif text-5xl md:text-5xl lg:text-6xl text-[#2C2826] leading-tight mb-6">
              Ceremonies as unique as you are
            </h1>
            <p className="text-[#6B6460] text-lg leading-relaxed mb-10">
              Creating heartfelt, personal celebrations for life&rsquo;s most
              meaningful moments across Surrey and the South East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#7A9E80] text-white font-medium rounded-full hover:bg-[#587060] transition-colors text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-[#2C2826]/20 text-[#2C2826] font-medium rounded-full hover:bg-[#EDE8DC] transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Photo - top on mobile, right on desktop */}
        <div className="relative w-full md:w-1/2 aspect-[3/2] md:aspect-auto order-1 md:order-2">
          <Image
            src="/images/jane-15.jpg"
            alt="Jane Wingfield, Celebrant"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF8F3]">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                <Image
                  src="/images/jane-5.jpg"
                  alt="Jane Wingfield, Celebrant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-4">
                About Jane
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2C2826] leading-snug mb-6">
                Your story,
                <br />
                beautifully told
              </h2>
              <p className="text-[#6B6460] leading-relaxed mb-5">
                I&rsquo;m Jane Wingfield, an independent celebrant based in
                Surrey. I believe every ceremony should be as individual as the
                people at its heart - not a template, but a genuine reflection
                of your values, your relationships, and the moments that define
                you.
              </p>
              <p className="text-[#6B6460] leading-relaxed mb-8">
                Whether you&rsquo;re planning a wedding, welcoming a new life,
                saying a final farewell, or simply marking a moment that
                matters, I&rsquo;ll work closely with you to craft a ceremony
                that feels entirely, unmistakably yours.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#7A9E80] font-medium hover:text-[#587060] transition-colors"
              >
                Read Jane&rsquo;s story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#EDE8DC]/40">
        <div className="container-max">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-3">
              What I Offer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2826]">
              Every occasion deserves ceremony
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <Link href={service.href} className="group block h-full">
                  <div
                    className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col ${
                      service.image ? "bg-white" : "bg-[#EEF4EF]"
                    }`}
                  >
                    {service.image && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className={`object-cover group-hover:scale-105 transition-transform duration-500${service.objectPosition ? ` ${service.objectPosition}` : ""}`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div
                      className={`p-6 flex flex-col flex-1 ${
                        service.image ? "" : "justify-center p-8"
                      }`}
                    >
                      <h3
                        className={`font-serif text-[#2C2826] mb-3 ${
                          service.image ? "text-xl" : "text-2xl"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm text-[#6B6460] leading-relaxed ${
                          service.image ? "flex-1" : ""
                        }`}
                      >
                        {service.description}
                      </p>
                      <p className="mt-4 text-sm text-[#7A9E80] font-medium group-hover:text-[#587060] transition-colors flex items-center gap-1">
                        Find out more
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials preview ──────────────────────────────── */}
      <section className="py-24 bg-[#FAF8F3]">
        <div className="container-max">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-3">
              Kind Words
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2826]">
              What families say
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {testimonials.map((t, i) => {
              const quote = (
                <ScrollReveal key={`${t.name}-quote`} delay={i * 100} className={t.span}>
                  <div className="bg-[#EDE8DC]/40 rounded-2xl p-8 h-full flex flex-col">
                    <svg
                      className="w-8 h-8 text-[#C4A05C] mb-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.333C7.333 11.791 8.791 10 11 10L10 8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.667C21.333 11.791 22.791 10 25 10L24 8z" />
                    </svg>
                    <p className="text-[#2C2826] leading-relaxed italic flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#EDE8DC]">
                      <p className="font-medium text-[#2C2826] text-sm">{t.name}</p>
                      <p className="text-xs text-[#7A9E80] mt-0.5">{t.type}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );

              const photo = (
                <ScrollReveal key={`${t.name}-photo`} delay={i * 100 + 80} className={t.imageSpan}>
                  <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={t.image}
                      alt={t.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </ScrollReveal>
              );

              // Emit in visual order - grid auto-placement only moves forward,
              // so the left-hand item has to come first.
              return t.imageSide === "left" ? [photo, quote] : [quote, photo];
            })}
          </div>

        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-24 bg-[#587060]">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <ScrollReveal className="text-center md:text-left">
              <p className="text-[#C4A05C] text-sm uppercase tracking-[0.2em] font-medium mb-4">
                Let&rsquo;s begin
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-snug">
                Ready to create something truly special?
              </h2>
              <p className="text-white/75 text-lg max-w-lg mx-auto md:mx-0 mb-10">
                Get in touch today for a free, no-obligation conversation about
                your ceremony. I&rsquo;d love to hear your story.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-10 py-4 bg-[#C4A05C] text-white font-medium rounded-full hover:bg-[#A8854A] transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Get in touch by WhatsApp
              </Link>
            </ScrollReveal>

            {/* Collage */}
            <ScrollReveal delay={150}>
              <div className="columns-2 gap-5 px-2">
                {ctaCollage.map((img) => (
                  <div
                    key={img.src}
                    className={`relative ${img.shape} ${img.tilt} mb-5 break-inside-avoid rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:rotate-0`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 22vw"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
