/*
 * SNOOCHIEZ Navbar
 * Dark charcoal bg, lime accent on active/hover
 * Bebas Neue for nav links, sticky top
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

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
        borderBottom: scrolled ? "1px solid rgba(200,255,0,0.15)" : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/">
          <span
            className="font-display text-2xl md:text-3xl tracking-widest select-none"
            style={{ color: "#C8FF00", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.12em" }}
          >
            SNOOCHIEZ
          </span>
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
                    color: isActive ? "#C8FF00" : "#F5F0E8",
                    borderBottom: isActive ? "2px solid #C8FF00" : "2px solid transparent",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = "#C8FF00";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = "#F5F0E8";
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
                color: "#0E0D0B",
                backgroundColor: "#C8FF00",
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
              backgroundColor: "#C8FF00",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#C8FF00",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "#C8FF00",
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
          borderTop: menuOpen ? "1px solid rgba(200,255,0,0.2)" : "none",
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
                    color: isActive ? "#C8FF00" : "#F5F0E8",
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
