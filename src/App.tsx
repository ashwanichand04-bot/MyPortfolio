/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

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
  const [isAdminRoute, setIsAdminRoute] = useState(
    window.location.hash === '#/admin'
  );
  const [user, setUser] = useState(auth.currentUser);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminRoute(window.location.hash === '#/admin');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isAdminRoute) {
    if (authLoading) {
      return (
        <div className="min-h-screen grid place-items-center bg-[#F3F1EA]">
          Loading...
        </div>
      );
    }

    return (
      <MotionConfig reducedMotion="user">
        {user ? <AdminDashboard /> : <AdminLogin />}
      </MotionConfig>
    );
  }

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