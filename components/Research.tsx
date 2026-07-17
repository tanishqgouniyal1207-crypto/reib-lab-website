export default function Research() {
  return (
    <section id="research" className="bg-slate-50 py-28 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Research Areas
        </h2>

        <p className="mt-8 text-center text-xl text-gray-600 max-w-4xl mx-auto leading-9">
          The Reproductive Epidemiology & Infection Biology (REIB) Laboratory
          conducts interdisciplinary research integrating epidemiology,
          molecular biology, computational biology and public health to
          address critical challenges in reproductive health and infectious
          diseases.
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="text-6xl">💉</div>

            <h3 className="mt-6 text-2xl font-bold text-blue-900">
              Computational Vaccine Design
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Development of next-generation vaccine candidates using
              reverse vaccinology, immunoinformatics, structural biology,
              molecular docking and computational approaches.
            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="text-6xl">🦠</div>

            <h3 className="mt-6 text-2xl font-bold text-blue-900">
              Reproductive Tract Infections & Sexually Transmitted Infections
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Research focused on the epidemiology, diagnosis, prevention
              and molecular characterization of reproductive tract
              infections (RTIs) and sexually transmitted infections (STIs),
              with an emphasis on disease surveillance and public health.
            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="text-6xl">🧬</div>

            <h3 className="mt-6 text-2xl font-bold text-blue-900">
              Reproductive Health & Women's Health
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Investigating reproductive disorders, including Polycystic
              Ovary Syndrome (PCOS), reproductive health awareness,
              women's health and population-based epidemiological studies.
            </p>

          </div>

          {/* Card 4 */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="text-6xl">💊</div>

            <h3 className="mt-6 text-2xl font-bold text-blue-900">
              Antimicrobial Resistance
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Understanding antimicrobial resistance patterns, surveillance
              strategies and mechanisms contributing to emerging
              drug-resistant pathogens.
            </p>

          </div>

          {/* Card 5 */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="text-6xl">🫀</div>

            <h3 className="mt-6 text-2xl font-bold text-blue-900">
              Post-COVID Health Research
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Exploring the long-term physiological and health
              consequences associated with post-COVID conditions
              through clinical and epidemiological investigations.
            </p>

          </div>

          {/* Card 6 */}

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="text-6xl">🧫</div>

            <h3 className="mt-6 text-2xl font-bold text-blue-900">
              Molecular Biology & Diagnostics
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Application of molecular techniques including PCR, ELISA,
              DNA extraction, biomarker analysis and bioinformatics to
              support translational biomedical research and disease
              diagnostics.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}