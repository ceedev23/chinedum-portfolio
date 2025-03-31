import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-lg md:text-xl font-bold text-foreground hover:text-foreground/80 leading-relaxed">
            Chinedum Akpala
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <Link href="https://github.com/ceedev23" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/chinedum-akpala-6661a1347/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="mailto:akpalac@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <div className="w-px h-5 md:h-6 bg-gray-600 mx-1 md:mx-2"></div>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
} 