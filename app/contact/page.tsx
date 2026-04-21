"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const ceremonyTypes = [
  "Wedding",
  "Funeral / Memorial Service",
  "Naming Ceremony",
  "Vow Renewal",
  "Other Celebration",
  "Not sure yet",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    ceremonyType: "",
    preferredDate: "",
    message: "",
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = "Please enter your name.";
    if (!values.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = "Please enter a valid email address.";
    if (!values.message.trim()) errs.message = "Please add a message.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-xl text-sm text-[#2C2826] placeholder-[#9A9590] focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-[#EDE8DC] focus:ring-[#7A9E80]/30 focus:border-[#7A9E80]"
    }`;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 bg-[#EDE8DC]/40">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9E80] font-medium mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#2C2826] leading-tight mb-6">
              Let&rsquo;s start a conversation
            </h1>
            <p className="text-[#6B6460] text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you&rsquo;re ready to book or just want to explore your
              options, I&rsquo;d love to hear from you. All enquiries welcome.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF8F3]">
        <div className="container-max">
          <div className="grid md:grid-cols-5 gap-14 items-start">
            {/* Form */}
            <div className="md:col-span-3">
              <ScrollReveal>
                {formState === "success" ? (
                  <div className="bg-[#EEF4EF] border border-[#7A9E80]/30 rounded-2xl p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#7A9E80]/20 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-[#7A9E80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-2xl text-[#2C2826] mb-3">
                      Thank you for reaching out
                    </h2>
                    <p className="text-[#6B6460] text-sm leading-relaxed max-w-sm mx-auto">
                      I&rsquo;ve received your message and will be in touch
                      within 48 hours. I look forward to hearing more about
                      your ceremony.
                    </p>
                    <button
                      onClick={() => {
                        setFormState("idle");
                        setValues({ name: "", email: "", phone: "", ceremonyType: "", preferredDate: "", message: "" });
                      }}
                      className="mt-6 text-sm text-[#7A9E80] hover:text-[#587060] transition-colors font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-[#2C2826] mb-1.5 uppercase tracking-wide">
                          Full Name <span className="text-[#C4A05C]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={inputClass("name")}
                          autoComplete="name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#2C2826] mb-1.5 uppercase tracking-wide">
                          Email <span className="text-[#C4A05C]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className={inputClass("email")}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-[#2C2826] mb-1.5 uppercase tracking-wide">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="07700 000 000"
                          className={inputClass("phone")}
                          autoComplete="tel"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#2C2826] mb-1.5 uppercase tracking-wide">
                          Ceremony Type
                        </label>
                        <select
                          name="ceremonyType"
                          value={values.ceremonyType}
                          onChange={handleChange}
                          className={inputClass("ceremonyType")}
                        >
                          <option value="">Select a type...</option>
                          {ceremonyTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2C2826] mb-1.5 uppercase tracking-wide">
                        Preferred / Approximate Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={values.preferredDate}
                        onChange={handleChange}
                        className={inputClass("preferredDate")}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2C2826] mb-1.5 uppercase tracking-wide">
                        Your Message <span className="text-[#C4A05C]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me a little about yourself and your ceremony — I'd love to hear your story..."
                        className={`${inputClass("message")} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {formState === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                        Something went wrong. Please try again or email me directly at{" "}
                        <a
                          href="mailto:jfwingfield@gmail.com"
                          className="underline"
                        >
                          jfwingfield@gmail.com
                        </a>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="w-full py-4 bg-[#7A9E80] text-white font-medium rounded-full hover:bg-[#587060] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formState === "loading" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>

                    <p className="text-xs text-[#9A9590] text-center">
                      I aim to respond within 48 hours.
                    </p>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Info panel */}
            <div className="md:col-span-2">
              <ScrollReveal delay={150}>
                <div className="bg-[#EDE8DC]/60 rounded-2xl p-8 space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#587060] font-medium mb-4">
                      Direct Contact
                    </p>
                    <div className="space-y-3">
                      <a
                        href="mailto:jfwingfield@gmail.com"
                        className="flex items-center gap-3 text-sm text-[#2C2826] hover:text-[#7A9E80] transition-colors group"
                      >
                        <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#EEF4EF] transition-colors">
                          <svg className="w-4 h-4 text-[#7A9E80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        jfwingfield@gmail.com
                      </a>
                      <a
                        href="tel:+447752480665"
                        className="flex items-center gap-3 text-sm text-[#2C2826] hover:text-[#7A9E80] transition-colors group"
                      >
                        <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#EEF4EF] transition-colors">
                          <svg className="w-4 h-4 text-[#7A9E80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </span>
                        07752 480665
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#587060] font-medium mb-4">
                      Area Covered
                    </p>
                    <p className="text-sm text-[#6B6460] leading-relaxed">
                      Based in Surrey, I cover the South East of England
                      including Sussex, Hampshire, Kent, and London. I&rsquo;m
                      happy to discuss travel further afield for the right
                      ceremony.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#587060] font-medium mb-4">
                      Initial Consultation
                    </p>
                    <p className="text-sm text-[#6B6460] leading-relaxed">
                      All initial consultations are free, relaxed, and
                      completely without obligation. We can meet in person,
                      over video call, or by phone — whatever works for you.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#587060] font-medium mb-4">
                      Follow Along
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="https://www.instagram.com/altogetherceremonies/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6B6460] hover:text-[#7A9E80] hover:bg-[#EEF4EF] transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jane-wingfield-3b8571a9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6B6460] hover:text-[#7A9E80] hover:bg-[#EEF4EF] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services quick links ───────────────────────────────── */}
      <section className="py-16 bg-[#EDE8DC]/40">
        <div className="container-max text-center">
          <ScrollReveal>
            <p className="text-sm text-[#6B6460] mb-6">
              Not sure what you need? Browse the services first.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#7A9E80] font-medium hover:text-[#587060] transition-colors"
            >
              View all services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
