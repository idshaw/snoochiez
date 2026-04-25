/*
 * SNOOCHIEZ — Contact Us Page
 * Neo-Brutalism meets Zine Culture
 * Dark charcoal bg | Sky Blue #1AABDC accent | Bebas Neue display | DM Sans body
 */
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BRAND = "#1AABDC";
const OFF_WHITE = "#F5F0E8";
const MUTED = "#8A8578";
const BG = "#0E0D0B";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputStyle = (field: keyof FormState) => ({
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${errors[field] ? "#ff4444" : focusedField === field ? BRAND : "rgba(26,171,220,0.2)"}`,
    color: OFF_WHITE,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    padding: "0.875rem 1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.7rem",
    letterSpacing: "0.1em",
    color: MUTED,
    marginBottom: "0.5rem",
  };

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh" }}>
      <Navbar />

      {/* ─── PAGE HEADER ───────────────────────────────────────── */}
      <section className="pt-36 pb-16" style={{ backgroundColor: BG }}>
        <div className="container">
          <div
            className="text-xs tracking-widest mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
          >
            // HIT US UP
          </div>
          <h1
            className="leading-none mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              color: OFF_WHITE,
              letterSpacing: "0.02em",
              lineHeight: 0.9,
            }}
          >
            GET IN<br />
            <span style={{ color: BRAND }}>TOUCH.</span>
          </h1>
          <p
            className="text-lg max-w-lg"
            style={{ color: "rgba(245,240,232,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Got questions? Want to carry Snoochiez? Just want to say what's up? We're here for it. Drop us a line.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ──────────────────────────────────────── */}
      <section className="pb-20 md:pb-28" style={{ backgroundColor: BG }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

            {/* Left: Contact Info */}
            <div className="md:col-span-4">
              <AnimatedSection>
                <div className="space-y-6">
                  {/* Email */}
                  <div
                    className="p-6 transition-all duration-300"
                    style={{ border: `1px solid rgba(26,171,220,0.15)` }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = BRAND}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = `rgba(26,171,220,0.15)`}
                  >
                    <div
                      className="text-xs tracking-widest mb-3"
                      style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
                    >
                      EMAIL
                    </div>
                    <a
                      href="mailto:hello@snoochiez.com"
                      className="text-base transition-colors duration-200"
                      style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = BRAND}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = OFF_WHITE}
                    >
                      hello@snoochiez.com
                    </a>
                  </div>

                  {/* Business */}
                  <div
                    className="p-6 transition-all duration-300"
                    style={{ border: `1px solid rgba(26,171,220,0.15)` }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = BRAND}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = `rgba(26,171,220,0.15)`}
                  >
                    <div
                      className="text-xs tracking-widest mb-3"
                      style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
                    >
                      BUSINESS INQUIRIES
                    </div>
                    <a
                      href="mailto:biz@snoochiez.com"
                      className="text-base transition-colors duration-200"
                      style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = BRAND}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = OFF_WHITE}
                    >
                      biz@snoochiez.com
                    </a>
                  </div>

                  {/* Social */}
                  <div
                    className="p-6 transition-all duration-300"
                    style={{ border: `1px solid rgba(26,171,220,0.15)` }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = BRAND}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = `rgba(26,171,220,0.15)`}
                  >
                    <div
                      className="text-xs tracking-widest mb-4"
                      style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
                    >
                      FOLLOW THE SMOKE
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://www.instagram.com/itssnoochiez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center transition-opacity duration-200 hover:opacity-80"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          className="text-xs tracking-widest"
                          style={{ fontFamily: "'Space Mono', monospace", color: MUTED }}
                        >
                          INSTAGRAM
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: BRAND, fontFamily: "'DM Sans', sans-serif" }}
                        >
                          @itssnoochiez
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="p-6" style={{ border: `1px solid rgba(26,171,220,0.15)` }}>
                    <div
                      className="text-xs tracking-widest mb-4"
                      style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
                    >
                      RESPONSE TIME
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}
                    >
                      We typically respond within 24–48 hours. We're real people, not bots — so give us a minute.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-8">
              <AnimatedSection delay={100}>
                {submitted ? (
                  <div
                    className="flex flex-col items-center justify-center text-center py-20 px-8"
                    style={{ border: `1px solid rgba(26,171,220,0.2)` }}
                  >
                    <div
                      className="text-xs tracking-widest mb-6"
                      style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
                    >
                      // MESSAGE SENT
                    </div>
                    <h2
                      className="leading-none mb-4"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        color: OFF_WHITE,
                        letterSpacing: "0.03em",
                      }}
                    >
                      WE GOT YOU,<br />
                      <span style={{ color: BRAND }}>BABY.</span>
                    </h2>
                    <p
                      className="text-base max-w-md"
                      style={{ color: "rgba(245,240,232,0.6)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Your message landed. We'll get back to you within 24–48 hours. Stay lit.
                    </p>
                    <button
                      className="mt-8 px-8 py-3 text-sm tracking-widest transition-all duration-200"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        backgroundColor: "transparent",
                        color: BRAND,
                        border: `1px solid ${BRAND}`,
                      }}
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", subject: "", message: "" });
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = BRAND;
                        (e.target as HTMLElement).style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "transparent";
                        (e.target as HTMLElement).style.color = BRAND;
                      }}
                    >
                      SEND ANOTHER
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label style={labelStyle}>YOUR NAME *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="What do they call you?"
                          style={inputStyle("name")}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#ff4444" }}>
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label style={labelStyle}>YOUR EMAIL *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Where do we send the reply?"
                          style={inputStyle("email")}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#ff4444" }}>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label style={labelStyle}>SUBJECT *</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="What's this about?"
                        style={inputStyle("subject")}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#ff4444" }}>
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="mb-8">
                      <label style={labelStyle}>YOUR MESSAGE *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Say what's on your mind. We're listening."
                        rows={7}
                        style={{
                          ...inputStyle("message"),
                          resize: "vertical",
                          minHeight: "160px",
                        }}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#ff4444" }}>
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-sm tracking-widest font-bold transition-all duration-200"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        backgroundColor: BRAND,
                        color: "#ffffff",
                        border: `2px solid ${BRAND}`,
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "transparent";
                        (e.target as HTMLElement).style.color = BRAND;
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = BRAND;
                        (e.target as HTMLElement).style.color = "#ffffff";
                      }}
                    >
                      SEND IT →
                    </button>

                    <p
                      className="mt-4 text-xs text-center"
                      style={{ fontFamily: "'Space Mono', monospace", color: "#4A4840" }}
                    >
                      We don't spam. We don't sell your info. We're not that kind of brand.
                    </p>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
