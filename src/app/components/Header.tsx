import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex justify-between items-center space-y-2">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-foreground/80 leading-relaxed">
            Chinedum Akpala
          </Link>
          <div className="flex items-center gap-8">
            <Link href="https://github.com/akpal" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/chinedum-akpala" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:akpalac@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 