export default function Publications() {
  return (
    <section
      id="publications"
      className="bg-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Recent Publications
        </h2>

        <p className="mt-6 text-center text-xl text-gray-600 max-w-3xl mx-auto">
          Recent scientific contributions from the Reproductive
          Epidemiology & Infection Biology (REIB) Laboratory.
        </p>

        <div className="mt-20 space-y-12">

          {/* 2026 */}

          <div className="rounded-3xl border-l-8 border-blue-900 bg-slate-50 p-8 shadow-lg">

            <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
              2026
            </span>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Harnessing Clinical and Biochemical Data for Personalized
              Cardiovascular Risk Prediction: A Machine Learning Approach
              Toward Precision Nutrition
            </h3>

            <p className="mt-3 text-lg italic text-gray-600">
              The Journal of Nutrition
            </p>

          </div>

          {/* 2025 */}

          <div className="rounded-3xl border-l-8 border-blue-900 bg-slate-50 p-8 shadow-lg">

            <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
              2025
            </span>

            <div className="mt-6 space-y-8">

              <div>
                <h3 className="text-xl font-semibold">
                  Integrating Reverse Vaccinology with Immunoinformatics
                  for Rational Vaccine Target Discovery in
                  <i> Mycoplasma genitalium</i>
                </h3>

                <p className="mt-2 italic text-gray-600">
                  Venereology
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Artificial Intelligence in Predicting, Diagnosing and
                  Preventing Sexually Transmitted Infections (STIs)
                </h3>

                <p className="mt-2 italic text-gray-600">
                  Venereology
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Revolutionizing STI Vaccines: Artificial
                  Intelligence-Driven Discovery of Vaccine Candidates in
                  <i> Mycoplasma genitalium</i>
                </h3>

                <p className="mt-2 italic text-gray-600">
                  Sexual Health
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Nutritional and Lifestyle Predictors of Rectal
                  Bleeding in Functional Constipation:
                  A Machine Learning Approach
                </h3>

                <p className="mt-2 italic text-gray-600">
                  International Journal of Medical Informatics
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="text-center mt-16">

          <a
            href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=jyoti+taneja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-blue-900 px-8 py-4 text-white text-lg hover:bg-blue-800 transition"
          >
            View More Publications
          </a>

        </div>

      </div>
    </section>
  );
}