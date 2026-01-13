"use client";
import {
  StarFour,
  PencilCircle,
  FileCode,
  Scroll,
  ArrowCircleLeft,
  ArrowCircleRight,
} from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";
import SkillCard from "@/components/ui/skill_card";

export default function Skills() {
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

        <div className="xl:px-20 px-5 pt-5">
          <h1 className="flex items-center gap-2">
            <span className="mix-grd">Skills & Technologies</span>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              className="inline-block"
            >
              <StarFour className="text-[#a5efff]" />
            </motion.div>
          </h1>
          <hr className="dotted-line" />
          <span className="font-light text-xs">
            [ My collection of prefered tools and kits for making modern
            scalable applications ]
          </span>
        </div>

        <div className="skills_container xl:px-20 px-5 mt-10 flex flex-col xl:flex-row gap-10">
          <SkillCard
            title="UiUx Design"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<PencilCircle className="text-[#eabfff]" />}
          />
          <SkillCard
            title="Frontend Architecture"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<FileCode className="text-[#eabfff]" />}
          />
          <SkillCard
            title="Backend Development"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<Scroll className="text-[#eabfff]" />}
          />
        </div>
        <div className="flex items-center justify-end mt-10 gap-2 px-5 xl:px-20">
          <button className="text-xl">
            <ArrowCircleLeft weight="fill" />
          </button>
          <button className="text-xl">
            <ArrowCircleRight weight="fill" />
          </button>
        </div>

        <div className="xl:px-20 px-5 mt-10 flex flex-wrap justify-between gap-10">
          <div className="flex flex-col gap-2 w-full xl:w-[calc(33.333%-2rem)] technologies--gradient">
            <h1 className="font-bold">Langauges</h1>
            <p className="font-light text-xs text-wrap">
              HTML , Javascript , PHP , Golang , Python , c++ , Dart & Flutter ,
              SQL
            </p>
          </div>
          <div className="technologies--gradient flex flex-col gap-2 w-full xl:w-[calc(33.333%-2rem)]">
            <h1 className="font-bold">FrameWorks</h1>
            <p className="font-light text-xs">
              Next js , Vue js , Angular js , Django , SvelteKit , Laravel
            </p>
          </div>
          <div className="technologies--gradient flex flex-col gap-2 w-full xl:w-[calc(33.333%-2rem)]">
            <h1 className=" font-bold">Databases & State</h1>
            <p className="font-light text-xs">
              Postgresql , MariaDB , CouchDB , Firebase , Mongodb
            </p>
          </div>

          <div className="technologies--gradient flex flex-col gap-2 w-full xl:w-[calc(33.333%-2rem)]">
            <h1 className="font-bold">UiUx & Styling</h1>
            <p className="font-light text-xs text-wrap">
              Css , Scss , Stylex , Tailwind , Bootstrap, figma , Qt Designer ,
              GSAP , AOS , Lenis , Framer Motion , LightBox , Parallax, Barba.js
            </p>
          </div>

          <div className="technologies--gradient flex flex-col gap-2 w-full xl:w-[calc(33.333%-2rem)]">
            <h1 className="font-bold">Ai & Ml</h1>
            <p className="font-light text-xs">
              Tensor Flow , Stich , OpenAi -Api , Whisk, Generative AI , Claude
            </p>
          </div>

          <div className="technologies--gradient flex flex-col gap-2 w-full xl:w-[calc(33.333%-2rem)]">
            <h1 className="font-bold">Packages & Others</h1>
            <p className="font-light text-xs">
              Node js , Expressjs , Github , Git , Railway , Replit ,
              Uptime-Robot , Google Colab , Kali Linux
            </p>
          </div>
        </div>

        <div className=" w-full px-5 xl:px-20 py-10 bg-transparent flex items-center justify-center xl:justify-end">
          <div>
            <Link className="btn-primary" href={"/Works"}>
              WORKS
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
            <p className="scramble gradient-text-white-gray">[ Skills ]</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
