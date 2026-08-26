import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-visual",
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <h1 className="hero-title text-6xl md:text-7xl font-bold leading-tight text-blue-950">
            Collaborate
            <br />
            Create
            <br />
            <span className="text-blue-600">Achieve</span>
          </h1>

          <p className="hero-description mt-6 text-lg text-gray-600 max-w-lg">
            One powerful workspace where teams can collaborate,
            communicate and bring ideas to life.
          </p>

          <div className="hero-buttons mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="h-80 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center">
            <span className="text-gray-400 text-xl">
              Dashboard Preview
            </span>
          </div>
        </div>

      </div>
    </section>

  );
};

export default HeroSection;