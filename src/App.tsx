/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import SelectedWork from './components/SelectedWork';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F3F1EA] text-[#171717] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Education />
          <Leadership />
          <Certifications />
          <SelectedWork />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
