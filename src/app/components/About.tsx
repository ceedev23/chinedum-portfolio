import { Code2, BookOpen, Briefcase } from 'lucide-react';

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "SQL"] },
    { category: "Tools & Platforms", items: ["Git", "AWS", "Docker", "VS Code"] }
  ];

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
            I&apos;m a passionate software engineer with a focus on building beautiful, functional, and user-friendly web applications. 
            With expertise in both frontend and backend development, I enjoy creating seamless digital experiences that solve real-world problems.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="text-[hsl(var(--blue))]" size={24} />
            <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-4 rounded-lg border border-gray-700 bg-gray-800/50">
                <h4 className="font-medium mb-2 text-white">{skillGroup.category}</h4>
                <ul className="space-y-1">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-400">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

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