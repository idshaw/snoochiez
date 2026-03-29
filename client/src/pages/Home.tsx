/*
 * SNOOCHIEZ — Home / Landing Page
 * Neo-Brutalism meets Zine Culture
 * Dark charcoal bg | Lime #C8FF00 accent | Bebas Neue display | DM Sans body
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491964705/FiUHmn5ogp3bzwmnbZxd7M/snoochiez-hero-RjLocRRDyVjfysWA9XULae.webp";
const LIFESTYLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491964705/FiUHmn5ogp3bzwmnbZxd7M/snoochiez-lifestyle-F5DQtLqnL9D53kLfZLqRY9.webp";
const PRODUCTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491964705/FiUHmn5ogp3bzwmnbZxd7M/snoochiez-products-bg-Bd97Dcp2EBtm5EnsuKvhmq.webp";

const marqueeItems = [
  "LOUD FLOWER", "BIG LAUGHS", "ZERO BULLSHIT", "TOP-TIER CANNABIS",
  "LOUD FLOWER", "BIG LAUGHS", "ZERO BULLSHIT", "TOP-TIER CANNABIS",
  "LOUD FLOWER", "BIG LAUGHS", "ZERO BULLSHIT", "TOP-TIER CANNABIS",
];

function useInView(threshold = 0.15) {
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
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const strainHighlights = [
  { name: "Purple Haze OG", type: "SATIVA", thc: "28%", desc: "Euphoric, creative, electric. The one that started it all." },
  { name: "Midnight Kush", type: "INDICA", thc: "31%", desc: "Deep body relaxation. For the late-night legends." },
  { name: "Citrus Wreck", type: "HYBRID", thc: "26%", desc: "Bright, zesty, and perfectly balanced. Good times guaranteed." },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#0E0D0B", minHeight: "100vh" }}>
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(14,13,11,1) 0%, rgba(14,13,11,0.7) 40%, rgba(14,13,11,0.3) 100%)",
          }}
        />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
            opacity: 0.5,
          }}
        />

        <div className="container relative z-10 pb-16 md:pb-24">
          <div className="max-w-5xl">
            {/* Tag */}
            <div
              className="inline-block mb-6 px-3 py-1 text-xs tracking-widest"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#0E0D0B",
                backgroundColor: "#C8FF00",
              }}
            >
              PREMIUM CANNABIS CULTIVATION
            </div>

            {/* Main headline */}
            <h1
              className="leading-none mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(4rem, 12vw, 10rem)",
                color: "#F5F0E8",
                letterSpacing: "0.02em",
                lineHeight: 0.92,
              }}
            >
              LOUD<br />
              <span style={{ color: "#C8FF00" }}>FLOWER.</span><br />
              BIG<br />
              LAUGHS.
            </h1>

            <div
              className="w-16 h-0.5 mb-6"
              style={{ backgroundColor: "#C8FF00" }}
            />

            <p
              className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
              style={{ color: "rgba(245,240,232,0.75)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Top-tier cannabis for the real ones. Culture, attitude, flavor, and fire — all rolled into one.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <span
                  className="inline-block px-8 py-4 text-sm tracking-widest font-bold transition-all duration-200"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    backgroundColor: "#C8FF00",
                    color: "#0E0D0B",
                    border: "2px solid #C8FF00",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = "transparent";
                    (e.target as HTMLElement).style.color = "#C8FF00";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = "#C8FF00";
                    (e.target as HTMLElement).style.color = "#0E0D0B";
                  }}
                >
                  SHOP THE MENU
                </span>
              </Link>
              <Link href="/about">
                <span
                  className="inline-block px-8 py-4 text-sm tracking-widest transition-all duration-200"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    backgroundColor: "transparent",
                    color: "#F5F0E8",
                    border: "2px solid rgba(245,240,232,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.borderColor = "#C8FF00";
                    (e.target as HTMLElement).style.color = "#C8FF00";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(245,240,232,0.3)";
                    (e.target as HTMLElement).style.color = "#F5F0E8";
                  }}
                >
                  OUR STORY
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
          style={{ color: "rgba(200,255,0,0.5)" }}
        >
          <span
            className="text-xs tracking-widest"
            style={{ fontFamily: "'Space Mono', monospace", writingMode: "vertical-rl" }}
          >
            SCROLL
          </span>
          <div
            className="w-px h-12"
            style={{ backgroundColor: "rgba(200,255,0,0.3)" }}
          />
        </div>
      </section>

      {/* ─── MARQUEE STRIP ─────────────────────────────────────── */}
      <div
        className="overflow-hidden py-4"
        style={{
          backgroundColor: "#C8FF00",
          borderTop: "2px solid #C8FF00",
          borderBottom: "2px solid #C8FF00",
        }}
      >
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="inline-block px-6 text-sm tracking-widest font-bold"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#0E0D0B", letterSpacing: "0.15em", fontSize: "1.1rem" }}
            >
              {item} &nbsp;★&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ─── FEATURED STRAINS ──────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0E0D0B" }}>
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div
                  className="text-xs tracking-widest mb-3"
                  style={{ fontFamily: "'Space Mono', monospace", color: "#C8FF00" }}
                >
                  // FEATURED STRAINS
                </div>
                <h2
                  className="leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    color: "#F5F0E8",
                    letterSpacing: "0.03em",
                  }}
                >
                  THE GOOD STUFF
                </h2>
              </div>
              <Link href="/products">
                <span
                  className="text-sm tracking-widest transition-colors duration-200"
                  style={{ fontFamily: "'Space Mono', monospace", color: "#8A8578" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C8FF00"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8578"}
                >
                  VIEW ALL →
                </span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
            {strainHighlights.map((strain, i) => (
              <AnimatedSection key={strain.name} delay={i * 100}>
                <div
                  className="group relative p-8 transition-all duration-300"
                  style={{
                    borderTop: "1px solid rgba(200,255,0,0.15)",
                    borderRight: i < 2 ? "1px solid rgba(200,255,0,0.15)" : "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(200,255,0,0.04)";
                    (e.currentTarget as HTMLElement).style.borderTopColor = "#C8FF00";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.borderTopColor = "rgba(200,255,0,0.15)";
                  }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className="text-xs tracking-widest px-2 py-0.5"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        color: "#0E0D0B",
                        backgroundColor: "#C8FF00",
                      }}
                    >
                      {strain.type}
                    </span>
                    <span
                      className="text-xs tracking-widest"
                      style={{ fontFamily: "'Space Mono', monospace", color: "#8A8578" }}
                    >
                      THC {strain.thc}
                    </span>
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2rem",
                      color: "#F5F0E8",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {strain.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#8A8578", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {strain.desc}
                  </p>
                  <div
                    className="mt-6 text-xs tracking-widest transition-colors duration-200"
                    style={{ fontFamily: "'Space Mono', monospace", color: "rgba(200,255,0,0.4)" }}
                  >
                    LEARN MORE →
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIFESTYLE SPLIT SECTION ───────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#161512" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div
            className="relative min-h-80 md:min-h-[600px]"
            style={{
              backgroundImage: `url(${LIFESTYLE_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 60%, rgba(22,21,18,1) 100%)" }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center p-10 md:p-16">
            <AnimatedSection>
              <div
                className="text-xs tracking-widest mb-4"
                style={{ fontFamily: "'Space Mono', monospace", color: "#C8FF00" }}
              >
                // THE CULTURE
              </div>
              <h2
                className="leading-none mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  color: "#F5F0E8",
                  letterSpacing: "0.03em",
                }}
              >
                NOT JUST<br />
                <span style={{ color: "#C8FF00" }}>WEED.</span><br />
                A WHOLE<br />
                VIBE.
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-md"
                style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Snoochiez is for the late-night legends, the creative maniacs, the laugh-until-you-can't-breathe crowd. We built this brand for the people who know life's too short for mids, bad vibes, and boring-ass brands.
              </p>
              <Link href="/about">
                <span
                  className="inline-block text-sm tracking-widest transition-all duration-200"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "#C8FF00",
                    borderBottom: "1px solid rgba(200,255,0,0.4)",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.borderBottomColor = "#C8FF00";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.borderBottomColor = "rgba(200,255,0,0.4)";
                  }}
                >
                  READ OUR STORY →
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS CTA BANNER ───────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          backgroundImage: `url(${PRODUCTS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(14,13,11,0.82)" }}
        />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <div
              className="text-xs tracking-widest mb-4"
              style={{ fontFamily: "'Space Mono', monospace", color: "#C8FF00" }}
            >
              // THE MENU
            </div>
            <h2
              className="leading-none mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "#F5F0E8",
                letterSpacing: "0.03em",
              }}
            >
              FIRE STRAINS.<br />
              <span style={{ color: "#C8FF00" }}>EVERY TIME.</span>
            </h2>
            <p
              className="text-lg mb-10 max-w-lg mx-auto"
              style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'DM Sans', sans-serif" }}
            >
              No fake hype. No corporate nonsense. Just passion, quality, and that beautifully unfiltered energy.
            </p>
            <Link href="/products">
              <span
                className="inline-block px-10 py-4 text-sm tracking-widest font-bold transition-all duration-200"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  backgroundColor: "#C8FF00",
                  color: "#0E0D0B",
                  border: "2px solid #C8FF00",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "transparent";
                  (e.target as HTMLElement).style.color = "#C8FF00";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#C8FF00";
                  (e.target as HTMLElement).style.color = "#0E0D0B";
                }}
              >
                EXPLORE THE MENU
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STATS STRIP ───────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ backgroundColor: "#0E0D0B", borderTop: "1px solid rgba(200,255,0,0.1)" }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "100%", label: "Indoor Grown" },
              { num: "30+", label: "Strains Available" },
              { num: "5★", label: "Customer Rating" },
              { num: "0", label: "Bullshit Tolerated" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="text-center">
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      color: "#C8FF00",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="text-xs tracking-widest"
                    style={{ fontFamily: "'Space Mono', monospace", color: "#8A8578" }}
                  >
                    {stat.label.toUpperCase()}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
