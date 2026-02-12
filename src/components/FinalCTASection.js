"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinalCTASection() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative py-32">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta.jpg"
          alt="Calm Santa Monica coastline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1F2F3A]/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold mb-8"
        >
          You Don’t Have to Navigate This Alone
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.2}
          variants={fadeUp}
          className="text-lg md:text-xl mb-12 leading-relaxed"
        >
          If you’re feeling overwhelmed by anxiety, stuck in patterns from
          past experiences, or exhausted from pushing through burnout,
          therapy can be a place to slow down and reconnect.
        </motion.p>

        <motion.a
          href="#contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.4}
          variants={fadeUp}
          className="inline-block bg-[#6F8A7A] hover:bg-[#4F6B5B] transition px-10 py-4 rounded-sm text-sm tracking-wide"
        >
          Book a Consultation
        </motion.a>

      </div>

    </section>
  );
}
