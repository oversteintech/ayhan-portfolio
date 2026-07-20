import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Leadership from "@/components/Leadership";
import Expertise from "@/components/Expertise";
import Capabilities from "@/components/Capabilities";
import Ventures from "@/components/Ventures";
import Credentials from "@/components/Credentials";
import FutureScaffold from "@/components/FutureScaffold";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayhan Uzundal",
    url: "https://www.ayhanuzundal.com.tr",
    jobTitle: "Senior Key Account Manager",
    worksFor: {
      "@type": "Organization",
      name: "Huawei Enterprise",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Istanbul University" },
      { "@type": "CollegeOrUniversity", name: "Düzce University" },
    ],
    sameAs: ["https://www.linkedin.com/in/ayhan-uzundal"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Leadership />
        <Expertise />
        <Capabilities />
        <Ventures />
        <Credentials />
        <FutureScaffold />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
