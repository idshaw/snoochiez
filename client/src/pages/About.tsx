/*
 * SNOOCHIEZ — About Us Page
 * Neo-Brutalism meets Zine Culture
 * Dark charcoal bg | Sky Blue #1AABDC accent | Bebas Neue display | DM Sans body
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491964705/FiUHmn5ogp3bzwmnbZxd7M/snoochiez-about-gf36WfFR6LpPAfw3YjU7LQ.webp";
const LIFESTYLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491964705/FiUHmn5ogp3bzwmnbZxd7M/snoochiez-lifestyle-F5DQtLqnL9D53kLfZLqRY9.webp";

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

const values = [
  {
    num: "01",
    title: "AUTHENTICITY",
    desc: "No fake hype. No corporate nonsense. We show up exactly as we are — loud, proud, and ready to bring the heat.",
  },
  {
    num: "02",
    title: "QUALITY",
    desc: "We obsess over every detail of the grow. From genetics to cure, every batch is held to the same uncompromising standard.",
  },
  {
    num: "03",
    title: "CULTURE",
    desc: "Cannabis is culture. We honor the heads who came before us and build for the community that keeps the fire burning.",
  },
  {
    num: "04",
    title: "GOOD TIMES",
    desc: "At the end of the day, this is about enjoying life. Good people, good smoke, and the kind of laughs you don't forget.",
  },
];

export default function About() {
  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh" }}>
      <Navbar />

      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-0 overflow-hidden"
        style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${ABOUT_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(14,13,11,0.6) 0%, rgba(14,13,11,1) 100%)" }}
        />
        <div className="container relative z-10 pb-16">
          <div
            className="text-xs tracking-widest mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
          >
            // WHO WE ARE
          </div>
          <h1
            className="leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 10vw, 9rem)",
              color: OFF_WHITE,
              letterSpacing: "0.02em",
              lineHeight: 0.9,
            }}
          >
            ABOUT<br />
            <span style={{ color: BRAND }}>SNOOCHIEZ</span>
          </h1>
        </div>
      </section>

      {/* ─── MAIN COPY ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: BG }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left: big quote */}
            <div className="md:col-span-5">
              <AnimatedSection>
                <div className="sticky top-28">
                  <div
                    className="text-xs tracking-widest mb-6"
                    style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
                  >
                    // THE MANIFESTO
                  </div>
                  <blockquote
                    className="leading-tight"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                      color: OFF_WHITE,
                      letterSpacing: "0.03em",
                      lineHeight: 1.05,
                      borderLeft: `3px solid ${BRAND}`,
                      paddingLeft: "1.5rem",
                    }}
                  >
                    "LOUD FLOWER.<br />
                    BIG LAUGHS.<br />
                    <span style={{ color: BRAND }}>ZERO<br />BULLSHIT."</span>
                  </blockquote>
                  <div
                    className="mt-6 text-xs tracking-widest"
                    style={{ fontFamily: "'Space Mono', monospace", color: MUTED }}
                  >
                    — SNOOCHIEZ, BABY
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: body copy */}
            <div className="md:col-span-7">
              <AnimatedSection delay={100}>
                <div className="space-y-6">
                  <p
                    className="text-xl leading-relaxed font-medium"
                    style={{ color: OFF_WHITE, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Yo, welcome to Snoochiez, baby — a cannabis cultivation and lifestyle brand for the real ones. The loud ones. The weird ones. The people who know life's too short for mids, bad vibes, and boring-ass brands.
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    We built Snoochiez for the heads who want more than just weed — this is culture, attitude, flavor, and fire all rolled into one. We're talkin' killer flower, serious personality, and a brand that doesn't show up in a suit pretending to be your friend. Nah. We show up loud, proud, and ready to bring the heat.
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    At the heart of it, Snoochiez is about growing top-tier cannabis and building a lifestyle around good times, good people, and keeping it authentic. No fake hype. No corporate nonsense. Just passion, quality, and that beautifully unfiltered energy that makes the whole ride worth it.
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    This brand is for the late-night legends, the creative maniacs, the laugh-until-you-can't-breathe crowd, and everybody out there chasing the perfect smoke and a better time.
                  </p>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: BRAND, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Snoochiez, baby. Loud flower. Big laughs. Zero bullshit.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#161512", borderTop: `1px solid rgba(26,171,220,0.1)` }}
      >
        <div className="container">
          <AnimatedSection>
            <div
              className="text-xs tracking-widest mb-4"
              style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
            >
              // WHAT WE STAND FOR
            </div>
            <h2
              className="leading-none mb-16"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: OFF_WHITE,
                letterSpacing: "0.03em",
              }}
            >
              THE CODE
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {values.map((val, i) => (
              <AnimatedSection key={val.num} delay={i * 80}>
                <div
                  className="p-8 md:p-10 transition-all duration-300"
                  style={{
                    borderTop: `1px solid rgba(26,171,220,0.12)`,
                    borderRight: i % 2 === 0 ? `1px solid rgba(26,171,220,0.12)` : "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = `rgba(26,171,220,0.03)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  <div
                    className="text-xs tracking-widest mb-4"
                    style={{ fontFamily: "'Space Mono', monospace", color: `rgba(26,171,220,0.4)` }}
                  >
                    {val.num}
                  </div>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2rem",
                      color: OFF_WHITE,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {val.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: MUTED, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {val.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CULTIVATION SPLIT ─────────────────────────────────── */}
      <section className="overflow-hidden" style={{ backgroundColor: BG }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center p-10 md:p-16 order-2 md:order-1">
            <AnimatedSection>
              <div
                className="text-xs tracking-widest mb-4"
                style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
              >
                // THE GROW
              </div>
              <h2
                className="leading-none mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: OFF_WHITE,
                  letterSpacing: "0.03em",
                }}
              >
                GROWN WITH<br />
                <span style={{ color: BRAND }}>OBSESSION.</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-6 max-w-md"
                style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Every batch is cultivated indoors under precisely controlled conditions. We select only the finest genetics, dial in our environment to the decimal, and give every plant the time and attention it deserves.
              </p>
              <p
                className="text-base leading-relaxed mb-8 max-w-md"
                style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
              >
                The result? Flower that hits different. Dense, frosty, aromatic, and consistent — batch after batch after batch.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "100%", label: "Indoor" },
                  { num: "30+", label: "Strains" },
                  { num: "0", label: "Compromises" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "2.5rem",
                        color: BRAND,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      className="text-xs tracking-widest"
                      style={{ fontFamily: "'Space Mono', monospace", color: MUTED }}
                    >
                      {stat.label.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <div
            className="relative min-h-80 md:min-h-[600px] order-1 md:order-2"
            style={{
              backgroundImage: `url(${ABOUT_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left, transparent 60%, rgba(14,13,11,1) 100%)" }}
            />
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#161512", borderTop: `1px solid rgba(26,171,220,0.1)` }}
      >
        <div className="container text-center">
          <AnimatedSection>
            <h2
              className="leading-none mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: OFF_WHITE,
                letterSpacing: "0.03em",
              }}
            >
              READY TO SMOKE<br />
              <span style={{ color: BRAND }}>THE GOOD STUFF?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/products">
                <span
                  className="inline-block px-10 py-4 text-sm tracking-widest font-bold transition-all duration-200"
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
                  SHOP THE MENU
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className="inline-block px-10 py-4 text-sm tracking-widest transition-all duration-200"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    backgroundColor: "transparent",
                    color: OFF_WHITE,
                    border: "2px solid rgba(245,240,232,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.borderColor = BRAND;
                    (e.target as HTMLElement).style.color = BRAND;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(245,240,232,0.3)";
                    (e.target as HTMLElement).style.color = OFF_WHITE;
                  }}
                >
                  GET IN TOUCH
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
