"use client";
import {
  StarFour,
  PencilCircle,
  FileCode,
  Scroll,
  ArrowCircleLeft,
  ArrowCircleRight,
  Wall,
  Robot,
  Rocket,
} from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import SkillCard from "@/components/ui/skill_card";

export default function Skills() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const next = () => setPage((p) => (p === 1 ? 0 : 1));
  const prev = () => setPage((p) => (p === 0 ? 1 : 0));

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

        <div className="overflow-hidden xl:px-20 px-5 mt-10">
          <div
            className="flex transition-transform duration-500 ease-out gap-10 card-slider"
            style={{ transform: `translateX(-${page * 110}%)` }}
          >
            <div className="flex-shrink-0 w-full flex flex-col xl:flex-row gap-10">
              <SkillCard
                title="UI/UX Design"
                description="I design user interfaces and experiences with a strong focus on usability, clarity, and visual consistency across products. My process includes wireframing, prototyping, defining user journeys, and translating product requirements into structured interface layouts. I work with typography, spacing, color systems, and interaction patterns to ensure designs are intuitive and accessible. I also collaborate closely with development workflows to ensure designs are practical to implement, scalable, and aligned with overall product goals and user expectations."
                icon={<PencilCircle className="text-[#eabfff]" />}
              />

              <SkillCard
                title="Frontend Architecture"
                description="I design and structure frontend applications with an emphasis on scalability, performance, and maintainability. My work involves organizing component systems, managing state, defining data flow, and establishing clear project structures for long-term growth. I focus on building reusable components, optimizing rendering performance, and ensuring consistent behavior across browsers and devices. This approach helps keep applications easy to extend, debug, and evolve as product requirements change."
                icon={<FileCode className="text-[#eabfff]" />}
              />

              <SkillCard
                title="Backend Development"
                description="I build and maintain backend systems that handle application logic, data processing, and server-side operations. My work includes designing APIs, managing databases, implementing authentication and authorization, and ensuring reliable data flow between services. I focus on writing secure, efficient, and maintainable code while supporting scalability and performance. This allows applications to remain stable under load and adaptable as features and requirements grow."
                icon={<Scroll className="text-[#eabfff]" />}
              />
            </div>

            <div className="flex-shrink-0 w-full flex flex-col xl:flex-row gap-10 xl:ml-17">
              <SkillCard
                title="System Design"
                description="I design and structure complex systems to ensure scalability, reliability, and maintainability. This involves defining system components, service interactions, data flow, and integration patterns to meet both functional and non-functional requirements. I focus on creating architectures that are modular, easy to extend, and resilient under load, while balancing performance, security, and operational efficiency. My designs aim to support long-term growth and simplify collaboration across development teams."
                icon={<Wall className="text-[#eabfff]" />}
              />

              <SkillCard
                title="DevOps"
                description="I manage deployment, automation, and infrastructure to ensure applications run smoothly and reliably. My work includes setting up CI/CD pipelines, monitoring systems, handling cloud services, and automating repetitive tasks. I focus on optimizing performance, maintaining security, and enabling rapid, stable releases. This allows development teams to deliver features faster while keeping applications resilient, scalable, and maintainable across environments."
                icon={<Rocket className="text-[#eabfff]" />}
              />

              <SkillCard
                title="AI & ML"
                description="I develop AI and machine learning models to analyze data, make predictions, and create intelligent applications. My work includes designing algorithms, training models, implementing data pipelines, and integrating AI solutions into products. I focus on building scalable, accurate, and efficient systems that solve real-world problems while exploring new approaches in natural language processing, computer vision, and predictive analytics. This allows products to learn, adapt, and deliver smarter experiences over time."
                icon={<Robot className="text-[#eabfff]" />}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-10 gap-2 px-5 xl:px-20">
          <button
            onClick={() => setPage(0)}
            className="text-xl disabled:opacity-40 cursor-pointer"
            disabled={page === 0}
          >
            <ArrowCircleLeft weight="fill" />
          </button>

          <button
            onClick={() => setPage(1)}
            className="text-xl disabled:opacity-40 cursor-pointer"
            disabled={page === 1}
          >
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
