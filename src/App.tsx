import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { InternshipShowcase } from './components/InternshipShowcase';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* About Shibbu Kumar & Education */}
        <About onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Interactive Skills Matrix */}
        <Skills />

        {/* Featured Projects & Case Studies */}
        <Projects />

        {/* Web Development Internship Level 1 - Task 1 Showcase */}
        <InternshipShowcase onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Resume & Credentials Callout */}
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Contact Channels & Interactive Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Lightbox Modal with Print & Download */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
