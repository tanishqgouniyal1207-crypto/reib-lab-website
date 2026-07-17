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