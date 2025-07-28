import About from "@/components/About";
import Contact from "@/components/Contact";
import Home2 from "@/components/Home2";
import HomeComp from "@/components/HomeComp";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <HomeComp />
      {/* <Home2 /> */}
      <About />
      <Services />
      <Projects />
      <Skill />
      <Contact />
    </>
  );
}
