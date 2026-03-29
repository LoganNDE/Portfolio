import Navbar from "./components/ui/Navbar";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Hero } from "./components/sections/Hero";
import { Strip } from "./components/sections/Strip";
import { Projects } from "./components/sections/Projects";
import { AboutStack } from "./components/sections/AboutStack";
import { Service } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";

const container =
  "w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16";

export default function Home() {
  return (
    <main className="bg-black flex flex-col items-center">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Strip />

      <div className="w-full">
        <Projects />
      </div>

      <div className={container}>
        <AboutStack />
        <Service />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
