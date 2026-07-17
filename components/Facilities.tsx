export default function Facilities() {
  return (
    <section id="facilities" className="bg-white py-24 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Laboratory Facilities
        </h2>

        <p className="mt-6 text-center text-xl text-gray-600 max-w-3xl mx-auto">
          Our laboratory is equipped with modern instruments and dedicated
          workspace for molecular biology, microbiology and reproductive
          health research.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

            <img
              src="/images/pcr.jpg"
              alt="PCR Machine"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-blue-900">
                PCR Machine
              </h3>

              <p className="mt-3 text-gray-600">
                Conventional PCR system for DNA amplification and molecular diagnostics.
              </p>

            </div>

          </div>

          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

            <img
              src="/images/elisa.jpg"
              alt="ELISA Reader"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-blue-900">
                ELISA Reader
              </h3>

              <p className="mt-3 text-gray-600">
                Used for immunological assays and quantitative absorbance measurements.
              </p>

            </div>

          </div>

          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

            <img
              src="/images/dna.jpg"
              alt="DNA Extraction"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-blue-900">
                DNA Extraction Workspace
              </h3>

              <p className="mt-3 text-gray-600">
                Dedicated area for nucleic acid extraction and molecular biology experiments.
              </p>

            </div>

          </div>

          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

            <img
              src="/images/freezer.jpg"
              alt="-20 Refrigerator"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-blue-900">
                −20°C Laboratory Refrigerator
              </h3>

              <p className="mt-3 text-gray-600">
                Storage of biological samples, reagents and laboratory chemicals.
              </p>

            </div>

          </div>

          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

            <img
              src="/images/workspace.jpg"
              alt="Research Workspace"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-blue-900">
                Research Workspace
              </h3>

              <p className="mt-3 text-gray-600">
                Laboratory benches for sample preparation, experimental work and data recording.
              </p>

            </div>

          </div>

          <div className="bg-blue-900 rounded-3xl flex items-center justify-center p-10">

            <div className="text-center text-white">

              <h3 className="text-3xl font-bold">
                Expanding Infrastructure
              </h3>

              <p className="mt-5 text-lg">
                Our laboratory continues to strengthen its facilities through research collaborations and advanced instrumentation.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}