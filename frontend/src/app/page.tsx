import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Plans from "@/components/home/Plans";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Plans />
    </div>
  );
}