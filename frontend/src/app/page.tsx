import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Plans from "@/components/home/Plans";
import Classes from "@/components/home/Classes";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Plans />
      <Classes />
      <Contact />
      <Footer />
    </div>
  );
}