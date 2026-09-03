import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const SectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".how-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-heading",
          start: "top 85%",
        },
      });
            gsap.from(".how-step", {
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-steps",
          start: "top 80%",
        },
      });
 gsap.from(".how-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".how-steps",
          start: "top 75%",
        },
      });
    }, SectionRef);

    return () => ctx.revert();
  }, []);
    const steps = [
    {
      number: "01",
      title: "Create Your Workspace",
      description:
        "Set up your workspace and bring your team together in one organized place.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Invite Your Team",
      description:
        "Invite teammates, assign responsibilities, and start collaborating effortlessly.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 21V19C16 16.7909 14.2091 15 12 15H6C3.79086 15 2 16.7909 2 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="9"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M19 8V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M22 11H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Work Together",
      description:
        "Share ideas, manage tasks, communicate, and build projects together in real time.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="9"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M23 21V19C23 17.1362 21.7252 15.5701 20 15.126"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 3.13C17.7252 3.57006 19 5.13616 19 7C19 8.86384 17.7252 10.4299 16 10.87"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Get Things Done",
      description:
        "Track progress, complete tasks, and turn your team's ideas into real results.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9023 20.9725 14.7377 21.5839C12.5732 22.1953 10.267 22.1229 8.1486 21.3762C6.03063 20.6295 4.21489 19.2481 3.0349 17.4441C1.85491 15.6401 1.2899 13.5023 1.42458 11.3503C1.55927 9.19829 2.38653 7.14909 3.78327 5.50755C5.18 3.86601 7.07193 2.72018 9.16652 2.24139C11.2611 1.7626 13.4516 1.97492 15.4 2.85"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 4L12 14.01L9 11.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <section ref={SectionRef}    className="relative overflow-hidden bg-[#f7f7f5] px-6 py-24 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-blue-300">
      </div>
      <div className="pointer-events-none absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-blue-300/25">
      </div>
      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl">
        <div className="how-heading mx-auto max-w-7xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Simple Process
          </p>
<h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
    How{" "}
    <span className="text-blue-400">
        CollabSpAce
        </span>{" "}
        works
</h2>
<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
      Everything your team needs to move from an idea to a finished
            project — without the unnecessary complexity.
</p>
        </div>
        {/* steps*/}
<div className=" how-steps relative mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    <div className="how-line  absolute left-[12%] right-[12%] top-[58px] hidden h-px  bg-neutral-300 lg:block">

    </div>
    {steps.map((step)=>(
    <div className="how-step group  relative z-10">
                <div className="relative mx-auto mb-7 flex h-[116px] w-[116px] items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-white transition-all duration-300 group-hover:bg-blue-500">
                  {step.icon}
                </div>
 <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>
                <div className="text-center">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500 md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
))}
</div>
 <div className="mt-20 flex justify-center">
          <div className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm text-neutral-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
            Built for teams that want to move faster.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;