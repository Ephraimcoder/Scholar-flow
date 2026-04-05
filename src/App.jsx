import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col mesh-bg">
      {/* Abstract Background Shape with Animation */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 25%, rgba(144, 99, 255, 0.15) 0%, rgba(59, 130, 246, 0.1) 20%, rgba(236, 72, 153, 0.05) 40%, transparent 80%)",
          filter: "blur(120px)",
          transform: "translateX(10%) scale(1.5)",
          animation: "pulse-glow 10s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <div className="flex-1 flex items-center justify-center px-6 py-20 min-h-[calc(100vh-120px)]">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Hero Content */}
            <div
              className="flex-1 text-left"
              style={{
                animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A1E] leading-[1.1] mb-8 tracking-tight">
                The{" "}
                <span
                  className="relative inline-block"
                  style={{ color: "#7C3AED" }}
                >
                  local first,
                  <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-[#7C3AED]/10 rounded-full"></span>
                </span>
                <br />
                Student task
                <br />
                Management app
              </h2>

              <p className="text-xl md:text-2xl text-[#4B4B52] font-medium mb-12 max-w-xl leading-relaxed">
                Built by a student for Students.
              </p>

              <button className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#10B981] hover:bg-[#059669] text-white rounded-2xl shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.54-.38-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1.28 18h21.44c0-3.56-2.02-6.75-5.12-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                </svg>
                <span className="font-bold text-lg tracking-tight uppercase">
                  Download Now
                </span>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20"></div>
              </button>
            </div>

            {/* Right side - Abstract Visual (Image placeholder style) */}
            <div className="flex-1 relative flex justify-center items-center">
              <div className="w-full max-w-md aspect-square relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-[#3B82F6]/20 rounded-full blur-3xl opacity-60"></div>
                <div className="relative z-10 w-full h-full bg-white/40 backdrop-blur-sm rounded-[3rem] border border-white/50 shadow-2xl flex items-center justify-center">
                  {/* Abstract colorful element matching ref */}
                  <div
                    className="w-3/4 h-3/4 rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 180deg at 50% 50%, #FF2D55 0deg, #AF52DE 120deg, #5856D6 240deg, #FF2D55 360deg)",
                      filter: "blur(40px)",
                      opacity: 0.8,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-32 mesh-bg border-y border-gray-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1E] mb-6 tracking-tight">
                Simple, but <span style={{ color: "#7C3AED" }}>powerful</span>
              </h2>
              <p className="text-xl text-[#64748B] max-w-xl">
                Everything you need to stay on top of your academic life,
                without the complexity.
              </p>
            </div>
            <div className="hidden md:block w-32 h-1.5 bg-[#7C3AED]/10 rounded-full self-center"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "🔥",
                title: "Smart Sync System",
                description:
                  "Real-time cross-device synchronization, intelligent conflict resolution, offline-first architecture.",
              },
              {
                icon: "📱",
                title: "Academic Focus",
                description:
                  "Purpose-built for students, class and task separation, semester-based organization.",
              },
              {
                icon: "🎨",
                title: "Beautiful UI/UX",
                description:
                  "Modern, clean interface, smooth animations, intuitive navigation.",
              },
              {
                icon: "⚡",
                title: "Performance",
                description:
                  "Lightning-fast filtering, optimized database queries, minimal battery impact.",
              },
              {
                icon: "🔒",
                title: "Privacy First",
                description:
                  "Your data stays on your device. Complete privacy with local-first storage.",
              },
              {
                icon: "🚀",
                title: "Lightning Fast",
                description:
                  "No internet required. Access your tasks instantly with optimized performance.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-soft shadow-hover border border-white/50 group"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1E] mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-6 py-32 mesh-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="flex-1 text-left">
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1E] mb-6 tracking-tight">
                Common <span style={{ color: "#7C3AED" }}>Questions</span>
              </h2>
              <p className="text-lg text-[#64748B] max-w-xl">
                Everything you need to know about ScholarFlow and how it helps
                you succeed.
              </p>
            </div>
            <div className="hidden md:block w-32 h-1.5 bg-[#7C3AED]/10 rounded-full self-center"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Is ScholarFlow really free?",
                answer:
                  "Yes! ScholarFlow is completely free. No hidden costs, no premium tiers, no subscriptions. We believe every student deserves access to great productivity tools.",
              },
              {
                question: "How does 'local first' work?",
                answer:
                  "Local first means all your data is stored directly on your device. No cloud storage, no data mining. Your privacy is our top priority.",
              },
              {
                question: "What platforms are supported?",
                answer:
                  "ScholarFlow is available for Android devices.But other platforms are in view",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-soft shadow-hover"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                }}
              >
                <h3 className="text-xl font-bold text-[#1A1A1E] mb-3 pr-4">
                  {faq.question}
                </h3>
                <p className="text-[#64748B] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-6 py-32 bg-[#1A1A1E] text-white mx-6 mb-12 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
            Ready to transform
            <br />
            your study life?
          </h2>
          <button className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-[#1A1A1E] rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl">
            Get Started Free
          </button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/40 text-sm font-medium">
            <span>✓ 100% private</span>
            <span>✓ Always free</span>
          </div>
        </div>
      </section>
    </div>
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
