// src/app/page.tsx
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import ClientPitch from '@/components/sections/ClientPitch';
import Roadmap from '@/components/sections/Roadmap';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ClientPitch />
        <Roadmap />
        <Contact />
        <Footer />
      </main>
    </>
  );
}