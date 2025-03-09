'use client';

import { Home, User, Code, Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-6 bg-gray-800/90 backdrop-blur-sm p-4 rounded-full border border-gray-700 shadow-lg">
        <Link 
          href="#home"
          className={`p-2 transition-colors ${
            activeSection === 'home'
              ? 'text-[hsl(var(--blue))]' 
              : 'text-gray-400 hover:text-[hsl(var(--blue))]'
          }`}
          title="Home"
        >
          <Home size={20} />
        </Link>
        <Link 
          href="#about"
          className={`p-2 transition-colors ${
            activeSection === 'about'
              ? 'text-[hsl(var(--blue))]'
              : 'text-gray-400 hover:text-[hsl(var(--blue))]'
          }`}
          title="About"
        >
          <User size={20} />
        </Link>
        <Link 
          href="#projects"
          className={`p-2 transition-colors ${
            activeSection === 'projects'
              ? 'text-[hsl(var(--blue))]'
              : 'text-gray-400 hover:text-[hsl(var(--blue))]'
          }`}
          title="Projects"
        >
          <Code size={20} />
        </Link>
        <Link 
          href="#contact"
          className={`p-2 transition-colors ${
            activeSection === 'contact'
              ? 'text-[hsl(var(--blue))]'
              : 'text-gray-400 hover:text-[hsl(var(--blue))]'
          }`}
          title="Contact"
        >
          <Mail size={20} />
        </Link>
      </div>
    </nav>
  );
} 