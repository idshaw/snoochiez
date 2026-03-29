/*
 * SNOOCHIEZ Footer
 * Dark bg, lime accents, Space Mono for labels
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#080806",
        borderTop: "1px solid rgba(200,255,0,0.15)",
      }}
    >
      {/* Marquee strip */}
      <div
        className="overflow-hidden py-3"
        style={{ borderBottom: "1px solid rgba(200,255,0,0.1)", backgroundColor: "#0E0D0B" }}
      >
        <div className="marquee-track">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="inline-block px-6 text-sm tracking-widest"
              style={{ fontFamily: "'Space Mono', monospace", color: "rgba(200,255,0,0.4)" }}
            >
              LOUD FLOWER &nbsp;·&nbsp; BIG LAUGHS &nbsp;·&nbsp; ZERO BULLSHIT &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div
              className="font-display text-4xl mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C8FF00", letterSpacing: "0.1em" }}
            >
              SNOOCHIEZ
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#8A8578", fontFamily: "'DM Sans', sans-serif" }}
            >
              Cannabis cultivation & lifestyle brand for the real ones. Loud flower, big laughs, zero bullshit.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-xs tracking-widest mb-4"
              style={{ fontFamily: "'Space Mono', monospace", color: "#C8FF00" }}
            >
              NAVIGATE
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm transition-colors duration-200 block"
                    style={{ color: "#8A8578", fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C8FF00"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8578"}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs tracking-widest mb-4"
              style={{ fontFamily: "'Space Mono', monospace", color: "#C8FF00" }}
            >
              GET AT US
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@snoochiez.com"
                className="text-sm transition-colors duration-200"
                style={{ color: "#8A8578", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C8FF00"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8578"}
              >
                hello@snoochiez.com
              </a>
              <div className="flex gap-4 mt-3">
                {["IG", "TW", "TK"].map((social) => (
                  <span
                    key={social}
                    className="text-xs tracking-widest px-2 py-1 transition-all duration-200 cursor-pointer"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      color: "#8A8578",
                      border: "1px solid rgba(138,133,120,0.3)",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#C8FF00";
                      (e.target as HTMLElement).style.borderColor = "#C8FF00";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "#8A8578";
                      (e.target as HTMLElement).style.borderColor = "rgba(138,133,120,0.3)";
                    }}
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          style={{ borderTop: "1px solid rgba(200,255,0,0.1)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#4A4840" }}
          >
            © 2025 Snoochiez. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#4A4840" }}
          >
            Must be 21+ to purchase. For legal markets only.
          </p>
        </div>
      </div>
    </footer>
  );
}
