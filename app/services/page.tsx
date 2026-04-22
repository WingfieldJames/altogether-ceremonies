import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bespoke ceremonies for every occasion — weddings, funerals, naming ceremonies, vow renewals, and more. Jane Wingfield, celebrant in Surrey.",
};

const services = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Your love story, told your way",
    description: [
      "Your wedding ceremony is the heart of your wedding day — the part that guests will remember long after the music has faded and the cake has been eaten. I believe your ceremony should be a true reflection of your relationship: your shared history, your values, your sense of humour, and your vision for the future.",
      "As a fully qualified, independent celebrant, I can conduct your ceremony anywhere you choose — a barn, a beach, a beloved garden, or anywhere really special to you. I'll guide you through every stage of planning, from our first meeting to the final rehearsal.",
      "Whether you want a deeply heartfelt ceremony filled with poetry and personal vows, or something more relaxed and informal with a touch of humour, I will craft something that feels entirely, unmistakably you.",
    ],
    includes: [
      "Free initial consultation",
      "Two planning meetings (in person or video call)",
      "Fully bespoke ceremony script",
      "Rehearsal on the day or prior",
      "Choice of readings, music cues, and rituals",
      "Personalised vow guidance",
      "Keepsake copy of your ceremony",
    ],
    image: "/images/jane-13.jpg",
    aspect: "aspect-[2/3]",
    accent: "#7A9E80",
  },
  {
    id: "funerals",
    title: "Funerals & Memorial Services",
    subtitle: "A farewell as unique as the life lived",
    description: [
      "Saying goodbye to someone we love is one of the hardest things we do. A funeral or memorial service is a chance to celebrate a remarkable life, to bring comfort to those who grieve, and to create a shared space for remembrance.",
      "I work with families at what is often an incredibly difficult time, listening carefully and moving gently. Together we will gather the stories, the memories, and the details that made your loved one who they were — and I will weave them into a tribute that truly honours them.",
      "I can incorporate readings, music, and personal rituals that reflect the beliefs and character of the person being celebrated.",
    ],
    includes: [
      "Compassionate, unhurried consultation",
      "Fully personalised tribute script",
      "Coordination with funeral directors",
      "Support for family participation",
      "Choice of readings, poems, and music",
      "Burial or cremation ceremonies",
      "Memorial services and scattering of ashes ceremonies",
    ],
    image: "/images/jane-14.jpg",
    aspect: "aspect-[2/3]",
    accent: "#6B6460",
  },
  {
    id: "naming",
    title: "Naming Ceremonies",
    subtitle: "Welcoming a new light into the world",
    description: [
      "A naming ceremony is a beautiful, inclusive way to formally welcome a child into your family and community — whether you are religious or not, and regardless of your family structure or background.",
      "It's a chance to introduce your child to the people who will love and support them throughout their life, to name any guide parents or mentors you have chosen, and to make promises about the upbringing you will provide.",
      "I'll create a warm and joyful ceremony that celebrates this new arrival and marks the beginning of their story — with personal vows, chosen readings, and any symbolic rituals that feel meaningful to your family.",
    ],
    includes: [
      "Consultation to learn your family's story",
      "Fully bespoke ceremony script",
      "Guide parent vows and readings",
      "Symbolic rituals (candle lighting, planting, etc.)",
      "Welcoming promises from family and friends",
      "Keepsake certificate",
    ],
    image: "/images/jane-3.jpg",
    objectPosition: "50% 20%",
    accent: "#C4A05C",
  },
  {
    id: "vow-renewals",
    title: "Vow Renewals",
    subtitle: "Celebrating the journey so far",
    description: [
      "A vow renewal is a deeply moving way to celebrate how far you have come together — to look back on the years shared and forward to those still ahead. Whether you are marking a milestone anniversary, celebrating after a period of difficulty, or simply wanting to reaffirm your love surrounded by family and friends, a vow renewal ceremony can be as intimate or as grand as you wish.",
      "I'll help you reflect on your journey together and craft new vows that speak to who you are now, and all you've become. It's a chance to celebrate your story with fresh eyes.",
    ],
    includes: [
      "Consultation to revisit your story",
      "Updated, personalised vows",
      "Choice of readings and rituals",
      "Flexible format — intimate or celebratory",
      "Any location of your choosing",
      "Keepsake copy of your ceremony",
    ],
    image: "/images/jane-11.jpg",
    accent: "#7A9E80",
  },
  {
    id: "other",
    title: "Other Celebrations",
    subtitle: "Life is full of moments worth marking",
    description: [
      "Not every meaningful moment fits neatly into a category. Life is full of milestones that deserve recognition — a significant birthday, a retirement after a long career, a coming-of-age moment, a scattering of ashes, or a blessing for a new home.",
      "If there is a moment in your life that feels significant and you would like to mark it with intention and ceremony, I would love to help. Get in touch and tell me what you have in mind — I'm always open to creating something new.",
    ],
    includes: [
      "Milestone birthdays (50th, 60th, 70th, 80th…)",
      "Retirement celebrations",
      "Coming-of-age ceremonies",
      "Scattering of ashes",
      "Blessing ceremonies",
      "New home blessings",
    ],
    image: "/images/jane-6.jpg",
    accent: "#C4A05C",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 bg-[#EDE8DC]/40">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-4">
              What I Offer
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#2C2826] leading-tight mb-6">
              Services
            </h1>
            <p className="text-[#6B6460] text-lg max-w-2xl mx-auto leading-relaxed">
              From your wedding day to a final farewell — every ceremony is
              planned with care, crafted with love, and delivered with warmth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service sections ──────────────────────────────────── */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-[#FAF8F3]" : "bg-[#EDE8DC]/40"}`}
        >
          <div className="container-max">
            <div
              className={`grid md:grid-cols-2 gap-14 items-center ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <ScrollReveal>
                <div className={`relative rounded-2xl overflow-hidden shadow-lg ${service.aspect ?? "aspect-[4/3]"}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    style={service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal delay={150}>
                <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-3">
                  {service.subtitle}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-[#2C2826] mb-6">
                  {service.title}
                </h2>
                {service.description.map((para, i) => (
                  <p
                    key={i}
                    className="text-[#6B6460] leading-relaxed mb-4 text-[0.95rem]"
                  >
                    {para}
                  </p>
                ))}

                <div className="mt-8 p-6 bg-[#EEF4EF] rounded-xl">
                  <p className="text-xs uppercase tracking-widest text-[#587060] font-medium mb-4">
                    What&rsquo;s included
                  </p>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-[#2C2826]">
                        <span className="w-4 h-4 rounded-full bg-[#7A9E80] flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block px-7 py-3.5 bg-[#7A9E80] text-white font-medium rounded-full hover:bg-[#587060] transition-colors text-sm"
                  >
                    Enquire about {service.title}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#587060] text-center">
        <ScrollReveal>
          <div className="container-max">
            <h2 className="font-serif text-4xl text-white mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-white/75 mb-8 max-w-md mx-auto">
              I&rsquo;m always happy to have an informal chat about your
              ceremony. There&rsquo;s no pressure and no obligation.
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
