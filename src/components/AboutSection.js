"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-white py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[460px] w-full"
        >
          <Image
            src="/images/Maya.png"
            alt="Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica"
            fill
            className="object-cover object-[center_15%] rounded-lg"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          <h2 className="text-3xl md:text-5xl font-semibold text-[#1F2F3A] mb-8">
            About Dr. Maya Reynolds, PsyD
          </h2>

          <p className="text-[#4A5A66] text-lg leading-relaxed mb-6">
            I’m a licensed clinical psychologist based in Santa Monica, California,
            offering therapy for adults navigating anxiety, trauma, and burnout.
            Many of the people I work with are thoughtful, high-achieving individuals
            who appear “functional” on the outside—but internally feel overwhelmed,
            exhausted, or emotionally on edge.
          </p>

          <p className="text-[#4A5A66] text-lg leading-relaxed mb-6">
            My approach is warm, collaborative, and grounded. I integrate
            cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices,
            and body-oriented techniques to support both the emotional and
            physiological sides of what you’re experiencing.
          </p>

          <p className="text-[#4A5A66] text-lg leading-relaxed">
            I offer in-person therapy in Santa Monica and secure telehealth sessions
            throughout California. My goal is not only symptom relief, but helping
            clients build insight, resilience, and a stronger relationship with
            themselves over time.
          </p>

        </motion.div>

      </div>

    </section>
  );
}
