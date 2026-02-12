export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f4f1ec] h-24 flex items-center shadow-sm">
  <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">

    {/* Logo */}
    <h1 className="text-[#1f2e26] text-xl font-semibold">
      Dr. Maya Reynolds
    </h1>

    {/* Links */}
    <nav className="space-x-8 text-[#1f2e26] text-sm font-medium">
      <a href="#services" className="hover:text-[#6f8f7a] transition">
        Services
      </a>
      <a href="#about" className="hover:text-[#6f8f7a] transition">
        About
      </a>
      <a href="#contact" className="hover:text-[#6f8f7a] transition">
        Contact
      </a>
    </nav>

  </div>
</header>

  );
}
