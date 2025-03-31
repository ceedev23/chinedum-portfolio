import Image from 'next/image';
import Link from 'next/link';
import { Download, Code } from 'lucide-react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 md:pr-8">
          <div className="w-64 h-80 relative rounded-[8rem] overflow-hidden border-4 border-gray-700 shadow-lg shrink-0 mt-6 md:mt-0">
            <Image
              src={`${process.env.NODE_ENV === 'production' ? '/chinedum-portfolio' : ''}/profile-pix.jpg`}
              alt="Chinedum Akpala"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h1 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white/90 to-pink-300 mb-4 pt-4 ${pacifico.className}`}>
              Hello, I&apos;m
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--blue))] mb-2">
              Chinedum Akpala
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground mb-4">(Just call me Cee)</div>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Web Developer | Data Analyst
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 mb-6">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[hsl(var(--blue))] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-[hsl(var(--blue))]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-300">Google Data Analytics Certificate</span>
              </Link>
              <Link
                href="https://www.credly.com/badges/7cb5d194-c8dc-4197-aeab-b33fab62e036/linked_in_profile"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[hsl(var(--blue))] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-[hsl(var(--blue))]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-300">AI for Product Management</span>
              </Link>
            </div>
            <p className="text-muted-foreground mb-8">
              Passionate about creating responsive, user-friendly web applications and deriving meaningful insights from data. 
              Experienced in modern web technologies and data analysis tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/Chinedum_Resume_Developer.pdf"
                className="button px-6 py-3 rounded-lg flex items-center justify-center gap-2"
                download="Chinedum_Resume_Developer.pdf"
              >
                <Download size={20} />
                Download Resume
              </a>
              <Link
                href="#projects"
                className="button px-6 py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Code size={20} />
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 