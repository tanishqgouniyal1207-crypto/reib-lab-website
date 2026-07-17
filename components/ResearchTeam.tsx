export default function ResearchTeam() {
  return (
    <section id="members" className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Current Members
        </h2>

        <p className="mt-5 text-center text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          The REIB Laboratory currently includes two PhD scholars and
          undergraduate student researchers contributing to projects in
          reproductive health, infectious diseases and molecular biology.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* Tanishq */}

          <div className="bg-slate-50 rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition">

            <h3 className="text-2xl font-bold text-blue-900">
              Tanishq Gouniyal
            </h3>

            <p className="mt-2 text-gray-600">
              PhD Scholar
            </p>

            <div className="mt-6 space-y-3 text-gray-700">

              <p>
                <span className="font-semibold">Registered:</span> 30 June 2025
              </p>

              <p>
                <span className="font-semibold">Research Focus:</span> Computational Vaccine Design
              </p>

            </div>

          </div>

          {/* Ayushi */}

          <div className="bg-slate-50 rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition">

            <h3 className="text-2xl font-bold text-blue-900">
              Ayushi Pipersaniya
            </h3>

            <p className="mt-2 text-gray-600">
              PhD Scholar
            </p>

            <div className="mt-6 space-y-3 text-gray-700">

              <p>
                <span className="font-semibold">Registered:</span> 30 June 2025
              </p>

              <p>
                <span className="font-semibold">Research Focus:</span> Post-COVID Sequelae and Long-Term Health Outcomes
              </p>

            </div>

          </div>

        </div>

        <div className="mt-12 rounded-2xl bg-blue-50 border border-blue-100 p-8">

          <p className="text-gray-700 leading-8">
            In addition to the PhD scholars, undergraduate student researchers
            are actively involved in laboratory projects related to
            <strong> Polycystic Ovary Syndrome (PCOS)</strong> and
            <strong> Antimicrobial Resistance (AMR)</strong>, gaining practical
            experience in laboratory techniques, data analysis and biomedical
            research.
          </p>

        </div>

      </div>
    </section>
  );
}