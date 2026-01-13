"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { GithubLogo, At, WhatsappLogo } from "phosphor-react";

export default function Home() {
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

        <section className="home_section relative flex items-center justify-center  px-20 pt-50 xl:pt-20">
          {/* barcode – pinned left */}
          <div className="absolute left-8 xl:left-20 top-1/2 -translate-y-1/2 pt-55 xl:pt-20">
            <Image
              src="/images/barcodex.png"
              alt="bar"
              width={10}
              height={10}
            />
          </div>

          {/* center content */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative">
              <Image
                src="/images/cube.gif"
                alt="Cube GIF"
                width={360}
                height={360}
                className="object-contain"
                priority
              />

              {/* overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="mb-1">Hi, I’m Emmanuel</p>
                <h1 className="text-1xl md:text-2xl">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "A Software Engineer and Full-Stack Developer."
                        )
                        .pauseFor(2500)
                        .start();
                    }}
                  />
                </h1>
              </div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 left-0 w-full px-5 xl:px-20 py-10 bg-transparent flex justify-between items-center">
          <div className="flex gap-5">
            <Link href="">
              <GithubLogo />
            </Link>
            <Link href="">
              <At />
            </Link>
            <Link href="">
              <WhatsappLogo />
            </Link>
          </div>

          <div>
            <Link className="btn-primary" href={"/About"}>
              NEXT
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
            <p className="scramble gradient-text-white-gray">[ HOME ]</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
