export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Laboratory Gallery
        </h2>

        <p className="mt-6 text-center text-xl text-gray-600 max-w-3xl mx-auto">
          A glimpse into our laboratory, research facilities and scientific activities.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          <img
            src="/images/gallery1.jpg"
            alt="Laboratory"
            className="rounded-3xl shadow-xl w-full h-96 object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="/images/gallery2.jpg"
            alt="Laboratory"
            className="rounded-3xl shadow-xl w-full h-96 object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="/images/gallery3.jpg"
            alt="Laboratory"
            className="rounded-3xl shadow-xl w-full h-96 object-cover hover:scale-105 transition duration-300"
          />

          <img
            src="/images/gallery4.jpg"
            alt="Laboratory"
            className="rounded-3xl shadow-xl w-full h-96 object-cover hover:scale-105 transition duration-300"
          />

        </div>

      </div>
    </section>
  );
}