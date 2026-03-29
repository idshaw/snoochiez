/*
 * SNOOCHIEZ — Products Page
 * Neo-Brutalism meets Zine Culture
 * Dark charcoal bg | Sky Blue #1AABDC accent | Bebas Neue display | DM Sans body
 */
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRODUCTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491964705/FiUHmn5ogp3bzwmnbZxd7M/snoochiez-products-bg-Bd97Dcp2EBtm5EnsuKvhmq.webp";

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
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Purple Haze OG",
    type: "SATIVA",
    thc: "28%",
    cbd: "0.3%",
    price: "$55",
    size: "3.5g",
    desc: "Euphoric, creative, electric. The one that started it all. Dense, frosty buds with a sweet grape and earthy pine aroma. Perfect for daytime creativity and good conversation.",
    tags: ["EUPHORIC", "CREATIVE", "ENERGIZING"],
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Midnight Kush",
    type: "INDICA",
    thc: "31%",
    cbd: "0.5%",
    price: "$60",
    size: "3.5g",
    desc: "Deep body relaxation. For the late-night legends who need to shut the world off and sink into the couch. Heavy, resinous nugs with a fuel and chocolate nose.",
    tags: ["RELAXING", "SLEEPY", "HEAVY"],
    badge: "POTENT",
  },
  {
    id: 3,
    name: "Citrus Wreck",
    type: "HYBRID",
    thc: "26%",
    cbd: "0.4%",
    price: "$50",
    size: "3.5g",
    desc: "Bright, zesty, and perfectly balanced. Good times guaranteed. Tangerine and lemon terpene profile with a smooth, clean smoke. The crowd pleaser.",
    tags: ["BALANCED", "UPLIFTING", "SOCIAL"],
    badge: "FAN FAVORITE",
  },
  {
    id: 4,
    name: "Snoochiez Special",
    type: "HYBRID",
    thc: "33%",
    cbd: "0.2%",
    price: "$75",
    size: "3.5g",
    desc: "Our house cut. The crown jewel. Bred in-house and available exclusively through Snoochiez. Insane trichome coverage, complex terpene profile, and a high that hits different.",
    tags: ["EXCLUSIVE", "PREMIUM", "COMPLEX"],
    badge: "HOUSE CUT",
  },
  {
    id: 5,
    name: "Gelato Bomb",
    type: "INDICA",
    thc: "27%",
    cbd: "0.6%",
    price: "$52",
    size: "3.5g",
    desc: "Sweet, creamy, dessert-like. Gelato Bomb delivers a smooth, full-body relaxation with a sweet vanilla and berry nose. The after-dinner smoke.",
    tags: ["SWEET", "RELAXING", "SMOOTH"],
    badge: null,
  },
  {
    id: 6,
    name: "Sour Diesel Express",
    type: "SATIVA",
    thc: "24%",
    cbd: "0.3%",
    price: "$48",
    size: "3.5g",
    desc: "Classic sour diesel lineage with a modern twist. Pungent, fuel-forward, and guaranteed to get you moving. The wake-and-bake legend.",
    tags: ["ENERGIZING", "FOCUSED", "CLASSIC"],
    badge: null,
  },
  {
    id: 7,
    name: "Wedding Crasher",
    type: "HYBRID",
    thc: "29%",
    cbd: "0.4%",
    price: "$58",
    size: "3.5g",
    desc: "Crashes the party and becomes the life of it. Wedding Crasher brings a euphoric, social high with a vanilla and grape terpene profile. For the creative maniacs.",
    tags: ["EUPHORIC", "SOCIAL", "CREATIVE"],
    badge: "NEW DROP",
  },
  {
    id: 8,
    name: "Blackout Runtz",
    type: "INDICA",
    thc: "30%",
    cbd: "0.3%",
    price: "$62",
    size: "3.5g",
    desc: "Candy-sweet with a knockout punch. Blackout Runtz is the strain for when you're done for the day and ready to fully decompress. Dense, colorful nugs with a candy-shop nose.",
    tags: ["KNOCKOUT", "SWEET", "DEEP"],
    badge: null,
  },
];

const filters = ["ALL", "SATIVA", "INDICA", "HYBRID"];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered = activeFilter === "ALL"
    ? products
    : products.filter((p) => p.type === activeFilter);

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh" }}>
      <Navbar />

      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${PRODUCTS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(14,13,11,0.85) 0%, rgba(14,13,11,0.95) 100%)" }}
        />
        <div className="container relative z-10">
          <div
            className="text-xs tracking-widest mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: BRAND }}
          >
            // THE MENU
          </div>
          <h1
            className="leading-none mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              color: OFF_WHITE,
              letterSpacing: "0.02em",
            }}
          >
            FIRE STRAINS.<br />
            <span style={{ color: BRAND }}>EVERY TIME.</span>
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{ color: "rgba(245,240,232,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Hand-selected, indoor-grown, and cultivated with obsessive attention to detail. No mids. No compromises.
          </p>
        </div>
      </section>

      {/* ─── FILTER BAR ────────────────────────────────────────── */}
      <div
        className="sticky top-16 md:top-20 z-40 py-4"
        style={{
          backgroundColor: "rgba(14,13,11,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(26,171,220,0.15)`,
        }}
      >
        <div className="container flex items-center gap-2 flex-wrap">
          <span
            className="text-xs tracking-widest mr-4 hidden md:block"
            style={{ fontFamily: "'Space Mono', monospace", color: MUTED }}
          >
            FILTER:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="text-xs tracking-widest px-4 py-2 transition-all duration-200"
              style={{
                fontFamily: "'Space Mono', monospace",
                backgroundColor: activeFilter === f ? BRAND : "transparent",
                color: activeFilter === f ? "#ffffff" : MUTED,
                border: `1px solid ${activeFilter === f ? BRAND : "rgba(138,133,120,0.3)"}`,
              }}
            >
              {f}
            </button>
          ))}
          <span
            className="ml-auto text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#4A4840" }}
          >
            {filtered.length} STRAINS
          </span>
        </div>
      </div>

      {/* ─── PRODUCTS GRID ─────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: BG }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {filtered.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 60}>
                <div
                  className="group relative p-8 md:p-10 transition-all duration-300"
                  style={{
                    borderBottom: `1px solid rgba(26,171,220,0.12)`,
                    borderRight: i % 2 === 0 ? `1px solid rgba(26,171,220,0.12)` : "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = `rgba(26,171,220,0.03)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs tracking-widest px-2 py-0.5"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: "#ffffff",
                          backgroundColor: BRAND,
                        }}
                      >
                        {product.type}
                      </span>
                      {product.badge && (
                        <span
                          className="text-xs tracking-widest px-2 py-0.5"
                          style={{
                            fontFamily: "'Space Mono', monospace",
                            color: BRAND,
                            border: `1px solid ${BRAND}`,
                          }}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div
                        className="text-2xl"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", color: BRAND, letterSpacing: "0.05em" }}
                      >
                        {product.price}
                      </div>
                      <div
                        className="text-xs"
                        style={{ fontFamily: "'Space Mono', monospace", color: MUTED }}
                      >
                        {product.size}
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2.2rem",
                      color: OFF_WHITE,
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* THC/CBD */}
                  <div className="flex gap-4 mb-4">
                    <span className="text-xs tracking-widest" style={{ fontFamily: "'Space Mono', monospace", color: MUTED }}>
                      THC {product.thc}
                    </span>
                    <span className="text-xs tracking-widest" style={{ fontFamily: "'Space Mono', monospace", color: MUTED }}>
                      CBD {product.cbd}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(245,240,232,0.55)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {product.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-widest px-2 py-0.5"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: "#4A4840",
                          border: "1px solid rgba(74,72,64,0.5)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full py-3 text-sm tracking-widest transition-all duration-200"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      backgroundColor: "transparent",
                      color: BRAND,
                      border: `1px solid rgba(26,171,220,0.3)`,
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = BRAND;
                      (e.target as HTMLElement).style.color = "#ffffff";
                      (e.target as HTMLElement).style.borderColor = BRAND;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = "transparent";
                      (e.target as HTMLElement).style.color = BRAND;
                      (e.target as HTMLElement).style.borderColor = `rgba(26,171,220,0.3)`;
                    }}
                  >
                    ADD TO ORDER
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER ────────────────────────────────────────── */}
      <div
        className="py-6"
        style={{ borderTop: `1px solid rgba(26,171,220,0.08)`, backgroundColor: "#080806" }}
      >
        <div className="container">
          <p
            className="text-xs text-center"
            style={{ fontFamily: "'Space Mono', monospace", color: "#4A4840" }}
          >
            Must be 21+ to purchase. Available in legal markets only. THC percentages are approximate and may vary by batch.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
