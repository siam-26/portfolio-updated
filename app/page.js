import Link from 'next/link';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

export default function Navbar() {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}