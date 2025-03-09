import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideNav from './components/SideNav';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SideNav />
      <section id="home">
        <Hero />
      </section>
      <About />
      <section id="projects">
        <Projects />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}