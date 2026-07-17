export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-28 text-center">

        <p className="uppercase tracking-[0.35em] text-blue-200 font-semibold">
          Department of Zoology
        </p>

        <h2 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight">
          Reproductive Epidemiology
          <br />
          & Infection Biology
          <br />
          Laboratory
        </h2>

        <p className="mt-8 text-2xl font-medium text-blue-100">
          Daulat Ram College • University of Delhi
        </p>

        <p className="mt-8 max-w-4xl mx-auto text-lg leading-9 text-slate-200">
          The REIB Laboratory focuses on interdisciplinary research in
          reproductive epidemiology, infectious diseases, molecular biology,
          immunoinformatics, computational vaccine design and public health,
          with the aim of advancing translational biomedical research and
          improving human health.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="#research"
            className="rounded-xl bg-white text-blue-900 px-8 py-4 font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
          >
            Explore Research
          </a>

          <a
            href="#publications"
            className="rounded-xl border-2 border-white px-8 py-4 font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
          >
            View Publications
          </a>

        </div>

      </div>

    </section>
  );
}