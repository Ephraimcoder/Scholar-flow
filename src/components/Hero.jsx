import React from "react";
import { Download, Android } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-6 py-16 md:py-24 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight">
              The{" "}
              <span className="italic font-bold" style={{ color: "#9063FF" }}>
                local first
              </span>
              <br />
              Student Task
              <br />
              Management app
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-700 font-medium">
              Built by a student for Students.
            </p>

            {/* Download Button */}
            <button className="mt-8 group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-green-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Android className="w-5 h-5 text-black" />
              <span className="text-black font-bold text-sm md:text-base uppercase tracking-wide">
                DOWNLOAD NOW
              </span>
              <Download className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Right Column - Empty for now as reference shows only gradient */}
          <div className="order-1 lg:order-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
