import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { useState, useEffect, useRef } from "react";
// Main Landing Page Component
const LandingPage = () => {
  const NAV_LINKS = ["Features", "FAQ", "Download"];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const FEATURES = [
    {
      icon: "⚡",
      title: "Offline-First Architecture",
      description:
        "All your data lives on your device. No internet? No problem. ScholarFlow works seamlessly without connectivity.",
      accent: "#7C3AED",
      bg: "rgba(124,58,237,0.07)",
    },
    {
      icon: "📚",
      title: "Academic Focus",
      description:
        "Separate by class, category, and priority. Purpose-built workflows for how students actually think.",
      accent: "#0EA5E9",
      bg: "rgba(14,165,233,0.07)",
    },
    {
      icon: "🛡️",
      title: "Privacy You Control",
      description:
        "Your tasks stay on your device by default. Optional analytics are anonymized and opt-in only. Backups happen on your terms — never automatically.",
      accent: "#10B981",
      bg: "rgba(16,185,129,0.07)",
    },
    {
      icon: "🎯",
      title: "Smart Prioritization",
      description:
        "Intelligent deadline tracking with streak-based motivation to keep you moving through the semester.",
      accent: "#F59E0B",
      bg: "rgba(245,158,11,0.07)",
    },
    {
      icon: "🌊",
      title: "Fluid Interface",
      description:
        "Every interaction is buttery smooth. Animations that delight, not distract. Designed for daily use.",
      accent: "#EC4899",
      bg: "rgba(236,72,153,0.07)",
    },
    {
      icon: "🆓",
      title: "Forever Free",
      description:
        "No freemium gates. No subscription walls. Built by a student who knows the budget is always zero.",
      accent: "#7C3AED",
      bg: "rgba(124,58,237,0.07)",
    },
  ];

  const FAQS = [
    {
      q: "Is ScholarFlow really free?",
      a: "Completely free. No premium tier, no subscription, no in-app purchases. Every feature is available to everyone who downloads it.",
    },
    {
      q: "How does local-first storage work?",
      a: "Your tasks, classes, and notes are stored directly on your Android device using a local database. Nothing is uploaded anywhere.",
    },
    {
      q: "Which platforms does it support?",
      a: "Currently Android. iOS, desktop, and web versions are being actively explored. Follow for updates.",
    },
    {
      q: "Can I back up my data?",
      a: "Yes — ScholarFlow lets you back up your tasks to the cloud via Appwrite. It's optional and on your terms, so your data is never backed up without you choosing to.",
    },
  ];

  function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setVisible(true);
        },
        { threshold },
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
    return [ref, visible];
  }

  function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem 0",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#F1F0FF",
              letterSpacing: "-0.01em",
            }}
          >
            {q}
          </span>
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: open ? "#7C3AED" : "rgba(124,58,237,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.25s ease",
              fontSize: "1rem",
              color: open ? "#fff" : "#A78BFA",
            }}
          >
            {open ? "−" : "+"}
          </span>
        </div>
        <div
          style={{
            overflow: "hidden",
            maxHeight: open ? "200px" : "0",
            transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p
            style={{
              marginTop: "0.75rem",
              color: "#94A3B8",
              lineHeight: 1.7,
              fontSize: "0.95rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {a}
          </p>
        </div>
      </div>
    );
  }

  function FeatureCard({ feature, index }) {
    const [ref, visible] = useInView();
    return (
      <div
        ref={ref}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "1.75rem",
          padding: "2rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
          backdropFilter: "blur(8px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "120px",
            height: "120px",
            background: `radial-gradient(circle at 100% 0%, ${feature.accent}18 0%, transparent 70%)`,
            borderRadius: "0 1.75rem 0 0",
          }}
        />
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "1rem",
            background: feature.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            marginBottom: "1.25rem",
            border: `1px solid ${feature.accent}25`,
          }}
        >
          {feature.icon}
        </div>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#F1F0FF",
            marginBottom: "0.6rem",
            letterSpacing: "-0.02em",
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            color: "#64748B",
            lineHeight: 1.65,
            fontSize: "0.9rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {feature.description}
        </p>
      </div>
    );
  }

  const [scrolled, setScrolled] = useState(false);
  const [heroRef, heroVisible] = useInView(0.1);
  const [featRef, featVisible] = useInView(0.1);
  const [faqRef, faqVisible] = useInView(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #09090F; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-14px) rotate(1deg); }
          66% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(180deg) translateX(130px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(130px) rotate(-540deg); }
        }
        @keyframes orbit3 {
          from { transform: rotate(60deg) translateX(170px) rotate(-60deg); }
          to { transform: rotate(420deg) translateX(170px) rotate(-420deg); }
        }
        @keyframes pulse-orb {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.04); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .hero-headline {
          animation: fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }
        .hero-sub {
          animation: fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both;
        }
        .hero-cta {
          animation: fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both;
        }
        .hero-orb {
          animation: float 8s ease-in-out infinite, pulse-orb 6s ease-in-out infinite;
        }
        .orb-dot-1 { animation: orbit 7s linear infinite; }
        .orb-dot-2 { animation: orbit2 11s linear infinite; }
        .orb-dot-3 { animation: orbit3 15s linear infinite reverse; }

        .download-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 2rem;
          background: linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
          color: white;
          border: none;
          border-radius: 1rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.01em;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 0 1px rgba(124,58,237,0.4), 0 8px 32px rgba(124,58,237,0.35);
          text-decoration: none;
        }
        .download-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 0 1px rgba(124,58,237,0.5), 0 16px 48px rgba(124,58,237,0.5);
        }
        .download-btn:active { transform: scale(0.98); }

        .shimmer-text {
          background: linear-gradient(90deg, #A78BFA 0%, #E879F9 30%, #F8FAFC 50%, #E879F9 70%, #A78BFA 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #94A3B8;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #F1F0FF; }

        .stat-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(124,58,237,0.12);
          border: 1px solid rgba(124,58,237,0.25);
          color: #A78BFA;
        }

        @media (max-width: 768px) {
          .hero-layout { flex-direction: column !important; text-align: center; }
          .hero-headline-size { font-size: 3rem !important; }
          .orb-wrap { display: none !important; }
          .feat-grid { grid-template-columns: 1fr !important; }
          .cta-title { font-size: 2.5rem !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#09090F",
          color: "#F1F0FF",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* ── NAV ── */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: "1rem 2rem",
            background: scrolled ? "rgba(9,9,15,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.06)"
              : "none",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              ✦
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "1.15rem",
                letterSpacing: "-0.02em",
                color: "#F1F0FF",
              }}
            >
              Scholar<span style={{ color: "#A78BFA" }}>Flow</span>
            </span>
          </div>

          <div className="nav-links" style={{ display: isMobile ? 'none' : 'flex', gap: isTablet ? '1.25rem' : '2.5rem', alignItems: 'center' }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(l.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {l}
              </a>
            ))}
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/privacy');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="nav-link"
              style={{ cursor: 'pointer' }}
            >
              Privacy Policy
            </a>
          </div>

          {!isMobile && (
            <a
              href="#"
              className="download-btn"
              style={{
                padding: isTablet ? "0.35rem 0.8rem" : "0.55rem 1rem",
                fontSize: isTablet ? "0.75rem" : "0.85rem",
                borderRadius: isTablet ? "0.55rem" : "0.65rem",
                minWidth: isTablet ? 90 : 130,
                textAlign: 'center',
              }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("download")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {isTablet ? 'Download' : 'Download Free'}
            </a>
          )}

          {/* mobile hamburger */}
          <div style={{ display: isMobile ? 'flex' : 'none', alignItems: 'center' }}>
            <button aria-label="Toggle menu" onClick={() => setMobileOpen(o => !o)} className="p-2 rounded-md text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* mobile menu overlay */}
          {mobileOpen && (
            <div style={{ position: 'fixed', top: 70, left: 0, right: 0, background: '#09090F', zIndex: 200, borderTop: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {NAV_LINKS.map((l) => (
                  <a key={l} href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white">
                    {l}
                  </a>
                ))}
                <a href="/privacy" onClick={(e) => { e.preventDefault(); setMobileOpen(false); window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-white">
                  Privacy Policy
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white font-semibold">
                  Download Free
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "7rem 2rem 4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* BG glow */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "700px",
              height: "500px",
              background:
                "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)",
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "4rem",
            }}
            className="hero-layout"
          >
            {/* Left */}
            <div style={{ flex: 1, maxWidth: "620px" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="stat-badge">
                  ✦ Built for students, by a student
                </span>
              </div>

              <h1
                className="hero-headline hero-headline-size"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "4.5rem",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  color: "#F8FAFC",
                  marginBottom: "1.5rem",
                }}
              >
                The task app your{" "}
                <span className="shimmer-text">grades deserve</span>
              </h1>

              <p
                className="hero-sub"
                style={{
                  fontSize: "1.15rem",
                  color: "#64748B",
                  lineHeight: 1.7,
                  marginBottom: "2.5rem",
                  maxWidth: "480px",
                }}
              >
                Local-first, privacy-respecting task management built
                specifically for academic life. No cloud, no cost, no
                compromise.
              </p>

              <div
                className="hero-cta"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#"
                  className="download-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.54-.38-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1.28 18h21.44c0-3.56-2.02-6.75-5.12-8.52z" />
                  </svg>
                  Download for Android
                </a>
                
              </div>

              <div style={{ marginTop: "3rem", display: "flex", gap: "2rem" }}>
                {[
                  ["100%", "Private"],
                  ["Local-first"],
                  ["∞", "Free forever"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        color: "#A78BFA",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "#475569",
                        fontWeight: 500,
                        marginTop: "0.15rem",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — orbiting visual */}
            <div
              className="orb-wrap"
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                minHeight: "420px",
              }}
            >
              {/* Outer ring */}
              <div
                style={{
                  width: 380,
                  height: 380,
                  borderRadius: "50%",
                  border: "1px dashed rgba(124,58,237,0.15)",
                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  border: "1px dashed rgba(236,72,153,0.1)",
                  position: "absolute",
                }}
              />

              {/* Central orb */}
              <div
                className="hero-orb"
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg at 50% 50%, #7C3AED 0%, #EC4899 25%, #0EA5E9 50%, #10B981 75%, #7C3AED 100%)",
                  filter: "blur(2px) saturate(1.4)",
                  boxShadow:
                    "0 0 80px rgba(124,58,237,0.5), 0 0 160px rgba(236,72,153,0.2)",
                  position: "relative",
                  zIndex: 2,
                }}
              />

              {/* Frosted overlay */}
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: "rgba(9,9,15,0.35)",
                  backdropFilter: "blur(20px)",
                  position: "absolute",
                  zIndex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#F1F0FF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ScholarFlow
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#A78BFA",
                    fontWeight: 600,
                  }}
                >
                  v1.0 Android
                </span>
              </div>

              {/* Orbiting dots */}
              {[
                {
                  cls: "orb-dot-1",
                  color: "#7C3AED",
                  icon: "📚",
                  label: "Classes",
                },
                {
                  cls: "orb-dot-2",
                  color: "#10B981",
                  icon: "✓",
                  label: "Done",
                },
                {
                  cls: "orb-dot-3",
                  color: "#F59E0B",
                  icon: "⚡",
                  label: "Due Today",
                },
              ].map((dot) => (
                <div
                  key={dot.cls}
                  className={dot.cls}
                  style={{
                    position: "absolute",
                    zIndex: 4,
                    width: 56,
                    height: 56,
                    borderRadius: "14px",
                    background: "rgba(15,15,25,0.9)",
                    border: `1px solid ${dot.color}40`,
                    backdropFilter: "blur(12px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2px",
                    boxShadow: `0 4px 20px ${dot.color}30`,
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{dot.icon}</span>
                  <span
                    style={{
                      fontSize: "0.55rem",
                      fontWeight: 600,
                      color: dot.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {dot.label.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
      
        </section>
        {/* ── FEATURES ── */}
        <section
          id="features"
          style={{ padding: "6rem 2rem", position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "1px",
              height: "80px",
              background:
                "linear-gradient(to bottom, transparent, rgba(124,58,237,0.4), transparent)",
            }}
          />

          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              ref={featRef}
              style={{
                textAlign: "center",
                marginBottom: "4rem",
                opacity: featVisible ? 1 : 0,
                transform: featVisible ? "none" : "translateY(24px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <span
                className="stat-badge"
                style={{ marginBottom: "1rem", display: "inline-flex" }}
              >
                Features
              </span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "3.2rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  color: "#F8FAFC",
                  marginTop: "1rem",
                }}
              >
                Simple on the surface.
                <br />
                <span style={{ color: "#A78BFA" }}>Powerful underneath.</span>
              </h2>
              <p
                style={{
                  color: "#64748B",
                  fontSize: "1.05rem",
                  marginTop: "1rem",
                  maxWidth: "500px",
                  margin: "1rem auto 0",
                  lineHeight: 1.6,
                }}
              >
                Everything you need to stay ahead of deadlines and ace the
                semester.
              </p>
            </div>

            <div
              className="feat-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.25rem",
              }}
            >
              {FEATURES.map((f, i) => (
                <FeatureCard key={f.title} feature={f} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          style={{ padding: "6rem 2rem", position: "relative" }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              ref={faqRef}
              style={{
                opacity: faqVisible ? 1 : 0,
                transform: faqVisible ? "none" : "translateY(24px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <span
                className="stat-badge"
                style={{ marginBottom: "1.5rem", display: "inline-flex" }}
              >
                FAQ
              </span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "3rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#F8FAFC",
                  marginBottom: "3rem",
                  lineHeight: 1.1,
                }}
              >
                Common questions
                <br />
                <span style={{ color: "#A78BFA" }}>answered.</span>
              </h2>
              <div>
                {FAQS.map((f) => (
                  <FaqItem key={f.q} {...f} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="download" style={{ padding: "4rem 2rem 6rem" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.08) 60%, rgba(9,9,15,0) 100%)",
              border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: "2.5rem",
              padding: "5rem 3rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                left: "-60px",
                width: "250px",
                height: "250px",
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            <span
              className="stat-badge"
              style={{ marginBottom: "1.5rem", display: "inline-flex" }}
            >
              Free Download
            </span>
            <h2
              className="cta-title"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "3.5rem",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#F8FAFC",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Ready to transform
              <br />
              <span className="shimmer-text">your study life?</span>
            </h2>
            <p
              style={{
                color: "#64748B",
                fontSize: "1.05rem",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
              }}
            >
              Join students who keep their academic life organized, private, and
              on track.
            </p>
            <a
              href="#"
              className="download-btn"
              style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.54-.38-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1.28 18h21.44c0-3.56-2.02-6.75-5.12-8.52z" />
              </svg>
              Get ScholarFlow Free
            </a>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                color: "#334155",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <span>✓ 100% offline</span>
              <span>✓ No ads, ever</span>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            padding: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "6px",
                background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
              }}
            >
              ✦
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "0.95rem",
                color: "#475569",
              }}
            >
              Scholar<span style={{ color: "#7C3AED" }}>Flow</span>
            </span>
          </div>
          <p style={{ color: "#334155", fontSize: "0.8rem" }}>
            Built by a student, for every student. © 2025
          </p>
        </footer>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
