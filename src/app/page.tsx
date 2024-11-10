import About from "@/components/About";
import HomeComp from "@/components/HomeComp";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HomeComp />
      <About />
      <Project />
      <Skill />
      <Testimonials />
    </>
  );
}
