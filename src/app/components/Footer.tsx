import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <Link 
              href="https://github.com/ceedev23"
              className="hover:text-[hsl(var(--blue))] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </Link>
            <Link 
              href="https://linkedin.com/in/yourusername"
              className="hover:text-[hsl(var(--blue))] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </Link>
            <Link 
              href="mailto:your.email@example.com"
              className="hover:text-[hsl(var(--blue))] transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Chinedum Akpala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 