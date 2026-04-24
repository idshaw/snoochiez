/*
 * SNOOCHIEZ — Age Gate Modal
 * Full-screen 21+ verification on first visit
 * Persisted via localStorage so it only shows once per browser session
 * Dark charcoal bg | Sky Blue #1AABDC accent | Bebas Neue display
 */
import { useState, useEffect } from "react";

const BRAND = "#1AABDC";
const OFF_WHITE = "#F5F0E8";
const MUTED = "#8A8578";
const LOGO_URL = "/manus-storage/snoochiez-logo-blue_62ca93c2.webp";
const STORAGE_KEY = "snoochiez_age_verified";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [declining, setDeclining] = useState(false);

  useEffect(() => {
    // Only show if not already verified in this session
    const verified = localStorage.getItem(STORAGE_KEY);
    if (!verified) {
      // Small delay so the page loads first
      const t = setTimeout(() => setVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  const handleDecline = () => {
    setDeclining(true);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(8,7,6,0.97)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 0.4s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div
        style={{
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          animation: "slideUp 0.5s ease 0.1s both",
        }}
      >
        {declining ? (
          /* Declined state */
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                color: OFF_WHITE,
                letterSpacing: "0.04em",
                lineHeight: 1,
                marginBottom: "1rem",
              }}
            >
              SORRY,<br />
              <span style={{ color: BRAND }}>NOT TODAY.</span>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: MUTED,
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              You must be 21 or older to visit Snoochiez. Come back when you're of legal age.
            </p>
          </div>
        ) : (
          /* Verification state */
          <>
            {/* Logo */}
            <div
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                padding: "0",
                marginBottom: "2.5rem",
              }}
            >
              <img
                src={LOGO_URL}
                alt="Snoochiez"
                style={{ height: "56px", width: "auto", display: "block" }}
              />
            </div>

            {/* Divider */}
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: BRAND,
                margin: "0 auto 2rem",
              }}
            />

            {/* Headline */}
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                color: OFF_WHITE,
                letterSpacing: "0.04em",
                lineHeight: 0.95,
                marginBottom: "1rem",
              }}
            >
              ARE YOU<br />
              <span style={{ color: BRAND }}>21 OR OLDER?</span>
            </div>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: MUTED,
                fontSize: "0.9rem",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                maxWidth: "340px",
                margin: "0 auto 2.5rem",
              }}
            >
              You must be 21 years of age or older to enter this site. By clicking "I'm 21+" you confirm you are of legal age in your jurisdiction.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                onClick={handleConfirm}
                style={{
                  width: "100%",
                  padding: "1rem",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  fontWeight: "bold",
                  backgroundColor: BRAND,
                  color: "#ffffff",
                  border: `2px solid ${BRAND}`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
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
                YES, I'M 21+
              </button>

              <button
                onClick={handleDecline}
                style={{
                  width: "100%",
                  padding: "1rem",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  backgroundColor: "transparent",
                  color: MUTED,
                  border: "1px solid rgba(138,133,120,0.25)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "rgba(138,133,120,0.5)";
                  (e.target as HTMLElement).style.color = OFF_WHITE;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "rgba(138,133,120,0.25)";
                  (e.target as HTMLElement).style.color = MUTED;
                }}
              >
                NO, I'M UNDER 21
              </button>
            </div>

            {/* Legal note */}
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                color: "#3A3830",
                marginTop: "2rem",
                lineHeight: 1.5,
              }}
            >
              Cannabis products are for legal markets only. Must be 21+ to purchase.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
