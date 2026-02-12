"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OfficeSection() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="bg-[#F3EFEA] py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >

          <h2 className="text-3xl md:text-5xl font-semibold text-[#1F2F3A] mb-8">
            A Calm, Private Space in Santa Monica
          </h2>

          <p className="text-[#4A5A66] text-lg leading-relaxed mb-6">
            I offer in-person therapy from my Santa Monica office located at
            123th Street 45 W, Santa Monica, CA 90401. The space is quiet,
            private, and designed to feel calm and grounding, with natural light
            and an uncluttered environment.
          </p>

          <p className="text-[#4A5A66] text-lg leading-relaxed mb-6">
            For clients across California, I also provide secure telehealth
            sessions. Whether meeting in person or virtually, the focus remains
            the same: thoughtful, collaborative work that supports long-term
            resilience.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="bg-[#6F8A7A] hover:bg-[#4F6B5B] transition px-8 py-4 text-white rounded-sm text-sm tracking-wide"
            >
              Schedule a Consultation
            </a>
          </div>

        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          className="grid grid-rows-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >

          <motion.div
            variants={fadeUp}
            className="relative h-[260px] w-full"
          >
            <Image
              src="/images/office1.jpeg"
              alt="Santa Monica therapy office"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative h-[260px] w-full"
          >
            <Image
              src="/images/office2.jpeg"
              alt="Calm and grounding therapy space"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
