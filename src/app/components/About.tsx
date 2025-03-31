import { BookOpen, Briefcase } from 'lucide-react';
import Skills from './Skills';

export default function About() {
  const experiences = [
    {
      title: "Co-op Full-Stack Developer",
      company: "WDD Technologies, ON",
      period: "Sept. 2023 - Jan. 2024",
      description: "Developed user-friendly web interfaces, enhancing accessibility and usability. Gained experience in troubleshooting and resolving technical challenges."
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "Jan. 2024 - Present",
      description: "Working on various web development projects using modern technologies like React, Next.js, and Node.js."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-800/50 shadow-md relative backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        
        {/* Bio Section */}
        <div className="mb-12">
          <p className="text-gray-300 text-lg leading-relaxed">
            I&apos;m a passionate web developer with a focus on building beautiful, functional, and user-friendly web applications. 
            With expertise in both frontend and backend development, I enjoy creating seamless digital experiences that solve real-world problems.
          </p>
        </div>

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="text-[hsl(var(--blue))]" size={24} />
            <h3 className="text-2xl font-semibold text-white">Education</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-gray-700 bg-gray-800/50">
              <h4 className="font-medium text-white">Diploma in Enterprise Web & Mobile Development</h4>
              <p className="text-gray-400">Trios College, Ontario • 2022 - 2024</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-700 bg-gray-800/50">
              <h4 className="font-medium text-white">AI for Product Management</h4>
              <p className="text-gray-400">Coursera • October 2024</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-700 bg-gray-800/50">
              <h4 className="font-medium text-white">Google Data Analytics Professional Certificate</h4>
              <p className="text-gray-400">Google • Expected 2025</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-[hsl(var(--blue))]" size={24} />
            <h3 className="text-2xl font-semibold text-white">Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.title} className="p-4 rounded-lg border border-gray-700 bg-gray-800/50">
                <h4 className="font-medium text-white">{exp.title}</h4>
                <p className="text-[hsl(var(--blue))]">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 