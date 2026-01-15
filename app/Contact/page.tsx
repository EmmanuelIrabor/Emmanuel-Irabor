"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { GithubLogo, At, WhatsappLogo } from "phosphor-react";

export default function Contact() {
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
        <div className="pt-5 xl:px-20 px-5">
          <h1 className="gap-2 text-4xl font-bold flex items-center">
            Contact
          </h1>
          <p className="text-2xl text-off mt-1">
            "Send smoke signal if you need to get in touch"
          </p>
        </div>
        <div className="pt-5 xl:px-20 px-5 flex items-center gap-8 justify-end mt-5 flex-wrap">
          <div className="flex flex-col gap-1">
            <p>Email Address</p>
            <span className="text-off">Emmanuel.o.irabor@gmail.com</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Phone Number</p>
            <span className="text-off">+234 9032785260</span>
          </div>
        </div>
        <div className="overflow-hidden md:mt-20 xl:mt-10 mt-40">
          <div className="mt-5 marquee-wrapper">
            <div className="gradient-text-white-gray big-marquee marquee-track">
              Let's Build Something Legendary. Let's Build Something
              Legendary.Let's Build Something Legendary.
            </div>
          </div>
        </div>
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
            <Link className="btn-primary" href={"/Home"}>
              HOME
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
            <p className="scramble gradient-text-white-gray">[ CONTACT ]</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
