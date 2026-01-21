"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import {
  TerminalWindow,
  FigmaLogo,
  Notebook,
  DesktopTower,
  LinkSimple,
} from "phosphor-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Works() {
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
          <h1 className="gap-2 text-2xl font-bold mb-5 flex items-center">
            My Works <DesktopTower />
          </h1>
          <p className="text-xs mb-10">
            Here are some of my projects showcasing my skills and expertise.
          </p>
        </div>

        <div className="projects-container px-5 xl:px-20">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Divinity Scarfs
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Divinity Scarfs is an exclusive collection of foulard piece
                  brought to life in a digital gallery enabling the purchase of
                  the exclusive pieces.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/ds_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/ds_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/ds_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/ds_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={"https://divinity-scarfs.vercel.app/"}
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Mysquad
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  MySquad is a the future of cyber sports and Artificial
                  intelligence web3 powered assets.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/mys_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/mys_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/mys_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/mys_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={"https://divinity-scarfs.vercel.app/"}
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                E8stores
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  E8Stores is a platform that enables merchants to create their
                  personal digital stores in just a few clicks and fosters pair
                  to pair commerce.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/ez_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/ez_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/ez_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/ez_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link className="text-cyan flex items-center gap-1" href={""}>
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Ride The Flo
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Ride The Flo is a brand dedicated to documenting Afro Culture
                  and modern Artsists.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/rtf_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/rtf_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/rtf_five.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/rtf_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={"https://courageous-squirrel-0922a4.netlify.app/"}
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Open Discussion
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Open Discussion is a digital archive of burning thoughts and
                  societal targeted articles, think pieces and discussions.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/od_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/od_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/od_five.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/od_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={"https://opendiscussion.space/"}
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Duel Domain
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Duel Domain is a web3 platform that rewards gaming with crypto
                  currency.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/dd_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/dd_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/dd_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/dd_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={
                      "https://www.figma.com/design/9rRVJTNlPwP5N3IXQfLmPj/Duel-Domain?node-id=0-1&p=f&t=NFvkPMPKtBzkErpl-0"
                    }
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value="item-7">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Fido Ride
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Fido Ride is an E-hailing services that caters for a range of
                  transportational needs.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/fd_one.png"
                    alt="pj"
                    width={200}
                    height={200}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/fd_two.png"
                    alt="pjF"
                    width={200}
                    height={200}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/fd_three.png"
                    alt="pj"
                    width={175}
                    height={175}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/fd_four.png"
                    alt="pjF"
                    width={175}
                    height={175}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2"></div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={"https://github.com/EmmanuelIrabor/Fido-Ride-App"}
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent> */}
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Deus Ui
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>Peer into the future of companionship with Deus .</p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/de_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/de_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/de_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/de_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={
                      "https://www.figma.com/design/LARUos8XHZEdC6tuEVCePX/Deus"
                    }
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Knight Ui
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Inspired by Mediveal knights, knight ui draws a cross between
                  the digital age and mediveal aesthetics.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/kn_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/kn_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/kn_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/kn_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={
                      "https://www.figma.com/design/FFA4D8DHSA7WtCZkfVoGIo/knight?t=3WEavliBAdFnmbvK-0"
                    }
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Vip Records
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Vip Records serves as beacon for local creativity and artistic
                  drive.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/vp_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/vp_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/vp_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/vp_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={"https://viprecords.org/"}
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Risk Safety Management
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  An application For documenting Risk & Safety Assessements.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/rsk_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/rsk_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/rsk_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/rsk_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={
                      "https://www.figma.com/proto/DiCzFh6bQK6dDZIMp7wEDT/RiskSafetymanagementApp?node-id=5-63"
                    }
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Echeleon
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Echeleon is a digital Apllication that enables you to purchase
                  real estate assets from the comfort of your device.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/ec_one.png"
                    alt="pj"
                    width={200}
                    height={200}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/ec_two.png"
                    alt="pjF"
                    width={200}
                    height={200}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/ec_three.png"
                    alt="pj"
                    width={200}
                    height={200}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/ec_four.png"
                    alt="pjF"
                    width={200}
                    height={200}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2"></div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={
                      "https://figma.com/design/Mj52W6Nqk3YxfEStuyAxjY/Echelon?t=uK1q13eavZRa6aQE-0"
                    }
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger className="cursor-pointer technologies--gradient">
                Ethernox Ui
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  A cross between vibrant ether yellow and ancient greek
                  sculptures.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/et_one.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/et_two.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Image
                    src="/images/projects/et_three.png"
                    alt="pj"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                  <Image
                    src="/images/projects/et_four.png"
                    alt="pjF"
                    width={400}
                    height={400}
                    className="object-contain rounded-md"
                    priority
                  />
                </div>
                <div>
                  <Link
                    className="text-cyan flex items-center gap-1"
                    href={
                      "https://figma.com/design/7sYlu4WyreD7ADhbHTORMT/yellow?t=a8WgSKhIHkChQtlE-0"
                    }
                  >
                    Visit <LinkSimple />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className=" w-full px-5 xl:px-20 py-10 bg-transparent flex items-center justify-center xl:justify-end">
          <div>
            <Link className="btn-primary" href={"/Contact"}>
              Contact
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
            <p className="gradient-text-white-gray flex items-center gap-3 text-xl">
              <TerminalWindow />
              <FigmaLogo />
              <Notebook />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
