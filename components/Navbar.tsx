export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Left Logo */}

        <img
          src="/images/du-logo.png"
          alt="University of Delhi"
          className="h-16 w-auto"
        />

        {/* Center */}

        <div className="text-center">

          <h1 className="text-2xl font-bold text-blue-900">
            REIB Laboratory
          </h1>

          <p className="text-sm text-gray-600">
            Reproductive Epidemiology & Infection Biology
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Department of Zoology • Daulat Ram College • University of Delhi
          </p>

        </div>

        {/* Right Logo */}

        <img
          src="/images/drc-logo.png"
          alt="Daulat Ram College"
          className="h-16 w-auto"
        />

      </nav>

      {/* Navigation */}

      <div className="border-t border-gray-200">

        <ul className="max-w-7xl mx-auto flex justify-center gap-10 py-4 font-medium text-gray-700">

          <li>
            <a href="#" className="hover:text-blue-900 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-900 transition">
              About
            </a>
          </li>

          <li>
            <a href="#research" className="hover:text-blue-900 transition">
              Research
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-blue-900 transition">
              Gallery
            </a>
          </li>

          <li>
            <a href="#publications" className="hover:text-blue-900 transition">
              Publications
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-900 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </header>
  );
}