import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import PrincipalInvestigator from "../components/PrincipalInvestigator";
import Research from "../components/Research";
import ResearchTeam from "../components/ResearchTeam";
import Gallery from "../components/Gallery";
import Publications from "../components/Publications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero />

      <About />

      {/* Important Notices & Updates */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Important Notices & Updates
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                ISSRF National Conference on Adolescent Health Awareness 2026
              </h3>

              <p className="text-slate-600 mt-2">
                Conference brochure and programme details
              </p>
            </div>

            <a
              href="/Brochure_ISSRF_10.10.2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-5 py-3 rounded-lg hover:bg-slate-700 transition whitespace-nowrap"
            >
              View Brochure
            </a>
          </div>
        </div>
      </section>

      <PrincipalInvestigator />

      <Research />

      <ResearchTeam />

      <Gallery />

      <Publications />

      <Contact />

      <Footer />
    </main>
  );
}
