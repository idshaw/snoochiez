/*
 * SNOOCHIEZ Navbar
 * Dark charcoal bg, sky blue #1AABDC accent on active/hover
 * Actual Snoochiez logo image (white on blue bg) displayed top-left
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491964705/FiUHmn5ogp3bzwmnbZxd7M/snoochiez-logo_96fb928b.png";

const BRAND = "#1AABDC";
const OFF_WHITE = "#F5F0E8";
const MUTED = "#8A8578";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(14,13,11,0.97)" : "rgba(14,13,11,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? `1px solid rgba(26,171,220,0.2)` : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo — actual brand image on black pill/square */}
        <Link href="/">
          <div
            className="flex items-center"
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                backgroundColor: "#000000",
                padding: "6px 14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={LOGO_URL}
                alt="Snoochiez"
                style={{
                  height: "36px",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className="font-display text-lg tracking-widest transition-colors duration-200 select-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "0.1em",
                    color: isActive ? BRAND : OFF_WHITE,
                    borderBottom: isActive ? `2px solid ${BRAND}` : "2px solid transparent",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = BRAND;
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = OFF_WHITE;
                  }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
          <Link href="/products">
            <span
              className="font-mono-brand text-xs tracking-widest px-4 py-2 transition-all duration-200"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#ffffff",
                backgroundColor: BRAND,
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
              SHOP NOW
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: BRAND,
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: BRAND,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: BRAND,
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          backgroundColor: "rgba(14,13,11,0.98)",
          borderTop: menuOpen ? `1px solid rgba(26,171,220,0.2)` : "none",
        }}
      >
        <div className="container py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className="font-display text-2xl tracking-widest block py-1"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: isActive ? BRAND : OFF_WHITE,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
