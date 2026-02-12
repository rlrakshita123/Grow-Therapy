import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] flex items-center mt-24">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/h2.jpg"
          alt="Calming therapy space in Santa Monica"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1F2F3A]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8 text-[#F3EFEA]">
          Work with Dr. Maya Reynolds, PsyD — a licensed clinical psychologist 
          offering grounded, evidence-based therapy for adults navigating anxiety, 
          overthinking, professional burnout, and trauma.
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-[#6F8A7A] hover:bg-[#4F6B5B] transition px-8 py-4 text-white rounded-sm text-sm tracking-wide"
          >
            Schedule a Consultation
          </a>

          <a
            href="#about"
            className="border border-white px-8 py-4 rounded-sm text-sm tracking-wide hover:bg-white hover:text-[#1F2F3A] transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
