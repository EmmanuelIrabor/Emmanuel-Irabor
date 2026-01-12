"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "phosphor-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* desktop nav */}
      <div className="navbar hidden xl:flex justify-between py-5 px-20">
        <div className="navbar_logo">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={15} height={15} />
          </Link>
        </div>

        <div className="navbar_items flex gap-10">
          <Link href="/Home" className="navbar_item">
            Home
          </Link>
          <Link href="/About" className="navbar_item">
            About
          </Link>
          <Link href="/Home" className="navbar_item">
            Skills
          </Link>
          <Link href="/Home" className="navbar_item">
            Works
          </Link>
          <Link href="/Home" className="navbar_item">
            <div className="flex items-center gap-1">
              Contact <ArrowUpRight />
            </div>
          </Link>
        </div>
      </div>

      {/* mobile nav bar */}
      <div className="navbar_items xl:hidden flex justify-between items-center px-5 py-3 z-50 relative">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={15} height={15} />
        </Link>

        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <Image
            src={menuOpen ? "/images/letter-x.png" : "/images/menu.png"}
            alt="menu toggle"
            width={18}
            height={18}
          />
        </button>
      </div>

      {/* animated dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 bg-black h-full z-40 overflow-y-auto"
          >
            {/* content wrapper */}
            <div className="min-h-screen flex pt-32 justify-center px-6">
              <div className="flex flex-col gap-8 text-center">
                <Link
                  href="/Home"
                  className="navbar_item"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/About"
                  className="navbar_item"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/Skills"
                  className="navbar_item"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </Link>

                <Link
                  href="/Work"
                  className="navbar_item"
                  onClick={() => setMenuOpen(false)}
                >
                  Works
                </Link>

                <Link
                  href="/Contact"
                  className="navbar_item"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    Contact <ArrowUpRight />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
