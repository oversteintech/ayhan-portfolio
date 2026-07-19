import AnimatedBackground from "@/components/AnimatedBackground";
import GlowCursor from "@/components/GlowCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import SkillsMatrix from "@/components/SkillsMatrix";
import Metrics from "@/components/Metrics";
import FounderVision from "@/components/FounderVision";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <GlowCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Timeline />
        <Projects />
        <SkillsMatrix />
        <Metrics />
        <FounderVision />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
