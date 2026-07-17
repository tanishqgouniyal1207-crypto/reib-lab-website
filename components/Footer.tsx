export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Lab */}

        <div>

          <h3 className="text-2xl font-bold text-white">
            REIB Laboratory
          </h3>

          <p className="mt-4 leading-8">
            Reproductive Epidemiology & Infection Biology Laboratory
            <br />
            Department of Zoology
            <br />
            Daulat Ram College
            <br />
            University of Delhi
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">

            <li><a href="#about" className="hover:text-white">About</a></li>

            <li><a href="#research" className="hover:text-white">Research</a></li>

            <li><a href="#members" className="hover:text-white">Members</a></li>

            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>

            <li><a href="#publications" className="hover:text-white">Publications</a></li>

            <li><a href="#contact" className="hover:text-white">Contact</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <p className="mt-5 leading-8">
            Department of Zoology
            <br />
            Daulat Ram College
            <br />
            University of Delhi
            <br />
            Delhi – 110007
            <br /><br />

            Email:
            <br />
            joytitaneja@dr.du.ac.in
            <br /><br />

            Phone:
            <br />
            +91 9911656435

          </p>

        </div>

      </div>

      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-400">

        © {new Date().getFullYear()} REIB Laboratory, Department of Zoology,
        Daulat Ram College, University of Delhi. All Rights Reserved.

      </div>

    </footer>
  );
}