"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [percentage, setPercentage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      setTimeout(() => {
        router.push("/Home");
      }, 500);
    }
  }, [percentage, router]);

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center"
      initial={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <p className="text-center gradient-text-white-gray">Loading Assets</p>
      <h4 className="text-center gradient-text-white-gray">
        [ {percentage}% ]
      </h4>
    </motion.div>
  );
}
