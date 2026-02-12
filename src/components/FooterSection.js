"use client";

import { motion } from "framer-motion";

export default function FooterSection() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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
    <motion.footer
      className="bg-[#1F2F3A] text-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Dr. Maya Reynolds, PsyD
          </h3>
          <p className="text-[#D7DCE1] leading-relaxed">
            Licensed Clinical Psychologist <br />
            Anxiety, Trauma & Burnout Therapy <br />
            Santa Monica, CA 90401
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xl font-medium mb-6">
            Location
          </h4>
          <p className="text-[#D7DCE1] leading-relaxed">
            123th Street 45 W <br />
            Santa Monica, California 90401
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xl font-medium mb-6">
            Services
          </h4>
          <ul className="text-[#D7DCE1] space-y-3">
            <li>Anxiety Therapy</li>
            <li>Trauma & EMDR</li>
            <li>Burnout Support</li>
            <li>Telehealth in California</li>
          </ul>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#31414E] mt-16 pt-8 text-center text-[#B9C1C8] text-sm">
        © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.
      </div>

    </motion.footer>
  );
}
