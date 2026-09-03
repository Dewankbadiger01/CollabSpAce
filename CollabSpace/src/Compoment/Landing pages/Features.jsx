import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-heading",
          start: "top 80%",
        },
      });

      gsap.from(".feature-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Team Collaboration",
      description:
        "Bring your team together and collaborate seamlessly in one shared workspace.",
    },
    {
      title: "Project Management",
      description:
        "Organize projects, track progress, and keep everything moving efficiently.",
    },
    {
      title: "Task Management",
      description:
        "Create, assign, and manage tasks so everyone knows what needs to be done.",
    },
    {
      title: "Smart Workspaces",
      description:
        "Create dedicated workspaces for different teams, projects, and ideas.",
    },
    {
      title: "Team Communication",
      description:
        "Keep conversations, updates, and important information connected to your work.",
    },
    {
      title: "Productivity",
      description:
        "Reduce friction and help your team focus on getting meaningful work done.",
    },
  ];

  return (
    <section id="feature"
      ref={sectionRef}
      className="min-h-screen px-8 py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        <div className="feature-heading text-center max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-blue-950">
            Everything your team needs
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Collaborate, organize, and manage your work from one powerful
            platform.
          </p>
        </div>

        <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                {index + 1}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-blue-950">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;