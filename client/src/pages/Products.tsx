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
    name: "Don Danko",
    type: "INDICA",
    thc: "32%",
    cbd: "0.3%",
    price: "$65",
    size: "3.5g",
    desc: "The don of the lineup. Heavy OG Kush heritage with a thick, pungent fuel-and-earth nose and a commanding body high that demands respect. Dense, dark nugs dripping in resin. Not for the faint of heart.",
    tags: ["HEAVY", "EARTHY", "KNOCKOUT"],
    badge: "HOUSE CUT",
  },
  {
    id: 2,
    name: "OG Bongwater",
    type: "HYBRID",
    thc: "27%",
    cbd: "0.5%",
    price: "$55",
    size: "3.5g",
    desc: "Classic OG lineage, unfiltered. Deep pine, diesel, and a hint of skunk that hits you before you even open the jar. Balanced head-and-body high that keeps you locked in without locking you down.",
    tags: ["PINEY", "DIESEL", "BALANCED"],
    badge: "CLASSIC",
  },
  {
    id: 3,
    name: "Banana Burp",
    type: "HYBRID",
    thc: "28%",
    cbd: "0.4%",
    price: "$58",
    size: "3.5g",
    desc: "Ripe banana, tropical fruit, and a gassy finish that sneaks up on you. Banana OG x Zkittlez genetics deliver a smooth, creamy smoke with a euphoric, giggly high. The life of the party.",
    tags: ["TROPICAL", "GIGGLY", "SWEET"],
    badge: "FAN FAVORITE",
  },
  {
    id: 4,
    name: "Trouser Snake",
    type: "SATIVA",
    thc: "26%",
    cbd: "0.3%",
    price: "$52",
    size: "3.5g",
    desc: "Slithers up on you slow, then strikes hard. Sativa-dominant with a bright citrus and pepper terpene profile. Energizing, cerebral, and creative — the kind of high that makes you want to start a project at midnight.",
    tags: ["CEREBRAL", "ENERGIZING", "CITRUS"],
    badge: null,
  },
  {
    id: 5,
    name: "Cake Boss",
    type: "INDICA",
    thc: "30%",
    cbd: "0.6%",
    price: "$60",
    size: "3.5g",
    desc: "Wedding Cake x Girl Scout Cookies heritage. Vanilla, sweet dough, and a hint of pepper. The Cake Boss runs the show — a deeply relaxing, full-body high with a smooth, dessert-sweet smoke that finishes clean.",
    tags: ["SWEET", "RELAXING", "VANILLA"],
    badge: "BESTSELLER",
  },
  {
    id: 6,
    name: "Gelato #33",
    type: "HYBRID",
    thc: "29%",
    cbd: "0.4%",
    price: "$62",
    size: "3.5g",
    desc: "The legendary cut. Sunset Sherbet x Thin Mint GSC. Creamy, berry-forward with a lavender and citrus finish. Gelato #33 hits with a balanced euphoria that's as smooth as the flavor. A true connoisseur's pick.",
    tags: ["CREAMY", "EUPHORIC", "BERRY"],
    badge: "PREMIUM",
  },
  {
    id: 7,
    name: "Blue Zipper",
    type: "INDICA",
    thc: "31%",
    cbd: "0.5%",
    price: "$63",
    size: "3.5g",
    desc: "Zipper Kush x Blueberry. Deep indigo-hued nugs with a blueberry muffin nose and a sedating, full-body high. Blue Zipper zips you right into the couch and keeps you there. Perfect for unwinding after a long one.",
    tags: ["BLUEBERRY", "SEDATING", "COUCH-LOCK"],
    badge: null,
  },
  {
    id: 8,
    name: "Rainbow Beltz 2.0",
    type: "HYBRID",
    thc: "33%",
    cbd: "0.2%",
    price: "$70",
    size: "3.5g",
    desc: "The upgraded version of a certified classic. Rainbow Beltz 2.0 brings insane bag appeal — multi-colored nugs, a candy-sweet terpene profile, and a potent, euphoric high that hits like the original but harder. Limited drops only.",
    tags: ["CANDY", "POTENT", "COLORFUL"],
    badge: "LIMITED DROP",
  },
  {
    id: 9,
    name: "Biscotti",
    type: "INDICA",
    thc: "28%",
    cbd: "0.5%",
    price: "$58",
    size: "3.5g",
    desc: "Gelato 25 x Sour Florida OG. Cookie dough, light spice, and a hint of diesel on the exhale. Biscotti is the sophisticated smoke — a relaxing, cerebral high that keeps you calm, creative, and pleasantly zoned out.",
    tags: ["COOKIE", "SPICY", "CEREBRAL"],
    badge: null,
  },
  {
    id: 10,
    name: "Citrus Titz",
    type: "SATIVA",
    thc: "25%",
    cbd: "0.3%",
    price: "$50",
    size: "3.5g",
    desc: "Loud, proud, and dripping in citrus. Tangerine, lemon zest, and a grapefruit finish that'll wake up every sense you've got. Uplifting, social, and smooth — the daytime smoke that keeps the good vibes going.",
    tags: ["CITRUS", "UPLIFTING", "SOCIAL"],
    badge: "NEW DROP",
  },
  {
    id: 11,
    name: "Bitchin' Cherries",
    type: "HYBRID",
    thc: "27%",
    cbd: "0.4%",
    price: "$56",
    size: "3.5g",
    desc: "Cherry Pie x Black Cherry Punch. Dark, sweet, and absolutely bitchin'. Deep cherry and dark fruit on the nose with a smooth, full-body high that's equal parts relaxing and euphoric. The strain that makes everything better.",
    tags: ["CHERRY", "EUPHORIC", "SMOOTH"],
    badge: null,
  },
  {
    id: 12,
    name: "Shady Apples",
    type: "SATIVA",
    thc: "24%",
    cbd: "0.6%",
    price: "$50",
    size: "3.5g",
    desc: "There's nothing shady about the quality — just the name. Sour Apple x Durban Poison genetics. Crisp green apple, sour candy, and a hint of pine. A clean, clear-headed sativa high that keeps you sharp and in the zone.",
    tags: ["APPLE", "SOUR", "CLEAR-HEADED"],
    badge: null,
  },
  {
    id: 13,
    name: "Berry Sour",
    type: "HYBRID",
    thc: "26%",
    cbd: "0.4%",
    price: "$54",
    size: "3.5g",
    desc: "Sweet meets sour in the best way possible. Mixed berry on the front end — strawberry, blueberry, a little raspberry — then a sharp sour candy finish that lingers. Balanced hybrid high: uplifted, relaxed, and ready to vibe.",
    tags: ["BERRY", "SOUR", "BALANCED"],
    badge: null,
  },
  {
    id: 14,
    name: "Melon Diesel",
    type: "SATIVA",
    thc: "27%",
    cbd: "0.3%",
    price: "$55",
    size: "3.5g",
    desc: "Honeydew and cantaloupe collide with raw diesel fuel in the most unexpected and addictive way. Melon Diesel hits bright and fast — a sharp, energizing sativa buzz with a smooth, fruity smoke that keeps you coming back for more.",
    tags: ["MELON", "DIESEL", "ENERGIZING"],
    badge: "NEW DROP",
  },
  {
    id: 15,
    name: "Ice Cream Cake",
    type: "INDICA",
    thc: "30%",
    cbd: "0.5%",
    price: "$62",
    size: "3.5g",
    desc: "Wedding Cake x Gelato #33. Creamy vanilla, sweet dough, and a hint of sugary frosting. Ice Cream Cake is the dessert you smoke after dinner — a deeply relaxing, full-body indica that melts stress and sends you straight to bliss.",
    tags: ["VANILLA", "CREAMY", "RELAXING"],
    badge: "BESTSELLER",
  },
  {
    id: 16,
    name: "Lemon Berry",
    type: "HYBRID",
    thc: "25%",
    cbd: "0.5%",
    price: "$52",
    size: "3.5g",
    desc: "Bright lemon zest meets ripe mixed berries in a terpene profile that's as refreshing as it is potent. Lemon Berry delivers a cheerful, mood-lifting high with a smooth, clean smoke — the perfect afternoon session strain.",
    tags: ["LEMON", "BERRY", "UPLIFTING"],
    badge: null,
  },
  {
    id: 17,
    name: "Bananaconda",
    type: "INDICA",
    thc: "31%",
    cbd: "0.4%",
    price: "$65",
    size: "3.5g",
    desc: "Don't let the name fool you — Bananaconda wraps around you slow and doesn't let go. Banana Kush x Anaconda OG genetics. Overripe banana, tropical fruit, and a thick, kushy finish. Heavy-hitting indica that squeezes out every ounce of tension.",
    tags: ["BANANA", "TROPICAL", "HEAVY"],
    badge: "HOUSE CUT",
  },
  {
    id: 18,
    name: "UK Cheese",
    type: "HYBRID",
    thc: "20%",
    cbd: "0.5%",
    price: "$55",
    size: "3.5g",
    desc: "A British icon, grown right. The original Skunk #1 phenotype that took over the UK underground and never looked back. Sharp, funky cheese on the nose with a pungent, skunky finish. Mellow, euphoric high that keeps you relaxed and chatty. Old school never goes out of style.",
    tags: ["FUNKY", "SKUNKY", "CLASSIC"],
    badge: "CLASSIC",
  },
  {
    id: 19,
    name: "Neville's Haze",
    type: "SATIVA",
    thc: "22%",
    cbd: "0.3%",
    price: "$68",
    size: "3.5g",
    desc: "Named after the godfather of modern cannabis breeding, Neville's Haze is a pure sativa legend. Northern Lights #5 x Haze genetics. Spicy, earthy, and floral with a long-lasting cerebral high that builds slow and hits deep. Not for the impatient — but absolutely worth the wait.",
    tags: ["SPICY", "CEREBRAL", "LEGENDARY"],
    badge: "PREMIUM",
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
