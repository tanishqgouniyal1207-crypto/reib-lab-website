export default function Stats() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="bg-slate-50 rounded-3xl shadow-lg p-10 text-center hover:shadow-xl transition">

            <h2 className="text-5xl font-bold text-blue-900">
              30+
            </h2>

            <p className="mt-4 text-gray-600 font-medium">
              Publications
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl shadow-lg p-10 text-center hover:shadow-xl transition">

            <h2 className="text-5xl font-bold text-blue-900">
              6
            </h2>

            <p className="mt-4 text-gray-600 font-medium">
              Research Areas
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl shadow-lg p-10 text-center hover:shadow-xl transition">

            <h2 className="text-5xl font-bold text-blue-900">
              2
            </h2>

            <p className="mt-4 text-gray-600 font-medium">
              PhD Scholars
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl shadow-lg p-10 text-center hover:shadow-xl transition">

            <h2 className="text-5xl font-bold text-blue-900">
              1
            </h2>

            <p className="mt-4 text-gray-600 font-medium">
              Research Laboratory
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}