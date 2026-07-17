export default function Contact() {
  return (
    <section id="contact" className="bg-slate-100 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Contact Us
        </h2>

        <p className="mt-6 text-center text-xl text-gray-600">
          Reproductive Epidemiology & Infection Biology (REIB) Laboratory
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Contact Details */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <div className="space-y-8">

              <div>
                <h4 className="font-semibold text-lg text-blue-900">
                  Laboratory
                </h4>
                <p className="text-gray-600">
                  Reproductive Epidemiology & Infection Biology (REIB) Laboratory
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-blue-900">
                  Department
                </h4>
                <p className="text-gray-600">
                  Department of Zoology
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-blue-900">
                  Institution
                </h4>
                <p className="text-gray-600">
                  Daulat Ram College
                  <br />
                  University of Delhi
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-blue-900">
                  Email
                </h4>
                <a
                  href="mailto:jyotitaneja@dr.du.ac.in"
                  className="text-blue-900 hover:underline"
                >
                  jyotitaneja@dr.du.ac.in
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-blue-900">
                  Contact Number
                </h4>
                <a
                  href="tel:+919911656435"
                  className="text-blue-900 hover:underline"
                >
                  +91 99116 56435
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-blue-900">
                  Address
                </h4>
                <p className="text-gray-600">
                  Department of Zoology
                  <br />
                  Daulat Ram College
                  <br />
                  University of Delhi
                  <br />
                  4, Patel Marg,
                  <br />
                  Maurice Nagar,
                  <br />
                  Delhi – 110007
                </p>
              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Daulat+Ram+College,+Delhi&output=embed"
              width="100%"
              height="100%"
              className="min-h-[550px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Daulat Ram College"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}