import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Jane",
  description:
    "Learn about Jane Wingfield, an independent celebrant in Surrey who creates deeply personal ceremonies for weddings, funerals, naming ceremonies, and more.",
};

const qualifications = [
  "Trained celebrant with the Association of Professional Celebrants",
  "Fully insured and DBS checked",
  "Based in Surrey, serving the South East",
];

const values = [
  {
    title: "Personal",
    description:
      "I take time to truly understand you - your story, your relationships, what matters most. Every ceremony I write is unique to the people it celebrates.",
    icon: "♡",
  },
  {
    title: "Thoughtful",
    description:
      "I listen carefully and choose my words with care, crafting language that resonates and moves - never generic, always meaningful.",
    icon: "✦",
  },
  {
    title: "Supportive",
    description:
      "Planning a ceremony can be emotional. I'm here to guide you every step of the way, from our first conversation to the final word spoken.",
    icon: "◇",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-[#EDE8DC]/40 overflow-hidden">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-4">
              About
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#2C2826] leading-tight mb-6">
              Meet Jane Wingfield
            </h1>
            <p className="text-[#6B6460] text-lg max-w-2xl mx-auto leading-relaxed">
              Independent celebrant, storyteller, and keeper of life&rsquo;s
              most meaningful moments - based in Surrey, covering the South East.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Jane's story ──────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF8F3]">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <Image
                  src="/images/jane-18.jpg"
                  alt="Jane Wingfield, Celebrant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="mt-6 bg-[#587060] rounded-2xl p-6 text-white">
                <p className="font-serif text-lg italic leading-relaxed">
                  &ldquo;A ceremony is not just an event - it is a story told
                  aloud, with witnesses who care. I feel honoured to tell those
                  stories.&rdquo;
                </p>
                <p className="mt-3 text-sm text-white/70">- Jane Wingfield</p>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={100}>
                <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-4">
                  My Story
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#2C2826] mb-6 leading-snug">
                  A passion to create
                  <br />
                  meaningful moments
                </h2>
                <p className="text-[#6B6460] leading-relaxed mb-5">
                  For as long as I can remember, I have been drawn to the power
                  of words and the importance of ritual. When a friend asked me
                  to speak at her mother&rsquo;s funeral, something shifted. The
                  response from the family - the tears, the laughter, the
                  gratitude - made me realise how much a thoughtfully crafted
                  ceremony can mean.
                </p>
                <p className="text-[#6B6460] leading-relaxed mb-5">
                  I trained as a celebrant and began working with families and
                  couples across Surrey and the South East. What began as an
                  interest has grown into a practice built on deep listening,
                  careful words, and an unwavering commitment to honouring each
                  person&rsquo;s unique story.
                </p>
                <p className="text-[#6B6460] leading-relaxed mb-8">
                  I work across all ceremony types - from joyful wedding days to
                  the most tender farewell services - and I approach every single
                  one with the same care, creativity, and compassion.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h3 className="font-serif text-2xl text-[#2C2826] mb-5">
                  Qualifications &amp; Memberships
                </h3>
                <ul className="space-y-3">
                  {qualifications.map((q) => (
                    <li key={q} className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-full bg-[#7A9E80]/20 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7A9E80]" />
                      </span>
                      <span className="text-sm text-[#6B6460] leading-relaxed">
                        {q}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── My approach ───────────────────────────────────────── */}
      <section className="py-24 bg-[#EDE8DC]/40">
        <div className="container-max">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-3">
              My Approach
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2826]">
              How I work
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#EEF4EF] flex items-center justify-center text-xl mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-serif text-xl text-[#2C2826] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#6B6460] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF8F3]">
        <div className="container-max max-w-3xl">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-3">
              The Journey Together
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C2826]">
              What to expect
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              {
                step: "01",
                title: "Initial Conversation",
                desc: "We start with a relaxed, no-obligation chat - by phone, video, or in person. I want to hear about you and your hopes for the ceremony.",
              },
              {
                step: "02",
                title: "Getting to Know You",
                desc: "I'll ask questions, listen deeply, and gather the details that make your story unique. This is where the ceremony begins to take shape.",
              },
              {
                step: "03",
                title: "Crafting Your Ceremony",
                desc: "I write a ceremony that is entirely tailored to you, weaving in your words, your memories, and your wishes. You'll have the chance to review and refine.",
              },
              {
                step: "04",
                title: "The Day Itself",
                desc: "I arrive early, prepared and calm. I guide you through every moment, holding the space so you can be fully present for what matters most.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 80}>
                <div className="flex gap-8 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-[#7A9E80] flex items-center justify-center text-xs font-medium text-[#7A9E80] flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1 w-px bg-[#EDE8DC] mt-3 last:hidden" />
                  </div>
                  <div className="pb-2">
                    <h3 className="font-serif text-xl text-[#2C2826] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B6460] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#587060] text-center">
        <ScrollReveal>
          <div className="container-max">
            <h2 className="font-serif text-4xl text-white mb-4">
              Let&rsquo;s have a conversation
            </h2>
            <p className="text-white/75 mb-8 max-w-md mx-auto">
              I&rsquo;d love to hear about your ceremony and explore how we can
              create something truly special together.
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
