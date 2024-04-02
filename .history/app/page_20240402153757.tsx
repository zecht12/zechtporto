import { About, Contact, Experience, Feedbacks, Tech, Works, StarsCanvas } from "../components";

export default function Home() {
  return (
    <div id="home" className="h-full">
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
