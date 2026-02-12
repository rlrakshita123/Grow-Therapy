"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {

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
    <section className="bg-[#F3EFEA] py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl md:text-5xl font-semibold text-[#1F2F3A] mb-6"
        >
          Areas of Focus
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-lg text-[#4A5A66] max-w-2xl mx-auto mb-16"
        >
          Evidence-based therapy in Santa Monica for adults seeking relief from anxiety,
          trauma, and professional burnout.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Service 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-left"
          >
            <div className="relative h-64 mb-6">
              <Image
                src="/images/service1.jpg"
                alt="Woman experiencing anxiety and emotional overwhelm"
                fill
                className="object-cover object-[center_15%] rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1F2F3A] mb-4">
              Anxiety & Overthinking
            </h3>
            <p className="text-[#4A5A66] leading-relaxed">
              Therapy for adults struggling with constant worry, panic, racing thoughts,
              tension in the body, and difficulty sleeping. Learn practical tools to
              regulate your nervous system while exploring deeper emotional patterns.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-left"
          >
            <div className="relative h-64 mb-6">
              <Image
                src="/images/service2.jpg"
                alt="Calm therapy session focused on trauma healing"
                fill
                className="object-cover object-[center_15%] rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1F2F3A] mb-4">
              Trauma & EMDR Therapy
            </h3>
            <p className="text-[#4A5A66] leading-relaxed">
              Specialized support for single-incident and complex trauma using EMDR,
              CBT, and body-oriented techniques. Sessions focus on safety,
              stabilization, and helping you feel more regulated in daily life.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-left"
          >
            <div className="relative h-64 mb-6">
              <Image
                src="/images/service3.jpg"
                alt="Professional experiencing burnout and stress"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#1F2F3A] mb-4">
              Burnout & High-Achiever Support
            </h3>
            <p className="text-[#4A5A66] leading-relaxed">
              Therapy for entrepreneurs, creatives, and professionals feeling
              disconnected after years of pushing through stress. Reconnect with
              yourself and build sustainable ways of living and working.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
