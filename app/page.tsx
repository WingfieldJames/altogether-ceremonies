import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Weddings",
    description:
      "A ceremony that truly reflects who you are as a couple — your story, your words, your perfect day.",
    image: "/images/jane-9.jpg",
    href: "/services#weddings",
  },
  {
    title: "Funerals & Memorials",
    description:
      "A deeply personal tribute that honours a life lived, bringing comfort and meaning to those who grieve.",
    image: "/images/jane-7.jpg",
    href: "/services#funerals",
  },
  {
    title: "Naming Ceremonies",
    description:
      "A beautiful way to welcome a new life into your family and community, surrounded by those who love them.",
    image: "/images/jane-10.jpg",
    href: "/services#naming",
  },
  {
    title: "Vow Renewals",
    description:
      "Celebrate your journey together and reaffirm your commitment in a ceremony as meaningful as your first.",
    image: "/images/jane-11.jpg",
    href: "/services#vow-renewals",
  },
  {
    title: "Other Celebrations",
    description:
      "Life is full of moments worth marking — anniversaries, retirements, coming-of-age, and more.",
    image: "/images/jane-6.jpg",
    href: "/services#other",
  },
];

const testimonials = [
  {
    quote:
      "Jane created the most beautiful ceremony for us. Every word felt like it was written just for our relationship.",
    name: "Sophie & Tom",
    type: "Wedding",
  },
  {
    quote:
      "She guided us through a really difficult time with such warmth and grace. The service was perfect for Mum.",
    name: "The Harrison Family",
    type: "Funeral",
  },
  {
    quote:
      "Our naming day was magical — friends and family still talk about how special it felt. Jane is wonderful.",
    name: "Laura & James",
    type: "Naming Ceremony",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="flex flex-col md:flex-row min-h-screen pt-16 md:pt-20">
        {/* Text — bottom on mobile, left on desktop */}
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

        {/* Photo — top on mobile, right on desktop */}
        <div className="relative w-full md:w-1/2 aspect-[3/2] md:aspect-auto order-1 md:order-2">
          <Image
            src="/images/jane-5.jpg"
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
                  src="/images/jane-8.jpg"
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
                people at its heart — not a template, but a genuine reflection
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
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-xl text-[#2C2826] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#6B6460] leading-relaxed flex-1">
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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
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
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-[#7A9E80] font-medium hover:text-[#587060] transition-colors"
            >
              Read more testimonials
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-24 bg-[#587060]">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-[#C4A05C] text-sm uppercase tracking-[0.2em] font-medium mb-4">
              Let&rsquo;s begin
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-snug">
              Ready to create something
              <br />
              truly special?
            </h2>
            <p className="text-white/75 text-lg max-w-lg mx-auto mb-10">
              Get in touch today for a free, no-obligation conversation about
              your ceremony. I&rsquo;d love to hear your story.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#C4A05C] text-white font-medium rounded-full hover:bg-[#A8854A] transition-colors"
            >
              Contact Jane
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
