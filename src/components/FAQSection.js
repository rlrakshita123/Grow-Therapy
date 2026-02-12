"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const faqs = [
    {
      question: "Do you offer in-person or virtual therapy?",
      answer:
        "I offer in-person therapy sessions at my Santa Monica office, as well as secure telehealth sessions for clients located throughout California."
    },
    {
      question: "What concerns do you specialize in?",
      answer:
        "My work focuses on anxiety, panic, trauma (including EMDR therapy), professional burnout, perfectionism, and high internal pressure experienced by high-achieving adults."
    },
    {
      question: "What therapy approaches do you use?",
      answer:
        "I integrate evidence-based approaches such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to support both emotional and physiological regulation."
    },
    {
      question: "Do you work with high-performing professionals?",
      answer:
        "Yes. Many of my clients are entrepreneurs, creatives, and professionals who appear highly functional outwardly but feel overwhelmed internally. Therapy can be a space to slow down and reconnect."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading Animation */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold text-[#1F2F3A] mb-16 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="border-b border-[#E0DDD8] pb-6"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg md:text-xl font-medium text-[#1F2F3A]">
                  {faq.question}
                </span>
                <span className="text-2xl text-[#6F8A7A]">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-[#4A5A66] leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
