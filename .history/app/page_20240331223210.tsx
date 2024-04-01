import Image from "next/image";
import { About, Contact, Experience, Feedbacks, Tech, Works, StarsCanvas } from "../components";

export default function Home() {
  return (
    <div className="pt-2">
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
