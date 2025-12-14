import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
