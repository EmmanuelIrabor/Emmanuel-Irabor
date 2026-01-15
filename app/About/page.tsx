"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { ArrowRight, GithubLogo, At, WhatsappLogo } from "phosphor-react";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    class TextScramble {
      el: HTMLElement;
      originalText: string;
      chars: string;
      queue: any[];
      frame: number;
      frameRequest: number | null;
      speed: number;

      constructor(el: HTMLElement, speed = 2) {
        this.el = el;
        this.originalText = el.textContent || "";
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.queue = [];
        this.frame = 0;
        this.frameRequest = null;
        this.speed = speed;
        this.update = this.update.bind(this);
      }

      scramble() {
        const text = this.originalText;
        const length = text.length;

        this.queue = [];
        for (let i = 0; i < length; i++) {
          const start = Math.floor(Math.random() * 30);
          const end = start + Math.floor(Math.random() * 30);
          this.queue.push({ from: text[i], to: text[i], start, end });
        }

        this.frame = 0;
        this.update();
      }

      update() {
        let output = "";
        let complete = 0;

        for (let i = 0; i < this.queue.length; i++) {
          let { from, to, start, end, char } = this.queue[i];

          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.15) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }

        this.el.innerHTML = output;

        if (complete !== this.queue.length) {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame += this.speed;
        }
      }

      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const elements = document.querySelectorAll<HTMLElement>(".scramble");

    elements.forEach((el) => {
      const fx = new TextScramble(el, 2);
      fx.scramble();
    });

    setTimeout(() => setLoading(false), 1600);
  }, []);
  return (
    <>
      {/* MAIN CONTENT */}
      <motion.div
        className="main"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{
          clipPath: loading
            ? "circle(0% at 50% 50%)"
            : "circle(150% at 50% 50%)",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Navbar />

        <div className="xl:px-20 px-5 pt-5 flex flex-col xl:flex-row gap-10 justify-center items-center">
          <div className="xl:pr-50">
            <h1 className="font-bold text-2xl">About Me</h1>
            <p className="pt-2 font-thin">
              I’m a software developer with a strong foundation in computer
              science and a deep interest in building systems that feel
              intentional, usable, and well thought out. My work sits at the
              intersection of design and engineering, where I focus on turning
              abstract ideas into practical digital products that solve real
              problems. I work across web and application development, with
              experience in frontend architecture, backend systems, DevOps, and
              emerging areas like AI-driven interfaces. I’ve built e-commerce
              platforms, single-page applications, and experimental tools using
              modern stacks such as Next.js, Laravel, Bootstrap, and JavaScript
              frameworks, always aiming for clean structure, performance, and
              long-term maintainability.
            </p>
          </div>
          <div>
            {" "}
            <Image
              src="/images/head.gif"
              alt="blob GIF"
              width={1000}
              height={1000}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="mt-5 marquee-wrapper">
            <div className="big-marquee marquee-track">
              Design . &nbsp;&nbsp; Development . &nbsp;&nbsp; Deployment .
              &nbsp;&nbsp; Maintenance . &nbsp;&nbsp; Solutions . &nbsp;&nbsp;
              Architecture
            </div>
          </div>
        </div>

        <div className="xl:px-20 px-5 pt-10 flex flex-col xl:flex-row gap-10 justify-center items-center">
          <div className="xl:pr-50">
            <p className="pt-2 font-thin">
              Beyond engineering, I’m deeply drawn to the creative and
              philosophical side of building. I see software not just as code,
              but as a medium for expression, systems thinking, and quiet
              experimentation. Many of my ideas start abstract, sometimes
              impractical on the surface, then slowly take shape as structured
              products through exploration and iteration. I’m motivated by the
              desire to create things that matter, tools that empower people,
              reward goodwill, or challenge how we interact with technology. I’m
              less interested in trends and more focused on originality,
              long-term impact, and leaving behind work that reflects intention,
              curiosity, and a belief that technology can add more good to the
              world than noise.
            </p>
          </div>
          <div>
            {" "}
            <Image
              src="/images/mee.png"
              alt="Me"
              width={1000}
              height={1000}
              className="w-500 rounded-sm"
              priority
            />
          </div>
        </div>

        <div className="xl:px-20 px-5 pt-20">
          <h1 className="font-bold">
            <div className="flex items-center gap-1">
              Organizations <ArrowRight />
            </div>
          </h1>
        </div>
        <div className="mt-2 flex xl:gap-20 gap-10 items-center overflow-hidden">
          <div className="img_marquee mt-5 overflow-hidden">
            <div className="img_marquee-track flex items-center xl:gap-20 gap-10">
              <Image
                src="/images/organizations/org_one.webp"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_two.png"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_three.png"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_four.png"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_five.png"
                alt="org"
                width={100}
                height={100}
              />
              <Image
                src="/images/organizations/org_six.svg"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_seven.png"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_eight.png"
                alt="org"
                width={50}
                height={50}
              />

              {/* duplicate for seamless loop */}
              <Image
                src="/images/organizations/org_one.webp"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_two.png"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_three.png"
                alt="org"
                width={50}
                height={50}
              />
              <Image
                src="/images/organizations/org_four.png"
                alt="org"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        <div className=" w-full px-5 xl:px-20 py-10 bg-transparent flex items-center justify-center xl:justify-end">
          <div>
            <Link className="btn-primary" href={"/Skills"}>
              SKILLS
            </Link>
          </div>
        </div>
      </motion.div>

      {/* PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="preloader fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="scramble gradient-text-white-gray">[ ABOUT ]</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
