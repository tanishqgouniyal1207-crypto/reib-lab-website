export default function PrincipalInvestigator() {
  return (
    <section className="bg-white py-24 px-8">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Image */}

        <div className="flex justify-center">

          <img
            src="/images/jyoti-taneja.jpg"
            alt="Dr. Jyoti Taneja"
            className="w-[420px] rounded-3xl shadow-2xl"
          />

        </div>

        {/* Details */}

        <div>

          <p className="uppercase tracking-[0.3em] text-blue-900 font-semibold">
            Laboratory Incharge
          </p>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Dr. Jyoti Taneja
          </h2>

          <p className="text-2xl text-gray-600 mt-3">
            Associate Professor
          </p>

          <p className="text-lg text-gray-500 mt-4 leading-8">
            Department of Zoology,
            <br />
            Daulat Ram College,
            <br />
            University of Delhi
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-6 text-blue-900">
            Research Interests
          </h3>

          <div className="flex flex-wrap gap-3">

            <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full">
              Reproductive Epidemiology
            </span>

            <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full">
              Women's Reproductive Health
            </span>

            <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full">
              Sexually Transmitted Infections
            </span>

            <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full">
              Molecular Biology
            </span>

            <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full">
              Computational Vaccine Design
            </span>

            <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full">
              Antimicrobial Resistance
            </span>

          </div>

          <div className="flex gap-5 mt-12">

            <a
              href="mailto:jyotitaneja@dr.du.ac.in"
              className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition"
            >
              Email
            </a>

            <a
              href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=jyoti+taneja"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full hover:bg-blue-900 hover:text-white transition"
            >
              Google Scholar
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}