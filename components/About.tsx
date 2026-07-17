export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <h2 className="text-5xl font-bold text-blue-900 mb-8">
            About the Laboratory
          </h2>

          <p className="text-lg leading-8 text-gray-700 mb-6">
            The Reproductive Epidemiology & Infection Biology (REIB)
            Laboratory is a multidisciplinary research laboratory in the
            Department of Zoology, Daulat Ram College,
            University of Delhi.
          </p>

          <p className="text-lg leading-8 text-gray-700 mb-6">
            The laboratory is headed by{" "}
            <span className="font-semibold">Dr. Jyoti Taneja</span>,
            Associate Professor, Department of Zoology.
          </p>

          <p className="text-lg leading-8 text-gray-700">
            Current research focuses on reproductive epidemiology,
            post-COVID sequelae, polycystic ovary syndrome (PCOS),
            sexually transmitted infections (STIs),
            antimicrobial resistance (AMR) and computational
            vaccine design using immunoinformatics.
          </p>

        </div>

        {/* Right Side */}

        <div>

          <img
            src="/images/lab.jpg"
            alt="REIB Laboratory"
            className="w-full rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}